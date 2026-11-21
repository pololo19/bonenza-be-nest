import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { QuestService } from 'modules/quest/quest.service';

@ApiTags('Quest')
@Controller('quest')
export class QuestController {
  constructor(private readonly questService: QuestService) {}

  @ApiOperation({
    summary: 'Get quest list',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('list')
  @UseGuards(JwtAuthGuard)
  async getQuestList(@Request() req: any) {
    return await this.questService.getCurrentQuestListByUserId(req.user.id);
  }

  @ApiOperation({
    summary: 'Get quest history',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('history')
  @UseGuards(JwtAuthGuard)
  async getQuestHistory(@Request() req: any) {
    return await this.questService.getQuestHistoryByUserId(req.user.id);
  }
}
