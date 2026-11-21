import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppEnvironment } from 'app.environment';
import axios from 'axios';
import {
  MAX_TIP_AMOUNT_USD,
  MIN_TIP_AMOUNT_USD,
  MIN_TIP_SENDER_VIP_LEVEL,
  MIN_WITHDRAW_AMOUNT_USD_FOR_APPROVAL,
} from 'constant';
import {
  AvailableWithdrawBalance,
  BlockchainSymbol,
  BlockchainWithdrawTransaction,
  TipTransaction,
  User,
} from 'entities';
import { ENUM_WITHDRAW_STATUS } from 'enums';
import {
  disabledWithdrawError,
  exceedAmountForTipError,
  exceedAvailableBalanceToWithdrawError,
  exceedAvailableWithdrawalAmountError,
  failedWithdrawError,
  isGreaterThanWithdrawFeeError,
  notCompleteRollOverToWithdrawError,
  notMinimumVipLevelForTipError,
  notReachedMinAmountForTipError,
  notZeroAmountForTipError,
  restrictWithdrawError,
} from 'errors';
import { MessageGateway } from 'modules/message/message.gateway';
import { DeepPartial, Repository } from 'typeorm';
import { fixedNumber } from 'utils';

import { WalletBalanceService } from './wallet-balance.service';
import { WalletCryptocurrencyService } from './wallet-cryptocurrency.service';
import { WalletRolloverService } from './wallet-rollover.service';

@Injectable()
export class WalletWithdrawService {
  constructor(
    private readonly appEnvironment: AppEnvironment,
    private readonly walletBalanceSerivce: WalletBalanceService,
    private readonly walletRolloverService: WalletRolloverService,
    private readonly walletCrytpocurrencyService: WalletCryptocurrencyService,
    private readonly messageGateway: MessageGateway,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(BlockchainWithdrawTransaction)
    private BlockchainWithdrawTransactionRepository: Repository<BlockchainWithdrawTransaction>,
    @InjectRepository(TipTransaction)
    private TipTransactionRepository: Repository<TipTransaction>,
    @InjectRepository(AvailableWithdrawBalance)
    private AvailableWithdrawBalanceRepository: Repository<AvailableWithdrawBalance>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
  ) {}

  async withdrawCrypto(
    user: User,
    symbol_id: string,
    network_id: string,
    withdraw_address: string,
    withdraw_amount: number,
  ) {
    const _user = await this.UserRepository.findOneBy({ id: user.id });
    const cryptocurrency =
      await this.walletCrytpocurrencyService.getblockchainCryptocurrencyByNetworkIdAndSymbolId(
        network_id,
        symbol_id,
      );
    const withdraw_fee = Number(cryptocurrency.withdraw_fee);
    const price = Number(cryptocurrency.symbol.price);

    const now = Math.floor(Date.now() / 1000);

    if (_user.disabled_withdraw) {
      throw new HttpException(
        disabledWithdrawError.error,
        disabledWithdrawError.code,
      );
    }

    if (now < _user.restricted_to) {
      throw new HttpException(
        restrictWithdrawError.error,
        restrictWithdrawError.code,
      );
    }

    if (withdraw_amount <= withdraw_fee) {
      throw new HttpException(
        isGreaterThanWithdrawFeeError.error,
        isGreaterThanWithdrawFeeError.code,
      );
    }

    if (
      !(await this.walletRolloverService.isRolloverCompletedByUserId(user.id))
    ) {
      throw new HttpException(
        notCompleteRollOverToWithdrawError.error,
        notCompleteRollOverToWithdrawError.code,
      );
    }

    const { available_withdrawal_amount } =
      await this.getAvailableWithdrawalBalanceByUserIdAndCurrencyId(
        user.id,
        symbol_id,
      );

    if (available_withdrawal_amount < withdraw_amount) {
      throw new HttpException(
        exceedAvailableWithdrawalAmountError.error,
        exceedAvailableWithdrawalAmountError.code,
      );
    }

    try {
      await axios.post(
        `${this.appEnvironment.blockchainWalletSystemURL}/request-withdraw`,
        {
          user_id: user.id,
          symbol_id,
          network_id,
          address: withdraw_address,
          amount: withdraw_amount,
          withdraw_fee,
          symbol_price: price,
        },
      );

      if (withdraw_amount * price >= MIN_WITHDRAW_AMOUNT_USD_FOR_APPROVAL) {
        return { status: true, message: 'waitForApprovalByAdmin' };
      }

      return { status: true, message: 'processing' };
    } catch (e) {
      console.error(e.response.data);
      throw new HttpException(
        failedWithdrawError.error,
        failedWithdrawError.code,
      );
    }
  }

  async sendTip(
    sender_id: string,
    receiver_id: string,
    symbol_id: string,
    amount: number,
  ) {
    if (amount <= 0) {
      throw new HttpException(
        notZeroAmountForTipError.error,
        notZeroAmountForTipError.code,
      );
    }

    const sender = await this.UserRepository.findOneBy({ id: sender_id });
    if (sender.vip_level < MIN_TIP_SENDER_VIP_LEVEL) {
      throw new HttpException(
        notMinimumVipLevelForTipError.error,
        notMinimumVipLevelForTipError.code,
      );
    }

    const { available_withdrawal_amount } =
      await this.getAvailableWithdrawalBalanceByUserIdAndCurrencyId(
        sender_id,
        symbol_id,
      );

    if (available_withdrawal_amount < amount) {
      throw new HttpException(
        exceedAvailableWithdrawalAmountError.error,
        exceedAvailableWithdrawalAmountError.code,
      );
    }

    const { balance_amount, price } =
      await this.walletBalanceSerivce.getBalanceByUserIdAndCurrencyId(
        sender_id,
        symbol_id,
      );

    if (amount > balance_amount) {
      throw new HttpException(
        exceedAvailableBalanceToWithdrawError.error,
        exceedAvailableBalanceToWithdrawError.code,
      );
    }

    if (amount * price < MIN_TIP_AMOUNT_USD) {
      throw new HttpException(
        notReachedMinAmountForTipError.error,
        notReachedMinAmountForTipError.code,
      );
    }

    if (amount * price > MAX_TIP_AMOUNT_USD) {
      throw new HttpException(
        exceedAmountForTipError.error,
        exceedAmountForTipError.code,
      );
    }

    const sender_wallet_balance =
      await this.walletBalanceSerivce.addBalanceByUserIdAndCurrencyId(
        sender_id,
        symbol_id,
        -amount,
      );

    const receiver_wallet_balance =
      await this.walletBalanceSerivce.addBalanceByUserIdAndCurrencyId(
        receiver_id,
        symbol_id,
        amount,
      );

    //  confirm rollover date
    if (
      await this.walletRolloverService.isRolloverCompletedByUserId(receiver_id)
    ) {
      const receiver = await this.UserRepository.findOneBy({ id: receiver_id });
      receiver.rollover_at = new Date();
      await this.UserRepository.save(receiver);
    }

    //  Reduce available withdrawal balance
    await this.updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
      sender_id,
      -amount,
      symbol_id,
    );

    //  create tip transaction
    const _newTipTransaction: DeepPartial<TipTransaction> = {
      sender: { id: sender_id },
      receiver: { id: receiver_id },
      symbol: { id: symbol_id },
      amount,
      amount_usd: amount * price,
      sender_wallet_balance,
      sender_wallet_balance_usd: sender_wallet_balance * price,
      receiver_wallet_balance,
      receiver_wallet_balance_usd: receiver_wallet_balance * price,
    };

    await this.TipTransactionRepository.save(
      this.TipTransactionRepository.create(_newTipTransaction),
    );

    const symbol = await this.BlockchainSymbolRepository.findOneBy({
      id: symbol_id,
    });

    this.messageGateway.emitTip(receiver_id, {
      sender_name: sender.name,
      symbol: symbol.symbol,
      amount,
      created_at: new Date(),
    });

    return {
      status: true,
    };
  }

  async getAvailableWithdrawalInfoByUserIdAndCurrencyId(
    user_id: string,
    currency_id: string,
  ) {
    const { available_withdrawal_amount_usd, available_withdrawal_amount } =
      await this.getAvailableWithdrawalBalanceByUserIdAndCurrencyId(
        user_id,
        currency_id,
      );

    const { balance_amount_usd, balance_amount } =
      await this.walletBalanceSerivce.getBalanceByUserIdAndCurrencyId(
        user_id,
        currency_id,
      );

    const locked_funds_amount_usd =
      balance_amount_usd - available_withdrawal_amount_usd > 0
        ? balance_amount_usd - available_withdrawal_amount_usd
        : 0;

    const locked_funds_amount =
      balance_amount - available_withdrawal_amount > 0
        ? balance_amount - available_withdrawal_amount
        : 0;

    return {
      available_withdrawal_amount_usd,
      available_withdrawal_amount,
      locked_funds_amount_usd: fixedNumber(locked_funds_amount_usd, 2),
      locked_funds_amount,
    };
  }

  async getTotalWithdrawAmountUsdByUserId(user_id: string) {
    const result =
      await this.BlockchainWithdrawTransactionRepository.createQueryBuilder()
        .select('COALESCE(SUM(amount_usd), 0) as sum')
        .where('user_id = :user_id', { user_id })
        .andWhere('status = :status', {
          status: ENUM_WITHDRAW_STATUS.Complete,
        })
        .getRawOne();
    return Number(result.sum);
  }

  async getTotalTipAmountUsdByUserId(user_id: string) {
    const result = await this.TipTransactionRepository.createQueryBuilder(
      't_tt',
    )
      .select('COALESCE(SUM(amount_usd), 0) as sum')
      .where('sender_id = :user_id', { user_id })
      .getRawOne();

    return Number(result.sum);
  }
  //////////////////////////////////////////////////////////////////////
  //////////////////// Available Withdrawal Balance ////////////////////
  //////////////////////////////////////////////////////////////////////

  async createAvaiableWithdraBalanceByUserId(user_id: string) {
    const symbols =
      await this.walletCrytpocurrencyService.getBlockchainSymbols();

    for (const symbol of symbols) {
      const _newAvailableWithdrawalBalance = {
        user: { id: user_id },
        symbol: { id: symbol.id },
      };
      await this.AvailableWithdrawBalanceRepository.save(
        _newAvailableWithdrawalBalance,
      );
    }
  }

  async getAvailableWithdrawalBalanceByUserIdAndCurrencyId(
    user_id: string,
    currency_id: string,
  ) {
    const availableWithdrawalBalance =
      await this.AvailableWithdrawBalanceRepository.createQueryBuilder('t_awb')
        .select([
          'TRUNC(t_awb.balance, 8) AS available_withdrawal_amount',
          'TRUNC(COALESCE(t_awb.balance * t_bs.price, 0), 8) AS available_withdrawal_amount_usd',
        ])
        .leftJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_awb.symbol_id')
        .where('user_id = :user_id', { user_id })
        .andWhere('symbol_id = :symbol_id', { symbol_id: currency_id })
        .getRawOne();
    return {
      available_withdrawal_amount: Number(
        availableWithdrawalBalance.available_withdrawal_amount,
      ),
      available_withdrawal_amount_usd: Number(
        availableWithdrawalBalance.available_withdrawal_amount_usd,
      ),
    };
  }

  async updateAvailableWithdrawalBalanceByUserIdAndCompleteSymbols(
    user_id: string,
    currency_id: string,
  ) {
    const symbols =
      await this.walletRolloverService.getCompletedSymbolsForRolloverByUserId(
        user_id,
        currency_id,
      );
    for (const symbol of symbols) {
      await this.AvailableWithdrawBalanceRepository.query(`
        UPDATE available_withdraw_balance
        SET balance = (
          SELECT balance
          FROM "blockchain_crypto_balance"
          WHERE user_id = '${user_id}' AND symbol_id = '${symbol}'
        )
        WHERE user_id = '${user_id}' AND symbol_id = '${symbol}'
      `);
    }
  }

  async updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
    user_id: string,
    amount: number,
    symbol_id?: string,
  ) {
    if (!symbol_id) {
      await this.AvailableWithdrawBalanceRepository.createQueryBuilder()
        .update(AvailableWithdrawBalance)
        .set({
          balance: () =>
            `CASE WHEN balance + ${amount} < 0 THEN 0 ELSE balance + ${amount} END`,
        })
        .where(`user_id = '${user_id}'`)
        .andWhere(
          `symbol_id = (SELECT id FROM "blockchain_symbol" "t_bs" WHERE t_bs.symbol = 'USDT')`,
        )
        .execute();
    } else {
      await this.AvailableWithdrawBalanceRepository.createQueryBuilder()
        .update(AvailableWithdrawBalance)
        .set({
          balance: () =>
            `CASE WHEN balance + ${amount} < 0 THEN 0 ELSE balance + ${amount} END`,
        })
        .where(`user_id = '${user_id}' AND symbol_id = '${symbol_id}'`)
        .execute();
    }
  }
}
