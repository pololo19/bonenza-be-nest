import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { FiatCurrency } from './fiat-currency.entity';
import { User } from './user.entity';

@Entity()
export class StripeFiatBalance extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => FiatCurrency, (symbol) => symbol.id)
  @JoinColumn({ name: 'fiat_id' })
  fiat: FiatCurrency;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  balance: number;
}
