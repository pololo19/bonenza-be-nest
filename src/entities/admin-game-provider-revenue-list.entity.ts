import { ViewColumn, ViewEntity } from 'typeorm';

import { ENUM_GAME_TRANSACTION_ACTION, ENUM_ROLE } from '../enums';

const expression = `
  WITH t_wager AS (
    SELECT
      t_gp.id AS id,
      TRUNC(COALESCE(SUM(t_gbt.amount_usd), 0), 2) AS total
    FROM "game_provider" "t_gp"
    LEFT JOIN "game" "t_g" ON t_gp.id = t_g.producer
    LEFT JOIN "user" "t_u" ON t_u.role = ${ENUM_ROLE.USER}
    LEFT JOIN "game_blockchain_transaction" "t_gbt" ON t_gbt.game_id = t_g.id AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet} AND t_gbt.user_id = t_u.id
    GROUP BY t_gp.id
  ),
  t_win AS (
    SELECT
      t_gp.id AS id,
      TRUNC(COALESCE(SUM(t_gbt.amount_usd), 0), 2) AS total
    FROM "game_provider" "t_gp"
    LEFT JOIN "game" "t_g" ON t_gp.id = t_g.producer
    LEFT JOIN "user" "t_u" ON t_u.role = ${ENUM_ROLE.USER}
    LEFT JOIN "game_blockchain_transaction" "t_gbt" ON t_gbt.game_id = t_g.id AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.win} AND t_gbt.user_id = t_u.id
    GROUP BY t_gp.id
  )
  SELECT
    t_gp.id as id,
    t_gp.name as name,
    t_gp.identifier as identifier,
    t_wager.total - t_win.total as ggr_amount_usd
  FROM
    "game_provider" AS t_gp
  LEFT JOIN t_wager ON t_wager.id = t_gp.id
  LEFT JOIN t_win ON t_win.id = t_gp.id
`;

@ViewEntity({
  expression,
})
export class AdminGameProviderRevenueList {
  @ViewColumn()
  id: string;

  @ViewColumn()
  name: string;

  @ViewColumn()
  identifier: string;

  @ViewColumn()
  ggr_amount_usd: string;
}
