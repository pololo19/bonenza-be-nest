import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GameDashboardService } from 'modules/game/game-dashboard.service';

@ApiTags('Game - Dashboard')
@Controller('game/dashboard')
export class GameDashboardController {
  constructor(private gameDashboardService: GameDashboardService) {}

  @ApiOperation({
    summary: 'Get data to list in landing page',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('landing')
  async getDataForLandingPage() {
    const [recent_big_wins, top_rated_games, recommended_games] =
      await Promise.all([
        this.gameDashboardService.getRecentBigWins(),
        this.gameDashboardService.getTopRatedGames(),
        this.gameDashboardService.getRecommendedGames(),
      ]);
    return { recent_big_wins, top_rated_games, recommended_games };
  }

  @ApiOperation({
    summary: 'Get data to list in casino page',
    description: 'Limit: 30 times / 1 min',
  })
  @Get('casino')
  async getDataForCasinoPage() {
    const [
      recent_big_wins,
      slots,
      hot_games,
      live_casino,
      game_providers,
      new_releases,
      blackjacks,
      themes,
      table_games,
    ] = await Promise.all([
      this.gameDashboardService.getRecentBigWins(),
      this.gameDashboardService.getSlots(),
      this.gameDashboardService.getHotGames(),
      this.gameDashboardService.getLiveCasino(),
      this.gameDashboardService.getGameProviders(),
      this.gameDashboardService.getNewReleases(),
      this.gameDashboardService.getBlackjacks(),
      this.gameDashboardService.getThemes(),
      this.gameDashboardService.getTableGames(),
    ]);

    return {
      recent_big_wins,
      slots,
      hot_games,
      live_casino,
      game_providers,
      new_releases,
      blackjacks,
      themes,
      table_games,
    };
  }
}
