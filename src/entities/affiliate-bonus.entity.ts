import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { ENUM_AFFILIATE_BONUS } from '../enums';
import { BlockchainSymbol } from './blockchain-symbol.entity';
import { CustomBase } from './custom-base.entity';
import { GameBlockchainTransaction } from './game-blockchain-transaction.entity';
import { GameStripeTransaction } from './game-stripe-transaction.entity';
import { User } from './user.entity';

@Entity()
export class AffiliateBonus extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'smallint',
    enum: ENUM_AFFILIATE_BONUS,
  })
  type: number;

  @ManyToOne(() => GameBlockchainTransaction, (transaction) => transaction.id, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'game_blockchain_transaction_id' })
  game_blockchain_transaction: GameBlockchainTransaction;

  @ManyToOne(() => GameStripeTransaction, (transaction) => transaction.id, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'game_stripe_transaction_id' })
  game_stripe_transaction: GameStripeTransaction;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'friend_id' })
  friend: User;

  @Column('smallint', { nullable: true })
  friend_level: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  total_wager_amount_usd: number;

  @Column('numeric', { precision: 40, scale: 18 })
  amount: number;

  @Column('numeric', { precision: 40, scale: 18 })
  amount_usd: number;

  @ManyToOne(() => BlockchainSymbol, (symbol) => symbol.id)
  @JoinColumn({ name: 'symbol_id' })
  symbol: BlockchainSymbol;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance: number;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  wallet_balance_usd: number;

  @Column('boolean', { default: false })
  claim_status: boolean;
}
