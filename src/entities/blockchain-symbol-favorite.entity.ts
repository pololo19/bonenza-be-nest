import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class BlockchainSymbolFavorite extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'symbol_id' })
  symbol: BlockchainSymbol;
}
