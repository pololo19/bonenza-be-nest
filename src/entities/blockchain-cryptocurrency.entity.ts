import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { ENUM_CRYPTO } from '../enums';
import { BlockchainNetwork } from './blockchain-network.entity';
import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';

@Entity()
@Unique(['network', 'symbol'])
export class BlockchainCryptocurrency extends CustomBase {
  @ManyToOne(() => BlockchainNetwork, (network) => network.id)
  @JoinColumn({ name: 'network_id' })
  network: BlockchainNetwork;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'symbol_id' })
  symbol: BlockchainSymbol;

  @Column('smallint')
  decimals: number;

  @Column({ length: 100, nullable: true })
  contract_address: string;

  @Column({
    type: 'smallint',
    enum: ENUM_CRYPTO,
    default: ENUM_CRYPTO.COIN,
  })
  type: number;

  @Column('numeric', { precision: 30, scale: 18, default: 0 })
  withdraw_fee: number;
}
