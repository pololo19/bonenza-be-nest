import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { Tier } from './tier.entity';

@Unique(['tier', 'payout_at'])
@Entity()
export class TierPayoutTransaction extends CustomBase {
  @ManyToOne(() => Tier, (tier) => tier.id)
  @JoinColumn({ name: 'tier_id' })
  tier: Tier;

  @Column('varchar', { length: 10 })
  payout_at: string;

  @Column('boolean', { default: false })
  status: boolean;

  @Column('numeric', { precision: 4, scale: 2, default: 0 })
  wager_settlement_percent: number;

  @Column('numeric', { precision: 4, scale: 2, default: 0 })
  losing_settlement_percent: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wager_commission_amount_usd: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  losing_commission_amount_usd: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  amount_usd: number;
}
