import { Column, Entity, Unique } from 'typeorm';

import { CustomBase } from './custom-base.entity';

@Unique(['seq'])
@Entity()
export class BotBetRange extends CustomBase {
  @Column('integer')
  seq: number;

  @Column('numeric', { precision: 5, scale: 2, default: 0 })
  percentage: number;

  @Column('numeric', {
    array: true,
    precision: 10,
    scale: 2,
    default: () => 'ARRAY[]::numeric[]',
  })
  amounts: number[];
}
