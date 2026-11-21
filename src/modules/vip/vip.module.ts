import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  BlockchainCryptoBalance,
  BlockchainDepositTransaction,
  BlockchainSymbol,
  CashbackBonus,
  GameBlockchainTransaction,
  LevelUpBonus,
  User,
  VipLevel,
  VipLevelBenefit,
  VipMedal,
} from 'entities';
import { AffiliateModule } from 'modules/affiliate/affiliate.module';
import { MessageModule } from 'modules/message/message.module';
import { SettingModule } from 'modules/setting/setting.module';
import { SpinModule } from 'modules/spin/spin.module';

import { VipService } from './vip.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      VipLevel,
      BlockchainCryptoBalance,
      BlockchainSymbol,
      GameBlockchainTransaction,
      CashbackBonus,
      BlockchainDepositTransaction,
      VipMedal,
      VipLevelBenefit,
      LevelUpBonus,
    ]),
    AffiliateModule,
    SettingModule,
    SpinModule,
    MessageModule,
  ],
  providers: [VipService],
  exports: [VipService],
})
export class VipModule {}
