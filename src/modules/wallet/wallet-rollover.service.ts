import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AirdropBonus,
  AvailableWithdrawBalance,
  BlockchainCryptocurrency,
  BlockchainDepositTransaction,
  BlockchainSymbol,
  TipTransaction,
  User,
} from 'entities';
import {
  ENUM_BLOCKCHAIN_DEPOSIT_STATUS,
  ENUM_GAME_TRANSACTION_ACTION,
  ENUM_ROLLOVER,
  ENUM_TRANSACTION_TYPE,
} from 'enums';
import { exceedTotalPageNumberError } from 'errors';
import { GameService } from 'modules/game/game.service';
import { WalletDepositService } from 'modules/wallet/wallet-deposit.service';
import { Repository } from 'typeorm';

import { WalletBalanceService } from './wallet-balance.service';
import { WalletTipService } from './wallet-tip.service';

@Injectable()
export class WalletRolloverService {
  constructor(
    private gameService: GameService,
    private readonly walletDepositSerivce: WalletDepositService,
    private readonly walletTipService: WalletTipService,
    private readonly walletBalanceService: WalletBalanceService,
    @InjectRepository(BlockchainDepositTransaction)
    private BlockchainDepositTransactionRepository: Repository<BlockchainDepositTransaction>,
    @InjectRepository(TipTransaction)
    private TipTransactionRepository: Repository<TipTransaction>,
    @InjectRepository(AirdropBonus)
    private AirdropBonusRepository: Repository<AirdropBonus>,
    @InjectRepository(AvailableWithdrawBalance)
    private AvailableWithdrawBalanceRepository: Repository<AvailableWithdrawBalance>,
  ) {}
  async getRollOver(
    user: User,
    status: ENUM_ROLLOVER,
    page: number,
    page_size: number,
  ) {
    const wager_amount_usd =
      await this.gameService.getTotalWagerAmountUsdByUserIdAndRolloverAt(
        user.id,
      );

    let total_game_profit_amount_usd =
      await this.gameService.getTotalProfitAmountUsdByUserId(user.id);

    const sql_tb =
      this.BlockchainDepositTransactionRepository.createQueryBuilder('t_bdt')
        .select([
          't_bdt.id as id',
          't_bdt.amount as amount',
          't_bdt.amount_usd as amount_usd',
          't_bdt.updated_at as time',
          't_bs.symbol as currency_symbol',
          't_bs.logo as currency_logo',
          `'${ENUM_TRANSACTION_TYPE.Deposit}' as type`,
        ])
        .innerJoin(
          BlockchainCryptocurrency,
          't_bc',
          't_bdt.cryptocurrency_id = t_bc.id',
        )
        .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_bc.symbol_id')
        .where(
          `user_id = '${user.id}' AND status = ${ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete}`,
        )
        .getQuery();
    const sql_tt = this.TipTransactionRepository.createQueryBuilder('t_tt')
      .select([
        't_tt.id as id',
        't_tt.amount as amount',
        't_tt.amount_usd as amount_usd',
        't_tt.created_at as time',
        't_bs.symbol as currency_symbol',
        't_bs.logo as currency_logo',
        `'${ENUM_TRANSACTION_TYPE.Tip}' as type`,
      ])
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_tt.symbol_id')
      .where(`t_tt.receiver_id = '${user.id}'`)
      .getQuery();
    const sql_ab = this.AirdropBonusRepository.createQueryBuilder('t_ab')
      .select([
        't_ab.id as id',
        't_ab.amount as amount',
        't_ab.amount_usd as amount_usd',
        't_ab.updated_at as time',
        't_bs.symbol as currency_symbol',
        't_bs.logo as currency_logo',
        `'${ENUM_TRANSACTION_TYPE.Airdrop}' as type`,
      ])
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_ab.symbol_id')
      .where(`t_ab.user_id = '${user.id}'`)
      .andWhere('t_ab.claim_status = true')
      .getQuery();
    const transactions = await this.BlockchainDepositTransactionRepository
      .query(`
          SELECT
            *
          FROM (
            (${sql_tb})
            UNION
            (${sql_tt})
            UNION
            (${sql_ab})
          ) as t_t
          ORDER BY t_t.time DESC
        `);

    let small_total_usd = 0;
    const done_list = [];
    const ongoing_list = [];
    const not_started_list = [];
    for (let i = transactions.length - 1; i >= 0; i--) {
      const amount_usd = Number(transactions[i].amount_usd);
      const amount = Number(transactions[i].amount);
      const time = transactions[i].time;

      const withdrawable_funds_amount_usd =
        total_game_profit_amount_usd < amount_usd
          ? total_game_profit_amount_usd
          : amount_usd;

      if (time < user.rollover_at) {
        transactions[i] = {
          ...transactions[i],
          times: 1,
          rollover: ENUM_ROLLOVER.Done,
          wager_completed_amount: amount,
          wager_completed_amount_usd: amount_usd,
          pending_wager_required_amount: 0,
          pending_wager_required_amount_usd: 0,
          withdrawable_funds_amount:
            (withdrawable_funds_amount_usd / amount_usd) * amount,
          withdrawable_funds_amount_usd,
        };
        done_list.push(transactions[i]);
      } else if (
        small_total_usd <= wager_amount_usd &&
        small_total_usd + amount_usd <= wager_amount_usd
      ) {
        transactions[i] = {
          ...transactions[i],
          times: 1,
          rollover: ENUM_ROLLOVER.Done,
          wager_completed_amount: amount,
          wager_completed_amount_usd: amount_usd,
          pending_wager_required_amount: 0,
          pending_wager_required_amount_usd: 0,
          withdrawable_funds_amount:
            (withdrawable_funds_amount_usd / amount_usd) * amount,
          withdrawable_funds_amount_usd,
        };
        done_list.push(transactions[i]);
        small_total_usd += amount_usd;
      } else if (
        small_total_usd < wager_amount_usd &&
        small_total_usd + amount_usd > wager_amount_usd
      ) {
        transactions[i] = {
          ...transactions[i],
          times: 1,
          rollover: ENUM_ROLLOVER.Ongoing,
          wager_completed_amount:
            ((wager_amount_usd - small_total_usd) / amount_usd) * amount,
          wager_completed_amount_usd: wager_amount_usd - small_total_usd,
          pending_wager_required_amount:
            ((small_total_usd + amount_usd - wager_amount_usd) / amount_usd) *
            amount,
          pending_wager_required_amount_usd:
            small_total_usd + amount_usd - wager_amount_usd,
          withdrawable_funds_amount:
            (withdrawable_funds_amount_usd / amount_usd) * amount,
          withdrawable_funds_amount_usd,
        };
        ongoing_list.push(transactions[i]);
        small_total_usd += amount_usd;
      } else if (
        small_total_usd >= wager_amount_usd &&
        small_total_usd + amount_usd > wager_amount_usd
      ) {
        transactions[i] = {
          ...transactions[i],
          times: 1,
          rollover: ENUM_ROLLOVER.Not_Started,
          wager_completed_amount_usd: 0,
          pending_wager_required_amount_usd: amount_usd,
          wager_completed_amount: 0,
          pending_wager_required_amount: amount,
          withdrawable_funds_amount:
            (withdrawable_funds_amount_usd / amount_usd) * amount,
          withdrawable_funds_amount_usd,
        };
        not_started_list.push(transactions[i]);
        small_total_usd += amount_usd;
      }
      total_game_profit_amount_usd =
        total_game_profit_amount_usd >= amount_usd
          ? total_game_profit_amount_usd - amount_usd
          : 0;
    }

    if (status === ENUM_ROLLOVER.All) {
      const total_count = transactions.length;
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }
      return {
        total_count,
        total_page,
        page,
        page_size,
        transactions: transactions.slice(
          (page - 1) * page_size,
          page * page_size,
        ),
      };
    } else if (status === ENUM_ROLLOVER.Not_Started) {
      const total_count = not_started_list.length;
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }
      return {
        total_count,
        total_page,
        page,
        page_size,
        transactions: not_started_list.slice(
          (page - 1) * page_size,
          page * page_size,
        ),
      };
    } else if (status === ENUM_ROLLOVER.Ongoing) {
      const total_count = not_started_list.length;
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }
      return {
        total_count,
        total_page,
        page,
        page_size,
        transactions: ongoing_list.slice(
          (page - 1) * page_size,
          page * page_size,
        ),
      };
    } else if (status === ENUM_ROLLOVER.Done) {
      const total_count = not_started_list.length;
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }
      return {
        total_count,
        total_page,
        page,
        page_size,
        transactions: done_list.slice((page - 1) * page_size, page * page_size),
      };
    }
  }

  async getTotalAirdropAmountUsdByUserIdAndRolloverAt(user_id: string) {
    const result = await this.AirdropBonusRepository.createQueryBuilder('t_ab')
      .select('COALESCE(SUM(amount_usd), 0) AS sum')
      .innerJoin(User, 't_u', 't_u.id = t_ab.user_id')
      .where('t_ab.user_id = :user_id', { user_id })
      .andWhere('t_ab.updated_at >= t_u.rollover_at')
      .andWhere('t_ab.claim_status = true')
      .getRawOne();

    return Number(result.sum);
  }

  async isRolloverCompletedByUserId(user_id: string) {
    const deposit_amount_usd =
      await this.walletDepositSerivce.getTotalDepositAmountUsdByUserIdAndRolloverAt(
        user_id,
      );
    const tip_amount_usd =
      await this.walletTipService.getTotalTipAmountUsdByUserIdAndRolloverAt(
        user_id,
      );
    const wager_amount_usd =
      await this.gameService.getTotalWagerAmountUsdByUserIdAndRolloverAt(
        user_id,
      );
    const airdrop_amount_usd =
      await this.getTotalAirdropAmountUsdByUserIdAndRolloverAt(user_id);

    if (
      wager_amount_usd <
      deposit_amount_usd + tip_amount_usd + airdrop_amount_usd
    ) {
      return false;
    }
    return true;
  }

  async getCompletedSymbolsForRolloverByUserId(
    user_id: string,
    currency_id: string,
  ) {
    const result = await this.BlockchainDepositTransactionRepository.query(`
      SELECT
        id,
        CASE
          WHEN cumulative_sum <= (
            SELECT sum(amount_usd)
            FROM "game_blockchain_transaction"
            WHERE user_id = '${user_id}'
            AND action = ${ENUM_GAME_TRANSACTION_ACTION.bet}
            AND created_at >= (SELECT rollover_at FROM "user" WHERE id = '${user_id}')
          ) THEN true
          ELSE false
        END rollover_complete,
        amount_usd,
        cumulative_sum,
        symbol_id,
        time
      FROM (
        (
          SELECT
            t_bdt.id,
            t_bdt.amount_usd, 
            SUM(t_bdt.amount_usd) OVER (ORDER BY t_bdt.updated_at ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as cumulative_sum,
            t_bdt.updated_at AS time,
            t_bs.id as symbol_id
          FROM 
            "blockchain_deposit_transaction" "t_bdt"
          LEFT JOIN "blockchain_cryptocurrency" "t_bc" ON t_bdt.cryptocurrency_id = t_bc.id
          LEFT JOIN "blockchain_symbol" "t_bs" ON t_bc.symbol_id = t_bs.id
          WHERE t_bdt.status = ${ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete}
          AND t_bdt.updated_at >= (SELECT rollover_at FROM "user" WHERE id = '${user_id}')
          AND t_bdt.user_id = '${user_id}'
        )
        UNION
        (
          SELECT
            t_tt.id,
            t_tt.amount_usd, 
            SUM(t_tt.amount_usd) OVER (ORDER BY t_tt.created_at ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as cumulative_sum,
            t_tt.created_at AS time,
            t_bs.id as symbol_id
          FROM 
            "tip_transaction" "t_tt"
          LEFT JOIN "blockchain_symbol" "t_bs" ON t_tt.symbol_id = t_bs.id
          WHERE t_tt.created_at >= (SELECT rollover_at FROM "user" WHERE id = '${user_id}')
          AND t_tt.receiver_id = '${user_id}'
        )
        UNION
        (
          SELECT
            t_ab.id,
            t_ab.amount_usd, 
            SUM(t_ab.amount_usd) OVER (ORDER BY t_ab.updated_at ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as cumulative_sum,
            t_ab.updated_at AS time,
            t_bs.id as symbol_id
          FROM 
            "airdrop_bonus" "t_ab"
          LEFT JOIN "blockchain_symbol" "t_bs" ON t_ab.symbol_id = t_bs.id
          WHERE t_ab.updated_at >= (SELECT rollover_at FROM "user" WHERE id = '${user_id}')
          AND t_ab.user_id = '${user_id}'
          AND t_ab.claim_status = true
        )
      ) AS "t_t"
      ORDER BY t_t.time 
    `);
    const symbols = new Set<string>();
    const uncompleted_symbols = new Set<string>();
    const completed_symbols = new Set<string>();
    for (const rollover of result) {
      if (rollover.rollover_complete) {
        completed_symbols.add(rollover.symbol_id);
      } else {
        uncompleted_symbols.add(rollover.symbol_id);
      }
    }
    for (const symbol of completed_symbols) {
      if (!uncompleted_symbols.has(symbol)) {
        symbols.add(symbol);
      }
    }

    if (uncompleted_symbols.has(currency_id)) {
      const { balance_amount } =
        await this.walletBalanceService.getBalanceByUserIdAndCurrencyId(
          user_id,
          currency_id,
        );
      const { balance } =
        await this.AvailableWithdrawBalanceRepository.createQueryBuilder()
          .where('user_id = :user_id', { user_id })
          .andWhere('symbol_id = :symbol_id', { symbol_id: currency_id })
          .getOne();
      if (Number(balance_amount) < Number(balance)) {
        symbols.add(currency_id);
      }
    }

    return symbols;
  }
}
