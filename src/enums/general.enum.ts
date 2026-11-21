export enum ENUM_TRANSACTION {
  'Deposit' = 'deposit',
  'Withdraw' = 'withdraw',
  'Swap' = 'swap',
  'Buy_Crypto' = 'buy_crypto',
  'Bonus' = 'bonus',
  'Bill' = 'bill',
}

export enum ENUM_CURRENCY {
  'Crypto' = 'crypto',
  'Fiat' = 'fiat',
}

export enum ENUM_GAME_CLIENT {
  'desktop' = 'desktop',
  'mobile' = 'mobile',
}

export enum ENUM_GAME_SORT {
  'Popular' = 'popular',
  'Ascending' = 'asc',
  'Descending' = 'desc',
  'New' = 'new',
  'Like' = 'like',
}

export enum ENUM_ORDER {
  'Ascending' = 'ASC',
  'Descending' = 'DESC',
}

export enum ENUM_GAME_CATEGORY {
  'All' = 'all',
  'Live_Casino' = 'live_casino',
  'Slots' = 'slots',
  'Table_Games' = 'table_games',
  'Blackjack' = 'blackjack',
  'New_Releases' = 'new_releases',
  'Feature_Buy_In' = 'feature_Buy_In',
  'Hot_Games' = 'hot_games',
  'Racing' = 'racing',
}

export enum ENUM_ROLLOVER {
  'All' = 'all',
  'Not_Started' = 'not_started',
  'Ongoing' = 'ongoing',
  'Done' = 'done',
}

export enum ENUM_BILL_TYPE {
  'All' = -1,
  'Game' = 1,
  'Swap' = 2,
  'Affiliate' = 3,
  'Tip' = 4,
}

export enum ENUM_TRANSACTION_TYPE {
  'Swap_Get' = 'swap_get',
  'Swap_Send' = 'swap_send',
  'Tip_Get' = 'tip_get',
  'Tip_Send' = 'tip_send',
  'Tip' = 'tip',
  'Game_Bet' = 'game_bet',
  'Game_Win' = 'game_win',
  'Deposit' = 'deposit',
  'Withdraw' = 'withdraw',
  'Withdraw_Refund' = 'withdraw_refund',
  'USDT_Rakeback' = 'usdt_rakeback',
  'Affiliate_Bonus' = 'affiliate_bonus',
  'Level_Up_Bonus' = 'level_up_bonus',
  'Weekly_Cashback_Bonus' = 'weekly_cashback_bonus',
  'Monthly_Cashback_Bonus' = 'monthly_cashback_bonus',
  'Wager_Contest_Bonus' = 'wager_contest_bonus',
  'Lucky_Spin_Bonus' = 'lucky_spin_bonus',
  'Super_Spin_Bonus' = 'super_spin_bonus',
  'Mega_Spin_Bonus' = 'mega_spin_bonus',
  'Daily_Quest_Big_Win_Bonus' = 'daily_quest_big_win_bonus',
  'Daily_Quest_Just_Wager_On_Bonus' = 'daily_quest_just_wager_on_bonus',
  'Daily_Quest_Slots_Master_Bonus' = 'daily_quest_slots_master_bonus',
  'Weekly_Quest_Wager_Week_Bonus' = 'weekly_quest_wager_week_bonus',
  'Airdrop' = 'airdrop',
}

export enum ENUM_BONUS_TYPE {
  All = 'all',
  LEVEL_UP = 'level_up',
  WEEKLY_CASHBACK = 'weekly_cashback',
  MONTHLY_CASHBACK = 'monthly_cashback',
  DEPOSIT_BONUS = 'deposit_bonus',
  LUCKY_SPIN = 'lucky_spin',
  QUEST = 'quest',
  AIRDROP = 'airdrop',
}

export enum ENUM_BONUS_CLAIM {
  LEVEL_UP = 'level_up',
  WEEKLY_CASHBACK = 'weekly_cashback',
  MONTHLY_CASHBACK = 'monthly_cashback',
  WAGER_CONTEST = 'wager_contest',
  LUCKY_SPIN = 'lucky_spin',
  QUEST = 'quest',
  AIRDROP = 'airdrop',
}

export enum ENUM_COMMENT_SORT {
  Newest = 'newest',
  Top_Comments = 'top_comments',
  Top_Likes = 'top_likes',
}
