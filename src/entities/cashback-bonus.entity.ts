import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { ENUM_CASHBACK_BONUS } from '../enums';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class CashbackBonus extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'smallint',
    enum: ENUM_CASHBACK_BONUS,
  })
  type: number;

  @Column('numeric', { precision: 40, scale: 18 })
  amount: number;

  @Column('numeric', { precision: 40, scale: 18 })
  amount_usd: number;

  @Column('boolean', { default: false })
  claim_status: boolean;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance_usd: number;
}
