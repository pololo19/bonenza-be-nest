import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { Game } from './game.entity';
import { User } from './user.entity';

@Entity()
export class GameReviewComment extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Game, (game) => game.id)
  @JoinColumn({ name: 'game_id' })
  game: Game;

  @Column('text')
  text: string;

  @ManyToOne(() => GameReviewComment, (comment) => comment.id)
  @JoinColumn({ name: 'comment_id' })
  comment: GameReviewComment;

  @Column('uuid', { array: true, default: [] })
  likes: string[];

  @Column('jsonb', { default: [] })
  report: any;
}
