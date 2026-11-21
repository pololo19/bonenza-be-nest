import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { ENUM_VIP_BONUS_TYPE } from '../enums';
import { CustomBase } from './custom-base.entity';
import { VipMedal } from './vip-medal.entity';

@Entity()
export class VipLevelBenefit extends CustomBase {
  @ManyToOne(() => VipMedal, (medal) => medal.id)
  @JoinColumn({ name: 'medal_id' })
  medal: VipMedal;

  @Column({
    type: 'smallint',
    enum: ENUM_VIP_BONUS_TYPE,
  })
  bonus_type: number;

  @Column('numeric', { precision: 30, scale: 2, nullable: true })
  level_up_total_prize_amount_usd: number;

  @Column('numeric', { precision: 4, scale: 2, nullable: true })
  weekly_cashback_percentage: number;

  @Column('numeric', { precision: 4, scale: 2, nullable: true })
  monthly_cashback_percentage: number;
}
