import { Column, Entity, OneToMany, Unique } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
@Unique(['symbol', 'name'])
export class FiatCurrency extends CustomBase {
  @Column({ length: 3, unique: true })
  symbol: string;

  @Column({ length: 50, unique: true })
  name: string;

  @Column()
  logo: string;

  @Column('smallint')
  iso_decimals: number;

  @Column('numeric', { precision: 30, scale: 18, default: 0 })
  price: number;

  @Column('integer', { nullable: true })
  cmc_id: number;

  @Column('numeric', { precision: 30, scale: 18, default: 0 })
  withdraw_fee_percent: number;

  @OneToMany(() => User, (user) => user.setting_fiat_currency)
  users: User[];
}
