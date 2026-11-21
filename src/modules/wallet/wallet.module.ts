import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AffiliateBonus,
  AirdropBonus,
  AvailableWithdrawBalance,
  BlockchainCryptoBalance,
  BlockchainCryptocurrency,
  BlockchainCryptoWallet,
  BlockchainDepositTransaction,
  BlockchainNetwork,
  BlockchainSwapTransaction,
  BlockchainSymbol,
  BlockchainSymbolFavorite,
  BlockchainWithdrawTransaction,
  ClaimBonus,
  FiatCurrency,
  FiatCurrencyFavorite,
  GameBlockchainTransaction,
  GameStripeTransaction,
  QuestBonus,
  Setting,
  StripeDepositTransaction,
  StripeFiatBalance,
  TipTransaction,
  User,
  WithdrawAffiliateBonus,
} from 'entities';
import { GameModule } from 'modules/game/game.module';
import { MessageModule } from 'modules/message/message.module';
import { SettingModule } from 'modules/setting/setting.module';

import { StripeService } from './stripe.service';
import { WalletService } from './wallet.service';
import { WalletBalanceService } from './wallet-balance.service';
import { WalletCryptocurrencyService } from './wallet-cryptocurrency.service';
import { WalletDepositService } from './wallet-deposit.service';
import { WalletRolloverService } from './wallet-rollover.service';
import { WalletSwapService } from './wallet-swap.service';
import { WalletTipService } from './wallet-tip.service';
import { WalletTransactionService } from './wallet-transaction.service';
import { WalletWithdrawService } from './wallet-withdraw.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      BlockchainCryptoBalance,
      User,
      BlockchainCryptoWallet,
      BlockchainCryptocurrency,
      BlockchainNetwork,
      BlockchainSymbol,
      BlockchainSwapTransaction,
      BlockchainDepositTransaction,
      BlockchainWithdrawTransaction,
      FiatCurrency,
      GameBlockchainTransaction,
      AffiliateBonus,
      ClaimBonus,
      StripeDepositTransaction,
      StripeFiatBalance,
      GameStripeTransaction,
      BlockchainSymbolFavorite,
      FiatCurrencyFavorite,
      Setting,
      WithdrawAffiliateBonus,
      QuestBonus,
      TipTransaction,
      AvailableWithdrawBalance,
      AirdropBonus,
    ]),
    GameModule,
    MessageModule,
    SettingModule,
  ],
  providers: [
    WalletService,
    StripeService,
    WalletBalanceService,
    WalletDepositService,
    WalletSwapService,
    WalletWithdrawService,
    WalletRolloverService,
    WalletTransactionService,
    WalletTipService,
    WalletCryptocurrencyService,
  ],

  exports: [
    WalletService,
    StripeService,
    WalletBalanceService,
    WalletDepositService,
    WalletSwapService,
    WalletWithdrawService,
    WalletRolloverService,
    WalletTransactionService,
    WalletTipService,
  ],
})
export class WalletModule {}
