import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { ENUM_BLOCKCHAIN_DEPOSIT_STATUS } from '../enums';
import { BlockchainCryptocurrency } from './blockchain-cryptocurrency.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class BlockchainDepositTransaction extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ length: 255 })
  from_address: string;

  @Column({ length: 255 })
  to_address: string;

  @Column({ length: 255, unique: true })
  hash: string;

  @ManyToOne(() => BlockchainCryptocurrency, (crypto) => crypto.id)
  @JoinColumn({ name: 'cryptocurrency_id' })
  cryptocurrency: BlockchainCryptocurrency;

  @Column('numeric', { precision: 40, scale: 18 })
  amount: number;

  @Column('numeric', { precision: 40, scale: 18 })
  amount_usd: number;

  @Column({ length: 255, nullable: true })
  send_fee_to_user_wallet_hash: string;

  @Column('numeric', { precision: 30, scale: 18, default: 0, nullable: true })
  send_fee_to_user_wallet_fee: number;

  @Column('numeric', { precision: 30, scale: 18, default: 0, nullable: true })
  send_fee_to_user_wallet_fee_usd: number;

  @Column({ length: 255, nullable: true })
  send_funds_to_main_wallet_hash: string;

  @Column('numeric', { precision: 30, scale: 18, default: 0, nullable: true })
  send_funds_to_main_wallet_fee: number;

  @Column('numeric', { precision: 30, scale: 18, default: 0, nullable: true })
  send_funds_to_main_wallet_fee_usd: number;

  @Column({
    type: 'smallint',
    enum: ENUM_BLOCKCHAIN_DEPOSIT_STATUS,
    default: ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Processing,
  })
  status: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance_usd: number;
}
