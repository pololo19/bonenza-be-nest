import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IpAddress } from 'decorators/ip-address.decorator';
import { Agent } from 'decorators/user-agent.decorator';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { GamePlayService } from 'modules/game/game-play.service';

import {
  createSessionDto,
  playRequestDto,
  rollbackRequestDto,
  startDemoDto,
} from './dtos';

@ApiTags('Game - Play')
@Controller('game')
export class GamePlayController {
  constructor(private gamePlayService: GamePlayService) {}

  @ApiOperation({
    summary: 'Get a game link to start demo',
    description: 'Limit: 20 times / 1 min',
  })
  @Post('start-demo')
  async startDemo(
    @Body() body: startDemoDto,
    @IpAddress() ip: string,
    @Agent() agent: any,
  ) {
    const { game_id, locale } = body;
    return await this.gamePlayService.startDemo(
      game_id,
      ip,
      agent.device === 'smartphone' ? 'mobile' : 'desktop',
      locale,
    );
  }

  @ApiOperation({
    summary: 'Get a game link by creating a new session',
    description: 'Limit: 20 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('create-session')
  @UseGuards(JwtAuthGuard)
  async createSession(
    @Body() body: createSessionDto,
    @Request() req: any,
    @IpAddress() ip: string,
    @Agent() agent: any,
  ) {
    const { game_id, currency_type, currency_id } = body;
    const res = await this.gamePlayService.createGameSession(
      req.user,
      game_id,
      ip,
      agent.device === 'smartphone' ? 'mobile' : 'desktop',
      currency_type,
      currency_id,
    );

    return res;
  }

  @ApiOperation({
    summary: 'Play request called by GCP',
    description: 'Limit: no',
  })
  @Post('play')
  @HttpCode(200)
  async playRequest(@Body() body: playRequestDto, @Request() req: any) {
    const { user_id, currency, game, game_id, finished, actions } = body;

    console.log(
      new Date(),
      'play',
      user_id,
      currency,
      game,
      game_id,
      finished,
      actions,
      req.headers['x-request-sign'] as string,
    );
    return await this.gamePlayService.playRequest(
      user_id,
      currency,
      game,
      game_id,
      finished,
      actions,
      body,
      req.headers['x-request-sign'] as string,
    );
  }

  @Post('rollback')
  @ApiOperation({
    summary: 'Rollback request called by GCP',
    description: 'Limit: no',
  })
  @HttpCode(200)
  async rollbackRequest(@Body() body: rollbackRequestDto, @Request() req: any) {
    const { user_id, currency, game, game_id, finished, actions } = body;
    console.log(
      new Date(),
      'rollback',
      user_id,
      currency,
      game,
      game_id,
      finished,
      actions,
      body,
      req.headers['x-request-sign'] as string,
    );
    return await this.gamePlayService.rollbackRequest(
      user_id,
      currency,
      game,
      game_id,
      finished,
      actions,
      body,
      req.headers['x-request-sign'] as string,
    );
  }
}
