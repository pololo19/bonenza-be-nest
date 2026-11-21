import { Entity, JoinColumn, OneToOne, Unique } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { Game } from './game.entity';

@Unique(['game'])
@Entity()
export class BotGame extends CustomBase {
  @OneToOne(() => Game, (game) => game.id)
  @JoinColumn({ name: 'game_id' })
  game: Game;
}
