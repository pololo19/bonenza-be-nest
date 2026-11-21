import { Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { FiatCurrency } from './fiat-currency.entity';
import { GameProvider } from './game-provider.entity';

@Entity()
@Unique(['provider', 'fiat'])
export class GameProviderFiatBlacklist extends CustomBase {
  @ManyToOne(() => GameProvider, (provider) => provider.id)
  @JoinColumn({ name: 'provider_id' })
  provider: GameProvider;

  @ManyToOne(() => FiatCurrency, (fiat) => fiat.id)
  @JoinColumn({ name: 'fiat_id' })
  fiat: FiatCurrency;
}
