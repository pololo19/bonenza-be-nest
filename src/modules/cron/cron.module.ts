import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  BlockchainCryptoBalance,
  BlockchainDepositTransaction,
  BlockchainSymbol,
  BotBetRange,
  BotGame,
  BotUserCurrency,
  CashbackBonus,
  Game,
  GameBlockchainTransaction,
  GameProvider,
  QuestBonus,
  RecommendedGame,
  Spin,
  SpinLog,
  User,
  WagerContestBonus,
} from 'entities';
import { MemoryService } from 'modules/memory/memory.service';
import { MessageModule } from 'modules/message/message.module';

// import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron.service';
import { CronBotService } from './cron-bot.service';
import { CronCashbackService } from './cron-cashback.service';
import { CronContestService } from './cron-contest.service';
import { CronDashboardService } from './cron-dashboard.service';
import { CronQuestService } from './cron-quest.service';
import { CronSpinService } from './cron-spin.service';

@Module({
  imports: [
    // ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([
      User,
      BlockchainSymbol,
      BlockchainCryptoBalance,
      Game,
      GameProvider,
      GameBlockchainTransaction,
      BlockchainDepositTransaction,
      CashbackBonus,
      QuestBonus,
      WagerContestBonus,
      Spin,
      SpinLog,
      BotBetRange,
      BotGame,
      BotUserCurrency,
      RecommendedGame,
    ]),
    MessageModule,
  ],
  providers: [
    CronService,
    CronQuestService,
    CronSpinService,
    CronContestService,
    CronCashbackService,
    CronDashboardService,
    CronBotService,
    MemoryService,
  ],
  exports: [CronService],
})
export class CronModule {}
