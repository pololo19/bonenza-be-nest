import { Controller, Get, Query, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IpAddress } from 'decorators/ip-address.decorator';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { GameService } from 'modules/game/game.service';

import {
  gameDto,
  getFavoriteGameDto,
  getProvidersDto,
  liveCasinoDto,
  newReleasesDto,
  providerDto,
  searchGameDto,
  themeDto,
} from './dtos';

@ApiTags('Game - List')
@Controller('game')
export class GameListController {
  constructor(private gameService: GameService) {}

  @ApiOperation({
    summary: 'Get a game',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-game')
  async getGame(@Query() query: gameDto, @IpAddress() ip: string) {
    const { identifier } = query;

    return await this.gameService.getGameByIdentifier(ip, identifier);
  }

  @ApiOperation({
    summary: 'Get pick game list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-pick-games-for-you')
  async getPickGamesForYou(@Query() query: getFavoriteGameDto) {
    const { page, page_size } = query;
    return await this.gameService.getPickGamesForYou(page, page_size);
  }

  @Get('get-recent-games')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getRecent(@Request() req: any, @Query() query: getFavoriteGameDto) {
    const { page, page_size } = query;

    return await this.gameService.getRecentGames(req.user, page, page_size);
  }

  @ApiOperation({
    summary: 'Get favorite game list',
    description: 'Limit: 30 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('get-favorite-games')
  @UseGuards(JwtAuthGuard)
  async getFavoriteGames(
    @Request() req: any,
    @Query() query: getFavoriteGameDto,
  ) {
    const { page, page_size } = query;

    return await this.gameService.getFavoriteGames(req.user, page, page_size);
  }

  @ApiOperation({
    summary: 'Get slot game list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-slots')
  async getSlots(@Query() query: liveCasinoDto) {
    const { search, providers, page, page_size, sort } = query;

    return await this.gameService.getSlots(
      search === undefined ? '' : search,
      providers,
      page,
      page_size,
      sort,
    );
  }

  @ApiOperation({
    summary: 'Get live casino game list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-live-casino')
  async getLiveCasino(@Query() query: liveCasinoDto) {
    const { search, providers, page, page_size, sort } = query;

    return await this.gameService.getLiveCasino(
      search === undefined ? '' : search,
      providers,
      page,
      page_size,
      sort,
    );
  }

  @ApiOperation({
    summary: 'Get hot game list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-hot-games')
  async getHotGames(@Query() query: newReleasesDto) {
    const { search, providers, page, page_size } = query;

    return await this.gameService.getHotGames(
      search === undefined ? '' : search,
      providers,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get new released game list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-new-releases')
  async getNewReleases(@Query() query: newReleasesDto) {
    const { search, providers, page, page_size } = query;

    return await this.gameService.getNewReleases(
      search === undefined ? '' : search,
      providers,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get feature buy in game list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-feature-buy-in')
  async getFeatureBuyIn(@Query() query: newReleasesDto) {
    const { search, providers, page, page_size } = query;

    return await this.gameService.getFeatureByIn(
      search === undefined ? '' : search,
      providers,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get blackjack game list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-blackjack')
  async getBlackJack(@Query() query: newReleasesDto) {
    const { search, providers, page, page_size } = query;

    return await this.gameService.getBlackjack(
      search === undefined ? '' : search,
      providers,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get racing game list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-racing')
  async getRacing(@Query() query: newReleasesDto) {
    const { search, providers, page, page_size } = query;

    return await this.gameService.getRacing(
      search === undefined ? '' : search,
      providers,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get table game list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-table-games')
  async getTableGames(@Query() query: newReleasesDto) {
    const { search, providers, page, page_size } = query;

    return await this.gameService.getTableGames(
      search === undefined ? '' : search,
      providers,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get game provider list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-providers')
  async getProviders(@Query() query: getProvidersDto) {
    const { category } = query;

    return await this.gameService.getProviders(category);
  }

  @ApiOperation({
    summary: 'Get game theme list',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-themes')
  async getThemes() {
    return await this.gameService.getThemes();
  }

  @ApiOperation({
    summary: 'Get game list by theme',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-games-by-theme')
  async getThemesByTheme(@Query() query: themeDto) {
    const { theme, providers, page, page_size } = query;
    return await this.gameService.getGamesByTheme(
      theme,
      providers,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get game list by provider',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-games-by-provider')
  async getGamesByProvider(@Query() query: providerDto) {
    const { provider_name, sort, page, page_size } = query;

    return await this.gameService.getGamesByProviderName(
      provider_name,
      sort,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get game by name and provider',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('get-game-by-name-and-provider')
  async getGamesByNameAndProvider(@Query() query: searchGameDto) {
    const { search } = query;

    return await this.gameService.getGamesByNameAndProvider(search);
  }

  @ApiOperation({
    summary: 'Get all game identifiers',
  })
  @Get('get-all-games')
  async getAllGames() {
    return await this.gameService.getAllGames();
  }

  @ApiOperation({
    summary: 'Get all game provider identifiers',
  })
  @Get('get-all-game-providers')
  async getAllGameProviders() {
    return await this.gameService.getAllGameProviders();
  }
}
