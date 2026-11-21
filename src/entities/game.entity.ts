import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { CustomBase } from './custom-base.entity';
import { GameBlockchainTransaction } from './game-blockchain-transaction.entity';
import { GameFavorite } from './game-favorite.entity';
import { GameProvider } from './game-provider.entity';

@Entity()
export class Game extends CustomBase {
  @Column({ length: 255 })
  title: string;

  @Column({ length: 255, unique: true })
  identifier: string;

  @Column({ length: 255, nullable: true })
  identifier2: string;

  @Column('varchar', { length: 255 })
  provider: string;

  @ManyToOne(() => GameProvider, (provider) => provider.id)
  @JoinColumn({ name: 'producer' })
  producer: GameProvider;

  @Column({ length: 255 })
  category: string;

  @Column({ length: 100 })
  theme: string;

  @Column('boolean', { default: false })
  has_freespins: boolean;

  @Column({ length: 255, nullable: true })
  feature_group: string;

  @Column('boolean', { default: false })
  customised: boolean;

  @Column('text', { array: true })
  devices: string[];

  @Column('text', { array: true })
  licenses: string[];

  @Column('varchar', { length: 255 })
  jackpot_type: string;

  @Column('boolean', { default: false })
  forbid_bonus_play: boolean;

  @Column('numeric', { precision: 40, scale: 2, nullable: true, default: 0 })
  payout: number;

  @Column({ length: 255, nullable: true })
  volatility_rating: string;

  @Column('boolean', { nullable: true })
  has_jackpot: boolean;

  @Column('boolean', { nullable: true })
  hd: boolean;

  @Column('date', { nullable: true })
  released_at: Date;

  @Column('boolean', { nullable: true })
  bonus_buy: boolean;

  @Column('numeric', { precision: 40, scale: 2, nullable: true })
  multiplier: number;

  @Column('json')
  restrictions: object;

  @Column({ nullable: true })
  lines: number;

  @Column('integer', { nullable: true })
  ways: number;

  @Column({ nullable: true })
  description: string;

  @Column('boolean', { nullable: true })
  has_live: boolean;

  @Column('boolean', { nullable: true })
  accumulating: boolean;

  @Column('numeric', { precision: 40, scale: 2, nullable: true })
  hit_rate: number;

  @Column('varchar', { length: 255, nullable: true })
  accounting_group: string;

  @Column('boolean', { default: true })
  allow_demo: boolean;

  @Column('smallint', { default: 0 })
  priority: number;

  @Column('boolean', { default: true })
  is_visible: boolean;

  @OneToMany(() => GameFavorite, (favorite) => favorite.id)
  game_favorite_likes: GameFavorite[];

  @OneToMany(() => GameBlockchainTransaction, (transaction) => transaction.game)
  game_blockchain_transactions: GameBlockchainTransaction[];
}
