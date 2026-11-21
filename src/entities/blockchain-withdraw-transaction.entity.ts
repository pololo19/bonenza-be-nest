import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { ENUM_WITHDRAW_STATUS } from '../enums';
import { BlockchainCryptocurrency } from './blockchain-cryptocurrency.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class BlockchainWithdrawTransaction extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ length: 255 })
  from_address: string;

  @Column({ length: 255 })
  to_address: string;

  @Column({ length: 255, nullable: true })
  hash: string;

  @ManyToOne(() => BlockchainCryptocurrency, (crypto) => crypto.id)
  @JoinColumn({ name: 'cryptocurrency_id' })
  cryptocurrency: BlockchainCryptocurrency;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  amount_with_fee: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  amount_with_fee_usd: number;

  @Column('numeric', { precision: 40, scale: 18 })
  amount: number;

  @Column('numeric', { precision: 40, scale: 18 })
  amount_usd: number;

  @Column('numeric', { precision: 30, scale: 18 })
  fee: number;

  @Column('numeric', { precision: 30, scale: 18 })
  fee_usd: number;

  @Column({
    type: 'smallint',
    enum: ENUM_WITHDRAW_STATUS,
    default: ENUM_WITHDRAW_STATUS.Processing,
  })
  status: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance_usd: number;

  @Column('text', { default: '' })
  pending_reason: string;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  pending_wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  pending_wallet_balance_usd: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  pended_at: Date;

  @Column('numeric', { precision: 30, scale: 18, default: 0 })
  withdraw_fee: number;
}
