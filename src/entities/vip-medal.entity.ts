import { Column, Entity, Unique } from 'typeorm';

import { CustomBase } from './custom-base.entity';

@Entity()
@Unique(['name', 'start_level', 'end_level'])
export class VipMedal extends CustomBase {
  @Column('varchar', { length: 15, unique: true })
  name: string;

  @Column('smallint')
  start_level: number;

  @Column('smallint')
  end_level: number;
}
