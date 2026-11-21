import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { ENUM_KYC_STATUS, ENUM_MULTI_LANG, ENUM_ROLE } from '../enums';
import { AffiliateBonus } from './affiliate-bonus.entity';
import { BlockchainSwapTransaction } from './blockchain-swap-transaction.entity';
import { CustomBase } from './custom-base.entity';
import { FiatCurrency } from './fiat-currency.entity';
import { GameBlockchainTransaction } from './game-blockchain-transaction.entity';
import { GameFavorite } from './game-favorite.entity';
import { PublicChat } from './public-chat.entity';
import { QuestBonus } from './quest-bonus.entity';
import { Tier } from './tier.entity';
import { UserMedal } from './user-medal.entity';
import { UserSession } from './user-session.entity';

export type VerifyCodeType = {
  code: string;
  expired_at: Date;
};

@Entity()
export class User extends CustomBase {
  @Column({ length: 255 })
  name: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ length: 80, nullable: true })
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({
    type: 'smallint',
    enum: ENUM_ROLE,
    default: ENUM_ROLE.USER,
  })
  role: number;

  @Column({ nullable: true })
  kyc_photo_front: string;

  @Column({ nullable: true })
  kyc_photo_back: string;

  @Column({
    type: 'smallint',
    enum: ENUM_KYC_STATUS,
    default: ENUM_KYC_STATUS.REQUIRED,
  })
  kyc: number;

  // verified
  @Column({ default: false })
  allowed: boolean;

  @Column('boolean', { default: false })
  email_verified: boolean;

  @Column('boolean', { default: false })
  phone_verified: boolean;

  @Column('varchar', { length: 20, nullable: true })
  telegram_user_name: string;

  @Column('varchar', { length: 255, nullable: true })
  wallet_address: string;

  @Column('varchar', { length: 255, nullable: true })
  wallet_signature: string;

  @Column('numeric', { precision: 40, scale: 18, default: 0 })
  bonus_pool: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  rollover_at: Date;

  @Column({ length: 8, nullable: true })
  referral_code: string;

  // sign-up
  @Column({ type: 'jsonb', default: {}, nullable: true })
  verify_code: { code: string; expired_at: Date };

  // two factor authenticate
  @Column({ default: false })
  tfa: boolean;

  // secret key for 2fa
  @Column({ default: '' })
  secret_key: string;

  @Column({ type: 'jsonb', default: {} })
  reset_pwd: { code: string; expired_at: Date };

  @Column('smallint', { default: 0 })
  vip_level: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'referral_user_id' })
  referral_user: User;

  @Column('varchar', { length: 2, nullable: true })
  country: string;

  @Column('varchar', { length: 50, nullable: true })
  ip: string;

  @OneToMany(() => User, (friend) => friend.id)
  friends: User[];

  @Column('integer', { default: 1 })
  total_spin_count: number;

  /*  Setting  */

  @ManyToOne(() => FiatCurrency, (fiat) => fiat.id)
  @JoinColumn({ name: 'setting_fiat_currency_id' })
  setting_fiat_currency: FiatCurrency;

  @Column({
    type: 'varchar',
    length: 2,
    enum: ENUM_MULTI_LANG,
    default: ENUM_MULTI_LANG.English,
  })
  setting_language: string;

  @Column('boolean', { default: true })
  setting_show_full_name_crypto: boolean;

  @Column('boolean', { default: false })
  setting_receive_market_promotion: boolean;

  @Column('boolean', { default: true })
  setting_hide_gaming_data: boolean;

  @Column('boolean', { default: true })
  setting_hide_user_name: boolean;

  @Column('boolean', { default: false })
  setting_refuse_tip_from_strangers: boolean;

  @Column('boolean', { default: false })
  setting_view_in_fiat: boolean;

  // unix time
  @Column('bigint', { nullable: true, default: null })
  disabled_to: number; // self exclusive, account is restricted untill `disabled_to`

  @Column('bigint', { nullable: true, default: null })
  restricted_to: number; // if change password, withdraw is restricted untill `restricted_to`

  @Column('boolean', { default: false })
  disabled_withdraw: boolean; // if true, withdraw is disabled

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  last_joined_at: Date;

  /*  Tier */

  @ManyToOne(() => Tier, (tier) => tier.id)
  @JoinColumn({ name: 'tier1_id' })
  tier1: Tier;

  @ManyToOne(() => Tier, (tier) => tier.id)
  @JoinColumn({ name: 'tier2_id' })
  tier2: Tier;

  @ManyToOne(() => Tier, (tier) => tier.id)
  @JoinColumn({ name: 'tier3_id' })
  tier3: Tier;

  /* Relation  */

  @OneToMany(() => PublicChat, (chat) => chat.user)
  chats: PublicChat[];

  @OneToMany(() => UserSession, (session) => session.user)
  sessions: UserSession[];

  @OneToMany(() => GameFavorite, (favorite) => favorite.user)
  game_favorite: GameFavorite[];

  @OneToMany(() => GameBlockchainTransaction, (transaction) => transaction.user)
  game_blockchain_transactions: GameBlockchainTransaction[];

  @OneToMany(() => QuestBonus, (bonus) => bonus.user)
  quest_bonuses: QuestBonus[];

  @OneToMany(() => AffiliateBonus, (bonus) => bonus.user)
  affiliate_bonuses: AffiliateBonus[];

  @OneToMany(() => BlockchainSwapTransaction, (transaction) => transaction.user)
  swap_transactions: BlockchainSwapTransaction[];

  @OneToMany(() => UserMedal, (medal) => medal.user)
  medals: UserMedal[];
}
