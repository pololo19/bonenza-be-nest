import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AffiliateBonus,
  BlockchainSymbol,
  GameBlockchainTransaction,
  Setting,
  User,
  VipLevel,
  WithdrawAffiliateBonus,
} from 'entities';
import { MessageModule } from 'modules/message/message.module';
import { SettingModule } from 'modules/setting/setting.module';

import { AffiliateService } from './affiliate.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      GameBlockchainTransaction,
      AffiliateBonus,
      BlockchainSymbol,
      Setting,
      VipLevel,
      WithdrawAffiliateBonus,
    ]),
    MessageModule,
    SettingModule,
  ],
  providers: [AffiliateService],
  exports: [AffiliateService],
})
export class AffiliateModule {}
