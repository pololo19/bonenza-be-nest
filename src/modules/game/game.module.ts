import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  BlockchainSymbol,
  FiatCurrency,
  Game,
  GameBlockchainTransaction,
  GameFavorite,
  GameProvider,
  GameProviderFiatBlacklist,
  GameReviewComment,
  GameReviewRating,
  GameStripeTransaction,
  User,
} from 'entities';
import { AffiliateModule } from 'modules/affiliate/affiliate.module';
import { MemoryModule } from 'modules/memory/memory.module';
import { MessageModule } from 'modules/message/message.module';
import { QuestModule } from 'modules/quest/quest.module';
import { SettingModule } from 'modules/setting/setting.module';
import { VipModule } from 'modules/vip/vip.module';

import { GameService } from './game.service';
import { GameDashboardService } from './game-dashboard.service';
import { GamePlayService } from './game-play.service';
import { GameReviewService } from './game-review.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Game,
      BlockchainSymbol,
      GameProvider,
      GameBlockchainTransaction,
      GameFavorite,
      FiatCurrency,
      GameStripeTransaction,
      GameProviderFiatBlacklist,
      GameReviewRating,
      GameReviewComment,
    ]),
    MessageModule,
    AffiliateModule,
    VipModule,
    SettingModule,
    QuestModule,
    MemoryModule,
  ],
  providers: [
    GameService,
    GamePlayService,
    GameReviewService,
    GameDashboardService,
  ],
  exports: [
    GameService,
    GamePlayService,
    GameReviewService,
    GameDashboardService,
  ],
})
export class GameModule {}
