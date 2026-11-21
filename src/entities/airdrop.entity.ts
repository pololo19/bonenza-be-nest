import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';

@Unique(['code'])
@Entity()
export class Airdrop extends CustomBase {
  @Column('varchar', { length: 255 })
  code: string;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'symbol_id' })
  symbol: BlockchainSymbol;

  @Column('numeric', { precision: 40, scale: 18 })
  amount: number;

  @Column('timestamp')
  expired_at: Date;

  @Column('integer', { default: 1 })
  times: number;
}
