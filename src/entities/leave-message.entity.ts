import { Column, Entity } from 'typeorm';

import { CustomBase } from './custom-base.entity';

@Entity()
export class LeaveMessage extends CustomBase {
  @Column({ length: 255, default: '' })
  text: string;

  @Column({ length: 50, default: '' })
  ip: string;

  @Column({ length: 255, default: '' })
  device: string;
}
