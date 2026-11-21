import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppEnvironment } from 'app.environment';
import {
  AffiliateBonus,
  BlockchainCryptoBalance,
  BlockchainCryptocurrency,
  BlockchainCryptoWallet,
  BlockchainDepositTransaction,
  BlockchainNetwork,
  BlockchainSwapTransaction,
  BlockchainSymbol,
  BlockchainWithdrawTransaction,
  CashbackBonus,
  ClaimBonus,
  DepositBonus,
  Game,
  GameBlockchainTransaction,
  GameProvider,
  LevelUpBonus,
  QuestBonus,
  Setting,
  SpinBonus,
  User,
  VipLevel,
  VipLevelBenefit,
  VipMedal,
  WagerContestBonus,
} from 'entities';

import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      BlockchainSymbol,
      BlockchainNetwork,
      BlockchainCryptocurrency,
      BlockchainDepositTransaction,
      BlockchainWithdrawTransaction,
      BlockchainCryptoBalance,
      BlockchainCryptoWallet,
      BlockchainSwapTransaction,
      Game,
      GameProvider,
      Setting,
      GameBlockchainTransaction,
      VipLevel,
      VipMedal,
      VipLevelBenefit,
      CashbackBonus,
      LevelUpBonus,
      ClaimBonus,
      DepositBonus,
      WagerContestBonus,
      AffiliateBonus,
      SpinBonus,
      QuestBonus,
    ]),
    JwtModule.registerAsync({
      inject: [AppEnvironment],
      useFactory: (appEnvironment: AppEnvironment) => {
        return {
          secret: appEnvironment.jwtSecretKey,
          // signOptions: { expiresIn: appEnvironment.jwtTokenExpire },
        };
      },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AdminModule {}
