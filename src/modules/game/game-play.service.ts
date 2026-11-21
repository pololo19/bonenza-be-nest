import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppEnvironment } from 'app.environment';
import axios from 'axios';
import {
  BlockchainSymbol,
  FiatCurrency,
  Game,
  GameBlockchainTransaction,
  GameProvider,
  GameProviderFiatBlacklist,
  GameStripeTransaction,
  User,
} from 'entities';
import { ENUM_CURRENCY, ENUM_GAME_TRANSACTION_ACTION } from 'enums';
import {
  canDetectLocationError,
  isExistCurrencyError,
  isExistCurrencyTypeError,
  isExistGameError,
  isMatchedWithSignError,
} from 'errors';
import * as geoip from 'geoip-lite';
import { AffiliateService } from 'modules/affiliate/affiliate.service';
import { MemoryService } from 'modules/memory/memory.service';
import { MessageGateway } from 'modules/message/message.gateway';
import { QuestService } from 'modules/quest/quest.service';
import { VipService } from 'modules/vip/vip.service';
import { WalletService } from 'modules/wallet/wallet.service';
import { WalletWithdrawService } from 'modules/wallet/wallet-withdraw.service';
import { Repository } from 'typeorm';
import {
  fixedNumber,
  fromSubunit,
  getISODate,
  getSignature,
  toSubunit,
} from 'utils';

@Injectable()
export class GamePlayService {
  constructor(
    private readonly appEnvironment: AppEnvironment,
    private readonly messageGateway: MessageGateway,
    private readonly affiliateService: AffiliateService,
    private readonly vipService: VipService,
    private readonly questService: QuestService,
    private readonly walletService: WalletService,
    private readonly walletWithdrawService: WalletWithdrawService,
    private readonly memoryService: MemoryService,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(Game)
    private GameRepository: Repository<Game>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
    @InjectRepository(FiatCurrency)
    private FiatCurrencyRepository: Repository<FiatCurrency>,
    @InjectRepository(GameStripeTransaction)
    private GameStripeTransactionRepository: Repository<GameStripeTransaction>,
    @InjectRepository(GameProviderFiatBlacklist)
    private GameProviderFiatBlacklistRepository: Repository<GameProviderFiatBlacklist>,
  ) {}

  async getInfoForGamePlay(ip: string, user?: User) {
    const geo = geoip.lookup(ip);
    const country = geo?.country ?? null;
    const city = geo?.city ?? null;

    const locale = user && user.setting_language ? user.setting_language : 'en';

    return {
      country,
      city,
      locale,
    };
  }

  async startDemo(
    game_id: string,
    ip: string,
    client_type: string,
    locale: string,
  ) {
    const { country, city } = await this.getInfoForGamePlay(ip);
    console.log(new Date(), ip, country, city, locale, client_type);

    if (!country) {
      throw new HttpException(
        canDetectLocationError.error,
        canDetectLocationError.code,
      );
    }
    //  Get game object
    const game = await this.GameRepository.findOne({
      where: { id: game_id },
      select: ['identifier'],
    });

    if (!game)
      throw new HttpException(isExistGameError.error, isExistGameError.code);

    //  Send request to GCP
    const requestData = {
      casino_id: this.appEnvironment.softswissCasinoId,
      game: game.identifier,
      locale,
      ip,
      client_type,
      urls: {
        return_url: this.appEnvironment.softswissReturnUrl,
      },
      // jurisdiction,  optional
    };

    const signature = getSignature(
      JSON.stringify(requestData),
      this.appEnvironment.softswissSecretKey,
    );

    try {
      const response = await axios.post(
        this.appEnvironment.softswissApiUrl + '/demo',
        requestData,
        {
          headers: { 'X-REQUEST-SIGN': signature },
        },
      );

      return response.data['launch_options'];
    } catch (error) {
      console.log(error.response);
      throw new BadRequestException('Game: start demo', {
        description: error.response.data.message,
      });
    }
  }

  async getAvailableFiatCurrencyForGame(user_id: string, game_id: string) {
    const usdCurrency = await this.FiatCurrencyRepository.findOne({
      select: ['symbol', 'iso_decimals', 'price'],
      where: { symbol: 'USD' },
    });

    const user = await this.UserRepository.findOne({
      relations: ['setting_fiat_currency'],
      where: { id: user_id },
    });

    if (!user.setting_fiat_currency) {
      return {
        symbol: usdCurrency.symbol,
        decimals: usdCurrency.iso_decimals,
        price: usdCurrency.price,
      };
    }
    const settingFiatCurrency =
      await this.GameProviderFiatBlacklistRepository.createQueryBuilder(
        't_gpfb',
      )
        .select([
          't_fc.symbol as symbol',
          't_fc.iso_decimals as decimals',
          't_fc.price as price',
        ])
        .innerJoin(Game, 't_g', `t_g.id = '${game_id}'`)
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.id = t_gpfb.provider_id`,
        )
        .innerJoin(
          FiatCurrency,
          't_fc',
          `t_fc.id = t_gpfb.fiat_id AND t_fc.id = '${user.setting_fiat_currency.id}'`,
        )
        .getRawOne();

    if (!settingFiatCurrency) {
      return {
        symbol: user.setting_fiat_currency.symbol,
        decimals: user.setting_fiat_currency.iso_decimals,
        price: user.setting_fiat_currency.price,
      };
    }

    return {
      symbol: usdCurrency.symbol,
      decimals: usdCurrency.iso_decimals,
      price: usdCurrency.price,
    };
  }

  async createGameSession(
    user: User,
    game_id: string,
    ip: string,
    client_type: string,
    currency_type: ENUM_CURRENCY,
    currency_id: string,
  ) {
    // ip = '157.66.196.200';
    console.log(`===========ip: ${ip}`);
    const { country, city, locale } = await this.getInfoForGamePlay(ip, user);
    // console.log(new Date(), ip, country, city, locale, client_type);
    // const country = 'FR';
    // const locale = 'EN';
    // ip = '159.69.140.114';
    console.log('country:', country, 'city:', city, 'locale:', locale);

    if (!country) {
      throw new HttpException(
        canDetectLocationError.error,
        canDetectLocationError.code,
      );
    }

    //  Get game object
    const game = await this.GameRepository.findOne({
      where: { id: game_id },
      relations: ['producer'],
    });

    if (!game)
      throw new HttpException(isExistGameError.error, isExistGameError.code);

    //  Get currency object
    let currency = null;
    if (currency_type === ENUM_CURRENCY.Crypto) {
      currency = await this.BlockchainSymbolRepository.createQueryBuilder()
        .select(['id', 'symbol', 'price'])
        .where('id = :currency_id', { currency_id })
        .getRawOne();
      if (!currency) {
        throw new HttpException(
          isExistCurrencyError.error,
          isExistCurrencyError.code,
        );
      }
    } else if (currency_type === ENUM_CURRENCY.Fiat) {
      currency = await this.FiatCurrencyRepository.createQueryBuilder()
        .select(['id', 'symbol', 'price'])
        .where('id = :currency_id', { currency_id })
        .getRawOne();
    } else {
      throw new HttpException(
        isExistCurrencyTypeError.error,
        isExistCurrencyTypeError.code,
      );
    }

    const availableFiatCurrencyForGamePlay =
      await this.getAvailableFiatCurrencyForGame(user.id, game_id);
    // console.log(
    //   new Date(),
    //   user.name,
    //   game.identifier,
    //   availableFiatCurrencyForGamePlay.symbol,
    // );
    const conversionRate =
      availableFiatCurrencyForGamePlay.price / currency.price;

    const usdConversionRate = availableFiatCurrencyForGamePlay.price;

    //  Send request to GCP
    const requestData = {
      casino_id: this.appEnvironment.softswissCasinoId,
      game: game.identifier,
      currency: availableFiatCurrencyForGamePlay.symbol,
      locale,
      ip,
      client_type,
      // balance: 1000, //  optional
      urls: {
        deposit_url: this.appEnvironment.softswissDepositUrl,
        return_url: this.appEnvironment.softswissReturnUrl,
      },
      // jurisdiction: 'FR',
      user: {
        // id:
        //   user.id +
        //   '_' +
        //   currency_type +
        //   '_' +
        //   currency.id +
        //   '_' +
        //   availableFiatCurrencyForGamePlay.decimals +
        //   '_' +
        //   conversionRate +
        //   '_' +
        //   usdConversionRate,
        id: user.id + '_' + availableFiatCurrencyForGamePlay.symbol,
        // email: user.email, // optional
        firstname: user.name,
        lastname: user.name,
        nickname: user.name,
        registered_at: user.created_at.toISOString().slice(0, 10),
        date_of_birth: '1993-04-21',
        // city,
        city: 'city',
        gender: 'm',
        country,
      },
    };

    const signature = getSignature(
      JSON.stringify(requestData),
      this.appEnvironment.softswissSecretKey,
    );

    console.log('requestData', requestData, 'signature', signature);

    try {
      const response = await axios.post(
        this.appEnvironment.softswissApiUrl + '/sessions',
        requestData,
        {
          headers: { 'X-REQUEST-SIGN': signature },
        },
      );
      await this.memoryService.set(
        `${user.id}:${game.producer.id}`,
        {
          currency_type,
          currency_id: currency.id,
          fiat_decimals: availableFiatCurrencyForGamePlay.decimals,
          rate: conversionRate,
          usd_rate: usdConversionRate,
        },
        60 * 60 * 24, //  24 hours
      );

      // console.log('response', response.data);
      return response.data['launch_options'];
    } catch (err) {
      console.log(err.response.data);
      throw new BadRequestException('Game: create session', {
        description: err.response.data.message,
      });
    }
  }

  async playRequest(
    combined_user_id: string,
    fiat_currency: string,
    game_identifier: string,
    game_id: string,
    finished: boolean,
    actions: any,
    body: any,
    sign: string,
  ) {
    //  Check the authentication
    const signature = getSignature(
      JSON.stringify(body),
      this.appEnvironment.softswissSecretKey,
    );
    if (!sign || !sign.length || signature != sign) {
      throw new HttpException(
        {
          code: 403,
          error: isMatchedWithSignError.error,
        },
        isMatchedWithSignError.code,
      );
    }

    const game = await this.GameRepository.findOne({
      where: { identifier: game_identifier },
      relations: ['producer'],
    });

    //  Analysize combined_user_id
    const [user_id] = combined_user_id.split('_');

    const currency_info = await this.memoryService.get(
      `${user_id}:${game.producer.id}`,
    );
    if (!currency_info) {
      throw new HttpException(
        {
          code: 100,
          message: 'No currency info in memory.',
          balance: 0,
        },
        412,
      );
    }
    const { currency_type, currency_id, fiat_decimals, rate, usd_rate } =
      currency_info;

    const decimals = Number(fiat_decimals);
    const fiat_to_currency_rate = Number(rate);
    const fiat_to_usd_rate = Number(usd_rate);
    const currency_to_usd_rate = fiat_to_usd_rate / fiat_to_currency_rate;

    //  Play Request
    // if (actions && actions.length && finished) {
    if (actions && actions.length) {
      const transactions = [];
      const valid_actions = [];

      for (const actionObj of actions) {
        const { action_id, action } = actionObj;
        if (action === 'bet' || action === 'win') {
          //  Check the duplication of action_id
          let game_tx: GameBlockchainTransaction | GameStripeTransaction =
            currency_type == ENUM_CURRENCY.Crypto
              ? await this.GameBlockchainTransactionRepository.findOneBy({
                  action_id,
                })
              : await this.GameStripeTransactionRepository.findOneBy({
                  action_id,
                });

          if (game_tx) {
            //  Add the original action to transactions
            transactions.push({
              action_id,
              tx_id: game_tx.id,
              processed_at: getISODate(game_tx.created_at),
            });
            //  skip
            continue;
          } else {
            game_tx =
              currency_type == ENUM_CURRENCY.Crypto
                ? await this.GameBlockchainTransactionRepository.findOneBy({
                    action: ENUM_GAME_TRANSACTION_ACTION.rollback,
                    original_action_id: action_id,
                  })
                : await this.GameStripeTransactionRepository.findOneBy({
                    action: ENUM_GAME_TRANSACTION_ACTION.rollback,
                    original_action_id: action_id,
                  });

            //  If an action is already rollbacked
            if (game_tx) {
              //  Refund the balance
              // await this.walletService.addBalanceByUserIdAndCurrency(
              //   user_id,
              //   currency_type as ENUM_CURRENCY,
              //   currency_id,
              //   fromSubunit(action === 'bet' ? amount : -amount, decimals),
              // );
              continue;
            }
          }

          valid_actions.push(actionObj);
        }
      }

      const player = await this.UserRepository.findOne({
        where: { id: user_id },
        relations: ['referral_user'],
      });

      const _currency =
        currency_type === ENUM_CURRENCY.Crypto
          ? await this.BlockchainSymbolRepository.findOneBy({
              id: currency_id,
            })
          : await this.FiatCurrencyRepository.findOneBy({ id: currency_id });
      const currency = _currency.symbol;

      if (valid_actions.length) {
        let total_profit = 0;

        let wallet_balance =
          await this.walletService.getBalanceByUserIdAndCurrency(
            user_id,
            currency_type as ENUM_CURRENCY,
            currency_id,
          );
        const wallet_balance_amount = toSubunit(
          wallet_balance / fiat_to_currency_rate,
          decimals,
        );

        const game_bet_transactions = [];

        for (const valid_action of valid_actions) {
          const {
            action,
            action_id,
            jackpot_contribution,
            amount,
            jackpot_win,
          } = valid_action;

          if (action === 'bet') {
            total_profit -= valid_action.amount;

            //  If the bet amount is greater than current balance
            if (total_profit + wallet_balance_amount < 0) {
              throw new HttpException(
                {
                  code: 100,
                  message: 'Player has not enough funds to process an action.',
                  balance: wallet_balance_amount,
                },
                412,
              );
            }

            const win_action =
              currency_type == ENUM_CURRENCY.Crypto
                ? await this.GameBlockchainTransactionRepository.findOneBy({
                    gcp_game_id: game_id,
                    action: ENUM_GAME_TRANSACTION_ACTION.win,
                  })
                : await this.GameStripeTransactionRepository.findOneBy({
                    gcp_game_id: game_id,
                    action: ENUM_GAME_TRANSACTION_ACTION.win,
                  });

            //  If the paired 'win' action is already in db.
            let profit_multiplier = 0;
            if (win_action) {
              profit_multiplier =
                win_action.amount > 0
                  ? Number(
                      (
                        win_action.amount /
                        fromSubunit(amount * fiat_to_currency_rate, decimals)
                      ).toFixed(4),
                    )
                  : 0;
            }

            wallet_balance -= fromSubunit(
              amount * fiat_to_currency_rate,
              decimals,
            );
            const new_bet_action_tx:
              | GameBlockchainTransaction
              | GameStripeTransaction =
              currency_type == ENUM_CURRENCY.Crypto
                ? await this.GameBlockchainTransactionRepository.save(
                    this.GameBlockchainTransactionRepository.create({
                      user: { id: user_id },
                      currency: _currency,
                      game,
                      gcp_game_id: game_id,
                      action: ENUM_GAME_TRANSACTION_ACTION['bet'],
                      action_id,
                      profit_multiplier,
                      amount: fromSubunit(
                        amount * fiat_to_currency_rate,
                        decimals,
                      ),
                      amount_usd: fromSubunit(
                        amount * fiat_to_usd_rate,
                        decimals,
                      ),
                      jackpot_contribution,
                      jackpot_win,
                      wallet_balance,
                      wallet_balance_usd: wallet_balance * currency_to_usd_rate,
                      external_user_id: combined_user_id,
                    }),
                  )
                : await this.GameStripeTransactionRepository.save(
                    this.GameStripeTransactionRepository.create({
                      user: { id: user_id },
                      currency: _currency,
                      game,
                      gcp_game_id: game_id,
                      action: ENUM_GAME_TRANSACTION_ACTION['bet'],
                      action_id,
                      profit_multiplier,
                      amount: fromSubunit(
                        amount * fiat_to_currency_rate,
                        decimals,
                      ),
                      amount_usd: fromSubunit(
                        amount * fiat_to_usd_rate,
                        decimals,
                      ),
                      jackpot_contribution,
                      jackpot_win,
                      wallet_balance:
                        wallet_balance -
                        fromSubunit(amount * fiat_to_currency_rate, decimals),
                    }),
                  );
            transactions.push({
              action_id,
              tx_id: new_bet_action_tx.id,
              processed_at: getISODate(new_bet_action_tx.created_at),
            });

            //  Check Quests
            this.questService.checkTasksOnBet(user_id);

            game_bet_transactions.push(new_bet_action_tx.id);

            //  Broadcast bet
            if (game) {
              const bet_data = {
                id: new_bet_action_tx.id,
                player_id: player.id,
                player_name: player.setting_hide_user_name ? '' : player.name,
                player_avatar: player.avatar,
                time: Date.now(),
                multiplier: profit_multiplier,
                profit_amount: fixedNumber(
                  (profit_multiplier - 1) *
                    fromSubunit(amount * fiat_to_currency_rate, decimals),
                ),
                profit_amount_usd: fixedNumber(
                  (profit_multiplier - 1) *
                    fromSubunit(amount * fiat_to_usd_rate, decimals),
                ),
                game_id: game.id,
                game_name: game.title,
                game_identifier: game.identifier,
                provider_name: game.producer.name,
                bet_amount: fixedNumber(
                  fromSubunit(amount * fiat_to_currency_rate, decimals),
                ),
                bet_amount_usd: fixedNumber(
                  fromSubunit(amount * fiat_to_usd_rate, decimals),
                ),
                currency,
                currency_type,
                win: profit_multiplier >= 1 ? true : false,
              };
              this.messageGateway.broadcastBet(JSON.stringify(bet_data));
            }

            //  Affiliate
            if (player.referral_user && player.referral_user.id) {
              this.affiliateService.addCommissionBonusByUser(
                player.referral_user,
                player,
                currency_type as ENUM_CURRENCY,
                new_bet_action_tx,
                _currency,
              );
            }
          } else {
            total_profit += valid_action.amount;
            const bet_action =
              currency_type == ENUM_CURRENCY.Crypto
                ? await this.GameBlockchainTransactionRepository.findOneBy({
                    gcp_game_id: game_id,
                    action: ENUM_GAME_TRANSACTION_ACTION.bet,
                  })
                : await this.GameStripeTransactionRepository.findOneBy({
                    gcp_game_id: game_id,
                    action: ENUM_GAME_TRANSACTION_ACTION.bet,
                  });

            //  If the paired bet action is already in db.
            if (bet_action) {
              const profit_multiplier =
                amount > 0
                  ? Number(
                      (
                        fromSubunit(amount * fiat_to_currency_rate, decimals) /
                        bet_action.amount
                      ).toFixed(4),
                    )
                  : 0;

              bet_action.profit_multiplier = profit_multiplier;

              if (currency_type == ENUM_CURRENCY.Crypto) {
                await this.GameBlockchainTransactionRepository.save(bet_action);
              } else {
                await this.GameStripeTransactionRepository.save(bet_action);
              }

              //  Check Quests
              if (profit_multiplier > 1)
                this.questService.checkTasksOnWin(user_id);

              //  Broadcast bet
              if (game) {
                const bet_data = {
                  id: bet_action.id,
                  player_id: player.id,
                  player_name: player.setting_hide_user_name ? '' : player.name,
                  player_avatar: player.avatar,
                  time: Date.now(),
                  multiplier: profit_multiplier,
                  profit_amount: fixedNumber(
                    (profit_multiplier - 1) * bet_action.amount,
                  ),
                  profit_amount_usd: fixedNumber(
                    (profit_multiplier - 1) * bet_action.amount_usd,
                  ),
                  game_id: game.id,
                  game_name: game.title,
                  game_identifier: game.identifier,
                  provider_name: game.producer.name,
                  bet_amount: fixedNumber(bet_action.amount),
                  bet_amount_usd: fixedNumber(bet_action.amount_usd),
                  currency,
                  currency_type,
                  win: profit_multiplier >= 1 ? true : false,
                };
                this.messageGateway.broadcastBet(JSON.stringify(bet_data));
              }
            }

            wallet_balance += fromSubunit(
              amount * fiat_to_currency_rate,
              decimals,
            );

            const new_win_action_tx:
              | GameBlockchainTransaction
              | GameStripeTransaction =
              currency_type == ENUM_CURRENCY.Crypto
                ? await this.GameBlockchainTransactionRepository.save(
                    this.GameBlockchainTransactionRepository.create({
                      user: { id: user_id },
                      currency: { id: currency_id },
                      game,
                      gcp_game_id: game_id,
                      action: ENUM_GAME_TRANSACTION_ACTION['win'],
                      action_id,
                      profit_multiplier: 0,
                      amount: fromSubunit(
                        amount * fiat_to_currency_rate,
                        decimals,
                      ),
                      amount_usd: fromSubunit(
                        amount * fiat_to_usd_rate,
                        decimals,
                      ),
                      jackpot_contribution,
                      jackpot_win,
                      wallet_balance,
                      wallet_balance_usd: wallet_balance * currency_to_usd_rate,
                      external_user_id: combined_user_id,
                    }),
                  )
                : await this.GameStripeTransactionRepository.save(
                    this.GameStripeTransactionRepository.create({
                      user: { id: user_id },
                      currency: { id: currency_id },
                      game,
                      gcp_game_id: game_id,
                      action: ENUM_GAME_TRANSACTION_ACTION['win'],
                      action_id,
                      profit_multiplier: 0,
                      amount: fromSubunit(
                        amount * fiat_to_currency_rate,
                        decimals,
                      ),
                      amount_usd: fromSubunit(
                        amount * fiat_to_usd_rate,
                        decimals,
                      ),
                      jackpot_contribution,
                      jackpot_win,
                      wallet_balance:
                        wallet_balance +
                        fromSubunit(amount * fiat_to_currency_rate, decimals),
                    }),
                  );
            transactions.push({
              action_id,
              tx_id: new_win_action_tx.id,
              processed_at: getISODate(new_win_action_tx.created_at),
            });
          }
        }

        //  Deduct bet amount from balance
        await this.walletService.addBalanceByUserIdAndCurrency(
          user_id,
          currency_type as ENUM_CURRENCY,
          currency_id,
          fromSubunit(total_profit * fiat_to_currency_rate, decimals),
        );

        // update vip level
        this.vipService.updateVIPLevelByUser(player);

        //  update available withdrawal balance
        this.walletWithdrawService.updateAvailableWithdrawalBalanceByUserIdAndCompleteSymbols(
          user_id,
          currency_id,
        );

        //  Get balance
        const balance = await this.walletService.getBalanceByUserIdAndCurrency(
          user_id,
          currency_type as ENUM_CURRENCY,
          currency_id,
        );

        //  Emit Balance
        const balance_data = {
          balance,
          currency_type,
          currency_id,
          currency,
        };
        this.messageGateway.emitBalance(user_id, JSON.stringify(balance_data));

        console.log(new Date(), 'round-play', balance, game_id, transactions);

        return {
          balance: toSubunit(balance / fiat_to_currency_rate, decimals),
          game_id,
          transactions,
        };
      } else {
        const balance = toSubunit(
          (await this.walletService.getBalanceByUserIdAndCurrency(
            user_id,
            currency_type as ENUM_CURRENCY,
            currency_id,
          )) / fiat_to_currency_rate,
          decimals,
        );
        console.log(new Date(), 'round-play', game_id, balance);
        return {
          balance,
          game_id,
          transactions,
        };
      }
    }
    //  Balance Request
    else {
      const balance = toSubunit(
        (await this.walletService.getBalanceByUserIdAndCurrency(
          user_id,
          currency_type as ENUM_CURRENCY,
          currency_id,
        )) / fiat_to_currency_rate,
        decimals,
      );
      console.log(new Date(), 'balance', balance);
      return {
        balance,
      };
    }
  }

  async rollbackRequest(
    combined_user_id: string,
    currency: string,
    game: string,
    game_id: string,
    finished: boolean | undefined,
    actions: any,
    body: any,
    sign: string,
  ) {
    //  Check the authentication
    const signature = getSignature(
      JSON.stringify(body),
      this.appEnvironment.softswissSecretKey,
    );
    if (!sign || !sign.length || signature != sign) {
      throw new HttpException(
        {
          code: 403,
          error: isMatchedWithSignError.error,
        },
        isMatchedWithSignError.code,
      );
    }

    const game_obj = await this.GameRepository.findOne({
      where: { identifier: game },
      relations: ['producer'],
    });

    //  Analysize combined_user_id
    const [user_id] = combined_user_id.split('_');

    const currency_info = await this.memoryService.get(
      `${user_id}:${game_obj.producer.id}`,
    );
    if (!currency_info) {
      throw new HttpException(
        {
          code: 100,
          message: 'No currency info in memory.',
          balance: 0,
        },
        412,
      );
    }
    const { currency_type, currency_id, fiat_decimals, rate, usd_rate } =
      currency_info;

    const decimals = Number(fiat_decimals);
    const fiat_to_currency_rate = Number(rate);
    const fiat_to_usd_rate = Number(usd_rate);
    const currency_to_usd_rate = fiat_to_usd_rate / fiat_to_currency_rate;

    const transactions = [];
    const valid_actions = [];

    if (actions && actions.length && finished) {
      for (const actionObj of actions) {
        const { action, action_id } = actionObj;

        if (action === 'rollback') {
          //  Check the duplication of action_id
          const game_tx: GameBlockchainTransaction | GameStripeTransaction =
            currency_type == ENUM_CURRENCY.Crypto
              ? await this.GameBlockchainTransactionRepository.findOne({
                  where: [{ action_id }],
                })
              : await this.GameStripeTransactionRepository.findOne({
                  where: [{ action_id }],
                });

          if (game_tx) {
            //  Add the original action to transactions
            transactions.push({
              action_id,
              tx_id: game_tx.id,
              processed_at: getISODate(game_tx.created_at),
            });
            //  skip
            continue;
          }
          valid_actions.push(actionObj);
        }
      }

      let wallet_balance =
        await this.walletService.getBalanceByUserIdAndCurrency(
          user_id,
          currency_type as ENUM_CURRENCY,
          currency_id,
        );
      let refund = 0;

      for (const actionObj of valid_actions) {
        const { action, action_id, original_action_id } = actionObj;

        const originalAction:
          | GameBlockchainTransaction
          | GameStripeTransaction =
          currency_type == ENUM_CURRENCY.Crypto
            ? await this.GameBlockchainTransactionRepository.findOneBy({
                action_id: original_action_id,
              })
            : await this.GameStripeTransactionRepository.findOneBy({
                action_id: original_action_id,
              });
        //  If the original action is existed
        if (originalAction) {
          if (originalAction.action === ENUM_GAME_TRANSACTION_ACTION.bet) {
            refund += originalAction.amount;
            wallet_balance += fromSubunit(
              originalAction.amount * fiat_to_currency_rate,
              decimals,
            );
          } else if (
            originalAction.action === ENUM_GAME_TRANSACTION_ACTION.win
          ) {
            refund -= originalAction.amount;
            wallet_balance -= fromSubunit(
              originalAction.amount * fiat_to_currency_rate,
              decimals,
            );
          }
          //  Set game_transaction_id to null
          await this.affiliateService.revertReferralBonus(
            user_id,
            currency_type as ENUM_CURRENCY,
            originalAction.id,
          );

          //  Delete original action
          currency_type == ENUM_CURRENCY.Crypto
            ? await this.GameBlockchainTransactionRepository.createQueryBuilder()
                .delete()
                .from(GameBlockchainTransaction)
                .where({ id: originalAction.id })
                .execute()
            : this.GameStripeTransactionRepository.createQueryBuilder()
                .delete()
                .from(GameStripeTransaction)
                .where({ id: originalAction.id })
                .execute();
        }
        //  Save new action
        const newRollbackActionTx:
          | GameBlockchainTransaction
          | GameStripeTransaction =
          currency_type == ENUM_CURRENCY.Crypto
            ? await this.GameBlockchainTransactionRepository.save(
                this.GameBlockchainTransactionRepository.create({
                  user: { id: user_id },
                  currency: { id: currency_id },
                  game: game_obj,
                  amount: originalAction
                    ? originalAction.action == ENUM_GAME_TRANSACTION_ACTION.bet
                      ? Number(originalAction.amount)
                      : -Number(originalAction.amount)
                    : null,
                  amount_usd: originalAction
                    ? originalAction.action == ENUM_GAME_TRANSACTION_ACTION.bet
                      ? Number(originalAction.amount_usd)
                      : -Number(originalAction.amount_usd)
                    : null,
                  gcp_game_id: game_id,
                  action: Number(ENUM_GAME_TRANSACTION_ACTION[action]),
                  action_id,
                  original_action_id,
                  wallet_balance,
                  wallet_balance_usd: wallet_balance * currency_to_usd_rate,
                  external_user_id: combined_user_id,
                }),
              )
            : await this.GameStripeTransactionRepository.save(
                this.GameStripeTransactionRepository.create({
                  user: { id: user_id },
                  currency: { id: currency_id },
                  game: game_obj,
                  gcp_game_id: game_id,
                  action: Number(ENUM_GAME_TRANSACTION_ACTION[action]),
                  action_id,
                  original_action_id,
                }),
              );
        if (originalAction)
          transactions.push({
            action_id,
            tx_id: newRollbackActionTx.id,
            processed_at: getISODate(newRollbackActionTx.created_at),
          });
        else
          transactions.push({
            action_id,
          });
      }

      //  Refund win/bet amount from balance
      // console.log('refund', refund, toSubunit(refund, decimals));
      if (refund)
        await this.walletService.addBalanceByUserIdAndCurrency(
          user_id,
          currency_type as ENUM_CURRENCY,
          currency_id,
          refund,
        );
    }
    const balance = toSubunit(
      (await this.walletService.getBalanceByUserIdAndCurrency(
        user_id,
        currency_type as ENUM_CURRENCY,
        currency_id,
      )) / fiat_to_currency_rate,
      decimals,
    );
    console.log(new Date(), 'round-rollback', balance, game_id, transactions);
    return {
      balance: balance < 0 ? 0 : balance,
      game_id,
      transactions,
    };
  }
}
