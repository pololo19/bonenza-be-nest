import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Airdrop,
  AirdropBonus,
  BlockchainCryptoBalance,
  BlockchainDepositTransaction,
  BlockchainSymbol,
  CashbackBonus,
  ClaimBonus,
  DepositBonus,
  GameBlockchainTransaction,
  LevelUpBonus,
  QuestBonus,
  SpinBonus,
  User,
  VipLevel,
  WagerContestBonus,
} from 'entities';
import { SpinModule } from 'modules/spin/spin.module';
import { VipModule } from 'modules/vip/vip.module';
import { WalletModule } from 'modules/wallet/wallet.module';

import { BonusService } from './bonus.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      BlockchainDepositTransaction,
      BlockchainSymbol,
      ClaimBonus,
      CashbackBonus,
      VipLevel,
      DepositBonus,
      LevelUpBonus,
      BlockchainCryptoBalance,
      GameBlockchainTransaction,
      WagerContestBonus,
      SpinBonus,
      QuestBonus,
      Airdrop,
      AirdropBonus,
    ]),
    VipModule,
    WalletModule,
    SpinModule,
  ],
  providers: [BonusService],
  exports: [BonusService],
})
export class BonusModule {}
