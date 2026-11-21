import { Column, Entity } from 'typeorm';

import { CustomBase } from './custom-base.entity';

@Entity()
export class SystemNotification extends CustomBase {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  link: string;
}
