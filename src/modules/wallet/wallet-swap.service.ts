import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MINIMUM_BASE_AMOUNT_USD_FOR_SWAP } from 'constant';
import {
  BlockchainCryptoBalance,
  BlockchainSwapTransaction,
  BlockchainSymbol,
  User,
} from 'entities';
import {
  disableSwap,
  isEnoughBalanceForSwapError,
  isExistDestinationCryptoError,
  isExistSourceCryptoError,
  isMiminimumBaseAmountUsdForSwapError,
} from 'errors';
import { SettingService } from 'modules/setting/setting.service';
import { DeepPartial, Repository } from 'typeorm';

import { WalletWithdrawService } from './wallet-withdraw.service';

@Injectable()
export class WalletSwapService {
  constructor(
    private readonly settingService: SettingService,
    private readonly walletWithdrawService: WalletWithdrawService,
    @InjectRepository(BlockchainCryptoBalance)
    private BlockchainCryptoBalanceRepository: Repository<BlockchainCryptoBalance>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(BlockchainSwapTransaction)
    private BlockchainSwapTransactionRepository: Repository<BlockchainSwapTransaction>,
  ) {}

  async getTwoPricesForSwap(base_symbol_id: string, quote_symbol_id: string) {
    const res = await this.BlockchainSymbolRepository.createQueryBuilder()
      .select(
        `(SELECT price FROM blockchain_symbol WHERE id = '${base_symbol_id}')`,
        'from_price',
      )
      .addSelect(
        `(SELECT price FROM blockchain_symbol WHERE id = '${quote_symbol_id}')`,
        'to_price',
      )
      .getRawOne();
    if (res.from_price === null) {
      throw new HttpException(
        isExistSourceCryptoError.error,
        isExistSourceCryptoError.code,
      );
    }
    if (res.to_price === null) {
      throw new HttpException(
        isExistDestinationCryptoError.error,
        isExistDestinationCryptoError.code,
      );
    }
    return res;
  }

  async swapWithTwoCryptos(
    user: User,
    base_symbol_id: string,
    quote_symbol_id: string,
    amount: number,
  ) {
    const from_symbol = await this.BlockchainSymbolRepository.findOneBy({
      id: base_symbol_id,
    });

    console.log(
      'min amount: ',
      amount * from_symbol.price,
      MINIMUM_BASE_AMOUNT_USD_FOR_SWAP,
    );
    if (amount * from_symbol.price < MINIMUM_BASE_AMOUNT_USD_FOR_SWAP) {
      throw new HttpException(
        isMiminimumBaseAmountUsdForSwapError.error,
        isMiminimumBaseAmountUsdForSwapError.code,
      );
    }
    // disable swap for dron
    const dron = await this.BlockchainSymbolRepository.findOneBy({
      symbol: 'DRON',
    });

    if (base_symbol_id === dron.id || quote_symbol_id === dron.id) {
      throw new HttpException(disableSwap.error, disableSwap.code);
    }

    const { available_withdrawal_amount } =
      await this.walletWithdrawService.getAvailableWithdrawalBalanceByUserIdAndCurrencyId(
        user.id,
        base_symbol_id,
      );

    if (available_withdrawal_amount < amount) {
      throw new HttpException(
        isEnoughBalanceForSwapError.error,
        isEnoughBalanceForSwapError.code,
      );
    }

    const result = await this.getTwoPricesForSwap(
      base_symbol_id,
      quote_symbol_id,
    );
    const swap_fee = await this.settingService.getSwapFee();

    const amount_usd = amount * result.from_price;
    const swap_amount =
      (amount * result.from_price * (1 - swap_fee)) / result.to_price;
    const swap_amount_usd = swap_amount * result.to_price;

    //  Update balances

    const base_crypto_balance =
      await this.BlockchainCryptoBalanceRepository.findOne({
        where: {
          user: { id: user.id },
          symbol: { id: base_symbol_id },
        },
      });
    const base_balance: number = +base_crypto_balance.balance;

    if (base_balance < amount) {
      throw new HttpException(
        isEnoughBalanceForSwapError.error,
        isEnoughBalanceForSwapError.code,
      );
    }

    base_crypto_balance.balance = base_balance - amount;
    //  update balance
    await this.BlockchainCryptoBalanceRepository.save(base_crypto_balance);
    //  update available withdrawal balance
    await this.walletWithdrawService.updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
      user.id,
      -amount,
      base_symbol_id,
    );

    const quote_crypto_balance =
      await this.BlockchainCryptoBalanceRepository.findOne({
        where: {
          user: { id: user.id },
          symbol: { id: quote_symbol_id },
        },
      });
    const quote_balance: number = +quote_crypto_balance.balance;
    quote_crypto_balance.balance = quote_balance + swap_amount;
    //  update balance
    await this.BlockchainCryptoBalanceRepository.save(quote_crypto_balance);
    //  update available withdrawal balance
    await this.walletWithdrawService.updateAvailableWithdrawalBalanceByUserIdAndSymbolId(
      user.id,
      swap_amount,
      quote_symbol_id,
    );

    const to_symbol = await this.BlockchainSymbolRepository.findOneBy({
      id: quote_symbol_id,
    });

    // //  Add a new swap transaction
    const newSwapTransaction: DeepPartial<BlockchainSwapTransaction> = {
      user,
      from_symbol,
      to_symbol,
      from_amount: amount,
      from_amount_usd: amount_usd,
      to_amount: swap_amount,
      to_amount_usd: swap_amount_usd,
      from_wallet_balance: base_crypto_balance.balance,
      from_wallet_balance_usd: base_crypto_balance.balance * from_symbol.price,
      to_wallet_balance: quote_crypto_balance.balance,
      to_wallet_balance_usd: quote_crypto_balance.balance * to_symbol.price,
    };

    const swapTransaction =
      this.BlockchainSwapTransactionRepository.create(newSwapTransaction);
    const createdSwapTransaction =
      await this.BlockchainSwapTransactionRepository.save(swapTransaction);

    return swap_amount;
  }
}
