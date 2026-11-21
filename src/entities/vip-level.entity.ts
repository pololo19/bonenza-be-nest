import { Column, Entity, Unique } from 'typeorm';

import { CustomBase } from './custom-base.entity';

@Entity()
@Unique(['level', 'name'])
export class VipLevel extends CustomBase {
  @Column('smallint', { unique: true })
  level: number;

  @Column('varchar', { length: 10, unique: true })
  name: string;

  @Column('numeric', { precision: 40, scale: 18 })
  from_xp: number;

  @Column('numeric', { precision: 40, scale: 18 })
  to_xp: number;

  @Column('numeric', { precision: 30, scale: 18 })
  level_up_bonus: number;
}
