import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Unique(['user', 'symbol'])
@Entity()
export class AvailableWithdrawBalance extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'symbol_id' })
  symbol: BlockchainSymbol;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  balance: number;
}
