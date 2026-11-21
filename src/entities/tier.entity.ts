import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { ENUM_ROLE } from '../enums';
import { CustomBase } from './custom-base.entity';

@Entity()
export class Tier extends CustomBase {
  @Column({ length: 255, unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column('varchar', { length: 20, nullable: true })
  phone: string;

  @Column({ length: 80 })
  password: string;

  @Column({
    type: 'smallint',
    enum: ENUM_ROLE,
  })
  role: number;

  @Column({ nullable: true })
  code: string;

  @Column('numeric', { precision: 4, scale: 2, default: 0 })
  wager_settlement_percent: number;

  @Column('numeric', { precision: 4, scale: 2, default: 0 })
  losing_settlement_percent: number;

  @ManyToOne(() => Tier, (tier) => tier.id)
  @JoinColumn({ name: 'tier1_id' })
  tier1: Tier;

  @ManyToOne(() => Tier, (tier) => tier.id)
  @JoinColumn({ name: 'tier2_id' })
  tier2: Tier;
}
