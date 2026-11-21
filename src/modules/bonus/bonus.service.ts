import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  MIN_MONTHLY_CASHBACK_WAGER_AMOUNT,
  MIN_WEEKLY_CASHBACK_WAGER_AMOUNT,
} from 'constant';
import {
  Airdrop,
  AirdropBonus,
  BlockchainCryptoBalance,
  BlockchainDepositTransaction,
  BlockchainSymbol,
  CashbackBonus,
  DepositBonus,
  GameBlockchainTransaction,
  LevelUpBonus,
  QuestBonus,
  SpinBonus,
  User,
  WagerContestBonus,
} from 'entities';
import {
  ENUM_BLOCKCHAIN_DEPOSIT_STATUS,
  ENUM_BONUS_CLAIM,
  ENUM_BONUS_TYPE,
  ENUM_CASHBACK_BONUS,
  ENUM_CURRENCY,
  ENUM_GAME_TRANSACTION_ACTION,
  ENUM_QUEST_CATEGORY,
  ENUM_QUEST_TYPE,
  ENUM_SPIN_BONUS,
} from 'enums';
import {
  exceedAirdropTimesError,
  exceedTotalPageNumberError,
  isClaimBonusError,
  isExistAirdropCodeError,
  isExistBonusError,
  isExistBonusTypeError,
  isFinishedQuestToClaimError,
  isNotEnoughBonusPoolError,
  redeemedAirdropBonusError,
} from 'errors';
import { SpinService } from 'modules/spin/spin.service';
import { VipService } from 'modules/vip/vip.service';
import { WalletService } from 'modules/wallet/wallet.service';
import { WalletWithdrawService } from 'modules/wallet/wallet-withdraw.service';
import { DeepPartial, Repository } from 'typeorm';
import {
  cashbackMonthlyTimes,
  cashbackWeeklyTimes,
  dailyQuestTime,
  dailySpinTimes,
  fixedNumber,
  goalWagerAmountUsdForSpin,
  weeklyQuestTime,
} from 'utils';

@Injectable()
export class BonusService {
  constructor(
    private readonly vipService: VipService,
    private readonly walletService: WalletService,
    private readonly walletWithdrawService: WalletWithdrawService,
    private readonly spinService: SpinService,
    @InjectRepository(BlockchainDepositTransaction)
    private BlockchainDepositTransactionRepository: Repository<BlockchainDepositTransaction>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(BlockchainCryptoBalance)
    private BlockchainCryptoBalanceRepository: Repository<BlockchainCryptoBalance>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
    @InjectRepository(CashbackBonus)
    private CashbackBonusRepository: Repository<CashbackBonus>,
    @InjectRepository(DepositBonus)
    private DepositBonusRepository: Repository<DepositBonus>,
    @InjectRepository(LevelUpBonus)
    private LevelUpBonusRepository: Repository<LevelUpBonus>,
    @InjectRepository(WagerContestBonus)
    private WagerContestBonusRepository: Repository<WagerContestBonus>,
    @InjectRepository(SpinBonus)
    private SpinBonusRepository: Repository<SpinBonus>,
    @InjectRepository(QuestBonus)
    private QuestBonusRepository: Repository<QuestBonus>,
    @InjectRepository(Airdrop)
    private AirdropRepository: Repository<Airdrop>,
    @InjectRepository(AirdropBonus)
    private AirdropBonusRepository: Repository<AirdropBonus>,
  ) {}

  async getDepositBonusTimesForThisWeekByUserId(user_id: string) {
    const result =
      await this.BlockchainDepositTransactionRepository.createQueryBuilder()
        .select('COUNT(*) as times')
        .where(
          'EXTRACT(WEEK FROM created_at) = EXTRACT(WEEK FROM CURRENT_DATE)',
        )
        .andWhere('user_id = :user_id', { user_id })
        .andWhere('status = :status', {
          status: ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete,
        })
        .getRawOne();
    return Number(result.times);
  }

  async getQuestDetailsByUserId(user_id: string) {
    const dailyTimes = dailyQuestTime();
    const weeklyTimes = weeklyQuestTime();

    let result = await this.QuestBonusRepository.createQueryBuilder()
      .select('COUNT(*) AS count')
      .where(`user_id = '${user_id}'`)
      .andWhere(`type = ${ENUM_QUEST_TYPE.Daily}`)
      .andWhere(`EXTRACT(EPOCH FROM started_at) = ${dailyTimes.startTime}`)
      .andWhere(`EXTRACT(EPOCH FROM ended_at) = ${dailyTimes.endTime}`)
      .getRawOne();

    const daily_goal_count = Number(result.count);

    result = await this.QuestBonusRepository.createQueryBuilder()
      .select('COUNT(*) AS count')
      .where(`user_id = '${user_id}'`)
      .andWhere(`type = ${ENUM_QUEST_TYPE.Daily}`)
      .andWhere(`EXTRACT(EPOCH FROM started_at) = ${dailyTimes.startTime}`)
      .andWhere(`EXTRACT(EPOCH FROM ended_at) = ${dailyTimes.endTime}`)
      .andWhere('status = true')
      .getRawOne();

    const daily_complete_count = Number(result.count);

    result = await this.QuestBonusRepository.createQueryBuilder()
      .select('COUNT(*) AS count')
      .where(`user_id = '${user_id}'`)
      .andWhere(`type = ${ENUM_QUEST_TYPE.Weekly}`)
      .andWhere(`EXTRACT(EPOCH FROM started_at) = ${weeklyTimes.startTime}`)
      .andWhere(`EXTRACT(EPOCH FROM ended_at) = ${weeklyTimes.endTime}`)
      .getRawOne();

    const weekly_goal_count = Number(result.count);

    result = await this.QuestBonusRepository.createQueryBuilder()
      .select('COUNT(*) AS count')
      .where(`user_id = '${user_id}'`)
      .andWhere(`type = ${ENUM_QUEST_TYPE.Weekly}`)
      .andWhere(`EXTRACT(EPOCH FROM started_at) = ${weeklyTimes.startTime}`)
      .andWhere(`EXTRACT(EPOCH FROM ended_at) = ${weeklyTimes.endTime}`)
      .andWhere('status = true')
      .getRawOne();
    const weekly_complete_count = Number(result.count);

    return {
      daily_complete_count,
      weekly_complete_count,
      daily_goal_count,
      weekly_goal_count,
    };
  }

  async getTotalWagerAmountUsdByUserIdForLuckySpinByUserId(
    user_id: string,
    start_time: number,
  ) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('COALESCE(SUM(amount_usd), 0)', 'sum')
        .where(
          `user_id = '${user_id}' AND action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
        )
        .andWhere(`created_at >= TO_TIMESTAMP(${start_time})`)
        .getRawOne();

    return Number(result.sum);
  }

  async getTotalWagerAmountUsdByUserId(
    user_id: string,
    start_time: number,
    end_time: number,
  ) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('TRUNC(COALESCE(SUM(amount_usd), 0), 2)', 'sum')
        .where(
          `user_id = '${user_id}' AND action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
        )
        .andWhere(`created_at >= TO_TIMESTAMP(:start_time)`, { start_time })
        .andWhere(`created_at < TO_TIMESTAMP(:end_time)`, { end_time })
        .getRawOne();

    return Number(result.sum);
  }

  async getLuckySpinDetailsByUserId(user_id: string) {
    const user = await this.UserRepository.findOneBy({ id: user_id });
    const { startTime, currentTime, endTime } = dailySpinTimes();
    const current_wager_amount_usd =
      await this.getTotalWagerAmountUsdByUserIdForLuckySpinByUserId(
        user_id,
        startTime,
      );
    const required_wager_amount_usd = goalWagerAmountUsdForSpin(user.vip_level);
    return {
      start_time: startTime,
      end_time: endTime,
      currentTime: currentTime,
      available_count: user.total_spin_count,
      current_wager_amount_usd:
        current_wager_amount_usd > required_wager_amount_usd
          ? required_wager_amount_usd
          : current_wager_amount_usd,
      required_wager_amount_usd,
      reach_vip_level:
        Number(user.vip_level) + 1 >= 8 ? Number(user.vip_level) + 1 : 8,
      logs: await this.spinService.getSpinHistoryByUserId(user.id),
    };
  }

  async getCashbackDetailsByUserId(user_id: string) {
    const weekly_times = cashbackWeeklyTimes();
    const monthly_times = cashbackMonthlyTimes();
    const current_weekly_cashback_amount_usd =
      await this.getTotalWagerAmountUsdByUserId(
        user_id,
        weekly_times.startTime,
        weekly_times.endTime,
      );
    const current_monthly_cashback_amount_usd =
      await this.getTotalWagerAmountUsdByUserId(
        user_id,
        monthly_times.startTime,
        monthly_times.endTime,
      );
    const last_weekly_cashback =
      await this.CashbackBonusRepository.createQueryBuilder()
        .select('TRUNC(amount_usd, 2) AS amount_usd')
        .where('user_id = :user_id', { user_id })
        .andWhere('type = :type', { type: ENUM_CASHBACK_BONUS.Weekly })
        .orderBy('created_at', 'DESC')
        .limit(1)
        .getRawOne();

    const last_monthly_cashback =
      await this.CashbackBonusRepository.createQueryBuilder()
        .select('TRUNC(amount_usd, 2) AS amount_usd')
        .where('user_id = :user_id', { user_id })
        .andWhere('type = :type', { type: ENUM_CASHBACK_BONUS.Monthly })
        .orderBy('created_at', 'DESC')
        .limit(1)
        .getRawOne();

    return {
      weekly: {
        ...weekly_times,
        current_wager_amount_usd: current_weekly_cashback_amount_usd,
        required_wager_amount_usd: MIN_WEEKLY_CASHBACK_WAGER_AMOUNT,
        last_bonus_amount_usd: last_weekly_cashback
          ? last_weekly_cashback.amount_usd
          : null,
      },
      monthly: {
        ...monthly_times,
        current_wager_amount_usd: current_monthly_cashback_amount_usd,
        required_wager_amount_usd: MIN_MONTHLY_CASHBACK_WAGER_AMOUNT,
        last_bonus_amount_usd: last_monthly_cashback
          ? last_monthly_cashback.amount_usd
          : null,
      },
    };
  }

  async getGeneralBonusByUserId(user_id: string) {
    const [deposit_times, quest, spin, cashback] = await Promise.all([
      await this.getDepositBonusTimesForThisWeekByUserId(user_id),
      await this.getQuestDetailsByUserId(user_id),
      await this.getLuckySpinDetailsByUserId(user_id),
      await this.getCashbackDetailsByUserId(user_id),
    ]);

    return {
      deposit: {
        deposit_times,
      },
      quest,
      spin,
      cashback,
    };
  }

  async getTotalSpecialBonusByUserId(user_id: string) {
    const result = await this.AirdropBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where('user_id = :user_id', { user_id })
      .andWhere('claim_status = true')
      .getRawOne();

    return fixedNumber(result.sum, 4);
  }

  async getSpecialBonusByUserId(user_id: string) {
    return await this.AirdropBonusRepository.createQueryBuilder()
      .select([
        'ROUND(amount_usd, 4) AS amount_usd',
        'updated_at AS time',
        `'${ENUM_BONUS_TYPE.AIRDROP}' AS type`,
      ])
      .where('user_id = :user_id', { user_id })
      .andWhere('claim_status = true')
      .getRawMany();
  }

  async getBonusStatisticsByUserId(user_id: string) {
    const [
      general_bonus,
      vip_bonus,
      special_bonus,
      total_special_bonus_usd,
      total_vip_bonus_usd,
      total_general_bonus_usd,
    ] = await Promise.all([
      await this.getGeneralBonusByUserId(user_id),
      await this.vipService.getVIPBonusByUserId(user_id),
      await this.getSpecialBonusByUserId(user_id),
      await this.getTotalSpecialBonusByUserId(user_id),
      await this.vipService.getTotalVipBonusByUserId(user_id),
      await this.getTotalGeneralBonusByUserId(user_id),
    ]);

    const total_bonus_claimed_usd =
      total_general_bonus_usd + total_vip_bonus_usd + total_special_bonus_usd;

    return {
      total_bonus_claimed_usd,
      total_vip_bonus_usd,
      total_special_bonus_usd,
      total_general_bonus_usd,
      general_bonus,
      vip_bonus,
      special_bonus,
    };
  }

  async getUSDTBonusHistoryByUserId(
    user_id: string,
    page: number,
    page_size: number,
  ) {
    const result = await this.LevelUpBonusRepository.query(`
      SELECT
        COUNT(*) AS total_count
      FROM (
        (
          SELECT
           id
          FROM "deposit_bonus"
          WHERE user_id = '${user_id}'
        )
        UNION
        (
          SELECT
           id
          FROM "claim_bonus"
          WHERE user_id = '${user_id}'
        )
        UNION
        (
          SELECT
           id
          FROM "level_up_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT
           id
          FROM "cashback_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT
           id
          FROM "wager_contest_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT
           id
          FROM "spin_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT
           id
          FROM "quest_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT
           id
          FROM "airdrop_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
      ) AS combined_table
    `);

    const total_count = Number(result[0].total_count);
    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page === 0 ? 1 : total_page;

    if (total_page < page) {
      throw new HttpException(
        exceedTotalPageNumberError.error,
        exceedTotalPageNumberError.code,
      );
    }

    const q_list = `
      SELECT *
      FROM (
        (
          SELECT
            t_db.created_at AS date,
            'Deposit Bonus' AS type,
            t_db.amount AS amount,
            t_db.amount_usd AS amount_usd,
            t_bs.symbol AS symbol_name,
            t_bs.logo As symbol_logo
          FROM "deposit_bonus" AS "t_db"
          LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
          WHERE user_id = '${user_id}'
        )
        UNION
        (
          SELECT
            t_cb.created_at AS date,
            'Claimed' AS type,
            t_cb.amount * -1 AS amount,
            t_cb.amount_usd * -1 AS amount_usd,
            t_bs.symbol AS symbol_name,
            t_bs.logo As symbol_logo
          FROM "claim_bonus" AS "t_cb"
          LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
          WHERE user_id = '${user_id}'
        )
        UNION
        (
          SELECT
            t_lub.updated_at AS date,
            'Level Up' AS type,
            t_lub.amount * -1 as amount,
            t_lub.amount_usd * -1 as amount_usd,
            t_bs.symbol AS symbol_name,
            t_bs.logo As symbol_logo
          FROM "level_up_bonus" AS "t_lub"
          LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT
            t_cb.updated_at AS date,
            CASE t_cb.type
              WHEN ${ENUM_CASHBACK_BONUS.Weekly} THEN 'Weekly Cashback'
              WHEN ${ENUM_CASHBACK_BONUS.Monthly} THEN 'Monthly Cashback'
            END AS type,
            t_cb.amount * -1 AS amount,
            t_cb.amount_usd * -1 AS amount_usd,
            t_bs.symbol AS symbol_name,
            t_bs.logo As symbol_logo
          FROM "cashback_bonus" AS "t_cb"
          LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT
            t_wcb.updated_at AS date,
            'Wager Contest' AS type,
            t_wcb.amount * -1 AS amount,
            t_wcb.amount_usd * -1 AS amount_usd,
            t_bs.symbol AS symbol_name,
            t_bs.logo As symbol_logo
          FROM "wager_contest_bonus" AS "t_wcb"
          LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT
            t_sb.updated_at AS date,
            CASE t_sb.type
              WHEN ${ENUM_SPIN_BONUS.Lucky} THEN 'Lucky Spin'
              WHEN ${ENUM_SPIN_BONUS.Super} THEN 'Super Spin'
              WHEN ${ENUM_SPIN_BONUS.Mega} THEN 'Mega Spin'
            END AS type,
            t_sb.amount * -1 AS amount,
            t_sb.amount_usd * -1 AS amount_usd,
            t_bs.symbol AS symbol_name,
            t_bs.logo AS symbol_logo
          FROM "spin_bonus" AS "t_sb"
          LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_sb.symbol_id = t_bs.id
          WHERE t_sb.user_id = '${user_id}' AND t_sb.claim_status = true
        )
        UNION
        (
          SELECT
          t_qb.updated_at AS date,
            CASE t_qb.type
              WHEN ${ENUM_QUEST_TYPE.Daily} THEN 'Daily Quest'
              WHEN ${ENUM_QUEST_TYPE.Weekly} THEN 'Weekly Quest'
            END AS type,
            t_qb.amount * -1 AS amount,
            t_qb.amount_usd * -1 AS amount_usd,
            t_bs.symbol AS symbol_name,
            t_bs.logo AS symbol_logo
          FROM "quest_bonus" AS "t_qb"
          LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT
          t_ab.updated_at AS date,
            'Airdrop' AS type,
            t_ab.amount * -1 AS amount,
            t_ab.amount_usd * -1 AS amount_usd,
            t_bs.symbol AS symbol_name,
            t_bs.logo AS symbol_logo
          FROM "airdrop_bonus" AS "t_ab"
          LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_ab.symbol_id
          WHERE user_id = '${user_id}' AND claim_status = true
        )
      ) AS t
      ORDER BY t.date DESC
      OFFSET ${(page - 1) * page_size}
      LIMIT ${page_size}
    `;

    return {
      total_count,
      total_page,
      page,
      page_size,
      bonuses: await this.LevelUpBonusRepository.query(q_list),
    };
  }

  async getTotalWeeklyCashbackAmountUsd(user_id: string) {
    const result = await this.CashbackBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where('user_id = :user_id', { user_id })
      .andWhere('type = :type', { type: ENUM_CASHBACK_BONUS.Weekly })
      .getRawOne();

    return result.sum;
  }

  async getTotalMonthlyCashbackAmountUsd(user_id: string) {
    const result = await this.CashbackBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where('user_id = :user_id', { user_id })
      .andWhere('type = :type', { type: ENUM_CASHBACK_BONUS.Monthly })
      .getRawOne();

    return result.sum;
  }

  async getTotalLevelUpBonusByUserIdAmountUsd(user_id: string) {
    const result = await this.LevelUpBonusRepository.createQueryBuilder('')
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where('user_id = :user_id', {
        user_id,
      })
      .andWhere('claim_status = true')
      .getRawOne();

    return result.sum;
  }

  async getTotalSpinBonusAmountUsd(user_id: string) {
    const result = await this.SpinBonusRepository.createQueryBuilder('')
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where('user_id = :user_id', {
        user_id,
      })
      .andWhere('claim_status = true')
      .getRawOne();

    return result.sum;
  }

  async getTotalQuestBonusAmountUsd(user_id: string) {
    const result = await this.QuestBonusRepository.createQueryBuilder('')
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where('user_id = :user_id', {
        user_id,
      })
      .andWhere('claim_status = true')
      .getRawOne();

    return result.sum;
  }

  async getTotalDepositBonusAmountUsd(user_id: string) {
    const user = await this.UserRepository.findOneBy({ id: user_id });
    return user.bonus_pool;
  }

  async getBonusTransactions(user: User, category: ENUM_BONUS_TYPE) {
    let transactions = [];

    if (category === ENUM_BONUS_TYPE.All) {
      transactions = await this.UserRepository.query(`
        SELECT
          bonus_type,
          amount,
          amount_usd,
          time,
          symbol_name,
          symbol_logo
        FROM (
          (
            SELECT
              'Deposit' AS bonus_type,
              t_db.amount AS amount,
              t_db.amount_usd AS amount_usd,
              t_db.created_at AS time,
              t_bs.symbol AS symbol_name,
              t_bs.logo AS symbol_logo
            FROM "deposit_bonus" AS "t_db"
            LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_db.user_id = '${user.id}' AND t_db.created_at >= current_date - INTERVAL '60 days'
          )
          UNION
          (
            SELECT
              'Claimed' AS bonus_type,
              t_cb.amount AS amount,
              t_cb.amount_usd AS amount_usd,
              t_cb.created_at AS time,
              t_bs.symbol AS symbol_name,
              t_bs.logo AS symbol_logo
            FROM "claim_bonus" AS t_cb
            LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_cb.user_id = '${user.id}' AND t_cb.created_at >= current_date - INTERVAL '60 days'
          )
          UNION
          (
            SELECT
              'Level Up' AS bonus_type,
              t_lub.amount AS amount,
              t_lub.amount_usd AS amount_usd,
              t_lub.updated_at AS time,
              t_bs.symbol AS symbol_name,
              t_bs.logo AS symbol_logo
            FROM "level_up_bonus" AS t_lub
            LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_lub.user_id = '${user.id}' AND t_lub.updated_at >= current_date - INTERVAL '60 days' AND t_lub.claim_status = true
          )
          UNION
          (
            SELECT
              'Weekly Cashback' AS bonus_type,
              t_cb.amount AS amount,
              t_cb.amount_usd AS amount_usd,
              t_cb.updated_at AS time,
              t_bs.symbol AS symbol_name,
              t_bs.logo AS symbol_logo
            FROM "cashback_bonus" AS "t_cb"
            LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_cb.user_id = '${user.id}' AND t_cb.updated_at >= current_date - INTERVAL '60 days' AND t_cb.type = ${ENUM_CASHBACK_BONUS.Weekly} AND t_cb.claim_status = true
          )
          UNION
          (
            SELECT
              'Monthly Cashback' AS bonus_type,
              t_cb.amount AS amount,
              t_cb.amount_usd AS amount_usd,
              t_cb.updated_at AS time,
              t_bs.symbol AS symbol_name,
              t_bs.logo AS symbol_logo
            FROM "cashback_bonus" AS "t_cb"
            LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_cb.user_id = '${user.id}' AND t_cb.updated_at >= current_date - INTERVAL '60 days' AND t_cb.type = ${ENUM_CASHBACK_BONUS.Monthly} AND t_cb.claim_status = true
          )
          UNION
          (
            SELECT
              CASE t_sb.type
                WHEN ${ENUM_SPIN_BONUS.Lucky} THEN 'LUCKY SPIN'
                WHEN ${ENUM_SPIN_BONUS.Super} THEN 'SUPER SPIN'
                WHEN ${ENUM_SPIN_BONUS.Mega} THEN 'MEGA SPIN'
              END AS bonus_type,
              t_sb.amount AS amount,
              t_sb.amount_usd AS amount_usd,
              t_sb.updated_at AS time,
              t_bs.symbol AS symbol_name,
              t_bs.logo AS symbol_logo
            FROM "spin_bonus" AS "t_sb"
            LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_sb.symbol_id
            WHERE t_sb.user_id = '${user.id}' AND t_sb.updated_at >= current_date - INTERVAL '60 days' AND t_sb.claim_status = true
          )
          UNION
          (
            SELECT
              CASE t_qb.category
                WHEN ${ENUM_QUEST_CATEGORY.Big_Win} THEN 'DAILY QUEST:BIG WIN'
                WHEN ${ENUM_QUEST_CATEGORY.Just_Wager_On} THEN 'DAILY QUEST:JUST WAGER ON' 
                WHEN ${ENUM_QUEST_CATEGORY.Slots_Master} THEN 'DAILY QUEST:SLOTS MASTER'
                WHEN ${ENUM_QUEST_CATEGORY.Wager_Week} THEN 'WEEKLY QUEST:WAGER WEEK'
              END AS bonus_type,
              t_qb.amount AS amount,
              t_qb.amount_usd AS amount_usd,
              t_qb.updated_at AS time,
              t_bs.symbol AS symbol_name,
              t_bs.logo AS symbol_logo
            FROM "quest_bonus" AS "t_qb"
            LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_qb.user_id = '${user.id}' AND t_qb.updated_at >= current_date - INTERVAL '60 days' AND t_qb.claim_status = true
          )
          UNION
          (
            SELECT
              'Airdrop' AS bonus_type,
              t_ab.amount AS amount,
              t_ab.amount_usd AS amount_usd,
              t_ab.created_at AS time,
              t_bs.symbol AS symbol_name,
              t_bs.logo AS symbol_logo
            FROM "airdrop_bonus" AS "t_ab"
            LEFT JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_ab.symbol_id
            WHERE t_ab.user_id = '${user.id}' AND t_ab.created_at >= current_date - INTERVAL '60 days' AND t_ab.claim_status = true
          )
        ) AS t
        ORDER BY t.time DESC
      `);
    } else if (category === ENUM_BONUS_TYPE.DEPOSIT_BONUS) {
      transactions = await this.DepositBonusRepository.createQueryBuilder(
        't_db',
      )
        .select([
          "'Deposit' AS bonus_type",
          't_db.amount AS amount',
          't_db.amount_usd AS amount_usd',
          't_db.created_at AS time',
          't_bs.symbol AS symbol_name',
          't_bs.logo AS symbol_logo',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', "t_bs.symbol = 'USDT'")
        .where('t_db.user_id = :user_id', { user_id: user.id })
        .andWhere("t_db.created_at >= current_date - INTERVAL '60 days'")
        .orderBy('t_db.created_at', 'DESC')
        .getRawMany();
    } else if (category === ENUM_BONUS_TYPE.LEVEL_UP) {
      transactions = await this.LevelUpBonusRepository.createQueryBuilder(
        't_lub',
      )
        .select([
          "'Level Up' AS bonus_type",
          't_lub.amount AS amount',
          't_lub.amount_usd AS amount_usd',
          't_lub.created_at AS time',
          't_bs.symbol AS symbol_name',
          't_bs.logo AS symbol_logo',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', "t_bs.symbol = 'USDT'")
        .where('t_lub.user_id = :user_id', { user_id: user.id })
        .andWhere("t_lub.updated_at >= current_date - INTERVAL '60 days'")
        .andWhere('t_lub.claim_status = true')
        .orderBy('t_lub.updated_at', 'DESC')
        .getRawMany();
    } else if (category === ENUM_BONUS_TYPE.WEEKLY_CASHBACK) {
      transactions = await this.CashbackBonusRepository.createQueryBuilder(
        't_cb',
      )
        .select([
          "'Weekly Cashback' AS bonus_type",
          't_cb.amount AS amount',
          't_cb.amount_usd AS amount_usd',
          't_cb.created_at AS time',
          't_bs.symbol AS symbol_name',
          't_bs.logo AS symbol_logo',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', "t_bs.symbol = 'USDT'")
        .where('t_cb.user_id = :user_id', { user_id: user.id })
        .andWhere("t_cb.updated_at >= current_date - INTERVAL '60 days'")
        .andWhere('t_cb.type = :type', { type: ENUM_CASHBACK_BONUS.Weekly })
        .andWhere('t_cb.claim_status = true')
        .orderBy('t_cb.updated_at', 'DESC')
        .getRawMany();
    } else if (category === ENUM_BONUS_TYPE.MONTHLY_CASHBACK) {
      transactions = await this.CashbackBonusRepository.createQueryBuilder(
        't_cb',
      )
        .select([
          "'Monthly Cashback' AS bonus_type",
          't_cb.amount AS amount',
          't_cb.amount_usd AS amount_usd',
          't_cb.created_at AS time',
          't_bs.symbol AS symbol_name',
          't_bs.logo AS symbol_logo',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', "t_bs.symbol = 'USDT'")
        .where('t_cb.user_id = :user_id', { user_id: user.id })
        .andWhere("t_cb.updated_at >= current_date - INTERVAL '60 days'")
        .andWhere('t_cb.type = :type', { type: ENUM_CASHBACK_BONUS.Monthly })
        .andWhere('t_cb.claim_status = true')
        .orderBy('t_cb.updated_at', 'DESC')
        .getRawMany();
    } else if (category === ENUM_BONUS_TYPE.LUCKY_SPIN) {
      transactions = await this.SpinBonusRepository.createQueryBuilder('t_sb')
        .select([
          `
            CASE t_sb.type
              WHEN ${ENUM_SPIN_BONUS.Lucky} THEN 'LUCKY SPIN'
              WHEN ${ENUM_SPIN_BONUS.Super} THEN 'SUPER SPIN'
              WHEN ${ENUM_SPIN_BONUS.Mega} THEN 'MEGA SPIN'
            END AS type
          `,
          't_sb.amount AS amount',
          't_sb.amount_usd AS amount_usd',
          't_sb.updated_at AS time',
          't_bs.symbol AS symbol_name',
          't_bs.logo AS symbol_logo',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_sb.symbol_id')
        .where('t_sb.user_id = :user_id', { user_id: user.id })
        .andWhere("t_sb.updated_at >= current_date - INTERVAL '60 days'")
        .andWhere('t_sb.claim_status = true')
        .orderBy('t_sb.updated_at', 'DESC')
        .getRawMany();
    } else if (category === ENUM_BONUS_TYPE.QUEST) {
      transactions = await this.QuestBonusRepository.createQueryBuilder('t_qb')
        .select([
          `
            CASE t_qb.category
              WHEN ${ENUM_QUEST_CATEGORY.Big_Win} THEN 'DAILY QUEST:BIG WIN'
              WHEN ${ENUM_QUEST_CATEGORY.Just_Wager_On} THEN 'DAILY QUEST:JUST WAGER ON' 
              WHEN ${ENUM_QUEST_CATEGORY.Slots_Master} THEN 'DAILY QUEST:SLOTS MASTER'
              WHEN ${ENUM_QUEST_CATEGORY.Wager_Week} THEN 'WEEKLY QUEST:WAGER WEEK'
            END AS type
          `,
          't_qb.amount AS amount',
          't_qb.amount_usd AS amount_usd',
          't_qb.created_at AS time',
          't_bs.symbol AS symbol_name',
          't_bs.logo AS symbol_logo',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', "t_bs.symbol = 'USDT'")
        .where('t_qb.user_id = :user_id', { user_id: user.id })
        .andWhere("t_qb.updated_at >= current_date - INTERVAL '60 days'")
        .andWhere('t_qb.claim_status = true')
        .orderBy('t_qb.updated_at', 'DESC')
        .getRawMany();
    } else if (category === ENUM_BONUS_TYPE.AIRDROP) {
      transactions = await this.AirdropBonusRepository.createQueryBuilder(
        't_ab',
      )
        .select([
          "'Airdrop' AS bonus_type",
          't_ab.amount AS amount',
          't_ab.amount_usd AS amount_usd',
          't_ab.created_at AS time',
          't_bs.symbol AS symbol_name',
          't_bs.logo AS symbol_logo',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_ab.symbol_id')
        .where('t_ab.user_id = :user_id', { user_id: user.id })
        .andWhere("t_ab.created_at >= current_date - INTERVAL '60 days'")
        .andWhere('t_ab.claim_status = true')
        .orderBy('t_ab.created_at', 'DESC')
        .getRawMany();
    }

    return transactions;
  }

  async getTotalsForBonusCategories(user: User) {
    const [
      weekly_cashback_amount_usd,
      monthly_cashback_amount_usd,
      total_deposit_bonus_amount_usd,
      total_vip_level_up_bonus_amount_usd,
      total_lucky_spin_bonus_amount_usd,
      total_quest_bonus_amount_usd,
    ] = await Promise.all([
      await this.getTotalWeeklyCashbackAmountUsd(user.id),
      await this.getTotalMonthlyCashbackAmountUsd(user.id),
      await this.getTotalDepositBonusAmountUsd(user.id),
      await this.getTotalLevelUpBonusByUserIdAmountUsd(user.id),
      await this.getTotalSpinBonusAmountUsd(user.id),
      await this.getTotalQuestBonusAmountUsd(user.id),
    ]);

    return {
      weekly_cashback_amount_usd,
      monthly_cashback_amount_usd,
      total_deposit_bonus_amount_usd,
      total_vip_level_up_bonus_amount_usd,
      total_lucky_spin_bonus_amount_usd,
      total_quest_bonus_amount_usd,
    };
  }

  async addBonusToWallet(
    user_id: string,
    amount: number,
    symbol?: BlockchainSymbol,
  ) {
    const result = await this.BlockchainCryptoBalanceRepository.query(`
      UPDATE blockchain_crypto_balance t_bcb
      SET balance = balance + ${amount}
      FROM blockchain_symbol t_bs
      WHERE user_id = '${user_id}' AND ${
        symbol
          ? `t_bs.id = '${symbol.id}' AND t_bcb.symbol_id = t_bs.id`
          : "t_bs.symbol = 'USDT' AND t_bcb.symbol_id = t_bs.id"
      }
      RETURNING t_bcb.balance as balance, t_bcb.balance * t_bs.price AS balance_usd
    `);
    return result[0][0];
  }

  async reduceBonusPool(user_id: string, amount: number) {
    await this.UserRepository.createQueryBuilder()
      .update(User)
      .set({ bonus_pool: () => `bonus_pool - ${amount}` })
      .where('id = :user_id', { user_id })
      .execute();
  }

  async claimLevelUpBonus(level_up_bonus_id: string) {
    const _level_up_bonus = await this.LevelUpBonusRepository.findOne({
      where: { id: level_up_bonus_id },
      relations: ['user'],
    });

    if (!_level_up_bonus) {
      throw new HttpException(isExistBonusError.error, isExistBonusError.code);
    }

    if (_level_up_bonus.claim_status) {
      throw new HttpException(isClaimBonusError.error, isClaimBonusError.code);
    }

    const { amount, amount_usd, user } = _level_up_bonus;

    if (Number(user.bonus_pool) < Number(amount_usd)) {
      throw new HttpException(
        isNotEnoughBonusPoolError.error,
        isNotEnoughBonusPoolError.code,
      );
    }

    await this.reduceBonusPool(user.id, amount_usd);
    //  Add bonus to user's balance as USDT
    const { balance, balance_usd } = await this.addBonusToWallet(
      user.id,
      amount,
    );

    //  Add available balance to user's wallet
    await this.walletWithdrawService.updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
      user.id,
      amount,
    );

    //  Change claim status
    _level_up_bonus.claim_status = true;
    _level_up_bonus.wallet_balance = balance;
    _level_up_bonus.wallet_balance_usd = balance_usd;
    await this.LevelUpBonusRepository.save(_level_up_bonus);

    return { status: true };
  }

  async claimCashbackBonus(cashback_bonus_id: string) {
    const _cashback_bonus = await this.CashbackBonusRepository.findOne({
      where: {
        id: cashback_bonus_id,
      },
      relations: ['user'],
    });

    if (!_cashback_bonus) {
      throw new HttpException(isExistBonusError.error, isExistBonusError.code);
    }

    if (_cashback_bonus.claim_status) {
      throw new HttpException(isClaimBonusError.error, isClaimBonusError.code);
    }

    const { amount, amount_usd, user } = _cashback_bonus;

    if (Number(user.bonus_pool) < Number(amount_usd)) {
      throw new HttpException(
        isNotEnoughBonusPoolError.error,
        isNotEnoughBonusPoolError.code,
      );
    }

    await this.reduceBonusPool(user.id, amount_usd);
    const { balance, balance_usd } = await this.addBonusToWallet(
      user.id,
      amount,
    );

    //  Add available balance to user's wallet
    await this.walletWithdrawService.updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
      user.id,
      amount,
    );

    _cashback_bonus.claim_status = true;
    _cashback_bonus.wallet_balance = balance;
    _cashback_bonus.wallet_balance_usd = balance_usd;
    await this.CashbackBonusRepository.save(_cashback_bonus);

    return { status: true };
  }

  async claimWagerContestBonus(id: string) {
    const _bonus = await this.WagerContestBonusRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!_bonus) {
      throw new HttpException(isExistBonusError.error, isExistBonusError.code);
    }

    if (_bonus.claim_status) {
      throw new HttpException(isClaimBonusError.error, isClaimBonusError.code);
    }

    const { amount, amount_usd, user } = _bonus;

    if (Number(user.bonus_pool) < Number(amount_usd)) {
      throw new HttpException(
        isNotEnoughBonusPoolError.error,
        isNotEnoughBonusPoolError.code,
      );
    }

    await this.reduceBonusPool(user.id, amount_usd);
    const { balance, balance_usd } = await this.addBonusToWallet(
      user.id,
      amount,
    );

    //  Add available balance to user's wallet
    await this.walletWithdrawService.updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
      user.id,
      amount,
    );

    _bonus.claim_status = true;
    _bonus.wallet_balance = balance;
    _bonus.wallet_balance_usd = balance_usd;
    await this.WagerContestBonusRepository.save(_bonus);

    return { status: true };
  }

  async claimSpinBonus(id: string) {
    const _bonus = await this.SpinBonusRepository.findOne({
      where: { id },
      relations: ['user', 'symbol'],
    });

    if (!_bonus) {
      throw new HttpException(isExistBonusError.error, isExistBonusError.code);
    }

    if (_bonus.claim_status) {
      throw new HttpException(isClaimBonusError.error, isClaimBonusError.code);
    }

    const { amount, amount_usd, user } = _bonus;

    if (Number(user.bonus_pool) < Number(amount_usd)) {
      throw new HttpException(
        isNotEnoughBonusPoolError.error,
        isNotEnoughBonusPoolError.code,
      );
    }

    await this.reduceBonusPool(user.id, amount_usd);
    const { balance, balance_usd } = await this.addBonusToWallet(
      user.id,
      amount,
      _bonus.symbol,
    );

    //  Add available balance to user's wallet
    await this.walletWithdrawService.updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
      user.id,
      amount,
      _bonus.symbol.id,
    );

    _bonus.claim_status = true;
    _bonus.wallet_balance = balance;
    _bonus.wallet_balance_usd = balance_usd;
    await this.SpinBonusRepository.save(_bonus);

    return { status: true };
  }

  async claimQuestBonus(id: string) {
    const _bonus = await this.QuestBonusRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!_bonus) {
      throw new HttpException(isExistBonusError.error, isExistBonusError.code);
    }

    if (!_bonus.status) {
      throw new HttpException(
        isFinishedQuestToClaimError.error,
        isFinishedQuestToClaimError.code,
      );
    }

    if (_bonus.claim_status) {
      throw new HttpException(isClaimBonusError.error, isClaimBonusError.code);
    }

    const { amount, amount_usd, user } = _bonus;

    if (Number(user.bonus_pool) < Number(amount_usd)) {
      throw new HttpException(
        isNotEnoughBonusPoolError.error,
        isNotEnoughBonusPoolError.code,
      );
    }

    await this.reduceBonusPool(user.id, amount_usd);
    const { balance, balance_usd } = await this.addBonusToWallet(
      user.id,
      amount,
    );

    //  Add available balance to user's wallet
    await this.walletWithdrawService.updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
      user.id,
      amount,
    );

    _bonus.claim_status = true;
    _bonus.wallet_balance = balance;
    _bonus.wallet_balance_usd = balance_usd;
    await this.QuestBonusRepository.save(_bonus);

    return { status: true };
  }

  async claimAirdropBonus(id: string) {
    const _bonus = await this.AirdropBonusRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!_bonus) {
      throw new HttpException(isExistBonusError.error, isExistBonusError.code);
    }

    if (_bonus.claim_status) {
      throw new HttpException(isClaimBonusError.error, isClaimBonusError.code);
    }

    const { amount, amount_usd, user } = _bonus;

    if (Number(user.bonus_pool) < Number(amount_usd)) {
      throw new HttpException(
        isNotEnoughBonusPoolError.error,
        isNotEnoughBonusPoolError.code,
      );
    }

    await this.reduceBonusPool(user.id, amount_usd);
    const { balance, balance_usd } = await this.addBonusToWallet(
      user.id,
      amount,
    );

    _bonus.claim_status = true;
    _bonus.wallet_balance = balance;
    _bonus.wallet_balance_usd = balance_usd;
    await this.AirdropBonusRepository.save(_bonus);

    return { status: true };
  }

  async claimBonus(type: ENUM_BONUS_CLAIM, bonus_id: string) {
    if (type === ENUM_BONUS_CLAIM.LEVEL_UP) {
      return await this.claimLevelUpBonus(bonus_id);
    } else if (
      type === ENUM_BONUS_CLAIM.WEEKLY_CASHBACK ||
      type === ENUM_BONUS_CLAIM.MONTHLY_CASHBACK
    ) {
      return await this.claimCashbackBonus(bonus_id);
    } else if (type === ENUM_BONUS_CLAIM.WAGER_CONTEST) {
      return await this.claimWagerContestBonus(bonus_id);
    } else if (type === ENUM_BONUS_CLAIM.LUCKY_SPIN) {
      return await this.claimSpinBonus(bonus_id);
    } else if (type === ENUM_BONUS_CLAIM.QUEST) {
      return await this.claimQuestBonus(bonus_id);
    } else if (type === ENUM_BONUS_CLAIM.AIRDROP) {
      return await this.claimAirdropBonus(bonus_id);
    } else {
      throw new HttpException(
        isExistBonusTypeError.error,
        isExistBonusTypeError.code,
      );
    }
  }

  async getBonusesForClaim(user: User) {
    const { locked_amount_usd } =
      await this.walletService.getUSDTOfBonusPool(user);
    const level_up = await this.LevelUpBonusRepository.createQueryBuilder(
      't_lub',
    )
      .select([
        't_lub.id as id',
        'ROUND(EXTRACT(EPOCH FROM t_lub.created_at), 0) as time',
        `'LEVEL UP' as type_name`,
        `'${ENUM_BONUS_CLAIM.LEVEL_UP}' as type`,
        't_lub.amount as amount',
        't_lub.amount_usd as amount_usd',
        `${locked_amount_usd} >= t_lub.amount_usd as allow_claim`,
        't_bs.symbol as symbol_name',
        't_bs.logo as symbol_logo',
      ])
      .leftJoin(BlockchainSymbol, 't_bs', `t_bs.symbol = 'USDT'`)
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('claim_status = false')
      .getRawMany();

    const cashback = await this.CashbackBonusRepository.createQueryBuilder(
      't_cbb',
    )
      .select([
        't_cbb.id as id',
        'ROUND(EXTRACT(EPOCH FROM t_cbb.created_at), 0) as time',
        `
          CASE type
            WHEN ${ENUM_CASHBACK_BONUS.Weekly} THEN 'WEEKLY CASHBACK'
            WHEN ${ENUM_CASHBACK_BONUS.Monthly} THEN 'MONTHLY CASHBACK'
          END as type_name
        `,
        `
          CASE type
            WHEN ${ENUM_CASHBACK_BONUS.Weekly} THEN '${ENUM_BONUS_CLAIM.WEEKLY_CASHBACK}'
            WHEN ${ENUM_CASHBACK_BONUS.Monthly} THEN '${ENUM_BONUS_CLAIM.MONTHLY_CASHBACK}'
          END as type
        `,
        't_cbb.amount as amount',
        't_cbb.amount_usd as amount_usd',
        `${locked_amount_usd} >= t_cbb.amount_usd as allow_claim`,
        't_bs.symbol as symbol_name',
        't_bs.logo as symbol_logo',
      ])
      .leftJoin(BlockchainSymbol, 't_bs', `t_bs.symbol = 'USDT'`)
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('claim_status = false')
      .getRawMany();

    const wagercontest =
      await this.WagerContestBonusRepository.createQueryBuilder('t_wcb')
        .select([
          't_wcb.id as id',
          'ROUND(EXTRACT(EPOCH FROM t_wcb.created_at), 0) as time',
          `'WAGER CONTEST' as type_name`,
          `'${ENUM_BONUS_CLAIM.WAGER_CONTEST}' as type`,
          't_wcb.amount as amount',
          't_wcb.amount_usd as amount_usd',
          `${locked_amount_usd} >= t_wcb.amount_usd as allow_claim`,
          't_bs.symbol as symbol_name',
          't_bs.logo as symbol_logo',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', `t_bs.symbol = 'USDT'`)
        .where('user_id = :user_id', { user_id: user.id })
        .andWhere('claim_status = false')
        .getRawMany();

    const spin = await this.SpinBonusRepository.createQueryBuilder('t_sb')
      .select([
        't_sb.id as id',
        'ROUND(EXTRACT(EPOCH FROM t_sb.created_at), 0) as time',
        `
          CASE type
            WHEN ${ENUM_SPIN_BONUS.Lucky} THEN 'LUCKY SPIN'
            WHEN ${ENUM_SPIN_BONUS.Super} THEN 'SUPER SPIN'
            WHEN ${ENUM_SPIN_BONUS.Mega} THEN 'MEGA SPIN'
          END as type_name
        `,
        `'${ENUM_BONUS_CLAIM.LUCKY_SPIN}' as type`,
        't_sb.amount as amount',
        't_sb.amount_usd as amount_usd',
        `${locked_amount_usd} >= t_sb.amount_usd as allow_claim`,
        't_bs.symbol as symbol_name',
        't_bs.logo as symbol_logo',
      ])
      .leftJoin(BlockchainSymbol, 't_bs', `t_bs.id = t_sb.symbol_id`)
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('claim_status = false')
      .getRawMany();

    const quest = await this.QuestBonusRepository.createQueryBuilder('t_qb')
      .select([
        't_qb.id as id',
        'ROUND(EXTRACT(EPOCH FROM t_qb.created_at), 0) as time',
        `'Quest' as type_name`,
        `'${ENUM_BONUS_CLAIM.QUEST}' as type`,
        't_qb.amount as amount',
        't_qb.amount_usd as amount_usd',
        `${locked_amount_usd} >= t_qb.amount_usd as allow_claim`,
        't_bs.symbol as symbol_name',
        't_bs.logo as symbol_logo',
      ])
      .leftJoin(BlockchainSymbol, 't_bs', `t_bs.symbol = 'USDT'`)
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('status = true')
      .andWhere('claim_status = false')
      .getRawMany();

    const airdrop = await this.AirdropBonusRepository.createQueryBuilder('t_ab')
      .select([
        't_ab.id as id',
        'ROUND(EXTRACT(EPOCH FROM t_ab.created_at), 0) as time',
        `'AIRDROP' as type_name`,
        `'${ENUM_BONUS_CLAIM.AIRDROP}' as type`,
        't_ab.amount as amount',
        't_ab.amount_usd as amount_usd',
        `${locked_amount_usd} >= t_ab.amount_usd as allow_claim`,
        't_bs.symbol as symbol_name',
        't_bs.logo as symbol_logo',
      ])
      .leftJoin(BlockchainSymbol, 't_bs', `t_bs.id = t_ab.symbol_id`)
      .where('user_id = :user_id', { user_id: user.id })
      .andWhere('claim_status = false')
      .getRawMany();

    const result = [
      ...level_up,
      ...cashback,
      ...wagercontest,
      ...spin,
      ...quest,
      ...airdrop,
    ];

    result.sort((a, b) => {
      if (b.time > a.time) return 1;
      else if (b.time < a.time) return -1;
      return 0;
    });

    return result;
  }

  async getTotalGeneralBonusByUserId(user_id: string) {
    const result = await this.UserRepository.query(`
      SELECT SUM(sum) as sum
      FROM (
        (
          SELECT SUM(amount_usd) as sum
          FROM "wager_contest_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT SUM(amount_usd) as sum
          FROM "spin_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT SUM(amount_usd) as sum
          FROM "quest_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT SUM(amount_usd) as sum
          FROM "claim_bonus"
          WHERE user_id = '${user_id}'
        )
      ) as combined_table
    `);

    return fixedNumber(result[0].sum, 4);
  }

  async redeemBonus(user_id: string, code: string) {
    const airdrop = await this.AirdropRepository.createQueryBuilder()
      .select('*')
      .where('LOWER(code) = :code', { code: code.toLowerCase() })
      .andWhere('expired_at >= CURRENT_TIMESTAMP')
      .getRawOne();

    if (!airdrop) {
      throw new HttpException(
        isExistAirdropCodeError.error,
        isExistAirdropCodeError.code,
      );
    }

    const result = await this.AirdropBonusRepository.createQueryBuilder()
      .select('COALESCE(COUNT(*), 0) AS count')
      .where('airdrop_id = :airdrop_id', { airdrop_id: airdrop.id })
      .getRawOne();
    if (Number(result.count) >= airdrop.times) {
      throw new HttpException(
        exceedAirdropTimesError.error,
        exceedAirdropTimesError.code,
      );
    }

    const airdropBonus = await this.AirdropBonusRepository.findOne({
      where: {
        user: { id: user_id },
        airdrop: { id: airdrop.id },
      },
    });
    if (airdropBonus) {
      throw new HttpException(
        redeemedAirdropBonusError.error,
        redeemedAirdropBonusError.code,
      );
    }

    const _newAirdropBonus: DeepPartial<AirdropBonus> = {
      user: { id: user_id },
      airdrop: { id: airdrop.id },
      symbol: { id: airdrop.symbol_id },
      amount: airdrop.amount,
      amount_usd:
        (await this.walletService.getCurrencyPrice(
          ENUM_CURRENCY.Crypto,
          airdrop.symbol_id,
        )) * airdrop.amount,
    };

    await this.AirdropBonusRepository.save(
      this.AirdropBonusRepository.create(_newAirdropBonus),
    );

    return { status: true };
  }
}
