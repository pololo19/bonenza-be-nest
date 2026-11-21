import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entities';
import { ENUM_SPIN } from 'enums';
import { Repository } from 'typeorm';
import {
  goalWagerAmountUsdForSpin,
  guessDailyQuestTime,
  guessWeeklyQuestTime,
} from 'utils';

import { CronBotService } from './cron-bot.service';
import { CronCashbackService } from './cron-cashback.service';
import { CronContestService } from './cron-contest.service';
import { CronDashboardService } from './cron-dashboard.service';
import { CronQuestService } from './cron-quest.service';
import { CronSpinService } from './cron-spin.service';

@Injectable()
export class CronService {
  constructor(
    private readonly cronContestService: CronContestService,
    private readonly cronSpinService: CronSpinService,
    private readonly cronQuestService: CronQuestService,
    private readonly cronCashbackService: CronCashbackService,
    private readonly cronBotService: CronBotService,
    private readonly cronDashboardService: CronDashboardService,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async cronWagerContest() {
    return await this.cronContestService.saveHistory();
  }

  async cronWeeklyCashback() {
    this.cronCashbackService.weeklyCashback();
  }

  async cronMonthlyCashback() {
    this.cronCashbackService.monthlyCashback();
  }

  async cronSpin() {
    const now = Math.floor(Date.now() / 1000);

    const users = await this.UserRepository.find({
      where: { allowed: true },
      select: ['id', 'vip_level'],
    });

    for (const user of users) {
      const totalWagerAmountUsd =
        await this.cronSpinService.getTotalWagerAmountUsdByUserIdForPast24hours(
          user,
          now,
        );

      if (totalWagerAmountUsd >= goalWagerAmountUsdForSpin(user.vip_level)) {
        this.cronSpinService.addFreeSpinByUserId(user.id);
        this.cronSpinService.addSpinLog(
          user.id,
          user.vip_level,
          ENUM_SPIN.Daily,
        );
      }
    }
  }

  async cronRandomizeSpin() {
    await this.cronSpinService.randomizeSpins();
  }

  async cronDailyForCreatingQuest() {
    const now = Math.floor(Date.now() / 1000);

    const { startTime, endTime } = guessDailyQuestTime(now);

    await this.cronQuestService.createDailyTasks(startTime, endTime);
  }

  async cronWeeklyForCreatingQuest() {
    const now = Math.floor(Date.now() / 1000);

    const { startTime, endTime } = guessWeeklyQuestTime(now);

    await this.cronQuestService.createWeeklyTasks(startTime, endTime);
  }

  async cronDeleteQuestEveryDay() {
    await this.cronQuestService.deleteExpiredTasks();
  }

  async cronDeleteQuestEveryWeek() {
    await this.cronQuestService.deleteUnclaimedAndFinishTasks();
    await this.cronQuestService.deleteUnfinishedTasks();
  }

  async cronCreateBotGameTransaction() {
    let count = 0;
    const intervalId = setInterval(async () => {
      await this.cronBotService.generateBotTransaction();
      if (count === 30) {
        //  5s in 1 minute
        clearInterval(intervalId);
      }
      count++;
    }, 2000);
  }

  async cronDashboard10mins() {
    await this.cronDashboardService.getRecentBigWins();
  }

  async cronDashboard1day() {
    await this.cronDashboardService.getTopRatedGames();
    await this.cronDashboardService.getSlots();
    await this.cronDashboardService.getHotGames();
    await this.cronDashboardService.getLiveCasino();
    await this.cronDashboardService.getNewReleases();
    await this.cronDashboardService.getBlackjacks();
    await this.cronDashboardService.getTableGames();
    await this.cronDashboardService.getGameProviders();
    await this.cronDashboardService.getThemes();
    await this.cronDashboardService.getRecommendedGames();
  }
}
