import { Injectable } from '@nestjs/common';
import {
  CACHE_BLACKJACKS_KEY,
  CACHE_GAME_PROVIDERS_KEY,
  CACHE_HOT_GAMES_KEY,
  CACHE_LIVE_CASINO_KEY,
  CACHE_NEW_RELEASES_KEY,
  CACHE_RECENT_BIG_WINS_KEY,
  CACHE_RECOMMENDED_GAMES_KEY,
  CACHE_SLOTS_KEY,
  CACHE_TABLE_GAMES_KEY,
  CACHE_THEMES_KEY,
  CACHE_TOP_RATED_GAMES_KEY,
} from 'constant';
import { MemoryService } from 'modules/memory/memory.service';

@Injectable()
export class GameDashboardService {
  constructor(private readonly memoryService: MemoryService) {}

  async getRecentBigWins() {
    return await this.memoryService.get(CACHE_RECENT_BIG_WINS_KEY);
  }

  async getTopRatedGames() {
    return await this.memoryService.get(CACHE_TOP_RATED_GAMES_KEY);
  }

  async getSlots() {
    return await this.memoryService.get(CACHE_SLOTS_KEY);
  }

  async getHotGames() {
    return await this.memoryService.get(CACHE_HOT_GAMES_KEY);
  }

  async getLiveCasino() {
    return await this.memoryService.get(CACHE_LIVE_CASINO_KEY);
  }

  async getNewReleases() {
    return await this.memoryService.get(CACHE_NEW_RELEASES_KEY);
  }

  async getBlackjacks() {
    return await this.memoryService.get(CACHE_BLACKJACKS_KEY);
  }

  async getTableGames() {
    return await this.memoryService.get(CACHE_TABLE_GAMES_KEY);
  }

  async getGameProviders() {
    return await this.memoryService.get(CACHE_GAME_PROVIDERS_KEY);
  }

  async getThemes() {
    return await this.memoryService.get(CACHE_THEMES_KEY);
  }

  async getRecommendedGames() {
    return await this.memoryService.get(CACHE_RECOMMENDED_GAMES_KEY);
  }
}
