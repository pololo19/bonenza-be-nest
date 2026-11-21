import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class TipTransaction extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'sender_id' })
  sender: User;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'receiver_id' })
  receiver: User;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'symbol_id' })
  symbol: BlockchainSymbol;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  amount: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  amount_usd: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  sender_wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  sender_wallet_balance_usd: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  receiver_wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  receiver_wallet_balance_usd: number;
}
