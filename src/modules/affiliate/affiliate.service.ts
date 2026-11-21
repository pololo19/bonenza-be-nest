import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AffiliateBonus,
  BlockchainSymbol,
  FiatCurrency,
  GameBlockchainTransaction,
  GameStripeTransaction,
  User,
  VipLevel,
  WithdrawAffiliateBonus,
} from 'entities';
import { ENUM_AFFILIATE_BONUS, ENUM_CURRENCY } from 'enums';
import {
  exceedTotalPageNumberError,
  isEmptyAvailableAffiliateRewardsError,
  isNotEnoughBonusPoolError,
} from 'errors';
import { MessageGateway } from 'modules/message/message.gateway';
import { SettingService } from 'modules/setting/setting.service';
import { WalletService } from 'modules/wallet/wallet.service';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class AffiliateService {
  constructor(
    private readonly walletService: WalletService,
    private readonly settingService: SettingService,
    private readonly messageGateway: MessageGateway,
    @InjectRepository(User)
    private UserReposity: Repository<User>,
    @InjectRepository(AffiliateBonus)
    private AffiliateBonusRepository: Repository<AffiliateBonus>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(VipLevel)
    private VipLevelRepository: Repository<VipLevel>,
    @InjectRepository(WithdrawAffiliateBonus)
    private WithdrawAffiliateBonusRepository: Repository<WithdrawAffiliateBonus>,
  ) {}

  async getCountOfFriends(user_id: string) {
    const result = await this.UserReposity.createQueryBuilder()
      .where('referral_user_id = :user_id', { user_id })
      .getCount();

    return Number(result);
  }

  async getTotalRewardsByUserId(user_id: string) {
    const result = await this.AffiliateBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where('user_id = :user_id', { user_id })
      .andWhere('claim_status = true')
      .getRawOne();
    return Number(result.sum);
  }

  async getReferralRewardsByUserId(user_id: string) {
    const result = await this.AffiliateBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where('user_id = :user_id', { user_id })
      .andWhere('type = :type', { type: ENUM_AFFILIATE_BONUS.REFERRAL })
      .andWhere('claim_status = true')
      .getRawOne();

    return Number(result.sum);
  }

  async getCommissionRewardsByUserId(user_id: string) {
    const result = await this.AffiliateBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where('user_id = :user_id', { user_id })
      .andWhere('type = :type', { type: ENUM_AFFILIATE_BONUS.COMMISSION })
      .andWhere('claim_status = true')
      .getRawOne();

    return Number(result.sum);
  }

  async getTotalRewardsSentToDate() {
    const result = await this.AffiliateBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .getRawOne();
    return Number(result.sum);
  }

  async getRecentRewardsActivities() {
    return await this.AffiliateBonusRepository.createQueryBuilder('t_ab')
      .select([
        't_u.name AS name',
        `CASE WHEN t_ab.game_blockchain_transaction_id IS NOT NULL
          THEN t_bs.logo
          ELSE t_bs_1.logo
          END AS logo`,
        't_ab.amount_usd AS amount_usd',
      ])
      .innerJoin(User, 't_u', 't_u.id = t_ab.user_id')
      .innerJoin(
        GameBlockchainTransaction,
        't_gbt',
        't_gbt.id = t_ab.game_blockchain_transaction_id',
      )
      .leftJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_gbt.currency_id')
      .leftJoin(BlockchainSymbol, 't_bs_1', 't_bs_1.id = t_ab.symbol_id')
      .orderBy('t_ab.created_at', 'DESC')
      .limit(4)
      .getRawMany();
  }

  async getBonusPool(user_id: string) {
    const result = await this.UserReposity.findOne({
      select: ['bonus_pool'],
      where: { id: user_id },
    });

    return Number(result.bonus_pool);
  }

  async addCommissionBonusByUser(
    user: User,
    friend: User,
    currency_type: ENUM_CURRENCY,
    game_transaction: GameBlockchainTransaction | GameStripeTransaction,
    currency: BlockchainSymbol | FiatCurrency,
  ) {
    try {
      const amount_usd = (game_transaction.amount_usd / 10000) * 15;
      const symbol = await this.BlockchainSymbolRepository.findOneBy({
        symbol: 'USDT',
      });
      const amount = amount_usd / symbol.price;
      const wallet_balance = await this.walletService.getUSDTBalance(user.id);
      //  Add a new referral bonus history
      const newAffiliateBonusConfig: DeepPartial<AffiliateBonus> = {
        user,
        friend,
        type: ENUM_AFFILIATE_BONUS.COMMISSION,
        amount,
        amount_usd,
        game_blockchain_transaction:
          currency_type === ENUM_CURRENCY.Crypto ? game_transaction : null,
        game_stripe_transaction:
          currency_type === ENUM_CURRENCY.Fiat ? game_transaction : null,
        symbol,
        wallet_balance,
        wallet_balance_usd: wallet_balance / symbol.price,
      };

      await this.AffiliateBonusRepository.save(
        this.AffiliateBonusRepository.create(newAffiliateBonusConfig),
      );

      //  Broadcast commission rewards
      this.messageGateway.broadcastRewards(
        JSON.stringify({
          user_name: user.name,
          symbol_logo: currency.logo,
          amount_usd,
        }),
      );

      // console.log(new Date(), 'Referral Bonus', amount_usd);
    } catch (err) {
      console.log(new Date(), 'Add referral bonus', err.message);
    }
  }

  async addReferralBonus(user: User, friend: User, level: number) {
    try {
      const rule = await this.settingService.getReferralRewardsRule();
      const amount_usd = rule[level];

      const usdt_price = await this.BlockchainSymbolRepository.findOneBy({
        symbol: 'USDT',
      });
      const amount = amount_usd / usdt_price.price;

      //  Add a new referral bonus history
      const symbol = await this.BlockchainSymbolRepository.findOneBy({
        symbol: 'USDT',
      });

      const wallet_balance = await this.walletService.getUSDTBalance(user.id);

      const newAffiliateBonusConfig: DeepPartial<AffiliateBonus> = {
        user,
        friend,
        type: ENUM_AFFILIATE_BONUS.REFERRAL,
        amount,
        amount_usd,
        symbol,
        friend_level: level,
        wallet_balance,
        wallet_balance_usd: wallet_balance / symbol.price,
      };

      await this.AffiliateBonusRepository.save(
        this.AffiliateBonusRepository.create(newAffiliateBonusConfig),
      );

      //  Broadcast commission rewards
      this.messageGateway.broadcastRewards(
        JSON.stringify({
          user_name: user.name,
          symbol_logo: symbol.logo,
          amount_usd,
        }),
      );

      // console.log(new Date(), 'Commission Bonus', amount_usd);
    } catch (err) {
      console.log(new Date(), 'Add commission bonus', err.message);
    }
  }

  async revertReferralBonus(
    user_id: string,
    currency_type: ENUM_CURRENCY,
    game_transaction_id: string,
  ) {
    const user = await this.UserReposity.findOne({
      where: { id: user_id },
      relations: ['referral_user'],
    });
    if (user.referral_user && user.referral_user.id) {
      currency_type === ENUM_CURRENCY.Crypto
        ? await this.AffiliateBonusRepository.createQueryBuilder()
            .update(AffiliateBonus)
            .set({ game_blockchain_transaction: null })
            .where('user_id = :user_id', { user_id: user.referral_user.id })
            .andWhere('game_blockchain_transaction_id = :game_transaction_id', {
              game_transaction_id,
            })
            .execute()
        : await this.AffiliateBonusRepository.createQueryBuilder()
            .update(AffiliateBonus)
            .set({ game_stripe_transaction: null })
            .where('user_id = :user_id', { user_id: user.referral_user.id })
            .andWhere('game_stripe_transaction_id = :game_transaction_id', {
              game_transaction_id,
            })
            .execute();
    }
  }

  async revertCommissionBonus() {}

  async getRewardsActivities(user_id: string) {
    const referral_activities =
      await this.AffiliateBonusRepository.createQueryBuilder()
        .select([
          `
          CASE WHEN type = ${ENUM_AFFILIATE_BONUS.REFERRAL}
          THEN 'referral'
          ELSE 'commission'
          END AS type
        `,
          'amount_usd',
        ])
        .where('user_id = :user_id', { user_id })
        .orderBy('created_at', 'DESC')
        .limit(5)
        .getRawMany();

    return referral_activities;
  }

  async getTotalFriendsCount(user: User) {
    return await this.UserReposity.createQueryBuilder()
      .where('referral_user_id = :user_id', { user_id: user.id })
      .getCount();
  }

  async getFriends(
    user: User,
    user_name: string | undefined,
    user_id: string | undefined,
    registration_start_date: number | undefined,
    registration_end_date: number | undefined,
    wager_start_date: number | undefined,
    wager_end_date: number | undefined,
    page: number,
    page_size: number,
  ) {
    user_name = user_name === undefined ? '' : user_name;
    user_id = user_id === undefined ? '' : user_id;
    registration_start_date =
      registration_start_date === undefined ? 0 : registration_start_date;
    registration_end_date =
      registration_end_date === undefined
        ? Math.floor(Date.now() / 1000)
        : registration_end_date;
    wager_start_date = wager_start_date === undefined ? 0 : wager_start_date;
    wager_end_date =
      wager_end_date === undefined
        ? Math.floor(Date.now() / 1000)
        : wager_end_date;

    const result = await this.UserReposity.createQueryBuilder('t_u')
      .select('COUNT(*) AS total_count')
      .where('t_u.referral_user_id = :user_id', { user_id: user.id })
      .getRawOne();

    const total_count = Number(result.total_count);
    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page === 0 ? 1 : total_page;

    if (total_page < page) {
      throw new HttpException(
        exceedTotalPageNumberError.error,
        exceedTotalPageNumberError.code,
      );
    }

    return {
      total_count,
      total_page,
      page,
      page_size,
      friends: await this.UserReposity.createQueryBuilder('t_u')
        .select([
          't_u.name AS user_name',
          't_u.id AS user_id',
          't_u.created_at AS user_registered_date',
          'COALESCE(SUM(t_ab.amount_usd), 0) AS total_commission_rewards_amount_usd',
          'COALESCE(SUM(t_gbt.amount_usd), 0) AS total_wager_amount_usd',
        ])
        .leftJoin(
          AffiliateBonus,
          't_ab',
          `t_ab.user_id = '${user.id}' AND t_ab.friend_id = t_u.id AND t_ab.type = ${ENUM_AFFILIATE_BONUS.COMMISSION}`,
        )
        .leftJoin(
          GameBlockchainTransaction,
          't_gbt',
          `t_gbt.id = t_ab.game_blockchain_transaction_id AND EXTRACT(EPOCH FROM t_gbt.created_at) >= ${wager_start_date} AND EXTRACT(EPOCH FROM t_gbt.created_at) <= ${wager_end_date}`,
        )
        .where('t_u.referral_user_id = :user_id', { user_id: user.id })
        .andWhere(`t_u.name LIKE '%${user_name}%'`)
        .andWhere(`CAST(t_u.id AS text) LIKE '%${user_id}%'`)
        .andWhere(
          'EXTRACT(EPOCH FROM t_u.created_at) >= :registration_start_date',
          {
            registration_start_date,
          },
        )
        .andWhere(
          'EXTRACT(EPOCH FROM t_u.created_at) <= :registration_end_date',
          {
            registration_end_date,
          },
        )
        .groupBy('t_u.id')
        .addGroupBy('t_u.name')
        .addGroupBy('t_u.created_at')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .orderBy('t_u.created_at', 'DESC')
        .getRawMany(),
    };
  }

  async getCommissionRewards(user: User) {
    let result = await this.AffiliateBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0) AS sum')
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('type = :type', { type: ENUM_AFFILIATE_BONUS.COMMISSION })
      .andWhere('claim_status = true')
      .getRawOne();

    const total_commission_rewards_received_amount_usd = Number(result.sum);

    result = await this.AffiliateBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0) AS sum')
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('type = :type', { type: ENUM_AFFILIATE_BONUS.COMMISSION })
      .andWhere('claim_status = false')
      .getRawOne();

    const commission_rewards_available_amount_usd = Number(result.sum);

    return {
      total_commission_rewards_received_amount_usd,
      commission_rewards_available_amount_usd,
    };
  }

  async getCommissionHistory(user: User, page: number, page_size: number) {
    const result = await this.AffiliateBonusRepository.createQueryBuilder()
      .select('COUNT(*) AS total_count')
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('type = :type', { type: ENUM_AFFILIATE_BONUS.COMMISSION })
      .getRawOne();

    const total_count = Number(result.total_count);
    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page === 0 ? 1 : total_page;

    if (total_page < page) {
      throw new HttpException(
        exceedTotalPageNumberError.error,
        exceedTotalPageNumberError.code,
      );
    }

    return {
      total_count,
      total_page,
      page,
      page_size,
      rewards: await this.AffiliateBonusRepository.createQueryBuilder('t_ab')
        .select([
          't_bs.symbol as currency_name',
          't_bs.logo as currency_logo',
          't_ab.amount as amount',
          't_ab.created_at as time',
          't_ab.claim_status as status',
        ])
        .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_ab.symbol_id')
        .orderBy('t_ab.created_at', 'DESC')
        .where('t_ab.user_id = :user_id', { user_id: user.id })
        .andWhere('type = :type', { type: ENUM_AFFILIATE_BONUS.COMMISSION })
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany(),
    };
  }

  async getReferralHistory(
    user: User,
    user_name: string | undefined,
    registration_start_date: number | undefined,
    registration_end_date: number | undefined,
    page: number,
    page_size: number,
  ) {
    user_name = user_name === undefined ? '' : user_name;
    registration_start_date =
      registration_start_date === undefined ? 0 : registration_start_date;
    registration_end_date =
      registration_end_date === undefined
        ? Math.floor(Date.now() / 1000)
        : registration_end_date;

    const result = await this.AffiliateBonusRepository.createQueryBuilder(
      't_ab',
    )
      .select('COUNT(*) as total_count')
      .innerJoin(User, 't_u', 't_u.id = t_ab.friend_id')
      .where('t_ab.type = :type', { type: ENUM_AFFILIATE_BONUS.REFERRAL })
      .andWhere('claim_status = true')
      .andWhere(`t_u.name LIKE '%${user_name}%'`)
      .andWhere(
        'EXTRACT(EPOCH FROM t_u.created_at) >= :registration_start_date',
        {
          registration_start_date,
        },
      )
      .andWhere(
        'EXTRACT(EPOCH FROM t_u.created_at) <= :registration_end_date',
        {
          registration_end_date,
        },
      )
      .getRawOne();

    const total_count = Number(result.total_count);
    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page === 0 ? 1 : total_page;

    if (total_page < page) {
      throw new HttpException(
        exceedTotalPageNumberError.error,
        exceedTotalPageNumberError.code,
      );
    }

    return {
      total_count,
      total_page,
      page,
      page_size,
      rewards: await this.UserReposity.createQueryBuilder('t_u')
        .select([
          't_u.name as user_name',
          't_u.vip_level as vip_level',
          'COALESCE(SUM(t_ab.amount), 0) as earned_me',
          't_u.created_at as registered_at',
        ])
        .leftJoin(
          AffiliateBonus,
          't_ab',
          `t_u.id = t_ab.friend_id AND t_ab.type = ${ENUM_AFFILIATE_BONUS.REFERRAL} AND t_ab.claim_status = true`,
        )
        .where('t_u.referral_user_id = :user_id', { user_id: user.id })
        .andWhere(`t_u.name LIKE '%${user_name}%'`)
        .andWhere(
          'EXTRACT(EPOCH FROM t_u.created_at) >= :registration_start_date',
          {
            registration_start_date,
          },
        )
        .andWhere(
          'EXTRACT(EPOCH FROM t_u.created_at) <= :registration_end_date',
          {
            registration_end_date,
          },
        )
        .groupBy('t_u.name')
        .addGroupBy('t_u.referral_code')
        .addGroupBy('t_u.created_at')
        .addGroupBy('t_u.vip_level')
        .orderBy('t_u.created_at', 'DESC')
        .getRawMany(),
    };
  }

  async getReferralRewards(user: User) {
    let result = await this.AffiliateBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0) AS sum')
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('type = :type', { type: ENUM_AFFILIATE_BONUS.REFERRAL })
      .andWhere('claim_status = true')
      .getRawOne();

    const total_referral_rewards_received_amount_usd = Number(result.sum);

    result = await this.AffiliateBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0) AS sum')
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('type = :type', { type: ENUM_AFFILIATE_BONUS.REFERRAL })
      .andWhere('claim_status = false')
      .getRawOne();

    const referral_rewards_available_amount_usd = Number(result.sum);

    return {
      total_referral_rewards_received_amount_usd,
      referral_rewards_available_amount_usd,
    };
  }

  async withdrawRewards(user: User) {
    const bonus_pool = await this.getBonusPool(user.id);

    if (!bonus_pool) {
      throw new HttpException(
        isNotEnoughBonusPoolError.error,
        isNotEnoughBonusPoolError.code,
      );
    }

    let result = await this.AffiliateBonusRepository.query(`
      SELECT SUM(amount_usd) as sum
      FROM affiliate_bonus
      WHERE id IN (
          SELECT id
          FROM (
              SELECT id, SUM(amount_usd) OVER (ORDER BY created_at) AS running_total
              FROM affiliate_bonus
              WHERE user_id = '${user.id}' AND claim_status = false
          ) AS subquery
          WHERE running_total <= ${bonus_pool}
      )
    `);

    const available_rewards_amount_usd = Number(result[0].sum);
    if (!available_rewards_amount_usd) {
      throw new HttpException(
        isEmptyAvailableAffiliateRewardsError.error,
        isEmptyAvailableAffiliateRewardsError.code,
      );
    }

    result = await this.AffiliateBonusRepository.query(`
      SELECT id
      FROM (
          SELECT id, SUM(amount_usd) OVER (ORDER BY created_at) AS running_total
          FROM affiliate_bonus
          WHERE user_id = '${user.id}' AND claim_status = false
      ) AS subquery
      WHERE running_total <= ${bonus_pool}
    `);

    for (const { id } of result) {
      this.AffiliateBonusRepository.createQueryBuilder()
        .update(AffiliateBonus)
        .set({ claim_status: true })
        .where('id = :id', { id })
        .execute();
    }

    const USDT = await this.BlockchainSymbolRepository.findOneBy({
      symbol: 'USDT',
    });

    const available_rewards_amount = available_rewards_amount_usd / USDT.price;

    const { balance, balance_usd } = await this.walletService.addBonusToWallet(
      user.id,
      available_rewards_amount,
    );

    await this.WithdrawAffiliateBonusRepository.save(
      this.WithdrawAffiliateBonusRepository.create({
        user,
        amount: available_rewards_amount,
        amount_usd: available_rewards_amount_usd,
        wallet_balance: balance,
        wallet_balance_usd: balance_usd,
        symbol: USDT,
      }),
    );

    return {
      available_rewards_amount_usd,
      available_rewards_amount,
    };
  }

  async getReferralRewardsRule() {
    const rule = await this.settingService.getReferralRewardsRule();

    const levels = Object.keys(rule);

    const result = await this.VipLevelRepository.createQueryBuilder()
      .select(`json_object_agg(level, from_xp) as vips`)
      .where(`level IN (${levels.join(',')})`)
      .getRawOne();

    const { vips } = result;

    const rules = [];

    for (const level of levels) {
      rules.push({ level, xp: vips[level], earned: rule[level] });
    }

    return rules;
  }

  async getRewardHistory() {
    return await this.AffiliateBonusRepository.createQueryBuilder('t_ab')
      .select([
        't_u.name as user_name',
        't_bs.logo as symbol_logo',
        'TRUNC(t_ab.amount_usd, 8) as amount_usd',
      ])
      .innerJoin(User, 't_u', 't_u.id = t_ab.user_id')
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_ab.symbol_id')
      .orderBy('t_ab.created_at', 'DESC')
      .limit(4)
      .getRawMany();
  }
}
