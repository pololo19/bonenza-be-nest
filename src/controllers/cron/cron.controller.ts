import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'decorators/roles.decorator';
import { ENUM_ROLE } from 'enums';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { RolesGuard } from 'guards/roles.guard';
import { CronService } from 'modules/cron/cron.service';
import { PriceService } from 'modules/price/price.service';

@ApiTags('Cron Job (Only for program, not admins)')
@ApiBearerAuth()
@Controller('cron')
@UseGuards(JwtAuthGuard)
export class CronController {
  constructor(
    private readonly cronService: CronService,
    private readonly priceService: PriceService,
  ) {}

  //  12:00:00(every friday)
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('cashback/weekly')
  async cronWeeklyCashback() {
    return await this.cronService.cronWeeklyCashback();
  }

  //  12:00:00(every 15th)
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('cashback/monthly')
  async cronMonthlyCashback() {
    return await this.cronService.cronMonthlyCashback();
  }

  //  02:00:00(everyday)
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('contest')
  async cronWagerContest() {
    return await this.cronService.cronWagerContest();
  }

  //  03:00:00(everyday)
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('spin')
  async cronSpin() {
    return await this.cronService.cronSpin();
  }

  //  14:00:00(everyday)
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('spin/randomize')
  async cronRandomizeSpin() {
    return await this.cronService.cronRandomizeSpin();
  }

  //  13:00:00(everyday)
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('quest/daily')
  async cronDailyForCreatingQuest() {
    return await this.cronService.cronDailyForCreatingQuest();
  }

  //  13:00:00(everyday)
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('quest/weekly')
  async cronWeeklyForCreatingQuest() {
    return await this.cronService.cronWeeklyForCreatingQuest();
  }

  //  08:00:00(everyday)
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('quest/delete-every-day')
  async cronQuestDeleteEveryDay() {
    return await this.cronService.cronDeleteQuestEveryDay();
  }

  //  08:00:00(every monday)
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('quest/delete-every-week')
  async cronQuestDeleteEveryWeek() {
    return await this.cronService.cronDeleteQuestEveryWeek();
  }

  //  every minute
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('price')
  async cronCurrencyPrices() {
    return await this.priceService.updateTotalPrices();
  }

  //  every 10 seconds
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('bot')
  async cronGenerateBotTransaction() {
    return await this.cronService.cronCreateBotGameTransaction();
  }

  //  every 10 mins
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('dashboard/10mins')
  async cronDashboard10mins() {
    return await this.cronService.cronDashboard10mins();
  }

  //  every day
  @UseGuards(RolesGuard)
  @Roles(ENUM_ROLE.ADMIN)
  @Post('dashboard/1day')
  async cronDashboard1day() {
    return await this.cronService.cronDashboard1day();
  }
}
