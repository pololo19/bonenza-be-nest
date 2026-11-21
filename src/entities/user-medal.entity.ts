import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { ENUM_MEDAL } from '../enums';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class UserMedal extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('enum', { enum: ENUM_MEDAL })
  medal: ENUM_MEDAL;
}
