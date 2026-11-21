import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class BlockchainSwapTransaction extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'from_symbol_id' })
  from_symbol: BlockchainSymbol;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'to_symbol_id' })
  to_symbol: BlockchainSymbol;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  from_amount: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  from_amount_usd: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  to_amount: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  to_amount_usd: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  from_wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  to_wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  from_wallet_balance_usd: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  to_wallet_balance_usd: number;
}
