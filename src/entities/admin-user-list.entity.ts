import { ViewColumn, ViewEntity } from 'typeorm';

import {
  ENUM_BLOCKCHAIN_DEPOSIT_STATUS,
  ENUM_GAME_TRANSACTION_ACTION,
  ENUM_ROLE,
  ENUM_WITHDRAW_STATUS,
} from '../enums';

const expression = `
  WITH t_deposit AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(t_bdt.amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "blockchain_deposit_transaction" "t_bdt" ON t_bdt.user_id = t_u.id AND t_bdt.status = ${ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete} AND t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_withdraw AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(t_bwt.amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "blockchain_withdraw_transaction" "t_bwt" ON t_bwt.user_id = t_u.id AND t_bwt.status = ${ENUM_WITHDRAW_STATUS.Complete} AND t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_wager AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(t_gbt.amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "game_blockchain_transaction" "t_gbt" ON t_gbt.user_id = t_u.id AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet} AND t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_win AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(t_gbt.amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "game_blockchain_transaction" "t_gbt" ON t_gbt.user_id = t_u.id AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.win} AND t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_lu_bonus AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "level_up_bonus" "t_lub" ON t_lub.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_cb_bonus AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "cashback_bonus" "t_cbb" ON t_cbb.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_wcb_bonus AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "wager_contest_bonus" "t_wcb" ON t_wcb.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_clb_bonus AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "claim_bonus" "t_cbb" ON t_cbb.user_id = t_u.id
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_sb_bonus AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "spin_bonus" "t_sb" ON t_sb.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_qb_bonus AS (
    SELECT
      t_u.id AS id,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "quest_bonus" "t_qb" ON t_qb.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  ),
  t_live AS (
    SELECT
      t_u.id AS id,
      COUNT(t_gbt.id) <> 0 AS is_live
    FROM "user" "t_u"
    LEFT JOIN "game_blockchain_transaction" "t_gbt" ON t_gbt.user_id = t_u.id AND t_gbt.created_at >= NOW() - INTERVAL '5 minutes'
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.id
  )
  SELECT
    t_u.id as id,
    t_u.created_at as registered_at,
    t_u.vip_level as vip_level,
    t_u.name as name,
    t_u.avatar as avatar,
    t_u.email as email,
    t_u.phone as phone,
    t_u.telegram_user_name as telegram_user_name,
    t_u.wallet_address as wallet_address,
    t_u.allowed as allowed,
    t_u.referral_code as referral_code,
    t_u.country as country_code,
    t_u.role as role,
    t_u.tier1_id as tier1_id,
    t_u.tier2_id as tier2_id,
    t_u.tier3_id as tier3_id,
    t_deposit.total AS total_deposit_amount_usd,
    t_withdraw.total AS total_withdraw_amount_usd,
    t_wager.total AS total_wager_amount_usd,
    t_win.total AS total_win_amount_usd,
    t_lu_bonus.total + t_cb_bonus.total + t_clb_bonus.total + t_wcb_bonus.total + t_sb_bonus.total + t_qb_bonus.total AS total_bonus_amount_usd,
    t_win.total - t_wager.total + t_lu_bonus.total + t_cb_bonus.total + t_clb_bonus.total + t_wcb_bonus.total + t_sb_bonus.total + t_qb_bonus.total AS total_profit_amount_usd,
    t_live.is_live as is_live
  FROM
    "user" AS t_u
  LEFT JOIN t_deposit ON t_deposit.id = t_u.id
  LEFT JOIN t_withdraw ON t_withdraw.id = t_u.id
  LEFT JOIN t_wager ON t_wager.id = t_u.id
  LEFT JOIN t_win ON t_win.id = t_u.id
  LEFT JOIN t_lu_bonus ON t_lu_bonus.id = t_u.id
  LEFT JOIN t_cb_bonus ON t_cb_bonus.id = t_u.id
  LEFT JOIN t_clb_bonus ON t_clb_bonus.id = t_u.id
  LEFT JOIN t_wcb_bonus ON t_wcb_bonus.id = t_u.id
  LEFT JOIN t_sb_bonus ON t_sb_bonus.id = t_u.id
  LEFT JOIN t_qb_bonus ON t_qb_bonus.id = t_u.id
  LEFT JOIN t_live ON t_live.id = t_u.id
  WHERE t_u.role = ${ENUM_ROLE.USER}
`;

@ViewEntity({
  expression,
})
export class AdminUserList {
  @ViewColumn()
  id: string;

  @ViewColumn()
  registered_at: string;

  @ViewColumn()
  vip_level: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  avatar: string;

  @ViewColumn()
  email: string;

  @ViewColumn()
  phone: string;

  @ViewColumn()
  allowed: boolean;

  @ViewColumn()
  telegram_user_name: string;

  @ViewColumn()
  wallet_address: string;

  @ViewColumn()
  referral_code: string;

  @ViewColumn()
  country_code: string;

  @ViewColumn()
  tier1_id: string;

  @ViewColumn()
  tier2_id: string;

  @ViewColumn()
  tier3_id: string;

  @ViewColumn()
  total_deposit_amount_usd: number;

  @ViewColumn()
  total_withdraw_amount_usd: number;

  @ViewColumn()
  total_wager_amount_usd: number;

  @ViewColumn()
  total_win_amount_usd: number;

  @ViewColumn()
  total_bonus_amount_usd: number;

  @ViewColumn()
  total_profit_amount_usd: number;

  @ViewColumn()
  is_live: number;
}
