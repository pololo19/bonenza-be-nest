import { Column, Entity } from 'typeorm';

import { CustomBase } from './custom-base.entity';

@Entity()
export class Setting extends CustomBase {
  @Column('varchar', { length: 255, unique: true })
  key: string;

  @Column('json')
  value: any;
}
