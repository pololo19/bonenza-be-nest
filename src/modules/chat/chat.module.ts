import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicChat, User } from 'entities';
import { LeaveMessage } from 'entities/leave-message.entity';
import { MessageModule } from 'modules/message/message.module';

import { ChatService } from './chat.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, PublicChat, LeaveMessage]),
    MessageModule,
  ],
  providers: [ChatService],
  exports: [ChatService],
})
export class ChatModule {}
