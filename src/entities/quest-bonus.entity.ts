import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { ENUM_QUEST_CATEGORY, ENUM_QUEST_TYPE } from '../enums';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Unique(['user', 'type', 'category', 'started_at', 'ended_at'])
@Entity()
export class QuestBonus extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'smallint',
    enum: ENUM_QUEST_TYPE,
  })
  type: number;

  @Column({
    type: 'smallint',
    enum: ENUM_QUEST_CATEGORY,
  })
  category: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  amount: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  amount_usd: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance_usd: number;

  @Column('boolean', { default: false })
  claim_status: boolean;

  @Column('boolean', { default: false })
  status: boolean;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  status_amount: number;

  @Column('smallint', { default: 0 })
  vip_level: number;

  @Column('timestamp')
  started_at: Date;

  @Column('timestamp')
  ended_at: Date;
}
