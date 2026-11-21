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
      t_u.country AS country,
      TRUNC(COALESCE(SUM(t_bdt.amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "blockchain_deposit_transaction" "t_bdt" ON t_bdt.user_id = t_u.id AND t_bdt.status = ${ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete}
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  ),
  t_withdraw AS (
    SELECT
      t_u.country AS country,
      TRUNC(COALESCE(SUM(t_bwt.amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "blockchain_withdraw_transaction" "t_bwt" ON t_bwt.user_id = t_u.id AND t_bwt.status = ${ENUM_WITHDRAW_STATUS.Complete}
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  ),
  t_wager AS (
    SELECT
      t_u.country AS country,
      TRUNC(COALESCE(SUM(t_gbt.amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "game_blockchain_transaction" "t_gbt" ON t_gbt.user_id = t_u.id AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  ),
  t_win AS (
    SELECT
      t_u.country AS country,
      TRUNC(COALESCE(SUM(t_gbt.amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "game_blockchain_transaction" "t_gbt" ON t_gbt.user_id = t_u.id AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.win}
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  ),
  t_lu_bonus AS (
    SELECT
      t_u.country AS country,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "level_up_bonus" "t_lub" ON t_lub.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  ),
  t_cb_bonus AS (
    SELECT
      t_u.country AS country,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "cashback_bonus" "t_cbb" ON t_cbb.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  ),
  t_wcb_bonus AS (
    SELECT
      t_u.country AS country,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "wager_contest_bonus" "t_wcb" ON t_wcb.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  ),
  t_clb_bonus AS (
    SELECT
      t_u.country AS country,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "claim_bonus" "t_cbb" ON t_cbb.user_id = t_u.id
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  ),
  t_sb_bonus AS (
    SELECT
      t_u.country AS country,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "spin_bonus" "t_sb" ON t_sb.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  ),
  t_qb_bonus AS (
    SELECT
      t_u.country AS country,
      TRUNC(COALESCE(SUM(amount_usd), 0), 2) AS total
    FROM "user" "t_u"
    LEFT JOIN "quest_bonus" "t_qb" ON t_qb.user_id = t_u.id AND claim_status = true
    WHERE t_u.role = ${ENUM_ROLE.USER}
    GROUP BY t_u.country
  )
  SELECT
    DISTINCT t_u.country,
    t_wager.total - t_win.total - t_lu_bonus.total - t_cb_bonus.total - t_clb_bonus.total - t_wcb_bonus.total - t_sb_bonus.total - t_qb_bonus.total AS total_profit_amount_usd
  FROM
    "user" AS t_u
  LEFT JOIN t_deposit ON t_deposit.country = t_u.country
  LEFT JOIN t_withdraw ON t_withdraw.country = t_u.country
  LEFT JOIN t_wager ON t_wager.country = t_u.country
  LEFT JOIN t_win ON t_win.country = t_u.country
  LEFT JOIN t_lu_bonus ON t_lu_bonus.country = t_u.country
  LEFT JOIN t_cb_bonus ON t_cb_bonus.country = t_u.country
  LEFT JOIN t_clb_bonus ON t_clb_bonus.country = t_u.country
  LEFT JOIN t_wcb_bonus ON t_wcb_bonus.country = t_u.country
  LEFT JOIN t_sb_bonus ON t_sb_bonus.country = t_u.country
  LEFT JOIN t_qb_bonus ON t_qb_bonus.country = t_u.country
  WHERE t_u.role = ${ENUM_ROLE.USER} AND t_u.country IS NOT NULL
`;

@ViewEntity({
  expression,
})
export class AdminCountryRevenueList {
  @ViewColumn()
  country: string;

  @ViewColumn()
  total_profit_amount_usd: number;
}
