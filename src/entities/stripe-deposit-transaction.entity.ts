import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import {
  ENUM_STRIPE_DEPOSIT_STATUS,
  ENUM_STRIPE_PAYMENT_INTENT_STATUS,
} from '../enums';
import { CustomBase } from './custom-base.entity';
import { FiatCurrency } from './fiat-currency.entity';
import { User } from './user.entity';

@Entity()
export class StripeDepositTransaction extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => FiatCurrency, (fiat) => fiat.id)
  @JoinColumn({ name: 'fiat_id' })
  fiat: FiatCurrency;

  @Column('varchar', { length: 255 })
  payment_id: string;

  @Column('numeric', { precision: 40, scale: 18 })
  amount: number;

  @Column('numeric', { precision: 40, scale: 18 })
  amount_usd: number;

  @Column('numeric', { precision: 30, scale: 18, default: 0 })
  fee: number;

  @Column('numeric', { precision: 30, scale: 18, default: 0 })
  fee_usd: number;

  @Column({
    type: 'varchar',
    length: 30,
    enum: ENUM_STRIPE_PAYMENT_INTENT_STATUS,
    default: ENUM_STRIPE_PAYMENT_INTENT_STATUS.Requires_Payment_Method,
  })
  payment_intent_status: string;

  @Column({
    type: 'smallint',
    enum: ENUM_STRIPE_DEPOSIT_STATUS,
    default: ENUM_STRIPE_DEPOSIT_STATUS.Pending,
  })
  status: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance: number;
}
