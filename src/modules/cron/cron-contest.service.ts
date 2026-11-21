import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BlockchainSymbol,
  GameBlockchainTransaction,
  User,
  WagerContestBonus,
} from 'entities';
import { ENUM_GAME_TRANSACTION_ACTION } from 'enums';
import { DeepPartial, Repository } from 'typeorm';
import { contestTime, fixedNumber } from 'utils';

const PRIZE_PERCENTAGE = [50, 25, 12, 6, 3, 1.5, 0.9, 0.7, 0.5, 0.4];

@Injectable()
export class CronContestService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(WagerContestBonus)
    private WagerContestBonusRepository: Repository<WagerContestBonus>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
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

    const total_prize_pool_amount_usd = (Number(result.sum) / 10000) * 14; // 1% * 14%

    for (let i = 0; i < top_10_contesters.length; i++) {
      top_10_contesters[i].prize_amount_usd =
        top_10_contesters[i].wagered_amount_usd > 0
          ? fixedNumber(
              (total_prize_pool_amount_usd / 100) * PRIZE_PERCENTAGE[i],
            )
          : 0;
      top_10_contesters[i].percentage = PRIZE_PERCENTAGE[i];
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

  async saveHistory() {
    const { lastStartTime, lastEndTime } = contestTime();
    const USDT = await this.getUSDT();
    const usdt_price = Number(USDT.price);

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
        `t_u.id = t_gbt.user_id AND EXTRACT(EPOCH FROM t_gbt.created_at) >= ${lastStartTime} AND EXTRACT(EPOCH FROM t_gbt.created_at) < ${lastEndTime} AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
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
        .where(`EXTRACT(EPOCH FROM created_at) >= ${lastStartTime}`)
        .andWhere(`EXTRACT(EPOCH FROM created_at) < ${lastEndTime}`)
        .andWhere(`action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`)
        .getRawOne();

    const total_prize_pool_amount_usd = (Number(result.sum) / 10000) * 14;

    for (let i = 0; i < top_10_contesters.length; i++) {
      top_10_contesters[i].prize_amount_usd =
        top_10_contesters[i].wagered_amount_usd > 0
          ? (total_prize_pool_amount_usd / 100) * PRIZE_PERCENTAGE[i]
          : 0;
      top_10_contesters[i].percentage = PRIZE_PERCENTAGE[i];
    }

    for (let i = 0; i < top_10_contesters.length; i++) {
      const { player_id, wagered_amount_usd, prize_amount_usd } =
        top_10_contesters[i];
      if (prize_amount_usd > 0) {
        const _newContester: DeepPartial<WagerContestBonus> = {
          user: await this.UserRepository.findOneBy({
            id: player_id,
          }),
          position: i + 1,
          wagered_amount_usd,
          amount: prize_amount_usd / usdt_price,
          amount_usd: prize_amount_usd,
        };

        //  Add history
        await this.WagerContestBonusRepository.save(
          this.WagerContestBonusRepository.create(_newContester),
        );
      }
    }

    return top_10_contesters;
  }
}
