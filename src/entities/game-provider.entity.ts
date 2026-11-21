import { Column, Entity, OneToMany, Unique } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { Game } from './game.entity';

@Entity()
@Unique(['name', 'identifier'])
export class GameProvider extends CustomBase {
  @Column({ length: 100, unique: true })
  name: string;

  @Column({ length: 50, unique: true })
  identifier: string;

  @Column('smallint', { default: 0 })
  priority: number;

  @Column('boolean', { default: true })
  is_visible: boolean;

  @OneToMany(() => Game, (game) => game.producer)
  games: Game[];
}
