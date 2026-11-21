import {
  Controller,
  Delete,
  Get,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IpAddress } from 'decorators/ip-address.decorator';
import { Agent } from 'decorators/user-agent.decorator';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { AuthService } from 'modules/auth/auth.service';
import { UserService } from 'modules/user/user.service';

import { paginationDto, userSessionDeleteDto } from './dtos';

@ApiTags('User Session')
@Controller('user-session')
export class UserSessionController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get('get-list-user-session')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getUserSessions(
    @Request() req: any,
    @Query() filters: paginationDto,
    @Agent() agent: any,
    @IpAddress() ipAddress: string,
  ) {
    const browserInfo = `${agent.browser} ${agent.browserVersion} / ${agent.os} ${agent.osVersion}`;
    const ipaddress = ipAddress;
    await this.userService.createSession(req.user, browserInfo, ipaddress);
    const _sessions = await this.userService.getSessions(req.user, filters);
    const _res = _sessions.sessions.map((session) => ({
      ...session,
      active:
        session.browser === browserInfo && session.ip_address === ipaddress,
    }));
    return {
      ..._sessions,
      sessions: _res,
    };
  }

  @Delete('delete-user-session')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async deleteUserSession(@Query() query: userSessionDeleteDto) {
    return this.userService.deleteSession(query.user_session_id);
  }
}
