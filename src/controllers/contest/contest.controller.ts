import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { ContestService } from 'modules/contest/contest.service';
import { contestTime } from 'utils';

@ApiTags('Wagered contest')
@Controller('contest')
export class ContestController {
  constructor(private readonly contestService: ContestService) {}

  @ApiOperation({
    summary: 'Get the current contest list',
    description: 'Limit: 10 times / 1 min',
  })
  @Get('list')
  async getList() {
    return await this.contestService.getWagerContesterIn24h();
  }

  @ApiOperation({
    summary: 'Get the past contest history',
    description: 'Limit: 10 times / 1 min',
  })
  @Get('history')
  async getHistory() {
    const { currentTime } = contestTime();

    const { lastContestStartTime, lastContestEndTime, contest } =
      await this.contestService.getLastContestHistory();

    return {
      current_time: currentTime,
      last_content_start_time: lastContestStartTime,
      last_content_end_time: lastContestEndTime,
      contest,
    };
  }

  @ApiOperation({
    summary: 'Get the current contest position',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('position')
  @UseGuards(JwtAuthGuard)
  async getMyPosition(@Request() req: any) {
    return await this.contestService.getPositionByUserId(req.user.id);
  }
}
