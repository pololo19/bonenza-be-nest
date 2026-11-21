export enum ENUM_BLOCKCHAIN_DEPOSIT_STATUS {
  All = -1,
  Processing = 0,
  Complete = 1,
  Failed = 2,
}

export enum ENUM_STRIPE_PAYMENT_INTENT_STATUS {
  Requires_Payment_Method = 'requires_payment_method',
  Requires_Confirmation = 'requires_confirmation',
  Requires_Action = 'requires_action',
  Processing = 'processing',
  Succeeded = 'succeeded',
  Canceled = 'canceled',
}

export enum ENUM_STRIPE_DEPOSIT_STATUS {
  Pending = 0,
  Complete = 1,
  Failed = 2,
}

export enum ENUM_WITHDRAW_STATUS {
  All = -1,
  Pending = 0,
  Processing = 1,
  Complete = 2,
  Failed = 3,
  Approved = 4,
  Rejected = 5,
}

export enum ENUM_AFFILIATE_BONUS {
  COMMISSION = 1,
  REFERRAL = 2,
}

export enum ENUM_CRYPTO {
  All = -1,
  COIN = 1,
  TOKEN = 2,
}

export enum ENUM_NETWORK {
  eth = 1,
  tron = 2,
}

export enum ENUM_GAME_TRANSACTION_ACTION {
  all = -1,
  bet = 1,
  win = 2,
  rollback = 3,
}

export enum ENUM_VIP_BONUS_TYPE {
  LEVEL_UP = 1,
  WEEKLY_CASHBACK = 2,
  MONTHLY_CASHBACK = 3,
}

export enum ENUM_QUEST_TYPE {
  Daily = 1,
  Weekly = 2,
}

export enum ENUM_QUEST_CATEGORY {
  Slots_Master = 1,
  Big_Win = 2,
  Just_Wager_On = 3,
  Wager_Week = 4,
}

export enum ENUM_ROLE {
  BOT = 0,
  ADMIN = 1,
  USER = 2,
  TIER1 = 3,
  TIER2 = 4,
  TIER3 = 5,
}

export enum ENUM_KYC_STATUS {
  REQUIRED = 1,
  PENDING = 2,
  ACCEPTED = 3,
  REJECTED = 4,
}

export enum ENUM_MULTI_LANG {
  'English' = 'en',
  'Chinese' = 'zh',
  'Vietnamese' = 'vi',
  'Indonesian' = 'id',
  'Japanese' = 'ja',
  'Korean' = 'ko',
  'French' = 'fr',
  'Spanish' = 'es',
  'Arabic' = 'ar',
  'Hindi' = 'hi',
  'Turkish' = 'tr',
  'Portuguese' = 'pt',
  'German' = 'de',
  'Thai' = 'th',
  'Italian' = 'it',
  'Ukrainian' = 'uk',
  'Malay' = 'ms',
  'Bengali' = 'bn',
  'Marathi' = 'mr',
}

export enum ENUM_CASHBACK_BONUS {
  Weekly = 0,
  Monthly = 1,
}

export enum ENUM_MEDAL {
  'Fearless_One' = 'fearless_one',
  'The_Loaded_King' = 'the_loaded_king',
  'Highest_Contributor' = 'highest_contributor',
  'The_Top_Gun' = 'the_top_gun',
  'Invincible_Lucky_Dog' = 'invincible_lucky_dog',
  'Chicken_Dinner' = 'chicken_dinner',
  'Loyal_Player' = 'loyal_player',
  'Call_Me_Richman' = 'call_me_richman',
  'The_Old_Timer' = 'the_old_timer',
  'ETHTOP_1' = 'ethstop_1',
}

export enum ENUM_SETTING {
  SWAP_FEE = 'swap_fee',
  REFERRAL_REWARDS_RULE = 'referral_rewards_rule',
  MINIMUM_BET_AMOUNT_USD_FOR_HIGH_ROLLER = 'minimum_bet_amount_usd_for_high_roller',
}

export enum ENUM_SPIN_BONUS {
  Lucky = 0,
  Super = 1,
  Mega = 2,
}

export enum ENUM_SPIN {
  Daily = 0,
  Level_Up = 1,
}
