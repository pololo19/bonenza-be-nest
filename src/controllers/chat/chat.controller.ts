import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IpAddress } from 'decorators/ip-address.decorator';
import { Agent } from 'decorators/user-agent.decorator';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { ChatService } from 'modules/chat/chat.service';

import { chatDto, chatHistoryDto, leaveMessageDto } from './dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @ApiTags('Chat')
  @ApiOperation({
    summary: 'Get the latest chat history',
    description: 'Limit: 10 times / 1 min',
  })
  @Get('latest')
  async getLatestChatHistory(@Query() query: chatHistoryDto) {
    const { offset, limit } = query;
    return this.chatService.getLatestChatHistory(limit, offset);
  }

  @ApiTags('Chat')
  @ApiOperation({
    summary: 'Add a chat',
    description: 'Limit: 20 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('add')
  @UseGuards(JwtAuthGuard)
  async addChat(@Request() req: any, @Body() body: chatDto) {
    const { text, reply_id } = body;
    return this.chatService.addChatByUserId(req.user.id, text, reply_id);
  }

  @ApiTags('Chat')
  @Post('leave-message')
  @ApiOperation({
    summary: 'Leave a message',
    description: 'Limit: 5 times / 1 min',
  })
  async leaveMessage(
    @Body() body: leaveMessageDto,
    @IpAddress() ipAddress: string,
    @Agent() agent: any,
  ) {
    const deviceInfo = `${agent.browser} ${agent.browserVersion} / ${agent.os} ${agent.osVersion}`;
    return this.chatService.leaveMessage(body.text, ipAddress, deviceInfo);
  }
}
