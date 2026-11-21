import { Column, Entity } from 'typeorm';

import { CustomBase } from './custom-base.entity';

@Entity()
export class BlockchainDepositPool extends CustomBase {
  @Column('uuid')
  transaction_id: string;

  @Column('varchar', { length: 255 })
  network: string;

  @Column('smallint')
  type: number;

  @Column('varchar', { length: 255 })
  wallet_address: string;

  @Column('varchar', { length: 255 })
  private_key: string;

  @Column('varchar', { length: 255, nullable: true })
  contract_address: string;

  @Column('varchar', { length: 255, nullable: true })
  symbol_name: string;

  @Column('smallint', { nullable: true })
  decimals: number;
}
