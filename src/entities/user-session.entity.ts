import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class UserSession extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ length: 255 })
  browser: string;

  @Column({ length: 2 })
  location: string;

  @Column({ length: 255 })
  ip_address: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  last_used_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  delete_at: Date;
}
