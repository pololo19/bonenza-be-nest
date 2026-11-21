import { Column, Entity } from 'typeorm';

import { CustomBase } from './custom-base.entity';

@Entity()
export class BlockchainWithdrawPool extends CustomBase {
  @Column('uuid')
  transaction_id: string;

  @Column('varchar', { length: 255 })
  network: string;

  @Column('smallint')
  type: number;

  @Column('varchar', { length: 255 })
  wallet_address: string;

  @Column('numeric', { precision: 40, scale: 18 })
  amount: number;

  @Column('varchar', { length: 255, nullable: true })
  contract_address: string;

  @Column('smallint', { nullable: true })
  decimals: number;

  @Column('varchar', { length: 255 })
  user_id: string;

  @Column('varchar', { length: 255 })
  symbol_id: string;

  @Column('varchar', { length: 255 })
  symbol_name: string;

  @Column('numeric', { precision: 40, scale: 18 })
  symbol_price: number;
}
