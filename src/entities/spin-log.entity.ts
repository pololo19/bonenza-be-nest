import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { ENUM_SPIN } from '../enums';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class SpinLog extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'smallint',
    enum: ENUM_SPIN,
  })
  type: number;

  @Column({
    type: 'smallint',
  })
  vip_level: number;

  @Column({
    type: 'smallint',
    default: 1,
  })
  count: number;
}
