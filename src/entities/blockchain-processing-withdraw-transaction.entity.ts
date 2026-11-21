import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BlockchainSymbol } from './blockchain-symbol.entity';
import { BlockchainWithdrawTransaction } from './blockchain-withdraw-transaction.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class BlockchainProcessingWithdrawTransaction extends CustomBase {
  @Column('integer')
  goal_block: number;

  @Column('varchar', { length: 255 })
  hash: string;

  @Column('varchar', { length: 255 })
  network: string;

  @ManyToOne(() => BlockchainWithdrawTransaction, (tx) => tx.id)
  @JoinColumn({ name: 'transaction_id' })
  transaction: BlockchainWithdrawTransaction;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'symbol_id' })
  symbol: BlockchainSymbol;

  @Column('varchar', { length: 255 })
  symbol_name: string;

  @Column('numeric', { precision: 40, scale: 18 })
  amount: number;
}
