import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { FiatCurrency } from './fiat-currency.entity';
import { User } from './user.entity';

@Entity()
export class FiatCurrencyFavorite extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => FiatCurrency, (fiat) => fiat.id)
  @JoinColumn({ name: 'fiat_id' })
  fiat: FiatCurrency;
}
