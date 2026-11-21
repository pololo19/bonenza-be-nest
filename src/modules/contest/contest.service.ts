import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WAGER_CONTEST_PRIZE_PERCENTAGE } from 'constant';
import {
  BlockchainSymbol,
  GameBlockchainTransaction,
  User,
  WagerContestBonus,
} from 'entities';
import { ENUM_GAME_TRANSACTION_ACTION } from 'enums';
import { Repository } from 'typeorm';
import { contestTime } from 'utils';

@Injectable()
export class ContestService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
    @InjectRepository(WagerContestBonus)
    private WagerContestBonusRepository: Repository<WagerContestBonus>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
  ) {}
  async getWagerContesterIn24h() {
    const { startTime, currentTime, endTime } = contestTime();
    const USDT = await this.getUSDT();

    const top_10_contesters = await this.UserRepository.createQueryBuilder(
      't_u',
    )
      .select([
        `
          t_u.id AS player_id,
          CASE 
            WHEN t_u.setting_hide_user_name = TRUE THEN ''
            ELSE t_u.name
            END AS player_name
        `,
        't_u.avatar AS player_avatar',
        'COALESCE(SUM(t_gbt.amount_usd), 0) AS wagered_amount_usd',
      ])
      .leftJoin(
        GameBlockchainTransaction,
        't_gbt',
        `t_u.id = t_gbt.user_id AND EXTRACT(EPOCH FROM t_gbt.created_at) >= ${startTime} AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .having('COALESCE(SUM(t_gbt.amount_usd), 0) > 0')
      .groupBy('t_u.name')
      .addGroupBy('t_u.setting_hide_user_name')
      .addGroupBy('t_u.avatar')
      .addGroupBy('t_u.id')
      .orderBy('wagered_amount_usd', 'DESC')
      .limit(10)
      .getRawMany();

    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('COALESCE(SUM(amount_usd), 0) as sum')
        .where(`EXTRACT(EPOCH FROM created_at) >= ${startTime}`)
        .andWhere(`action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`)
        .getRawOne();

    const total_prize_pool_amount_usd = (Number(result.sum) / 10000) * 7;

    for (let i = 0; i < top_10_contesters.length; i++) {
      top_10_contesters[i].prize_amount_usd =
        top_10_contesters[i].wagered_amount_usd > 0
          ? (total_prize_pool_amount_usd / 100) *
            WAGER_CONTEST_PRIZE_PERCENTAGE[i]
          : 0;
      top_10_contesters[i].percentage = WAGER_CONTEST_PRIZE_PERCENTAGE[i];
    }

    return {
      startTime,
      currentTime,
      endTime,
      total_prize_pool_amount_usd,
      contesters: top_10_contesters,
      currency: {
        symbol: USDT.symbol,
        logo: USDT.logo,
        price: USDT.price,
      },
    };
  }

  async getUSDT() {
    return await this.BlockchainSymbolRepository.createQueryBuilder()
      .where("symbol = 'USDT'")
      .getOne();
  }

  async getLastContestHistory() {
    let result = await this.WagerContestBonusRepository.createQueryBuilder()
      .select(
        ' EXTRACT(EPOCH FROM COALESCE(MAX(created_at), CURRENT_DATE)) as date',
      )
      .getRawOne();

    const lastContestEndTime = Math.floor(Number(result.date));
    const lastContestStartTime = lastContestEndTime - 24 * 60 * 60;

    result = await this.WagerContestBonusRepository.createQueryBuilder('t_wcb')
      .select([
        't_u.id AS player_id',
        `CASE 
          WHEN t_u.setting_hide_user_name = TRUE THEN ''
          ELSE t_u.name
          END AS player_name`,
        't_u.avatar AS player_avatar',
        't_wcb.wagered_amount_usd AS wagered_amount_usd',
        't_wcb.position AS position',
        't_wcb.amount_usd AS prize_amount_usd',
      ])
      .leftJoin(User, 't_u', 't_u.id = t_wcb.user_id')
      .where(
        `TO_CHAR(t_wcb.created_at, 'YYYY-MM-DD') = TO_CHAR(TO_TIMESTAMP(${lastContestEndTime}), 'YYYY-MM-DD')`,
      )
      .orderBy('t_wcb.position', 'ASC')
      .getRawMany();

    for (let i = 0; i < result.length; i++) {
      result[i].percentage = WAGER_CONTEST_PRIZE_PERCENTAGE[i];
    }

    return {
      lastContestStartTime,
      lastContestEndTime,
      contest: result,
    };
  }

  async getPositionByUserId(user_id: string) {
    const { startTime, currentTime } = contestTime();
    const result = await this.GameBlockchainTransactionRepository.query(`
      SELECT
        *
      FROM (
        SELECT
          DENSE_RANK() OVER (ORDER BY t.wagered_amount_usd DESC) AS position,
          *
        FROM (
          SELECT
            t_u.id AS id,
            COALESCE(SUM(t_gbt.amount_usd), 0) AS wagered_amount_usd
          FROM "user" AS "t_u"
          LEFT JOIN "game_blockchain_transaction" AS "t_gbt" ON t_u.id = t_gbt.user_id AND EXTRACT(EPOCH FROM t_gbt.created_at) >= ${startTime} AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}
          GROUP BY t_u.id
        ) AS t
      ) AS t
      WHERE t.id = '${user_id}'
    `);

    const me = result[0];

    return {
      current_time: currentTime,
      position: Number(me.position) > 50 ? '50+' : me.position,
      wagered_amount_usd: me.wagered_amount_usd,
    };
  }

  async getContestHistoryByUserId(
    user_id: string,
    page: number,
    page_size: number,
  ) {
    const result = await this.WagerContestBonusRepository.createQueryBuilder()
      .select('COUNT(*) as count')
      .where('user_id = :user_id', { user_id })
      .getRawOne();

    const total_count = Number(result.count);
    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page > 0 ? total_page : 1;

    return {
      total_count,
      total_page,
      page,
      page_size,
      contest: await this.WagerContestBonusRepository.createQueryBuilder(
        't_wcb',
      )
        .select([
          't_wcb.created_at as date',
          't_wcb.position as position',
          'TRUNC(t_wcb.amount, 6) as prize',
          'TRUNC(t_wcb.amount_usd, 6) as prize_usd',
          't_bs.logo as currency_logo',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', `t_bs.symbol = 'USDT'`)
        .where('t_wcb.user_id = :user_id', { user_id })
        .orderBy('t_wcb.created_at', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany(),
    };
  }
}
