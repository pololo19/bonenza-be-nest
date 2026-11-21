import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { ENUM_SPIN_BONUS } from '../enums';
import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';

@Entity()
@Unique(['type', 'amount_usd'])
export class Spin extends CustomBase {
  @Column({
    type: 'smallint',
    enum: ENUM_SPIN_BONUS,
  })
  type: number;

  @Column('numeric', { precision: 40, scale: 18 })
  amount_usd: number;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'symbol_id' })
  symbol: BlockchainSymbol;
}
