import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
import {
  BlockchainSymbol,
  Game,
  GameBlockchainTransaction,
  GameProvider,
  GameStripeTransaction,
  RecommendedGame,
  User,
} from 'entities';
import { ENUM_CURRENCY, ENUM_GAME_TRANSACTION_ACTION } from 'enums';
import { MemoryService } from 'modules/memory/memory.service';
import { Repository } from 'typeorm';
import { getThemeName, shuffleArray } from 'utils';

@Injectable()
export class CronDashboardService {
  constructor(
    private readonly memoryService: MemoryService,
    @InjectRepository(Game)
    private GameRepository: Repository<Game>,
    @InjectRepository(GameProvider)
    private GameProviderRepository: Repository<GameProvider>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
  ) {}

  async getRecentBigWins() {
    const transactions =
      await this.GameBlockchainTransactionRepository.createQueryBuilder('t_gbt')
        .select([
          't_g.title as title',
          't_g.identifier as identifier',
          't_u.id as user_id',
          `
        CASE 
          WHEN t_u.setting_hide_user_name = TRUE THEN ''
          ELSE t_u.name
        END AS user_name
      `,
          't_u.avatar as user_avatar',
          't_gbt.id as bet_id',
          't_gbt.created_at as bet_time',
          't_gbt.amount as bet_amount',
          't_gbt.amount_usd as bet_amount_usd',
          't_gbt.profit_multiplier as multiplier',
          't_gbt.amount * (t_gbt.profit_multiplier - 1) as profit_amount',
          't_gbt.amount_usd * (t_gbt.profit_multiplier - 1) as profit_amount_usd',
          't_bs.symbol as currency',
          `'${ENUM_CURRENCY.Crypto}' as currency_type`,
          't_gp.name as provider_name',
        ])
        .innerJoin(
          Game,
          't_g',
          't_g.id = t_gbt.game_id AND t_g.is_visible = true',
        )
        .innerJoin(User, 't_u', 't_u.id = t_gbt.user_id')
        .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_gbt.currency_id')
        .innerJoin(
          GameProvider,
          't_gp',
          't_gp.id = t_g.producer AND t_gp.is_visible = true',
        )
        .where(`TRUNC(t_gbt.amount_usd * t_gbt.profit_multiplier, 4) >= 5000`)
        .orderBy('t_gbt.created_at', 'DESC')
        .limit(20)
        .getRawMany();

    await this.memoryService.set(
      CACHE_RECENT_BIG_WINS_KEY,
      transactions,
      60 * 60 * 24 * 7,
    );
  }

  async getTopRatedGames() {
    const games = await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        't_g.title as title',
        't_g.identifier as identifier',
        't_g.payout as payout',
        't_gp.name as producer_name',
        'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
      ])
      .leftJoin(
        GameBlockchainTransaction,
        't_gbt',
        `t_gbt.game_id = t_g.id and t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .leftJoin(
        GameStripeTransaction,
        't_gst',
        `t_gst.game_id = t_g.id and t_gst.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .innerJoin(
        GameProvider,
        't_gp',
        't_gp.id = t_g.producer AND t_gp.is_visible = true',
      )
      .where('t_g.is_visible = true')
      .groupBy('t_g.id')
      .addGroupBy('t_gp.name')
      .orderBy('t_g.priority', 'DESC')
      .limit(20)
      .getRawMany();

    await this.memoryService.set(
      CACHE_TOP_RATED_GAMES_KEY,
      games,
      60 * 60 * 24 * 7,
    );
  }

  async getSlots() {
    const games = await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        'title',
        't_g.identifier as identifier',
        'payout',
        't_gp.name as producer_name',
        'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
      ])
      .leftJoin(
        GameBlockchainTransaction,
        't_gbt',
        `t_gbt.game_id = t_g.id and t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .leftJoin(
        GameStripeTransaction,
        't_gst',
        `t_gst.game_id = t_g.id and t_gst.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .innerJoin(
        GameProvider,
        't_gp',
        `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
      )
      .where("category = 'slots'")
      .andWhere('t_g.is_visible = true')
      .groupBy('t_g.id')
      .addGroupBy('t_gp.name')
      .orderBy('RANDOM()')
      .limit(20)
      .getRawMany();

    await this.memoryService.set(CACHE_SLOTS_KEY, games, 60 * 60 * 24 * 7);
  }

  async getHotGames() {
    const games = await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        't_g.title as title',
        't_g.identifier as identifier',
        't_g.payout as payout',
        't_gp.name as producer_name',
        'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
      ])
      .leftJoin(
        GameBlockchainTransaction,
        't_gbt',
        `t_gbt.game_id = t_g.id and t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .leftJoin(
        GameStripeTransaction,
        't_gst',
        `t_gst.game_id = t_g.id and t_gst.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .innerJoin(
        GameProvider,
        't_gp',
        `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
      )
      .andWhere('t_g.is_visible = true')
      .groupBy('t_g.id')
      .addGroupBy('t_gp.name')
      .orderBy('COUNT(t_gbt.game_id)', 'DESC')
      .limit(20)
      .getRawMany();

    await this.memoryService.set(CACHE_HOT_GAMES_KEY, games, 60 * 60 * 24 * 7);
  }

  async _getLiveCasinoByCategory(category: string, count: number) {
    return await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        'title',
        't_g.identifier as identifier',
        'payout',
        't_gp.name as producer_name',
        'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
      ])
      .leftJoin(
        GameBlockchainTransaction,
        't_gbt',
        `t_gbt.game_id = t_g.id and t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .leftJoin(
        GameStripeTransaction,
        't_gst',
        `t_gst.game_id = t_g.id and t_gst.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .innerJoin(
        GameProvider,
        't_gp',
        `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
      )
      .where('t_g.category = :category', { category })
      .andWhere('t_g.is_visible = true')
      .groupBy('t_g.id')
      .addGroupBy('t_gp.name')
      .orderBy('RANDOM()')
      .limit(count)
      .getRawMany();
  }

  async getLiveCasino() {
    let games = [
      ...(await this._getLiveCasinoByCategory('roulette', 3)),
      ...(await this._getLiveCasinoByCategory('craps', 3)),
      ...(await this._getLiveCasinoByCategory('poker', 3)),
      ...(await this._getLiveCasinoByCategory('card', 3)),
      ...(await this._getLiveCasinoByCategory('lottery', 3)),
      ...(await this._getLiveCasinoByCategory('casual', 3)),
      ...(await this._getLiveCasinoByCategory('virtual_sports', 3)),
    ];

    games = shuffleArray(games);

    await this.memoryService.set(
      CACHE_LIVE_CASINO_KEY,
      games,
      60 * 60 * 24 * 7,
    );
  }

  async getNewReleases() {
    const games = await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        'title',
        't_g.identifier as identifier',
        'payout',
        't_gp.name as producer_name',
        'COALESCE(max(profit_multiplier), 0) as profit_multiplier',
      ])
      .innerJoin(
        GameProvider,
        't_gp',
        `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
      )
      .leftJoin(
        GameBlockchainTransaction,
        't_gbt',
        `t_gbt.game_id = t_g.id and t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .where('t_g.is_visible = true')
      .groupBy('t_g.id')
      .addGroupBy('t_gp.name')
      .orderBy('t_g.created_at', 'DESC')
      .addOrderBy('t_g.title', 'ASC')
      .limit(20)
      .getRawMany();

    await this.memoryService.set(
      CACHE_NEW_RELEASES_KEY,
      games,
      60 * 60 * 24 * 7,
    );
  }

  async getBlackjacks() {
    const games = await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        'title',
        't_g.identifier as identifier',
        'payout',
        't_gp.name as producer_name',
        'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
      ])
      .leftJoin(
        GameBlockchainTransaction,
        't_gbt',
        `t_gbt.game_id = t_g.id and t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .leftJoin(
        GameStripeTransaction,
        't_gst',
        `t_gst.game_id = t_g.id and t_gst.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .innerJoin(
        GameProvider,
        't_gp',
        `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
      )
      .where("t_g.title ILIKE '%Blackjack%'")
      .andWhere('t_g.is_visible = true')
      .groupBy('t_g.id')
      .addGroupBy('t_gp.name')
      .orderBy('RANDOM()')
      .limit(20)
      .getRawMany();

    await this.memoryService.set(CACHE_BLACKJACKS_KEY, games, 60 * 60 * 24 * 7);
  }

  async getTableGames() {
    let games = [
      ...(await this._getLiveCasinoByCategory('roulette', 5)),
      ...(await this._getLiveCasinoByCategory('craps', 5)),
      ...(await this._getLiveCasinoByCategory('poker', 5)),
      ...(await this._getLiveCasinoByCategory('card', 5)),
    ];

    games = shuffleArray(games);

    await this.memoryService.set(
      CACHE_TABLE_GAMES_KEY,
      games,
      60 * 60 * 24 * 7,
    );
  }

  async getGameProviders() {
    const providers = await this.GameProviderRepository.createQueryBuilder(
      't_gp',
    )
      .select([
        't_gp.id AS id',
        't_gp.name AS name',
        't_gp.identifier AS identifier',
        'COUNT(t_g.producer) AS game_count',
      ])
      .leftJoin(Game, 't_g', 't_g.producer = t_gp.id AND t_g.is_visible = true')
      .where('t_gp.is_visible = true')
      .orderBy('t_gp.priority', 'DESC')
      .addOrderBy('t_gp.name', 'ASC')
      .groupBy('t_gp.id')
      .getRawMany();

    await this.memoryService.set(
      CACHE_GAME_PROVIDERS_KEY,
      providers,
      60 * 60 * 24 * 7,
    );
  }

  async getThemes() {
    const result = await this.GameRepository.createQueryBuilder()
      .select('DISTINCT(theme)')
      .where('is_visible = true')
      .getRawMany();
    const themes = result.map((r) => getThemeName(r.theme));

    await this.memoryService.set(CACHE_THEMES_KEY, themes, 60 * 60 * 24 * 7);
  }

  async getRecommendedGames() {
    const games = await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        'title',
        't_g.identifier as identifier',
        'payout',
        't_gp.name as producer_name',
        'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
      ])
      .innerJoin(RecommendedGame, 't_rg', 't_rg.game_id = t_g.id')
      .leftJoin(
        GameBlockchainTransaction,
        't_gbt',
        `t_gbt.game_id = t_g.id and t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .leftJoin(
        GameStripeTransaction,
        't_gst',
        `t_gst.game_id = t_g.id and t_gst.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .innerJoin(
        GameProvider,
        't_gp',
        `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
      )
      .where('t_g.is_visible = true')
      .groupBy('t_g.id')
      .addGroupBy('t_gp.name')
      .orderBy('t_g.priority', 'DESC')
      .addOrderBy('profit_multiplier', 'DESC')
      .getRawMany();

    await this.memoryService.set(
      CACHE_RECOMMENDED_GAMES_KEY,
      games,
      60 * 60 * 24 * 7,
    );
  }
}
