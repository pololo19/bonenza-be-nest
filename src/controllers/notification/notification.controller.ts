import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SystemNotificationService } from 'modules/notification/system-notification.service';

import { SystemNotificationHistoryDto } from './dto';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly systemNotificationService: SystemNotificationService,
  ) {}

  @ApiTags('Notification')
  @ApiOperation({
    summary: 'Get the latest system notification history',
    description: 'Limit: 10 times / 1 min',
  })
  @Get('latest')
  async getLatestChatHistory(@Query() query: SystemNotificationHistoryDto) {
    const { offset, limit } = query;
    return this.systemNotificationService.getSystemNotificationHistory(
      limit,
      offset,
    );
  }
}
