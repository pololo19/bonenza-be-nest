import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BlockchainDepositTransaction,
  StripeDepositTransaction,
  User,
} from 'entities';
import {
  ENUM_BLOCKCHAIN_DEPOSIT_STATUS,
  ENUM_STRIPE_DEPOSIT_STATUS,
} from 'enums';
import { Repository } from 'typeorm';

@Injectable()
export class WalletDepositService {
  constructor(
    @InjectRepository(BlockchainDepositTransaction)
    private BlockchainDepositTransactionRepository: Repository<BlockchainDepositTransaction>,
    @InjectRepository(StripeDepositTransaction)
    private StripeDepositTransactionRepository: Repository<StripeDepositTransaction>,
  ) {}

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

  async getTotalDepositAmountUsdByUserIdAndRolloverAt(user_id: string) {
    const result =
      await this.BlockchainDepositTransactionRepository.createQueryBuilder(
        't_bdt',
      )
        .select('COALESCE(SUM(amount_usd), 0) AS sum')
        .innerJoin(User, 't_u', 't_u.id = t_bdt.user_id')
        .where('t_bdt.user_id = :user_id', { user_id })
        .andWhere('t_bdt.updated_at >= t_u.rollover_at')
        .andWhere('t_bdt.status = :status', {
          status: ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete,
        })
        .getRawOne();

    return Number(result.sum);
  }

  async getTotalDepositAmountUsdByUserIdByUserId(user_id: string) {
    const result =
      await this.BlockchainDepositTransactionRepository.createQueryBuilder()
        .select('SUM(amount_usd) as sum')
        .where('user_id = :user_id', { user_id })
        .andWhere('status = :status', {
          status: ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete,
        })
        .getRawOne();
    return Number(result.sum);
  }
}
