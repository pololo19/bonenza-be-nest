import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemNotification } from 'entities';

import { SystemNotificationService } from './system-notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([SystemNotification])],
  providers: [SystemNotificationService],
  exports: [SystemNotificationService],
})
export class NotificationModule {}
