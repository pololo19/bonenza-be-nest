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
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { GameService } from 'modules/game/game.service';

import { favoriteDto, gameIdDto } from './dtos';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @ApiTags('Game - General')
  @ApiOperation({
    summary: 'Tick favorite to a game',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('set-game-favorite-status')
  @UseGuards(JwtAuthGuard)
  async setFavoriteGame(@Body() body: favoriteDto, @Request() req: any) {
    const { game_id } = body;

    return await this.gameService.setFavoriteStatus(req.user, game_id);
  }

  @ApiTags('Game - General')
  @ApiOperation({
    summary: 'Get game favorite status',
    description: 'Limit: 10 times / 1 min',
  })
  @Get('get-game-favorite-status')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getFavoriteGame(@Query() query: favoriteDto, @Request() req: any) {
    const { game_id } = query;

    return await this.gameService.getFavoriteStatus(req.user, game_id);
  }

  @ApiTags('Game - Bet & Win')
  @ApiOperation({
    summary: 'Get the latest bet history',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-latest-bets')
  async getLatestBets() {
    return await this.gameService.getLatestBets();
  }

  @ApiTags('Game - Bet & Win')
  @ApiOperation({
    summary: 'Get the latest high rollers',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('high-rollers')
  async getHighRollers() {
    return await this.gameService.getHighRollers();
  }

  @ApiTags('Game - Bet & Win')
  @Get('get-latest-bets-for-game')
  @ApiOperation({
    summary: 'Get the latest bet history by game',
    description: 'Limit: 30 times / 1 min',
  })
  async getLatestBetsByGameId(@Query() query: gameIdDto) {
    const { game_id } = query;

    return await this.gameService.getLatestBetsByGameId(game_id);
  }

  @ApiTags('Game - Bet & Win')
  @Get('get-latest-bets-for-user-game')
  @ApiOperation({
    summary: 'Get the latest bet history by user and game',
    description: 'Limit: 30 times / 1 min',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getLatestBetsByUserIdAndGameId(
    @Query() query: gameIdDto,
    @Request() req: any,
  ) {
    const { game_id } = query;

    return await this.gameService.getLatestBetsByUserIdAndGameId(
      req.user.id,
      game_id,
    );
  }
}
