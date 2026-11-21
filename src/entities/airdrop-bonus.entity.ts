import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { Airdrop } from './airdrop.entity';
import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Unique(['user', 'airdrop'])
@Entity()
export class AirdropBonus extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Airdrop, (airdrop) => airdrop.id)
  @JoinColumn({ name: 'airdrop_id' })
  airdrop: Airdrop;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'symbol_id' })
  symbol: BlockchainSymbol;

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
