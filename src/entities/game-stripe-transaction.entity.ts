import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { ENUM_GAME_TRANSACTION_ACTION } from '../enums';
import { AffiliateBonus } from './affiliate-bonus.entity';
import { CustomBase } from './custom-base.entity';
import { FiatCurrency } from './fiat-currency.entity';
import { Game } from './game.entity';
import { User } from './user.entity';

@Entity()
export class GameStripeTransaction extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => FiatCurrency, (symbol) => symbol.id)
  @JoinColumn({ name: 'currency_id' })
  currency: FiatCurrency;

  @ManyToOne(() => Game, (game) => game.id)
  @JoinColumn({ name: 'game_id' })
  game: Game;

  @Column({ length: 255 })
  gcp_game_id: string;

  @Column({
    type: 'smallint',
    enum: ENUM_GAME_TRANSACTION_ACTION,
    default: ENUM_GAME_TRANSACTION_ACTION.bet,
  })
  action: number;

  @Column('numeric', { precision: 40, scale: 18, nullable: true })
  amount: number;

  @Column('numeric', { precision: 40, scale: 18, nullable: true })
  amount_usd: number;

  //  calculate for win
  @Column('numeric', { precision: 30, scale: 18, default: 0 })
  profit_multiplier: number;

  @Column({ length: 255 })
  action_id: string;

  @Column({ length: 255, nullable: true })
  original_action_id: string;

  @Column('numeric', { precision: 40, scale: 18, nullable: true })
  jackpot_contribution: number;

  @Column('numeric', { precision: 40, scale: 18, nullable: true })
  jackpot_win: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance_usd: number;

  @OneToMany(
    () => AffiliateBonus,
    (affiliate_bouns) => affiliate_bouns.game_blockchain_transaction,
    {
      cascade: true,
    },
  )
  affiliate_bounses: AffiliateBonus[];
}
