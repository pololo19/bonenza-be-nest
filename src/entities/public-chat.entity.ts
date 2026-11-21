import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
export class PublicChat extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ nullable: true, default: '' })
  text: string;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => PublicChat, (chat) => chat.id)
  @JoinColumn({ name: 'reply_id' })
  reply_chat: PublicChat;

  @Column({ nullable: false, default: true })
  allow: boolean;
}
