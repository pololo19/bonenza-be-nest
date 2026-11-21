import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import countryToCurrency = require('country-to-currency');
import { ethers } from 'ethers';
import { DeepPartial, Repository } from 'typeorm';
import TronWeb = require('tronweb');
import {
  BlockchainCryptoBalance,
  BlockchainCryptoWallet,
  BlockchainDepositTransaction,
  BlockchainNetwork,
  BlockchainSymbol,
  BlockchainSymbolFavorite,
  ClaimBonus,
  FiatCurrency,
  FiatCurrencyFavorite,
  StripeDepositTransaction,
  StripeFiatBalance,
  User,
} from 'entities';
import {
  ENUM_BLOCKCHAIN_DEPOSIT_STATUS,
  ENUM_CURRENCY,
  ENUM_STRIPE_DEPOSIT_STATUS,
} from 'enums';
import {
  canClaimOnRakebackError,
  canClaimWithMinAmountOnRakebackError,
} from 'errors';
import { GameService } from 'modules/game/game.service';
import { fixedNumber } from 'utils';

import { WalletWithdrawService } from './wallet-withdraw.service';

@Injectable()
export class WalletService {
  constructor(
    private readonly walletWithdrawService: WalletWithdrawService,
    private readonly gameService: GameService,
    @InjectRepository(BlockchainCryptoBalance)
    private BlockchainCryptoBalanceRepository: Repository<BlockchainCryptoBalance>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(BlockchainNetwork)
    private BlockchainNetWorkRepository: Repository<BlockchainNetwork>,
    @InjectRepository(BlockchainCryptoWallet)
    private BlockchainCryptoWalletRepository: Repository<BlockchainCryptoWallet>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(BlockchainDepositTransaction)
    private BlockchainDepositTransactionRepository: Repository<BlockchainDepositTransaction>,
    @InjectRepository(FiatCurrency)
    private FiatCurrencyRepository: Repository<FiatCurrency>,
    @InjectRepository(ClaimBonus)
    private ClaimBonusRepository: Repository<ClaimBonus>,
    @InjectRepository(StripeFiatBalance)
    private StripeFiatBalanceRepository: Repository<StripeFiatBalance>,
    @InjectRepository(StripeDepositTransaction)
    private StripeDepositTransactionRepository: Repository<StripeDepositTransaction>,
    @InjectRepository(BlockchainSymbolFavorite)
    private BlockchainSymbolFavoriteRepository: Repository<BlockchainSymbolFavorite>,
    @InjectRepository(FiatCurrencyFavorite)
    private FiatCurrencyFavoriteRepository: Repository<FiatCurrencyFavorite>,
  ) {}

  async getDefaultFiat(countryCode: string) {
    const symbol = countryToCurrency[countryCode || 'US'] || 'USD';
    const defaultFiat = await this.FiatCurrencyRepository.findOne({
      where: { symbol: symbol },
    });
    // if currency is not registered to platform, return usd
    const usdFiat = await this.FiatCurrencyRepository.findOne({
      where: { symbol: 'USD' },
    });

    return defaultFiat || usdFiat;
  }

  async createUserWallets(user: User) {
    const [networks, symbols] = await Promise.all([
      this.BlockchainNetWorkRepository.find(),
      this.BlockchainSymbolRepository.find(),
    ]);

    // Create blockchain wallet
    const { eth, tron } = await this._createWallets();
    for (let i = 0; i < networks.length; i++) {
      const network = networks[i];
      const type = network.type;
      const wallet = type === 1 ? eth : tron;
      const newWallet: DeepPartial<BlockchainCryptoWallet> = {
        deposit_address: wallet.address,
        private_key: wallet.privateKey,
        user: user,
        network: network,
      };
      const createWallet =
        this.BlockchainCryptoWalletRepository.create(newWallet);
      const _resWallet =
        await this.BlockchainCryptoWalletRepository.save(createWallet);
    }

    // Create blockchain balance
    for (let i = 0; i < symbols.length; i++) {
      const symbol = symbols[i];
      const newBalance: DeepPartial<BlockchainCryptoBalance> = {
        user,
        balance: 0,
        symbol,
      };
      const createdBalance =
        this.BlockchainCryptoBalanceRepository.create(newBalance);
      const _resBalance =
        await this.BlockchainCryptoBalanceRepository.save(createdBalance);
    }

    //  Create fiat balance
    const fiats = await this.FiatCurrencyRepository.find();
    for (const fiat of fiats) {
      const newBalanceconfig: DeepPartial<StripeFiatBalance> = {
        user,
        fiat,
      };
      const newBalance = await this.StripeFiatBalanceRepository.save(
        this.StripeFiatBalanceRepository.create(newBalanceconfig),
      );
    }
    return true;
  }

  async _createWallets() {
    // const tronWeb = new TronWeb({
    //   fullHost: this.appEnvironment.tronGridURL,
    // });
    // const newAccountTRX = await tronWeb.createAccount();
    // const tronAddress = newAccountTRX.address.base58;
    // const tronPrivateKey = newAccountTRX.privateKey;

    const wallet = ethers.Wallet.createRandom();
    const ethAddress = wallet.address;
    const ethPrivateKey = wallet.privateKey;

    return {
      eth: { address: ethAddress, privateKey: ethPrivateKey },
      tron: { address: ethAddress, privateKey: ethPrivateKey },
    };
  }

  async getBalanceByUserIdAndCurrency(
    user_id: string,
    currency_type: ENUM_CURRENCY,
    currency_id: string,
  ) {
    if (currency_type == ENUM_CURRENCY.Crypto) {
      const result = await this.BlockchainCryptoBalanceRepository.findOneBy({
        user: { id: user_id },
        symbol: { id: currency_id },
      });
      return Number(result.balance);
    } else if (currency_type == ENUM_CURRENCY.Fiat) {
      const result = await this.StripeFiatBalanceRepository.findOneBy({
        user: { id: user_id },
        fiat: { id: currency_id },
      });
      return Number(result.balance);
    }
  }

  async addBalanceByUserIdAndCurrency(
    user_id: string,
    currency_type: ENUM_CURRENCY,
    currency_id: string,
    amount: number,
  ) {
    if (currency_type == ENUM_CURRENCY.Crypto) {
      await this.BlockchainCryptoBalanceRepository.createQueryBuilder()
        .update(BlockchainCryptoBalance)
        .set({
          balance: () =>
            amount > 0 ? `balance + ${amount}` : `balance - ${-amount}`,
        })
        .where('user_id = :user_id AND symbol_id = :currency_id', {
          user_id,
          currency_id,
        })
        .execute();
    } else {
      await this.StripeFiatBalanceRepository.createQueryBuilder()
        .update(StripeFiatBalance)
        .set({
          balance: () =>
            amount > 0 ? `balance + ${amount}` : `balance - ${-amount}`,
        })
        .where('user_id = :user_id AND fiat_id = :currency_id', {
          user_id,
          currency_id,
        })
        .execute();
    }
  }

  async getBalances(userId: string) {
    const balances = await this.BlockchainCryptoBalanceRepository.find({
      where: { user: { id: userId } },
      relations: ['symbol'],
    });
    return balances;
  }

  async getUSDTBalance(user_id: string) {
    const result =
      await this.BlockchainCryptoBalanceRepository.createQueryBuilder('t_bcb')
        .select('t_bcb.balance', 'balance')
        .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_bcb.symbol_id')
        .where('user_id = :user_id', { user_id })
        .getRawOne();

    return Number(result.balance);
  }

  async getCurrencyPrice(currency_type: ENUM_CURRENCY, currency_id: string) {
    if (currency_type === ENUM_CURRENCY.Crypto) {
      const result = await this.BlockchainSymbolRepository.findOneBy({
        id: currency_id,
      });

      return result.price;
    } else if (currency_type === ENUM_CURRENCY.Fiat) {
      const result = await this.FiatCurrencyRepository.findOneBy({
        id: currency_id,
      });

      return result.price;
    }
  }

  async getDepositTimesForThisWeek(user: User) {
    const sql_b =
      this.BlockchainDepositTransactionRepository.createQueryBuilder()
        .select('COUNT(*) AS times')
        .where(
          'EXTRACT(WEEK FROM created_at) = EXTRACT(WEEK FROM CURRENT_DATE)',
        )
        .andWhere(`user_id = '${user.id}'`)
        .andWhere(`status = ${ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete}`)
        .getQuery();

    const sql_s = this.StripeDepositTransactionRepository.createQueryBuilder()
      .select('COUNT(*) AS times')
      .where('EXTRACT(WEEK FROM created_at) = EXTRACT(WEEK FROM CURRENT_DATE)')
      .andWhere(`user_id = '${user.id}'`)
      .andWhere(`status = ${ENUM_STRIPE_DEPOSIT_STATUS.Complete}`)
      .getQuery();

    const result = await this.BlockchainDepositTransactionRepository.query(`
      SELECT (t_b.times + t_s.times) AS times
      FROM (${sql_b}) as t_b, (${sql_s}) as t_s
    `);

    return Number(result[0].times);
  }

  //  Add USDT
  async addBonusToWallet(user_id: string, amount: number) {
    const result = await this.BlockchainCryptoBalanceRepository.query(`
      UPDATE blockchain_crypto_balance
      SET balance = balance + ${amount}
      FROM blockchain_symbol t_bs
      WHERE user_id = '${user_id}' AND t_bs.symbol = 'USDT' AND symbol_id = t_bs.id
      RETURNING balance, balance * t_bs.price AS balance_usd
    `);
    return result[0][0];
  }

  async getTotalClaimedAmountUsd(user: User) {
    const result = await this.ClaimBonusRepository.createQueryBuilder()
      .select('SUM(amount_usd)', 'sum')
      .where('user_id = :user_id ', {
        user_id: user.id,
      })
      .getRawOne();

    return result.sum;
  }

  async getUSDTOfBonusPool(user: User) {
    const result = await this.UserRepository.findOneBy({ id: user.id });
    const { price } = await this.BlockchainSymbolRepository.findOneBy({
      symbol: 'USDT',
    });

    return {
      locked_amount: result.bonus_pool / price,
      locked_amount_usd: result.bonus_pool,
      usdt_price: price,
    };
  }

  async getClaim(user: User) {
    const total_wagered_amount_usd =
      await this.gameService.getTotalWagerAmountUsdByUserId(user.id);

    const total_claimed_amount_usd = await this.getTotalClaimedAmountUsd(user);

    const { locked_amount_usd, usdt_price, locked_amount } =
      await this.getUSDTOfBonusPool(user);

    const amount_usd = fixedNumber(
      total_wagered_amount_usd - total_claimed_amount_usd * 500,
      2,
    );
    const amount = fixedNumber(amount_usd / usdt_price, 2);
    const unlocked_amount = fixedNumber(amount / 500, 2);
    const unlocked_amount_usd = fixedNumber(unlocked_amount * usdt_price, 2);
    const minimum_unlock_amount = 5;
    const minimum_unlock_amount_usd = fixedNumber(5 * usdt_price, 2);
    const minimum_wager_amount = 2500;
    const minimum_wager_amount_usd = fixedNumber(
      minimum_wager_amount * usdt_price,
      2,
    );

    return {
      locked_amount: fixedNumber(locked_amount, 2),
      locked_amount_usd: fixedNumber(locked_amount_usd, 2),
      unlocked_amount,
      unlocked_amount_usd,
      current_wager_amount: amount,
      current_wager_amount_usd: amount_usd,
      minimum_unlock_amount,
      minimum_unlock_amount_usd,
      minimum_wager_amount,
      minimum_wager_amount_usd,
      price: usdt_price,
    };
  }

  async tryClaim(user: User) {
    const {
      locked_amount,
      locked_amount_usd,
      unlocked_amount_usd,
      unlocked_amount,
      minimum_unlock_amount,
      price,
    } = await this.getClaim(user);

    if (locked_amount <= 0) {
      throw new HttpException(
        canClaimOnRakebackError.error,
        canClaimOnRakebackError.code,
      );
    }

    if (unlocked_amount < minimum_unlock_amount) {
      throw new HttpException(
        canClaimWithMinAmountOnRakebackError.error,
        canClaimWithMinAmountOnRakebackError.code,
      );
    }

    const amount =
      unlocked_amount > locked_amount ? locked_amount : unlocked_amount;
    const amount_usd =
      unlocked_amount_usd > locked_amount_usd
        ? locked_amount_usd
        : unlocked_amount_usd;

    const result =
      await this.BlockchainCryptoBalanceRepository.createQueryBuilder()
        .update(BlockchainCryptoBalance)
        .set({ balance: () => `balance + ${amount}` })
        .where('user_id = :user_id', { user_id: user.id })
        .andWhere(
          `symbol_id = (SELECT id FROM "blockchain_symbol" "t_bs" WHERE t_bs.symbol = 'USDT')`,
        )
        .returning('balance')
        .execute();
    const wallet_balance = Number(result.raw[0].balance);
    //  Reduce bonus pool
    await this.reduceBonusPool(user.id, amount_usd);

    //  Add available withdrawal balance
    await this.walletWithdrawService.updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
      user.id,
      amount,
    );

    const newClaimConfig: DeepPartial<ClaimBonus> = {
      user,
      amount,
      amount_usd,
      wallet_balance,
      wallet_balance_usd: wallet_balance * price,
    };

    const newClaimTx = await this.ClaimBonusRepository.save(
      this.ClaimBonusRepository.create(newClaimConfig),
    );

    return {
      amount: newClaimTx.amount,
      amount_usd: newClaimTx.amount_usd,
      created_at: newClaimTx.created_at,
    };
  }

  async reduceBonusPool(user_id: string, amount_usd: number) {
    await this.UserRepository.createQueryBuilder()
      .update(User)
      .set({ bonus_pool: () => `bonus_pool - ${amount_usd}` })
      .where('id = :user_id', { user_id })
      .execute();
  }

  /*
    Rule (Deposit Bonus Pool)
    --------------------------
    1st Deposit: >=$10 -> 180%
    2st Deposit: >=$50 -> 240%
    3st Deposit: >=$100 -> 300%
    4st Deposit: >=$200 -> 360%
    ---------------------------
  */
  async updateBonusPool(user: User, amount_usd: number) {
    const times = (await this.getDepositTimesForThisWeek(user)) + 1;

    if (times === 1 && amount_usd >= 10) {
      console.log(new Date(), 'first bonus');
      await this.UserRepository.createQueryBuilder()
        .update(User)
        .set({ bonus_pool: () => `bonus_pool + ${amount_usd * 1.8}` })
        .where('id = :user_id', { user_id: user.id })
        .execute();
    } else if (times === 2 && amount_usd >= 50) {
      console.log(new Date(), 'second bonus');
      await this.UserRepository.createQueryBuilder()
        .update(User)
        .set({ bonus_pool: () => `bonus_pool + ${amount_usd * 2.4}` })
        .where('id = :user_id', { user_id: user.id })
        .execute();
    } else if (times === 3 && amount_usd >= 100) {
      console.log(new Date(), 'third bonus');
      await this.UserRepository.createQueryBuilder()
        .update(User)
        .set({ bonus_pool: () => `bonus_pool + ${amount_usd * 3}` })
        .where('id = :user_id', { user_id: user.id })
        .execute();
    } else if (times === 4 && amount_usd >= 200) {
      console.log(new Date(), 'fourth bonus');
      await this.UserRepository.createQueryBuilder()
        .update(User)
        .set({ bonus_pool: () => `bonus_pool + ${amount_usd * 3.6}` })
        .where('id = :user_id', { user_id: user.id })
        .execute();
    }
  }

  async setFavoriteCurrency(
    user: User,
    currency_type: ENUM_CURRENCY,
    currency_id: string,
  ) {
    if (currency_type === ENUM_CURRENCY.Crypto) {
      const bFavorite = await this.BlockchainSymbolFavoriteRepository.findOneBy(
        {
          user: { id: user.id },
          symbol: { id: currency_id },
        },
      );

      if (!bFavorite) {
        const newSymbolFavoriteConfig: DeepPartial<BlockchainSymbolFavorite> = {
          user,
          symbol: await this.BlockchainSymbolRepository.findOneBy({
            id: currency_id,
          }),
        };
        await this.BlockchainSymbolFavoriteRepository.save(
          this.BlockchainSymbolFavoriteRepository.create(
            newSymbolFavoriteConfig,
          ),
        );

        return {
          state: true,
        };
      } else {
        await this.BlockchainSymbolFavoriteRepository.delete({
          user: { id: user.id },
          symbol: { id: currency_id },
        });

        return {
          state: false,
        };
      }
    } else if (currency_type === ENUM_CURRENCY.Fiat) {
      const fFavorite = await this.FiatCurrencyFavoriteRepository.findOneBy({
        user: { id: user.id },
        fiat: { id: currency_id },
      });

      if (!fFavorite) {
        const newFiatFavoriteConfig: DeepPartial<FiatCurrencyFavorite> = {
          user,
          fiat: await this.FiatCurrencyRepository.findOneBy({
            id: currency_id,
          }),
        };
        await this.FiatCurrencyFavoriteRepository.save(
          this.FiatCurrencyFavoriteRepository.create(newFiatFavoriteConfig),
        );

        return {
          state: true,
        };
      } else {
        await this.FiatCurrencyFavoriteRepository.delete({
          user: { id: user.id },
          fiat: { id: currency_id },
        });

        return {
          state: false,
        };
      }
    }
  }

  async setDefaultCurrencies(user: User) {
    const symbols = await this.BlockchainSymbolRepository.find();

    for (const symbol of symbols) {
      const _newFavoriteCryptocurrency: DeepPartial<BlockchainSymbolFavorite> =
        {
          user,
          symbol,
        };

      await this.BlockchainSymbolFavoriteRepository.save(
        this.BlockchainSymbolFavoriteRepository.create(
          _newFavoriteCryptocurrency,
        ),
      );
    }

    // const _newFavoriteFiat: DeepPartial<FiatCurrencyFavorite> = {
    //   user,
    //   fiat: await this.FiatCurrencyRepository.findOneBy({
    //     symbol: 'USD',
    //   }),
    // };

    // await this.FiatCurrencyFavoriteRepository.save(
    //   this.FiatCurrencyFavoriteRepository.create(_newFavoriteFiat),
    // );
  }
}
