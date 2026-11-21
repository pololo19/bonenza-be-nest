import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipTransaction, User } from 'entities';
import { Repository } from 'typeorm';

@Injectable()
export class WalletTipService {
  constructor(
    @InjectRepository(TipTransaction)
    private TipTransactionRepository: Repository<TipTransaction>,
  ) {}

  async getTotalTipAmountUsdByUserIdAndRolloverAt(user_id: string) {
    const result = await this.TipTransactionRepository.createQueryBuilder(
      't_tt',
    )
      .select('COALESCE(SUM(amount_usd), 0) AS sum')
      .innerJoin(User, 't_u', 't_u.id = t_tt.receiver_id')
      .where('t_tt.receiver_id = :user_id', { user_id })
      .andWhere('t_tt.created_at >= t_u.rollover_at')
      .getRawOne();

    return Number(result.sum);
  }
}
