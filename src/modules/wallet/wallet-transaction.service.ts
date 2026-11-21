import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BlockchainCryptocurrency,
  BlockchainDepositTransaction,
  BlockchainSwapTransaction,
  BlockchainSymbol,
  BlockchainWithdrawTransaction,
  FiatCurrency,
  Game,
  GameBlockchainTransaction,
  StripeDepositTransaction,
  TipTransaction,
  User,
  WithdrawAffiliateBonus,
} from 'entities';
import {
  ENUM_BILL_TYPE,
  ENUM_BLOCKCHAIN_DEPOSIT_STATUS,
  ENUM_CASHBACK_BONUS,
  ENUM_CURRENCY,
  ENUM_GAME_TRANSACTION_ACTION,
  ENUM_QUEST_CATEGORY,
  ENUM_TRANSACTION,
  ENUM_TRANSACTION_TYPE,
  ENUM_WITHDRAW_STATUS,
} from 'enums';
import { Repository } from 'typeorm';

@Injectable()
export class WalletTransactionService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(BlockchainSwapTransaction)
    private BlockchainSwapTransactionRepository: Repository<BlockchainSwapTransaction>,
    @InjectRepository(BlockchainDepositTransaction)
    private BlockchainDepositTransactionRepository: Repository<BlockchainDepositTransaction>,
    @InjectRepository(BlockchainWithdrawTransaction)
    private BlockchainWithdrawTransactionRepository: Repository<BlockchainWithdrawTransaction>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
    @InjectRepository(StripeDepositTransaction)
    private StripeDepositTransactionRepository: Repository<StripeDepositTransaction>,
    @InjectRepository(WithdrawAffiliateBonus)
    private WithdrawAffiliateBonusRepository: Repository<WithdrawAffiliateBonus>,
    @InjectRepository(TipTransaction)
    private TipTransactionRepository: Repository<TipTransaction>,
  ) {}
  async getTransaction(
    user: User,
    type: ENUM_TRANSACTION,
    symbol_id: string,
    startDate: number,
    endDate: number,
    page: number,
    pageSize: number,
    status: number,
  ) {
    if (startDate >= endDate) {
      throw new BadRequestException('Wallet: get transactions', {
        description: 'The start date is equal to or later than the end date',
      });
    }
    if (type === ENUM_TRANSACTION.Deposit) {
      if (status < -1 || status > 2) {
        throw new BadRequestException('Wallet: get deposit transactions', {
          description: 'Invalid Status',
        });
      }

      const sql_count_b =
        this.BlockchainDepositTransactionRepository.createQueryBuilder('t_bdt')
          .select('COUNT(*)', 'total_count')
          .innerJoin(
            BlockchainCryptocurrency,
            't_bc',
            't_bdt.cryptocurrency_id = t_bc.id',
          )
          .where(
            `t_bc.symbol_id = ${
              !symbol_id ? 't_bc.symbol_id' : "'" + symbol_id + "'"
            }`,
          )
          .andWhere(`t_bdt.updated_at >= to_timestamp(${startDate})`)
          .andWhere(`t_bdt.updated_at <= to_timestamp(${endDate})`)
          .andWhere(`t_bdt.status = ${status === -1 ? 't_bdt.status' : status}`)
          .andWhere(`t_bdt.user_id = '${user.id}'`)
          .getQuery();

      const sql_count_s =
        this.StripeDepositTransactionRepository.createQueryBuilder('t_sdt')
          .select('COUNT(*)', 'total_count')
          .innerJoin(FiatCurrency, 't_fc', 't_fc.id = t_sdt.fiat_id')
          .where(`t_fc.id = ${!symbol_id ? 't_fc.id' : "'" + symbol_id + "'"}`)
          .andWhere(`t_sdt.created_at >= to_timestamp(${startDate})`)
          .andWhere(`t_sdt.created_at <= to_timestamp(${endDate})`)
          .andWhere(`t_sdt.status = ${status === -1 ? 't_sdt.status' : status}`)
          .andWhere(`t_sdt.user_id = '${user.id}'`)
          .getQuery();

      let result = await this.BlockchainDepositTransactionRepository.query(`
          SELECT t_b.total_count + t_s.total_count as total_count
          FROM (${sql_count_b}) as t_b, (${sql_count_s}) as t_s
        `);

      const total_count = Number(result[0].total_count);

      let total_page = Math.ceil(total_count / pageSize);
      total_page = total_page === 0 ? 1 : total_page;

      const sql_rows_b =
        this.BlockchainDepositTransactionRepository.createQueryBuilder('t_bdt')
          .select([
            't_bdt.updated_at as time',
            't_bdt.id as id',
            't_bdt.hash as hash',
            't_bdt.amount as amount',
            't_bdt.amount_usd as amount_usd',
            't_bdt.from_address as from_address',
            't_bdt.status as status',
            't_bs.id as currency_id',
            't_bs.symbol as currency_name',
            't_bs.logo as currency_logo',
            "'crypto' as currency_type",
          ])
          .innerJoin(
            BlockchainCryptocurrency,
            't_bc',
            't_bdt.cryptocurrency_id = t_bc.id',
          )
          .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_bc.symbol_id')
          .where(
            `t_bc.symbol_id = ${
              !symbol_id ? 't_bc.symbol_id' : "'" + symbol_id + "'"
            }`,
          )
          .andWhere(`t_bdt.updated_at >= to_timestamp(${startDate})`)
          .andWhere(`t_bdt.updated_at <= to_timestamp(${endDate})`)
          .andWhere(`t_bdt.status = ${status === -1 ? 't_bdt.status' : status}`)
          .andWhere(`t_bdt.user_id = '${user.id}'`)
          .getQuery();

      const sql_rows_s =
        this.StripeDepositTransactionRepository.createQueryBuilder('t_sdt')
          .select([
            't_sdt.created_at as time',
            't_sdt.id as id',
            "'' as hash",
            't_sdt.amount as amount',
            't_sdt.amount_usd as amount_usd',
            "'' as from_address",
            't_sdt.status as status',
            't_fc.id as currency_id',
            't_fc.symbol as currency_name',
            't_fc.logo as currency_logo',
            "'fiat' as currency_type",
          ])
          .innerJoin(FiatCurrency, 't_fc', 't_fc.id = t_sdt.fiat_id')
          .where(`t_fc.id = ${!symbol_id ? 't_fc.id' : "'" + symbol_id + "'"}`)
          .andWhere(`t_sdt.created_at >= to_timestamp(${startDate})`)
          .andWhere(`t_sdt.created_at <= to_timestamp(${endDate})`)
          .andWhere(`t_sdt.status = ${status === -1 ? 't_sdt.status' : status}`)
          .andWhere(`t_sdt.user_id = '${user.id}'`)
          .getQuery();
      result = await this.BlockchainDepositTransactionRepository.query(`
          SELECT *
          FROM (
            (${sql_rows_b})
            UNION
            (${sql_rows_s})
          ) as t_tx
          ORDER BY t_tx.time DESC
          OFFSET ${(page - 1) * pageSize}
          LIMIT ${pageSize}
        `);
      return {
        total_count,
        page,
        page_size: pageSize,
        total_page,
        data: result,
      };
    } else if (type === ENUM_TRANSACTION.Withdraw) {
      if (status < -1 || status > 5) {
        throw new BadRequestException('Wallet: get withdraw transactions', {
          description: 'Invalid Status',
        });
      }
      let result =
        await this.BlockchainWithdrawTransactionRepository.createQueryBuilder(
          't_bwt',
        )
          .select('COUNT(*)', 'total_count')
          .innerJoin(
            BlockchainCryptocurrency,
            't_bc',
            't_bwt.cryptocurrency_id = t_bc.id',
          )
          .where(
            `t_bc.symbol_id = ${
              !symbol_id ? 't_bc.symbol_id' : "'" + symbol_id + "'"
            }`,
          )
          .andWhere('t_bwt.updated_at >= to_timestamp(:startDate)', {
            startDate,
          })
          .andWhere('t_bwt.updated_at <= to_timestamp(:endDate)', { endDate })
          .andWhere(`t_bwt.status = ${status === -1 ? 't_bwt.status' : status}`)
          .andWhere('t_bwt.user_id = :user_id', { user_id: user.id })
          .getRawOne();

      const total_count = Number(result.total_count);

      let total_page = Math.ceil(total_count / pageSize);
      total_page = total_page === 0 ? 1 : total_page;

      result =
        await this.BlockchainWithdrawTransactionRepository.createQueryBuilder(
          't_bwt',
        )
          .select('t_bwt.updated_at', 'time')
          .addSelect('t_bwt.id', 'id')
          .addSelect('t_bwt.hash', 'hash')
          .addSelect('t_bwt.amount_with_fee', 'amount_with_fee')
          .addSelect('t_bwt.amount_with_fee_usd', 'amount_with_fee_usd')
          .addSelect('t_bwt.amount', 'amount')
          .addSelect('t_bwt.amount_usd', 'amount_usd')
          .addSelect('t_bwt.to_address', 'to_address')
          .addSelect('t_bwt.status', 'status')
          .addSelect('t_bs.id', 'currency_id')
          .addSelect('t_bs.symbol', 'currency_name')
          .addSelect('t_bs.logo', 'currency_logo')
          .innerJoin(
            BlockchainCryptocurrency,
            't_bc',
            't_bwt.cryptocurrency_id = t_bc.id',
          )
          .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_bc.symbol_id')
          .where(
            `t_bc.symbol_id = ${
              !symbol_id ? 't_bc.symbol_id' : "'" + symbol_id + "'"
            }`,
          )
          .andWhere('t_bwt.updated_at >= to_timestamp(:startDate)', {
            startDate,
          })
          .andWhere('t_bwt.updated_at <= to_timestamp(:endDate)', { endDate })
          .andWhere(`t_bwt.status = ${status === -1 ? 't_bwt.status' : status}`)
          .andWhere('t_bwt.user_id = :user_id', { user_id: user.id })
          .orderBy('t_bwt.updated_at', 'DESC')
          .limit(pageSize)
          .offset((page - 1) * pageSize)
          .getRawMany();
      return {
        total_count,
        total_page,
        page,
        page_size: pageSize,
        data: result,
      };
    } else if (type === ENUM_TRANSACTION.Swap) {
      let result =
        await this.BlockchainSwapTransactionRepository.createQueryBuilder(
          't_bst',
        )
          .select('COUNT(*)', 'total_count')
          .where(
            `(t_bst.from_symbol_id = ${
              !symbol_id ? 't_bst.from_symbol_id' : "'" + symbol_id + "'"
            } OR t_bst.to_symbol_id = ${
              !symbol_id ? 't_bst.to_symbol_id' : "'" + symbol_id + "'"
            })`,
          )
          .andWhere('t_bst.created_at >= to_timestamp(:startDate)', {
            startDate,
          })
          .andWhere('t_bst.created_at <= to_timestamp(:endDate)', { endDate })
          .andWhere('t_bst.user_id = :user_id', { user_id: user.id })
          .getRawOne();

      const total_count = Number(result.total_count);

      let total_page = Math.ceil(total_count / pageSize);
      total_page = total_page === 0 ? 1 : total_page;

      result =
        await this.BlockchainSwapTransactionRepository.createQueryBuilder(
          't_bst',
        )
          .select('t_bst.created_at', 'time')
          .addSelect('t_bst.from_amount', 'from_amount')
          .addSelect('t_bst.from_amount_usd', 'from_amount_usd')
          .addSelect('t_bst.to_amount', 'to_amount')
          .addSelect('t_bst.to_amount_usd', 'to_amount_usd')
          .addSelect('t_bs_from.symbol', 'from_symbol')
          .addSelect('t_bs_from.logo', 'from_symbol_logo')
          .addSelect('t_bs_to.symbol', 'to_symbol')
          .addSelect('t_bs_to.logo', 'to_symbol_logo')
          .leftJoin(
            BlockchainSymbol,
            't_bs_from',
            't_bs_from.id = t_bst.from_symbol_id',
          )
          .leftJoin(
            BlockchainSymbol,
            't_bs_to',
            't_bs_to.id = t_bst.to_symbol_id',
          )
          .where(
            `(t_bst.from_symbol_id = ${
              !symbol_id ? 't_bst.from_symbol_id' : "'" + symbol_id + "'"
            } OR t_bst.to_symbol_id = ${
              !symbol_id ? 't_bst.to_symbol_id' : "'" + symbol_id + "'"
            })`,
          )
          .andWhere('t_bst.created_at >= to_timestamp(:startDate)', {
            startDate,
          })
          .andWhere('t_bst.created_at <= to_timestamp(:endDate)', { endDate })
          .andWhere('t_bst.user_id = :user_id', { user_id: user.id })
          .orderBy('t_bst.created_at', 'DESC')
          .limit(pageSize)
          .offset((page - 1) * pageSize)
          .getRawMany();

      return {
        total_count,
        total_page,
        page,
        page_size: pageSize,
        data: result,
      };
    } else if (type === ENUM_TRANSACTION.Buy_Crypto) {
    } else if (type === ENUM_TRANSACTION.Bonus) {
      let result = await this.UserRepository.query(`
        SELECT COUNT(id) AS total_count
          FROM
          (
            (
              SELECT
                t_wab.id AS id
              FROM "withdraw_affiliate_bonus" "t_wab" 
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_wab"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_wab"."symbol_id" 
              WHERE "t_wab"."symbol_id" = ${
                !symbol_id ? '"t_wab"."symbol_id"' : "'" + symbol_id + "'"
              } 
              AND "t_wab"."created_at" >= to_timestamp(${startDate})
              AND "t_wab"."created_at" <= to_timestamp(${endDate})
            )
            UNION
            (
              SELECT
                t_cb.id AS id
              FROM "claim_bonus" AS "t_cb"
              INNER JOIN "blockchain_symbol" AS t_bs ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_cb.created_at >= to_timestamp(${startDate})
              AND t_cb.created_at <= to_timestamp(${endDate})
              AND t_cb.user_id = '${user.id}'
            )
            UNION
            (
              SELECT
                t_lub.id AS id
              FROM "level_up_bonus" AS "t_lub"
              INNER JOIN "blockchain_symbol" AS t_bs ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_lub.updated_at >= to_timestamp(${startDate})
              AND t_lub.updated_at <= to_timestamp(${endDate})
              AND t_lub.user_id = '${user.id}'
              AND t_lub.claim_status = true
            )
            UNION
            (
              SELECT
                t_cb.id AS id
              FROM "cashback_bonus" AS "t_cb"
              INNER JOIN "blockchain_symbol" AS t_bs ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_cb.updated_at >= to_timestamp(${startDate})
              AND t_cb.updated_at <= to_timestamp(${endDate})
              AND t_cb.user_id = '${user.id}'
              AND t_cb.claim_status = true
            )
            UNION
            (
              SELECT
                t_wcb.id AS id
              FROM "wager_contest_bonus" AS "t_wcb"
              INNER JOIN "blockchain_symbol" AS t_bs ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_wcb.updated_at >= to_timestamp(${startDate})
              AND t_wcb.updated_at <= to_timestamp(${endDate})
              AND t_wcb.user_id = '${user.id}'
              AND t_wcb.claim_status = true
            )
            UNION
            (
              SELECT
                t_sb.id AS id
              FROM "spin_bonus" AS "t_sb"
              INNER JOIN "blockchain_symbol" AS t_bs ON t_bs.id = t_sb.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_sb.updated_at >= to_timestamp(${startDate})
              AND t_sb.updated_at <= to_timestamp(${endDate})
              AND t_sb.user_id = '${user.id}'
              AND t_sb.claim_status = true
            )
            UNION
            (
              SELECT
                t_qb.id AS id
              FROM "quest_bonus" AS "t_qb"
              INNER JOIN "blockchain_symbol" AS t_bs ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_qb.updated_at >= to_timestamp(${startDate})
              AND t_qb.updated_at <= to_timestamp(${endDate})
              AND t_qb.user_id = '${user.id}'
              AND t_qb.claim_status = true
            )
            UNION
            (
              SELECT
                t_ab.id AS id
              FROM "airdrop_bonus" AS "t_ab"
              INNER JOIN "blockchain_symbol" AS t_bs ON t_bs.id = t_ab.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_ab.updated_at >= to_timestamp(${startDate})
              AND t_ab.updated_at <= to_timestamp(${endDate})
              AND t_ab.user_id = '${user.id}'
              AND t_ab.claim_status = true
            )
          ) AS "combined_table"
      `);
      const total_count = Number(result[0].total_count);

      let total_page = Math.ceil(total_count / pageSize);
      total_page = total_page === 0 ? 1 : total_page;

      result = await this.UserRepository.query(`
        SELECT
            *
        FROM
        (
          (
            SELECT
              "t_wab"."created_at" "time",
              "t_wab"."amount" "amount",
              "t_wab"."amount_usd" "amount_usd",
              "t_bs"."symbol" "currency",
              '${ENUM_CURRENCY.Crypto}' as currency_type,
              "t_wab"."wallet_balance" "wallet_balance",
              "t_wab"."wallet_balance_usd" "wallet_balance_usd",
              '${ENUM_TRANSACTION_TYPE.Affiliate_Bonus}' AS "type"
            FROM "withdraw_affiliate_bonus" "t_wab"  
            INNER JOIN "user" "t_u" ON "t_u"."id" = "t_wab"."user_id" AND "t_u"."id" = '${
              user.id
            }'
            INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_wab"."symbol_id" 
            WHERE "t_wab"."symbol_id" = ${
              !symbol_id ? '"t_wab"."symbol_id"' : "'" + symbol_id + "'"
            } 
            AND "t_wab"."created_at" >= to_timestamp(${startDate})
            AND "t_wab"."created_at" <= to_timestamp(${endDate})
          )
          UNION
          (
            SELECT
              t_lub.updated_at as time,
              t_lub.amount as amount,
              t_lub.amount_usd as amount_usd,
              t_bs.symbol as currency,
              '${ENUM_CURRENCY.Crypto}' as currency_type,
              t_lub.wallet_balance as wallet_balance,
              t_lub.wallet_balance_usd as wallet_balance_usd,
              '${ENUM_TRANSACTION_TYPE.Level_Up_Bonus}' as type
            FROM "level_up_bonus" AS "t_lub"
            INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
            AND t_lub.updated_at >= to_timestamp(${startDate})
            AND t_lub.updated_at <= to_timestamp(${endDate})
            AND t_lub.user_id = '${user.id}'
            AND t_lub.claim_status = true
          )
          UNION
          (
            SELECT
              t_cb.created_at as time,
              t_cb.amount as amount,
              t_cb.amount_usd as amount_usd,
              t_bs.symbol as currency,
              '${ENUM_CURRENCY.Crypto}' as currency_type,
              t_cb.wallet_balance as wallet_balance,
              t_cb.wallet_balance_usd as wallet_balance_usd,
              '${ENUM_TRANSACTION_TYPE.USDT_Rakeback}' as type
            FROM "claim_bonus" AS "t_cb"
            INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
            AND t_cb.created_at >= to_timestamp(${startDate})
            AND t_cb.created_at <= to_timestamp(${endDate})
            AND t_cb.user_id = '${user.id}'
          )
          UNION
          (
            SELECT
              t_cb.updated_at as time,
              t_cb.amount as amount,
              t_cb.amount_usd as amount_usd,
              t_bs.symbol as currency,
              '${ENUM_CURRENCY.Crypto}' as currency_type,
              t_cb.wallet_balance as wallet_balance,
              t_cb.wallet_balance_usd as wallet_balance_usd,
              CASE t_cb.type
                WHEN ${ENUM_CASHBACK_BONUS.Weekly} THEN '${
                  ENUM_TRANSACTION_TYPE.Weekly_Cashback_Bonus
                }'
                WHEN ${ENUM_CASHBACK_BONUS.Monthly} THEN '${
                  ENUM_TRANSACTION_TYPE.Monthly_Cashback_Bonus
                }'
              END AS type
            FROM "cashback_bonus" AS "t_cb"
            INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
            AND t_cb.updated_at >= to_timestamp(${startDate})
            AND t_cb.updated_at <= to_timestamp(${endDate})
            AND t_cb.user_id = '${user.id}'
            AND t_cb.claim_status = true
          )
          UNION
          (
            SELECT
              t_wcb.updated_at as time,
              t_wcb.amount as amount,
              t_wcb.amount_usd as amount_usd,
              t_bs.symbol as currency,
              '${ENUM_CURRENCY.Crypto}' as currency_type,
              t_wcb.wallet_balance as wallet_balance,
              t_wcb.wallet_balance_usd as wallet_balance_usd,
              '${ENUM_TRANSACTION_TYPE.Wager_Contest_Bonus}' as type
            FROM "wager_contest_bonus" AS "t_wcb"
            INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
            AND t_wcb.updated_at >= to_timestamp(${startDate})
            AND t_wcb.updated_at <= to_timestamp(${endDate})
            AND t_wcb.user_id = '${user.id}'
            AND t_wcb.claim_status = true
          )
          UNION
          (
            SELECT
              t_sb.updated_at as time,
              t_sb.amount as amount,
              t_sb.amount_usd as amount_usd,
              t_bs.symbol as currency,
              '${ENUM_CURRENCY.Crypto}' as currency_type,
              t_sb.wallet_balance as wallet_balance,
              t_sb.wallet_balance_usd as wallet_balance_usd,
              (
                CASE t_sb.type
                  WHEN 0 THEN '${ENUM_TRANSACTION_TYPE.Lucky_Spin_Bonus}'
                  WHEN 1 THEN '${ENUM_TRANSACTION_TYPE.Super_Spin_Bonus}' 
                  ELSE '${ENUM_TRANSACTION_TYPE.Mega_Spin_Bonus}'
                END
              ) as type
            FROM "spin_bonus" AS "t_sb"
            INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_sb.symbol_id
            WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
            AND t_sb.updated_at >= to_timestamp(${startDate})
            AND t_sb.updated_at <= to_timestamp(${endDate})
            AND t_sb.user_id = '${user.id}'
            AND t_sb.claim_status = true
          )
          UNION
          (
            SELECT
              t_qb.updated_at as time,
              t_qb.amount as amount,
              t_qb.amount_usd as amount_usd,
              t_bs.symbol as currency,
              '${ENUM_CURRENCY.Crypto}' as currency_type,
              t_qb.wallet_balance as wallet_balance,
              t_qb.wallet_balance_usd as wallet_balance_usd,
              (
                CASE t_qb.category
                  WHEN ${ENUM_QUEST_CATEGORY.Big_Win} THEN '${
                    ENUM_TRANSACTION_TYPE.Daily_Quest_Big_Win_Bonus
                  }'
                  WHEN ${ENUM_QUEST_CATEGORY.Just_Wager_On} THEN '${
                    ENUM_TRANSACTION_TYPE.Daily_Quest_Just_Wager_On_Bonus
                  }' 
                  WHEN ${ENUM_QUEST_CATEGORY.Slots_Master} THEN '${
                    ENUM_TRANSACTION_TYPE.Daily_Quest_Slots_Master_Bonus
                  }'
                  WHEN ${ENUM_QUEST_CATEGORY.Wager_Week} THEN '${
                    ENUM_TRANSACTION_TYPE.Weekly_Quest_Wager_Week_Bonus
                  }'
                END
              ) as type
            FROM "quest_bonus" AS "t_qb"
            INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
            WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
            AND t_qb.updated_at >= to_timestamp(${startDate})
            AND t_qb.updated_at <= to_timestamp(${endDate})
            AND t_qb.user_id = '${user.id}'
            AND t_qb.claim_status = true
          )
          UNION
          (
            SELECT
              t_ab.updated_at as time,
              t_ab.amount as amount,
              t_ab.amount_usd as amount_usd,
              t_bs.symbol as currency,
              '${ENUM_CURRENCY.Crypto}' as currency_type,
              t_ab.wallet_balance as wallet_balance,
              t_ab.wallet_balance_usd as wallet_balance_usd,
              '${ENUM_TRANSACTION_TYPE.Airdrop}' as type
            FROM "airdrop_bonus" AS "t_ab"
            INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_ab.symbol_id
            WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
            AND t_ab.updated_at >= to_timestamp(${startDate})
            AND t_ab.updated_at <= to_timestamp(${endDate})
            AND t_ab.user_id = '${user.id}'
            AND t_ab.claim_status = true
          )
        ) "combined_table"
        ORDER BY "combined_table"."time" DESC
        OFFSET ${(page - 1) * pageSize}
        LIMIT ${pageSize}
    `);

      return {
        total_count,
        total_page,
        page,
        page_size: pageSize,
        data: result,
      };
    } else if (type === ENUM_TRANSACTION.Bill) {
      if (status === ENUM_BILL_TYPE.Game) {
        let result =
          await this.GameBlockchainTransactionRepository.createQueryBuilder(
            't_gbt',
          )
            .select('COUNT(*)', 'total_count')
            .innerJoin(
              User,
              't_u',
              `t_u.id = t_gbt.user_id AND t_u.id = '${user.id}'`,
            )
            .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_gbt.currency_id')
            .where(
              `t_gbt.currency_id = ${
                !symbol_id ? 't_gbt.currency_id' : "'" + symbol_id + "'"
              }`,
            )
            .andWhere('t_gbt.created_at >= to_timestamp(:startDate)', {
              startDate,
            })
            .andWhere('t_gbt.created_at <= to_timestamp(:endDate)', { endDate })
            .getRawOne();

        const total_count = Number(result.total_count);

        let total_page = Math.ceil(total_count / pageSize);
        total_page = total_page === 0 ? 1 : total_page;

        result =
          await this.GameBlockchainTransactionRepository.createQueryBuilder(
            't_gbt',
          )
            .select([
              't_gbt.created_at as time',
              `
                CASE t_gbt.action
                  WHEN ${ENUM_GAME_TRANSACTION_ACTION.bet} THEN t_gbt.amount * -1
                  ELSE t_gbt.amount
                END AS amount
              `,
              `
                CASE t_gbt.action
                  WHEN ${ENUM_GAME_TRANSACTION_ACTION.bet} THEN t_gbt.amount_usd * -1
                  ELSE t_gbt.amount
                END AS amount_usd
              `,
              't_bs.symbol as currency',
              `'${ENUM_CURRENCY.Crypto}' as currency_type`,
              `
                CASE t_gbt.action
                  WHEN ${ENUM_GAME_TRANSACTION_ACTION.bet} THEN 'BET'
                  WHEN ${ENUM_GAME_TRANSACTION_ACTION.win} THEN 'WIN'
                  ELSE 'ROLLBACK'
                END AS type
              `,
              't_gbt.wallet_balance as wallet_balance',
              't_gbt.wallet_balance_usd as wallet_balance_usd',
              't_g.id as game_id',
              't_g.title as game_title',
            ])
            .innerJoin(
              User,
              't_u',
              `t_u.id = t_gbt.user_id AND t_u.id = '${user.id}'`,
            )
            .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_gbt.currency_id')
            .innerJoin(Game, 't_g', 't_g.id = t_gbt.game_id')
            .where(
              `t_gbt.currency_id = ${
                !symbol_id ? 't_gbt.currency_id' : "'" + symbol_id + "'"
              }`,
            )
            .andWhere('t_gbt.created_at >= to_timestamp(:startDate)', {
              startDate,
            })
            .andWhere('t_gbt.created_at <= to_timestamp(:endDate)', { endDate })
            .orderBy('t_gbt.created_at', 'DESC')
            .limit(pageSize)
            .offset((page - 1) * pageSize)
            .getRawMany();

        return {
          total_count,
          total_page,
          page,
          page_size: pageSize,
          data: result,
        };
      } else if (status === ENUM_BILL_TYPE.Swap) {
        let result = await this.BlockchainSwapTransactionRepository.query(`
          SELECT COUNT(*) "total_count"
          FROM (
            (
              SELECT
                "t_bst"."id" "id",
              FROM "blockchain_swap_transaction" "t_bst"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bst"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bst"."from_symbol_id"
              WHERE ("t_bst"."from_symbol_id" = ${
                !symbol_id ? '"t_bst"."from_symbol_id"' : "'" + symbol_id + "'"
              } OR "t_bst"."to_symbol_id" = ${
                !symbol_id ? '"t_bst"."to_symbol_id"' : "'" + symbol_id + "'"
              }) 
              AND "t_bst"."created_at" >= to_timestamp(${startDate}) AND "t_bst"."created_at" <= to_timestamp(${endDate})
            )
          
            UNION
          
            (
              SELECT
                "t_bst"."id" "id",
              FROM "blockchain_swap_transaction" "t_bst"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bst"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bst"."to_symbol_id"
              WHERE ("t_bst"."from_symbol_id" = ${
                !symbol_id ? '"t_bst"."from_symbol_id"' : "'" + symbol_id + "'"
              } OR "t_bst"."to_symbol_id" = ${
                !symbol_id ? '"t_bst"."to_symbol_id"' : "'" + symbol_id + "'"
              }) 
              AND "t_bst"."created_at" >= to_timestamp(${startDate}) AND "t_bst"."created_at" <= to_timestamp(${endDate}))
          ) AS "combined_tables"
        `);

        const total_count = Number(result[0].total_count);

        let total_page = Math.ceil(total_count / pageSize);
        total_page = total_page === 0 ? 1 : total_page;

        result = await this.BlockchainSwapTransactionRepository.query(`
            SELECT *
            FROM (
              (
                SELECT
                  '${ENUM_TRANSACTION_TYPE.Swap_Get}' "type",
                  "t_bst"."created_at" "time",
                  "t_bst"."to_amount" "amount",
                  "t_bst"."to_amount_usd" "amount_usd",
                  "t_bst"."to_wallet_balance" "wallet_balance",
                  "t_bst"."to_wallet_balance_usd" "wallet_balance_usd",
                  "t_bs"."symbol" "from_symbol",
                  "t_bs"."logo" "from_symbol_logo"
                FROM "blockchain_swap_transaction" "t_bst"
                INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bst"."user_id" AND "t_u"."id" = '${
                  user.id
                }'
                INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bst"."to_symbol_id"
                WHERE ("t_bst"."from_symbol_id" = ${
                  !symbol_id
                    ? '"t_bst"."from_symbol_id"'
                    : "'" + symbol_id + "'"
                } OR "t_bst"."to_symbol_id" = ${
                  !symbol_id ? '"t_bst"."to_symbol_id"' : "'" + symbol_id + "'"
                }) 
                AND "t_bst"."created_at" >= to_timestamp(${startDate}) AND "t_bst"."created_at" <= to_timestamp(${endDate})
              )

              UNION

              (
                SELECT
                  '${ENUM_TRANSACTION_TYPE.Swap_Send}' "type",
                  t_bst.created_at - interval '1 milliseconds' "time",
                  "t_bst"."from_amount" * -1 "amount",
                  "t_bst"."from_amount_usd" * -1 "amount_usd",
                  "t_bst"."from_wallet_balance" "wallet_balance",
                  "t_bst"."from_wallet_balance_usd" "wallet_balance_usd",
                  "t_bs"."symbol" "from_symbol",
                  "t_bs"."logo" "from_symbol_logo"
                FROM "blockchain_swap_transaction" "t_bst"
                INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bst"."user_id" AND "t_u"."id" = '${
                  user.id
                }'
                INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bst"."from_symbol_id"
                WHERE ("t_bst"."from_symbol_id" = ${
                  !symbol_id
                    ? '"t_bst"."from_symbol_id"'
                    : "'" + symbol_id + "'"
                } OR "t_bst"."to_symbol_id" = ${
                  !symbol_id ? '"t_bst"."to_symbol_id"' : "'" + symbol_id + "'"
                }) 
                AND "t_bst"."created_at" >= to_timestamp(${startDate}) AND "t_bst"."created_at" <= to_timestamp(${endDate})
              )
            ) AS "combined_table"
            ORDER BY "combined_table"."time" DESC
            OFFSET ${(page - 1) * pageSize}
            LIMIT ${pageSize}
          `);

        return {
          total_count,
          total_page,
          page,
          page_size: pageSize,
          data: result,
        };
      } else if (status === ENUM_BILL_TYPE.Affiliate) {
        let result =
          await this.WithdrawAffiliateBonusRepository.createQueryBuilder(
            't_wab',
          )
            .select('COUNT(*)', 'total_count')
            .innerJoin(
              User,
              't_u',
              `t_u.id = t_wab.user_id AND t_u.id = '${user.id}'`,
            )
            .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_wab.symbol_id')
            .where(
              `t_wab.symbol_id = ${
                !symbol_id ? 't_wab.symbol_id' : "'" + symbol_id + "'"
              }`,
            )
            .andWhere('t_wab.created_at >= to_timestamp(:startDate)', {
              startDate,
            })
            .andWhere('t_wab.created_at <= to_timestamp(:endDate)', { endDate })
            .getRawOne();

        const total_count = Number(result.total_count);

        let total_page = Math.ceil(total_count / pageSize);
        total_page = total_page === 0 ? 1 : total_page;

        result = await this.TipTransactionRepository.createQueryBuilder('t_tt')
          .select([
            't_tt.created_at as time',
            't_tt.amount as amount',
            't_tt.amount_usd as amount_usd',
            't_bs.symbol as currency',
            `'${ENUM_CURRENCY.Crypto}' as currency_type`,
            `'TIP' AS type`,
            't_wab.wallet_balance as wallet_balance',
            't_wab.wallet_balance_usd as wallet_balance_usd',
          ])
          .innerJoin(
            User,
            't_u',
            `t_u.id = t_wab.user_id AND t_u.id = '${user.id}'`,
          )
          .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_wab.symbol_id')
          .where(
            `t_wab.symbol_id = ${
              !symbol_id ? 't_wab.symbol_id' : "'" + symbol_id + "'"
            }`,
          )
          .andWhere('t_wab.created_at >= to_timestamp(:startDate)', {
            startDate,
          })
          .andWhere('t_wab.created_at <= to_timestamp(:endDate)', { endDate })
          .orderBy('t_wab.created_at', 'DESC')
          .limit(pageSize)
          .offset((page - 1) * pageSize)
          .getRawMany();
        return {
          total_count,
          total_page,
          page,
          page_size: pageSize,
          data: result,
        };
      } else if (status === ENUM_BILL_TYPE.Tip) {
        let result = await this.TipTransactionRepository.query(`
        SELECT COUNT(*) "total_count"
        FROM (
          (
            SELECT
              t_tt.id
            FROM "tip_transaction" "t_tt"
            INNER JOIN "user" "t_u" ON "t_u"."id" = "t_tt"."sender_id" AND "t_u"."id" = '${
              user.id
            }'
            INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_tt"."symbol_id"
            WHERE ("t_tt"."symbol_id" = ${
              !symbol_id ? '"t_tt"."symbol_id"' : "'" + symbol_id + "'"
            }) 
            AND "t_tt"."created_at" >= to_timestamp(${startDate}) AND "t_tt"."created_at" <= to_timestamp(${endDate}))
          
            UNION
        
          (
            SELECT
              t_tt.id
            FROM "tip_transaction" "t_tt"
            INNER JOIN "user" "t_u" ON "t_u"."id" = "t_tt"."receiver_id" AND "t_u"."id" = '${
              user.id
            }'
            INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_tt"."symbol_id"
            WHERE ("t_tt"."symbol_id" = ${
              !symbol_id ? '"t_tt"."symbol_id"' : "'" + symbol_id + "'"
            }) 
            AND "t_tt"."created_at" >= to_timestamp(${startDate}) AND "t_tt"."created_at" <= to_timestamp(${endDate}))
          ) AS "combined_tables"
      `);

        const total_count = Number(result[0].total_count);

        let total_page = Math.ceil(total_count / pageSize);
        total_page = total_page === 0 ? 1 : total_page;

        result = await this.BlockchainSwapTransactionRepository.query(`
        SELECT *
        FROM (
          (
            SELECT
              '${ENUM_TRANSACTION_TYPE.Tip_Get}' "type",
              "t_tt"."created_at" "time",
              "t_tt"."amount" "amount",
              "t_tt"."amount_usd" "amount_usd",
              "t_tt"."receiver_wallet_balance" "wallet_balance",
              "t_tt"."receiver_wallet_balance_usd" "wallet_balance_usd",
              "t_bs"."symbol" "currency_name",
              "t_bs"."logo" "currency_logo"
            FROM "tip_transaction" "t_tt"
            INNER JOIN "user" "t_u" ON "t_u"."id" = "t_tt"."receiver_id" AND "t_u"."id" = '${
              user.id
            }'
            INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_tt"."symbol_id"
            WHERE ("t_tt"."symbol_id" = ${
              !symbol_id ? '"t_tt"."symbol_id"' : "'" + symbol_id + "'"
            }) 
            AND "t_tt"."created_at" >= to_timestamp(${startDate}) AND "t_tt"."created_at" <= to_timestamp(${endDate})
          )

          UNION

          (
            SELECT
              '${ENUM_TRANSACTION_TYPE.Tip_Send}' "type",
              t_tt.created_at - interval '1 milliseconds' "time",
              "t_tt"."amount" * -1 "amount",
              "t_tt"."amount_usd" * -1 "amount_usd",
              "t_tt"."sender_wallet_balance" "wallet_balance",
              "t_tt"."sender_wallet_balance_usd" "wallet_balance_usd",
              "t_bs"."symbol" "currency_name",
              "t_bs"."logo" "currency_logo"
            FROM "tip_transaction" "t_tt"
            INNER JOIN "user" "t_u" ON "t_u"."id" = "t_tt"."sender_id" AND "t_u"."id" = '${
              user.id
            }'
            INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_tt"."symbol_id"
            WHERE ("t_tt"."symbol_id" = ${
              !symbol_id ? '"t_tt"."symbol_id"' : "'" + symbol_id + "'"
            }) 
            AND "t_tt"."created_at" >= to_timestamp(${startDate}) AND "t_tt"."created_at" <= to_timestamp(${endDate})
          )
        ) AS "combined_table"
        ORDER BY "combined_table"."time" DESC
        OFFSET ${(page - 1) * pageSize}
        LIMIT ${pageSize}
      `);

        return {
          total_count,
          total_page,
          page,
          page_size: pageSize,
          data: result,
        };
      } else if (status === ENUM_BILL_TYPE.All) {
        let result = await this.UserRepository.query(`
          SELECT COUNT(*) AS "total_count" 
          FROM (
            (
              SELECT
                "t_gbt"."id" "id"
              FROM "game_blockchain_transaction" "t_gbt" 
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_gbt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_gbt"."currency_id"
              WHERE "t_gbt"."currency_id" = ${
                !symbol_id ? '"t_gbt"."currency_id"' : "'" + symbol_id + "'"
              } 
              AND "t_gbt"."created_at" >= to_timestamp(${startDate}) 
              AND "t_gbt"."created_at" <= to_timestamp(${endDate})
            )
            UNION
            (
              SELECT
                "t_bst"."id" "id"
              FROM "blockchain_swap_transaction" "t_bst"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bst"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bst"."from_symbol_id"
              WHERE ("t_bst"."from_symbol_id" = ${
                !symbol_id ? '"t_bst"."from_symbol_id"' : "'" + symbol_id + "'"
              } OR "t_bst"."to_symbol_id" = ${
                !symbol_id ? '"t_bst"."to_symbol_id"' : "'" + symbol_id + "'"
              })
              AND "t_bst"."created_at" >= to_timestamp(${startDate}) AND "t_bst"."created_at" <= to_timestamp(${endDate})
            )
            UNION
            (
              SELECT
                "t_bst"."id" "id"
              FROM "blockchain_swap_transaction" "t_bst"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bst"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bst"."to_symbol_id"
              WHERE ("t_bst"."from_symbol_id" = ${
                !symbol_id ? '"t_bst"."from_symbol_id"' : "'" + symbol_id + "'"
              } OR "t_bst"."to_symbol_id" = ${
                !symbol_id ? '"t_bst"."to_symbol_id"' : "'" + symbol_id + "'"
              })
              AND "t_bst"."created_at" >= to_timestamp(${startDate}) AND "t_bst"."created_at" <= to_timestamp(${endDate})
            ) 
            UNION  
            (
              SELECT
                "t_wab"."id" "id"
              FROM "withdraw_affiliate_bonus" "t_wab" 
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_wab"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_wab"."symbol_id" 
              WHERE "t_wab"."symbol_id" = ${
                !symbol_id ? '"t_wab"."symbol_id"' : "'" + symbol_id + "'"
              } 
              AND "t_wab"."created_at" >= to_timestamp(${startDate}) AND "t_wab"."created_at" <= to_timestamp(${endDate})
            )
            UNION
            (
              SELECT
                "t_bdt"."id" "id"
              FROM "blockchain_deposit_transaction" "t_bdt"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bdt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_cryptocurrency" "t_bc" ON "t_bc"."id" = "t_bdt"."cryptocurrency_id"
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bc"."symbol_id" 
              WHERE "t_bs"."id" = ${
                !symbol_id ? '"t_bs"."id"' : "'" + symbol_id + "'"
              }
              AND "t_bdt"."updated_at" >= to_timestamp(${startDate}) AND "t_bdt"."updated_at" <= to_timestamp(${endDate}) AND "t_bdt"."status" = ${
                ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete
              }
            ) 
            UNION
            (
              SELECT
                "t_bwt"."id" "id"
              FROM "blockchain_withdraw_transaction" "t_bwt"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bwt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_cryptocurrency" "t_bc" ON "t_bc"."id" = "t_bwt"."cryptocurrency_id"
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bc"."symbol_id" 
              WHERE "t_bs"."id" = ${
                !symbol_id ? '"t_bs"."id"' : "'" + symbol_id + "'"
              }
              AND "t_bwt"."updated_at" >= to_timestamp(${startDate}) AND "t_bwt"."updated_at" <= to_timestamp(${endDate})
            )
            UNION
            (
              SELECT
                "t_bwt"."id" "id"
              FROM "blockchain_withdraw_transaction" "t_bwt"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bwt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_cryptocurrency" "t_bc" ON "t_bc"."id" = "t_bwt"."cryptocurrency_id"
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bc"."symbol_id" 
              WHERE "t_bs"."id" = ${
                !symbol_id ? '"t_bs"."id"' : "'" + symbol_id + "'"
              }
              AND "t_bwt"."pended_at" >= to_timestamp(${startDate}) AND "t_bwt"."pended_at" <= to_timestamp(${endDate}) AND "t_bwt"."status" = ${
                ENUM_WITHDRAW_STATUS.Rejected
              }
            )
            UNION
            (
              SELECT
                "t_cb"."id"
              FROM "claim_bonus" AS "t_cb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_cb.created_at >= to_timestamp(${startDate})
              AND t_cb.created_at <= to_timestamp(${endDate})
              AND t_cb.user_id = '${user.id}'
            )
            UNION
            (
              SELECT
                "t_lub"."id"
              FROM "level_up_bonus" AS "t_lub"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_lub.updated_at >= to_timestamp(${startDate})
              AND t_lub.updated_at <= to_timestamp(${endDate})
              AND t_lub.user_id = '${user.id}'
              AND t_lub.claim_status = true
            )
            UNION
            (
              SELECT
                "t_cb"."id"
              FROM "cashback_bonus" AS "t_cb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_cb.updated_at >= to_timestamp(${startDate})
              AND t_cb.updated_at <= to_timestamp(${endDate})
              AND t_cb.user_id = '${user.id}'
              AND t_cb.claim_status = true
            )
            UNION
            (
              SELECT
                "t_wcb"."id"
              FROM "wager_contest_bonus" AS "t_wcb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_wcb.updated_at >= to_timestamp(${startDate})
              AND t_wcb.updated_at <= to_timestamp(${endDate})
              AND t_wcb.user_id = '${user.id}'
              AND t_wcb.claim_status = true
            )
            UNION
            (
              SELECT
                "t_sb"."id"
              FROM "spin_bonus" AS "t_sb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_sb.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_sb.updated_at >= to_timestamp(${startDate})
              AND t_sb.updated_at <= to_timestamp(${endDate})
              AND t_sb.user_id = '${user.id}'
              AND t_sb.claim_status = true
            )
            UNION
            (
              SELECT
                "t_qb"."id"
              FROM "quest_bonus" AS "t_qb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_qb.updated_at >= to_timestamp(${startDate})
              AND t_qb.updated_at <= to_timestamp(${endDate})
              AND t_qb.user_id = '${user.id}'
              AND t_qb.claim_status = true
            )
            UNION
            (
              SELECT
                t_tt.id
              FROM "tip_transaction" AS "t_tt"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_tt.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_tt.created_at >= to_timestamp(${startDate})
              AND t_tt.created_at <= to_timestamp(${endDate})
              AND t_tt.sender_id = '${user.id}'
            )
            UNION
            (
              SELECT
                t_tt.id
              FROM "tip_transaction" AS "t_tt"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_tt.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_tt.created_at >= to_timestamp(${startDate})
              AND t_tt.created_at <= to_timestamp(${endDate})
              AND t_tt.receiver_id = '${user.id}'
            )
            UNION
            (
              SELECT
                t_ab.id
              FROM "airdrop_bonus" AS "t_ab"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_ab.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_ab.updated_at >= to_timestamp(${startDate})
              AND t_ab.updated_at <= to_timestamp(${endDate})
              AND t_ab.user_id = '${user.id}' AND t_ab.claim_status = true
            )
          ) "combined_table"
        `);

        const total_count = Number(result[0].total_count);

        let total_page = Math.ceil(total_count / pageSize);
        total_page = total_page === 0 ? 1 : total_page;

        result = await this.UserRepository.query(`
          SELECT *
          FROM (
            (
              SELECT
                CASE "t_gbt"."action"
                  WHEN ${ENUM_GAME_TRANSACTION_ACTION.bet} THEN '${
                    ENUM_TRANSACTION_TYPE.Game_Bet
                  }'
                  WHEN ${ENUM_GAME_TRANSACTION_ACTION.win} THEN '${
                    ENUM_TRANSACTION_TYPE.Game_Win
                  }'
                  ELSE 'ROLLBACK'
                END "type",
                "t_gbt"."created_at" "time",
                CASE t_gbt.action
                  WHEN ${
                    ENUM_GAME_TRANSACTION_ACTION.bet
                  } THEN t_gbt.amount * -1
                  ELSE t_gbt.amount
                END AS amount,
                CASE t_gbt.action
                  WHEN ${
                    ENUM_GAME_TRANSACTION_ACTION.bet
                  } THEN t_gbt.amount_usd * -1
                  ELSE t_gbt.amount
                END AS amount_usd,
                "t_gbt"."wallet_balance" "wallet_balance",
                "t_gbt"."wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                "t_g"."id" "game_id",
                "t_g"."title" "game_title"
              FROM "game_blockchain_transaction" "t_gbt" 
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_gbt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_gbt"."currency_id"
              INNER JOIN "game" "t_g" ON "t_g"."id" = "t_gbt"."game_id"
              WHERE "t_gbt"."currency_id" = ${
                !symbol_id ? '"t_gbt"."currency_id"' : "'" + symbol_id + "'"
              } 
              AND "t_gbt"."created_at" >= to_timestamp(${startDate}) 
              AND "t_gbt"."created_at" <= to_timestamp(${endDate})
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Swap_Get}' "type",
                "t_bst"."created_at" "time",
                "t_bst"."to_amount" "amount",
                "t_bst"."to_amount_usd" "amount_usd",
                "t_bst"."to_wallet_balance" "wallet_balance",
                "t_bst"."to_wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "blockchain_swap_transaction" "t_bst"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bst"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bst"."to_symbol_id"
              WHERE ("t_bst"."from_symbol_id" = ${
                !symbol_id ? '"t_bst"."from_symbol_id"' : "'" + symbol_id + "'"
              } OR "t_bst"."to_symbol_id" = ${
                !symbol_id ? '"t_bst"."to_symbol_id"' : "'" + symbol_id + "'"
              })
              AND "t_bst"."created_at" >= to_timestamp(${startDate}) AND "t_bst"."created_at" <= to_timestamp(${endDate})
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Swap_Send}' "type",
                t_bst.created_at - interval '1 milliseconds' "time",
                "t_bst"."from_amount" * -1 "amount",
                "t_bst"."from_amount_usd" * -1 "amount_usd",
                "t_bst"."from_wallet_balance" "wallet_balance",
                "t_bst"."from_wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "blockchain_swap_transaction" "t_bst"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bst"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bst"."from_symbol_id"
              WHERE ("t_bst"."from_symbol_id" = ${
                !symbol_id ? '"t_bst"."from_symbol_id"' : "'" + symbol_id + "'"
              } OR "t_bst"."to_symbol_id" = ${
                !symbol_id ? '"t_bst"."to_symbol_id"' : "'" + symbol_id + "'"
              })
              AND "t_bst"."created_at" >= to_timestamp(${startDate}) AND "t_bst"."created_at" <= to_timestamp(${endDate})
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Affiliate_Bonus}' AS "type",
                "t_wab"."created_at" "time",
                "t_wab"."amount" "amount",
                "t_wab"."amount_usd" "amount_usd",
                "t_wab"."wallet_balance" "wallet_balance",
                "t_wab"."wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "withdraw_affiliate_bonus" "t_wab"  
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_wab"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_wab"."symbol_id" 
              WHERE "t_wab"."symbol_id" = ${
                !symbol_id ? '"t_wab"."symbol_id"' : "'" + symbol_id + "'"
              } 
              AND "t_wab"."created_at" >= to_timestamp(${startDate}) AND "t_wab"."created_at" <= to_timestamp(${endDate})
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Deposit}' "type",
                "t_bdt"."updated_at" "time",
                "t_bdt"."amount" "amount",
                "t_bdt"."amount_usd" "amount_usd",
                "t_bdt"."wallet_balance" "wallet_balance",
                "t_bdt"."wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "blockchain_deposit_transaction" "t_bdt"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bdt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_cryptocurrency" "t_bc" ON "t_bc"."id" = "t_bdt"."cryptocurrency_id"
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bc"."symbol_id" 
              WHERE "t_bs"."id" = ${
                !symbol_id ? '"t_bs"."id"' : "'" + symbol_id + "'"
              }
              AND "t_bdt"."updated_at" >= to_timestamp(${startDate}) AND "t_bdt"."updated_at" <= to_timestamp(${endDate}) AND "t_bdt"."status" = ${
                ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete
              }
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Withdraw}' "type",
                "t_bwt"."updated_at" "time",
                "t_bwt"."amount_with_fee" "amount",
                "t_bwt"."amount_with_fee_usd" "amount_usd",
                "t_bwt"."wallet_balance" "wallet_balance",
                "t_bwt"."wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "blockchain_withdraw_transaction" "t_bwt"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bwt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_cryptocurrency" "t_bc" ON "t_bc"."id" = "t_bwt"."cryptocurrency_id"
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bc"."symbol_id" 
              WHERE "t_bs"."id" = ${
                !symbol_id ? '"t_bs"."id"' : "'" + symbol_id + "'"
              }
              AND "t_bwt"."updated_at" >= to_timestamp(${startDate}) AND "t_bwt"."updated_at" <= to_timestamp(${endDate}) AND "t_bwt"."status" = ${
                ENUM_WITHDRAW_STATUS.Complete
              }
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Withdraw}' "type",
                "t_bwt"."updated_at" "time",
                "t_bwt"."amount_with_fee" "amount",
                "t_bwt"."amount_with_fee_usd" "amount_usd",
                "t_bwt"."wallet_balance" "wallet_balance",
                "t_bwt"."wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "blockchain_withdraw_transaction" "t_bwt"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bwt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_cryptocurrency" "t_bc" ON "t_bc"."id" = "t_bwt"."cryptocurrency_id"
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bc"."symbol_id" 
              WHERE "t_bs"."id" = ${
                !symbol_id ? '"t_bs"."id"' : "'" + symbol_id + "'"
              }
              AND "t_bwt"."updated_at" >= to_timestamp(${startDate}) AND "t_bwt"."updated_at" <= to_timestamp(${endDate}) AND "t_bwt"."status" = ${
                ENUM_WITHDRAW_STATUS.Processing
              }
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Withdraw_Refund}' "type",
                "t_bwt"."updated_at" "time",
                "t_bwt"."amount_with_fee" "amount",
                "t_bwt"."amount_with_fee_usd" "amount_usd",
                "t_bwt"."wallet_balance" "wallet_balance",
                "t_bwt"."wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "blockchain_withdraw_transaction" "t_bwt"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bwt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_cryptocurrency" "t_bc" ON "t_bc"."id" = "t_bwt"."cryptocurrency_id"
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bc"."symbol_id" 
              WHERE "t_bs"."id" = ${
                !symbol_id ? '"t_bs"."id"' : "'" + symbol_id + "'"
              }
              AND "t_bwt"."updated_at" >= to_timestamp(${startDate}) AND "t_bwt"."updated_at" <= to_timestamp(${endDate}) AND "t_bwt"."status" = ${
                ENUM_WITHDRAW_STATUS.Rejected
              }
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Withdraw}' "type",
                "t_bwt"."pended_at" "time",
                "t_bwt"."amount_with_fee" "amount",
                "t_bwt"."amount_with_fee_usd" "amount_usd",
                "t_bwt"."pending_wallet_balance" "wallet_balance",
                "t_bwt"."pending_wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "blockchain_withdraw_transaction" "t_bwt"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bwt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_cryptocurrency" "t_bc" ON "t_bc"."id" = "t_bwt"."cryptocurrency_id"
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bc"."symbol_id" 
              WHERE "t_bs"."id" = ${
                !symbol_id ? '"t_bs"."id"' : "'" + symbol_id + "'"
              }
              AND "t_bwt"."pended_at" >= to_timestamp(${startDate}) AND "t_bwt"."pended_at" <= to_timestamp(${endDate}) AND "t_bwt"."status" = ${
                ENUM_WITHDRAW_STATUS.Rejected
              }
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Withdraw}' "type",
                "t_bwt"."pended_at" "time",
                "t_bwt"."amount_with_fee" "amount",
                "t_bwt"."amount_with_fee_usd" "amount_usd",
                "t_bwt"."pending_wallet_balance" "wallet_balance",
                "t_bwt"."pending_wallet_balance_usd" "wallet_balance_usd",
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "blockchain_withdraw_transaction" "t_bwt"
              INNER JOIN "user" "t_u" ON "t_u"."id" = "t_bwt"."user_id" AND "t_u"."id" = '${
                user.id
              }'
              INNER JOIN "blockchain_cryptocurrency" "t_bc" ON "t_bc"."id" = "t_bwt"."cryptocurrency_id"
              INNER JOIN "blockchain_symbol" "t_bs" ON "t_bs"."id" = "t_bc"."symbol_id" 
              WHERE "t_bs"."id" = ${
                !symbol_id ? '"t_bs"."id"' : "'" + symbol_id + "'"
              }
              AND "t_bwt"."pended_at" >= to_timestamp(${startDate}) AND "t_bwt"."pended_at" <= to_timestamp(${endDate}) AND "t_bwt"."status" = ${
                ENUM_WITHDRAW_STATUS.Pending
              }
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.USDT_Rakeback}' as type,
                t_cb.created_at as time,
                t_cb.amount as amount,
                t_cb.amount_usd as amount_usd,
                t_cb.wallet_balance as wallet_balance,
                t_cb.wallet_balance_usd as wallet_balance_usd,
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "claim_bonus" AS "t_cb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_cb.created_at >= to_timestamp(${startDate})
              AND t_cb.created_at <= to_timestamp(${endDate})
              AND t_cb.user_id = '${user.id}'
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Level_Up_Bonus}' as type,
                t_lub.updated_at as time,
                t_lub.amount as amount,
                t_lub.amount_usd as amount_usd,
                t_lub.wallet_balance as wallet_balance,
                t_lub.wallet_balance_usd as wallet_balance_usd,
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "level_up_bonus" AS "t_lub"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_lub.updated_at >= to_timestamp(${startDate})
              AND t_lub.updated_at <= to_timestamp(${endDate})
              AND t_lub.user_id = '${user.id}'
              AND t_lub.claim_status = true
            )
            UNION
            (
              SELECT
                CASE t_cb.type
                    WHEN ${ENUM_CASHBACK_BONUS.Weekly} THEN '${
                      ENUM_TRANSACTION_TYPE.Weekly_Cashback_Bonus
                    }'
                    WHEN ${ENUM_CASHBACK_BONUS.Monthly} THEN '${
                      ENUM_TRANSACTION_TYPE.Monthly_Cashback_Bonus
                    }'
                END AS type,
                t_cb.updated_at as time,
                t_cb.amount as amount,
                t_cb.amount_usd as amount_usd,
                t_cb.wallet_balance as wallet_balance,
                t_cb.wallet_balance_usd as wallet_balance_usd,
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "cashback_bonus" AS "t_cb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_cb.updated_at >= to_timestamp(${startDate})
              AND t_cb.updated_at <= to_timestamp(${endDate})
              AND t_cb.user_id = '${user.id}'
              AND t_cb.claim_status = true
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Wager_Contest_Bonus}' as type,
                t_wcb.updated_at as time,
                t_wcb.amount as amount,
                t_wcb.amount_usd as amount_usd,
                t_wcb.wallet_balance as wallet_balance,
                t_wcb.wallet_balance_usd as wallet_balance_usd,
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "wager_contest_bonus" AS "t_wcb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_wcb.updated_at >= to_timestamp(${startDate})
              AND t_wcb.updated_at <= to_timestamp(${endDate})
              AND t_wcb.user_id = '${user.id}'
              AND t_wcb.claim_status = true
            )
            UNION
            (
              SELECT
                (
                  CASE t_sb.type
                    WHEN 0 THEN '${ENUM_TRANSACTION_TYPE.Lucky_Spin_Bonus}'
                    WHEN 1 THEN '${ENUM_TRANSACTION_TYPE.Super_Spin_Bonus}' 
                    ELSE '${ENUM_TRANSACTION_TYPE.Mega_Spin_Bonus}'
                  END
                ) as type,
                t_sb.updated_at as time,
                t_sb.amount as amount,
                t_sb.amount_usd as amount_usd,
                t_sb.wallet_balance as wallet_balance,
                t_sb.wallet_balance_usd as wallet_balance_usd,
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "spin_bonus" AS "t_sb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_sb.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_sb.updated_at >= to_timestamp(${startDate})
              AND t_sb.updated_at <= to_timestamp(${endDate})
              AND t_sb.user_id = '${user.id}'
              AND t_sb.claim_status = true
            )
            UNION
            (
              SELECT
              (
                CASE t_qb.category
                  WHEN ${ENUM_QUEST_CATEGORY.Big_Win} THEN '${
                    ENUM_TRANSACTION_TYPE.Daily_Quest_Big_Win_Bonus
                  }'
                  WHEN ${ENUM_QUEST_CATEGORY.Just_Wager_On} THEN '${
                    ENUM_TRANSACTION_TYPE.Daily_Quest_Just_Wager_On_Bonus
                  }' 
                  WHEN ${ENUM_QUEST_CATEGORY.Slots_Master} THEN '${
                    ENUM_TRANSACTION_TYPE.Daily_Quest_Slots_Master_Bonus
                  }'
                  WHEN ${ENUM_QUEST_CATEGORY.Wager_Week} THEN '${
                    ENUM_TRANSACTION_TYPE.Weekly_Quest_Wager_Week_Bonus
                  }'
                END
              ) as type,
                t_qb.updated_at as time,
                t_qb.amount as amount,
                t_qb.amount_usd as amount_usd,
                t_qb.wallet_balance as wallet_balance,
                t_qb.wallet_balance_usd as wallet_balance_usd,
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "quest_bonus" AS "t_qb"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.symbol = 'USDT'
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_qb.updated_at >= to_timestamp(${startDate})
              AND t_qb.updated_at <= to_timestamp(${endDate})
              AND t_qb.user_id = '${user.id}'
              AND t_qb.claim_status = true
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Tip_Send}' as type,
                t_tt.created_at as time,
                t_tt.amount * -1 as amount,
                t_tt.amount_usd * -1 as amount_usd,
                t_tt.sender_wallet_balance as wallet_balance,
                t_tt.sender_wallet_balance_usd as wallet_balance_usd,
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "tip_transaction" AS "t_tt"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_tt.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_tt.created_at >= to_timestamp(${startDate})
              AND t_tt.created_at <= to_timestamp(${endDate})
              AND t_tt.sender_id = '${user.id}'
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Tip_Get}' as type,
                t_tt.created_at as time,
                t_tt.amount as amount,
                t_tt.amount_usd as amount_usd,
                t_tt.receiver_wallet_balance as wallet_balance,
                t_tt.receiver_wallet_balance_usd as wallet_balance_usd,
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "tip_transaction" AS "t_tt"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_tt.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_tt.created_at >= to_timestamp(${startDate})
              AND t_tt.created_at <= to_timestamp(${endDate})
              AND t_tt.receiver_id = '${user.id}'
            )
            UNION
            (
              SELECT
                '${ENUM_TRANSACTION_TYPE.Airdrop}' as type,
                t_ab.updated_at as time,
                t_ab.amount as amount,
                t_ab.amount_usd as amount_usd,
                t_ab.wallet_balance as wallet_balance,
                t_ab.wallet_balance_usd as wallet_balance_usd,
                "t_bs"."symbol" "currency_name",
                '${ENUM_CURRENCY.Crypto}' "currency_type",
                "t_bs"."logo" "currency_logo",
                NULL "game_id",
                NULL "game_title"
              FROM "airdrop_bonus" AS "t_ab"
              INNER JOIN "blockchain_symbol" AS "t_bs" ON t_bs.id = t_ab.symbol_id
              WHERE t_bs.id = ${!symbol_id ? 't_bs.id' : "'" + symbol_id + "'"}
              AND t_ab.updated_at >= to_timestamp(${startDate})
              AND t_ab.updated_at <= to_timestamp(${endDate})
              AND t_ab.user_id = '${user.id}' AND t_ab.claim_status = true
            )
          ) "combined_table"
          ORDER BY "combined_table"."time" DESC
          OFFSET ${(page - 1) * pageSize}
          LIMIT ${pageSize}
        `);

        return {
          total_count,
          total_page,
          page,
          page_size: pageSize,
          data: result,
        };
      }
    }
    return {
      total_count: 0,
      total_page: 0,
      page,
      page_size: pageSize,
      data: [],
    };
  }
}
