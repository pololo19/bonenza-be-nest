import { Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Unique(['user', 'currency'])
@Entity()
export class BotUserCurrency extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => BlockchainSymbol, (currency) => currency.id)
  @JoinColumn({ name: 'currency_id' })
  currency: BlockchainSymbol;
}
