import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LIVE_CASINO_CATEGORIES, TABLE_GAME_CATEGORIES } from 'constant';
import {
  BlockchainSymbol,
  Game,
  GameBlockchainTransaction,
  GameFavorite,
  GameProvider,
  GameStripeTransaction,
  User,
} from 'entities';
import {
  ENUM_CURRENCY,
  ENUM_GAME_CATEGORY,
  ENUM_GAME_SORT,
  ENUM_GAME_TRANSACTION_ACTION,
} from 'enums';
import {
  canDetectLocationError,
  exceedTotalPageNumberError,
  isExistGameError,
} from 'errors';
import * as geoip from 'geoip-lite';
import { MemoryService } from 'modules/memory/memory.service';
import { SettingService } from 'modules/setting/setting.service';
import { DeepPartial, Repository } from 'typeorm';
import { getThemeName } from 'utils';

@Injectable()
export class GameService {
  constructor(
    private readonly settingService: SettingService,
    private readonly memoryService: MemoryService,
    @InjectRepository(Game)
    private GameRepository: Repository<Game>,
    @InjectRepository(GameProvider)
    private GameProviderRepository: Repository<GameProvider>,
    @InjectRepository(GameFavorite)
    private GameFavoriteRepository: Repository<GameFavorite>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
    @InjectRepository(GameStripeTransaction)
    private GameStripeTransactionRepository: Repository<GameStripeTransaction>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
  ) {}

  async getProviders(category: ENUM_GAME_CATEGORY = ENUM_GAME_CATEGORY.All) {
    if (
      category === ENUM_GAME_CATEGORY.All ||
      category === ENUM_GAME_CATEGORY.New_Releases ||
      category === ENUM_GAME_CATEGORY.Hot_Games
    ) {
      const providers = await this.GameProviderRepository.createQueryBuilder(
        't_gp',
      )
        .select([
          't_gp.id AS id',
          't_gp.name AS name',
          't_gp.identifier AS identifier',
          'COUNT(t_g.producer) AS game_count',
        ])
        .leftJoin(
          Game,
          't_g',
          't_g.producer = t_gp.id AND t_g.is_visible = true',
        )
        .where('t_gp.is_visible = true')
        .orderBy('t_gp.priority', 'DESC')
        .addOrderBy('t_gp.name', 'ASC')
        .groupBy('t_gp.id')
        .getRawMany();

      return providers;
    } else if (category === ENUM_GAME_CATEGORY.Live_Casino) {
      const providers = await this.GameProviderRepository.createQueryBuilder(
        't_gp',
      )
        .select([
          't_gp.id AS id',
          't_gp.name AS name',
          't_gp.identifier AS identifier',
          'COUNT(t_g.producer) AS game_count',
        ])
        .leftJoin(Game, 't_g', 't_g.producer = t_gp.id')
        .where('t_gp.is_visible = true')
        .andWhere(
          `(has_live = true OR category In (${LIVE_CASINO_CATEGORIES.map(
            (c) => `'${c}'`,
          ).join(',')}))`,
        )
        .groupBy('t_gp.id')
        .getRawMany();

      return providers;
    } else if (category === ENUM_GAME_CATEGORY.Slots) {
      const providers = await this.GameProviderRepository.createQueryBuilder(
        't_gp',
      )
        .select([
          't_gp.id AS id',
          't_gp.name AS name',
          't_gp.identifier AS identifier',
          'COUNT(t_g.producer) AS game_count',
        ])
        .innerJoin(
          Game,
          't_g',
          't_g.producer = t_gp.id AND t_g.is_visible = true',
        )
        .where('t_gp.is_visible = true')
        .andWhere("t_g.category = 'slots'")
        .groupBy('t_gp.id')
        .getRawMany();

      return providers;
    } else if (category === ENUM_GAME_CATEGORY.Feature_Buy_In) {
      const providers = await this.GameProviderRepository.createQueryBuilder(
        't_gp',
      )
        .select([
          't_gp.id AS id',
          't_gp.name AS name',
          't_gp.identifier AS identifier',
          'COUNT(t_g.producer) AS game_count',
        ])
        .leftJoin(
          Game,
          't_g',
          't_g.producer = t_gp.id AND t_g.is_visible = true',
        )
        .where('t_gp.is_visible = true')
        .andWhere('t_g.bonus_buy = true')
        .groupBy('t_gp.id')
        .getRawMany();

      return providers;
    } else if (category === ENUM_GAME_CATEGORY.Table_Games) {
      const providers = await this.GameProviderRepository.createQueryBuilder(
        't_gp',
      )
        .select([
          't_gp.id AS id',
          't_gp.name AS name',
          't_gp.identifier AS identifier',
          'COUNT(t_g.producer) AS game_count',
        ])
        .leftJoin(
          Game,
          't_g',
          't_g.producer = t_gp.id AND t_g.is_visible = true',
        )
        .where('t_gp.is_visible = true')
        .andWhere(
          `category in (${TABLE_GAME_CATEGORIES.map((c) => `'${c}'`).join(
            ',',
          )})`,
        )
        .groupBy('t_gp.id')
        .getRawMany();

      return providers;
    } else if (category === ENUM_GAME_CATEGORY.Blackjack) {
      const providers = await this.GameProviderRepository.createQueryBuilder(
        't_gp',
      )
        .select([
          't_gp.id AS id',
          't_gp.name AS name',
          't_gp.identifier AS identifier',
          'COUNT(t_g.producer) AS game_count',
        ])
        .leftJoin(
          Game,
          't_g',
          't_g.producer = t_gp.id AND t_g.is_visible = true',
        )
        .where('t_gp.is_visible = true')
        .andWhere("t_g.title ILIKE '%Blackjack%'")
        .groupBy('t_gp.id')
        .getRawMany();

      return providers;
    } else if (category === ENUM_GAME_CATEGORY.Racing) {
      const providers = await this.GameProviderRepository.createQueryBuilder(
        't_gp',
      )
        .select([
          't_gp.id AS id',
          't_gp.name AS name',
          't_gp.identifier AS identifier',
          'COUNT(t_g.producer) AS game_count',
        ])
        .leftJoin(
          Game,
          't_g',
          't_g.producer = t_gp.id AND t_g.is_visible = true',
        )
        .where('t_gp.is_visible = true')
        .andWhere("t_gp.identifier = 'goldenrace'")
        .groupBy('t_gp.id')
        .getRawMany();

      return providers;
    }
  }

  async getProvidersByTheme(theme: string) {
    const providers = await this.GameProviderRepository.createQueryBuilder(
      't_gp',
    )
      .select([
        't_gp.id AS id',
        't_gp.name AS name',
        't_gp.identifier AS identifier',
        'COUNT(t_g.producer) AS game_count',
      ])
      .innerJoin(
        Game,
        't_g',
        `t_g.producer = t_gp.id AND t_g.theme = '${theme}' AND t_g.is_visible = true`,
      )
      .where('t_gp.is_visible = true')
      .groupBy('t_g.producer')
      .addGroupBy('t_gp.id')
      .getRawMany();

    return providers;
  }

  async getGamesByProviderName(
    provider_name: string,
    sort: ENUM_GAME_SORT,
    page: number,
    page_size: number,
  ) {
    const result = await this.GameRepository.createQueryBuilder('t_g')
      .select('COUNT(*)', 'total_count')
      .innerJoin(
        GameProvider,
        't_gp',
        `t_gp.id = t_g.producer AND t_gp.name = '${provider_name}' AND t_gp.is_visible = true`,
      )
      .where('t_g.is_visible = true')
      .getRawOne();

    const total_count = Number(result.total_count);
    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page === 0 ? 1 : total_page;

    if (total_page < page) {
      throw new HttpException(
        exceedTotalPageNumberError.error,
        exceedTotalPageNumberError.code,
      );
    }

    if (sort === ENUM_GAME_SORT.Popular) {
      return {
        total_count,
        total_page,
        page,
        page_size,
        data: await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id = t_g.producer AND t_gp.name = '${provider_name}' AND t_gp.is_visible = true`,
          )
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
          .where('t_g.is_visible = true')
          .orderBy('COALESCE(COUNT(t_gbt.id) + COUNT(t_gst.id), 0)', 'DESC')
          .addOrderBy('t_g.title', 'ASC')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany(),
      };
    } else if (sort === ENUM_GAME_SORT.Ascending) {
      return {
        total_count,
        total_page,
        page,
        page_size,
        data: await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id = t_g.producer AND t_gp.name = '${provider_name}' AND t_gp.is_visible = true`,
          )
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
          .where('t_g.is_visible = true')
          .orderBy('t_g.title', 'ASC')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany(),
      };
    } else if (sort === ENUM_GAME_SORT.Descending) {
      return {
        total_count,
        total_page,
        page,
        page_size,
        data: await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id = t_g.producer AND t_gp.name = '${provider_name}' AND t_g.is_visible = true`,
          )
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
          .where('t_g.is_visible = true')
          .orderBy('t_g.title', 'DESC')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany(),
      };
    } else if (sort === ENUM_GAME_SORT.New) {
      return {
        total_count,
        total_page,
        page,
        page_size,
        data: await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id = t_g.producer AND t_gp.name = '${provider_name}' AND t_gp.is_visible = true`,
          )
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
          .where('t_g.is_visible = true')
          .orderBy('t_g.created_at', 'DESC')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany(),
      };
    }
  }

  async getNewReleases(
    search: string,
    providers: string[],
    page: number,
    page_size: number,
  ) {
    const all_providers = await this.getProviders(
      ENUM_GAME_CATEGORY.New_Releases,
    );

    if (!providers.length) {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
        )
        .where(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

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
        .where(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.created_at', 'DESC')
        .addOrderBy('t_g.title', 'ASC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    } else {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .where('t_gp.id = t_g.producer')
        .andWhere('t_g.is_visible = true')
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      const games = await this.GameRepository.createQueryBuilder('t_g')
        .select([
          't_g.id as id',
          't_g.title as title',
          't_g.identifier as identifier',
          't_g.payout as payout',
          't_gp.name as producer_name',
          'COALESCE(max(profit_multiplier), 0) as profit_multiplier',
        ])
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .leftJoin(
          GameBlockchainTransaction,
          't_gbt',
          `t_gbt.game_id = t_g.id and t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
        )
        .where('t_gp.id = t_g.producer')
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.id')
        .orderBy('t_g.created_at', 'DESC')
        .addOrderBy('t_g.title', 'ASC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    }
  }

  async getLiveCasino(
    search: string,
    providers: string[],
    page: number,
    page_size: number,
    sort: ENUM_GAME_SORT,
  ) {
    const all_providers = await this.getProviders(
      ENUM_GAME_CATEGORY.Live_Casino,
    );
    let games = [];
    let total_count = 0;
    let total_page = 1;

    if (!providers.length) {
      total_count = await this.GameRepository.createQueryBuilder('t_g')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
        )
        .where(
          `(t_g.has_live = true OR category IN (${LIVE_CASINO_CATEGORIES.map(
            (c) => `'${c}'`,
          ).join(',')}))`,
        )
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .getCount();

      total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      if (sort === ENUM_GAME_SORT.New) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.created_at', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Ascending) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('title', 'ASC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Descending) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('title', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Like) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            'title',
            't_g.identifier as identifier',
            'payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .leftJoin(GameFavorite, 't_gf', `t_gf.game_id = t_g.id`)
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
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gf.id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Popular) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gbt.id) + COUNT(t_gst.id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      }

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    } else {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .where('has_live = true')
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_gp.id = t_g.producer')
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      total_count = Number(result.total_count);

      total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      if (sort === ENUM_GAME_SORT.New) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
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
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.created_at', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Ascending) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
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
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.title', 'ASC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Descending) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id asid',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
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
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.title', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Like) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .leftJoin(GameFavorite, 't_gf', `t_gf.game_id = t_g.id`)
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
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
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gf.id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Popular) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
          .where('has_live = true')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gbt.id) + COUNT(t_gst.id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      }
    }
    return {
      total_page,
      total_count,
      page,
      page_size,
      games,
      all_providers,
    };
  }

  async getHotGames(
    search: string,
    providers: string[],
    page: number,
    page_size: number,
  ) {
    if (!providers.length) {
      const total_count = await this.GameRepository.createQueryBuilder('t_g')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
        )
        .where(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .getCount();
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      return {
        total_count,
        total_page,
        page,
        page_size,
        games: await this.GameRepository.createQueryBuilder('t_g')
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
          .where(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gbt.game_id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany(),
      };
    } else {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*) as total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .where('t_gp.id = t_g.producer')
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = result.total_count;
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      return {
        total_count,
        total_page,
        page,
        page_size,
        games: await this.GameRepository.createQueryBuilder('t_g')
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
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
          .where('t_gp.id = t_g.producer')
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gbt.id) + COUNT(t_gst.id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany(),
      };
    }
  }

  async getBlackjack(
    search: string,
    providers: string[],
    page: number,
    page_size: number,
  ) {
    const all_providers = await this.getProviders(ENUM_GAME_CATEGORY.Blackjack);

    if (!providers.length) {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
        )
        .where("t_g.title ILIKE '%Blackjack%'")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

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
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.created_at', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    } else {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .where('t_gp.id = t_g.producer')
        .andWhere("t_g.title ILIKE '%Blackjack%'")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .limit(300)
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      const games = await this.GameRepository.createQueryBuilder('t_g')
        .select([
          't_g.id as id',
          't_g.title as title',
          't_g.identifier as identifier',
          't_g.payout as payout',
          't_gp.name as producer_name',
          'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
        ])
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
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
        .where('t_gp.id = t_g.producer')
        .andWhere("t_g.title ILIKE '%Blackjack%'")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.created_at', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    }
  }

  async getRacing(
    search: string,
    providers: string[],
    page: number,
    page_size: number,
  ) {
    const all_providers = await this.getProviders(ENUM_GAME_CATEGORY.Racing);

    if (!providers.length) {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(t_g.id)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
        )
        .where("t_gp.identifier = 'goldenrace'")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

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
        .where("t_gp.identifier = 'goldenrace'")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.created_at', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    } else {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .where('t_gp.id = t_g.producer')
        .andWhere("t_g.title ILIKE '%Blackjack%'")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .limit(300)
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      const games = await this.GameRepository.createQueryBuilder('t_g')
        .select([
          't_g.id as id',
          't_g.title as title',
          't_g.identifier as identifier',
          't_g.payout as payout',
          't_gp.name as producer_name',
          'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
        ])
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
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
        .where('t_gp.id = t_g.producer')
        .andWhere("t_g.title ILIKE '%Blackjack%'")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.created_at', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    }
  }

  async getTableGames(
    search: string,
    providers: string[],
    page: number,
    page_size: number,
  ) {
    const all_providers = await this.getProviders(
      ENUM_GAME_CATEGORY.Table_Games,
    );

    if (!providers.length) {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
        )
        .where(
          `t_g.category IN (${TABLE_GAME_CATEGORIES.map(
            (category) => `'${category}'`,
          ).join(',')})`,
        )
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

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
        .where("category in ('roulette', 'craps', 'poker', 'card')")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.created_at', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    } else {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .where("category in ('roulette', 'craps', 'poker', 'card')")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_gp.id = t_g.producer')
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      const games = await this.GameRepository.createQueryBuilder('t_g')
        .select([
          't_g.id AS id',
          't_g.title AS title',
          't_g.identifier as identifier',
          't_g.payout as payout',
          't_gp.name as producer_name',
          'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
        ])
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
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
        .where("category in ('roulette', 'craps', 'poker', 'card')")
        .andWhere('t_gp.id = t_g.producer')
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.created_at', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    }
  }

  async getFeatureByIn(
    search: string,
    providers: string[],
    page: number,
    page_size: number,
  ) {
    const all_providers = await this.getProviders(
      ENUM_GAME_CATEGORY.Feature_Buy_In,
    );
    if (!providers.length) {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
        )
        .where('bonus_buy = true')
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

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
        .where('bonus_buy = true')
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.created_at', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    } else {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .where('bonus_buy = true')
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_gp.id = t_g.producer')
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      const games = await this.GameRepository.createQueryBuilder('t_g')
        .select([
          't_g.id AS id',
          't_g.title AS title',
          't_g.identifier as identifier',
          't_g.payout as payout',
          't_gp.name as producer_name',
          'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
        ])
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
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
        .where('bonus_buy = true')
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_gp.id = t_g.producer')
        .andWhere('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.created_at', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany();

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    }
  }

  async getSlots(
    search: string,
    providers: string[],
    page: number,
    page_size: number,
    sort: ENUM_GAME_SORT,
  ) {
    const all_providers = await this.getProviders(ENUM_GAME_CATEGORY.Slots);
    let games = [];
    let total_count = 0;
    let total_page = 1;

    if (!providers.length) {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
        )
        .where("category = 'slots'")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      total_count = Number(result.total_count);
      total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      if (sort === ENUM_GAME_SORT.New) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.created_at', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Ascending) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
          .where("category = 'slots'")
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('title', 'ASC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Descending) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
          .where("category = 'slots'")
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('title', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Like) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .leftJoin(GameFavorite, 't_gf', `t_gf.game_id = t_g.id`)
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
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gf.id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Popular) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
          .where("category = 'slots'")
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gbt.id) + COUNT(t_gst.id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      }

      return {
        total_page,
        total_count,
        page,
        page_size,
        games,
        all_providers,
      };
    } else {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .where("category = 'slots'")
        .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
        .andWhere('t_gp.id = t_g.producer')
        .andWhere('t_g.is_visible = true')
        .getRawOne();

      total_count = Number(result.total_count);
      total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      if (sort === ENUM_GAME_SORT.New) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
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
          .where("category = 'slots'")
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.created_at', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Ascending) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
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
          .where("category = 'slots'")
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.title', 'ASC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Descending) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id asid',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
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
          .where("category = 'slots'")
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.title', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Like) {
        games = await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            't_g.title as title',
            't_g.identifier as identifier',
            't_g.payout as payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .leftJoin(GameFavorite, 't_gf', `t_gf.game_id = t_g.id`)
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
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
          .where("category = 'slots'")
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gf.id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      } else if (sort === ENUM_GAME_SORT.Popular) {
        games = await this.GameRepository.createQueryBuilder('t_g')
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
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
          .where("category = 'slots'")
          .andWhere(`UPPER(t_g.title) LIKE '%${search}%'`)
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('COUNT(t_gbt.id) + COUNT(t_gst.id)', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany();
      }
    }
    return {
      total_page,
      total_count,
      page,
      page_size,
      games,
      all_providers,
    };
  }

  async getGameById(game_id: string) {
    const game = await this.GameRepository.findOne({
      where: { id: game_id, is_visible: true },
      select: ['id', 'title', 'identifier', 'description'],
    });

    if (game) {
      return game;
    }

    throw new HttpException(isExistGameError.error, isExistGameError.code);
  }

  async getFavoriteStatus(user: User, game_id: string) {
    const gameFavorite = await this.GameFavoriteRepository.findOneBy({
      user: { id: user.id },
      game: { id: game_id },
    });

    return { state: gameFavorite ? true : false };
  }

  async setFavoriteStatus(user: User, game_id: string) {
    const gameFavoriteStatus = await this.getFavoriteStatus(user, game_id);

    if (!gameFavoriteStatus.state) {
      const newGameFavoriteConfig: DeepPartial<GameFavorite> = {
        user,
        game: await this.GameRepository.findOneBy({ id: game_id }),
      };
      await this.GameFavoriteRepository.save(
        this.GameFavoriteRepository.create(newGameFavoriteConfig),
      );

      const count = await this.GameFavoriteRepository.createQueryBuilder()
        .where('game_id = :game_id', { game_id })
        .getCount();

      return {
        count,
        state: true,
      };
    } else {
      await this.GameFavoriteRepository.delete({
        user: { id: user.id },
        game: { id: game_id },
      });
      const count = await this.GameFavoriteRepository.createQueryBuilder()
        .where('game_id = :game_id', { game_id })
        .getCount();

      return {
        count,
        state: false,
      };
    }
  }

  async getRecentGames(user: User, page: number, page_size: number) {
    const sql_count_b =
      this.GameBlockchainTransactionRepository.createQueryBuilder('t_gbt')
        .select('t_gbt.game_id as game_id')
        .innerJoin(
          Game,
          't_g',
          't_g.id = t_gbt.game_id AND t_g.is_visible = true',
        )
        .where(`t_gbt.action = '${ENUM_GAME_TRANSACTION_ACTION.bet}'`)
        .andWhere(`t_gbt.user_id = '${user.id}'`)
        .andWhere("t_gbt.created_at >= CURRENT_DATE - INTERVAL '1 month'")
        .getQuery();
    const sql_count_s = this.GameStripeTransactionRepository.createQueryBuilder(
      't_gst',
    )
      .select('t_gst.game_id as game_id')
      .innerJoin(
        Game,
        't_g',
        't_g.id = t_gst.game_id AND t_g.is_visible = true',
      )
      .where(`t_gst.action = '${ENUM_GAME_TRANSACTION_ACTION.bet}'`)
      .andWhere(`t_gst.user_id = '${user.id}'`)
      .andWhere("t_gst.created_at >= CURRENT_DATE - INTERVAL '1 month'")
      .getQuery();

    let result = await this.GameBlockchainTransactionRepository.query(`
      SELECT COUNT(DISTINCT(game_id)) as total_count
      FROM (
        (${sql_count_b})
        UNION
        (${sql_count_s})
      ) as t_g
    `);

    const total_count = Number(result[0].total_count);
    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page === 0 ? 1 : total_page;

    if (total_page < page) {
      throw new HttpException(
        exceedTotalPageNumberError.error,
        exceedTotalPageNumberError.code,
      );
    }

    const sql_b = this.GameBlockchainTransactionRepository.createQueryBuilder(
      't_gbt',
    )
      .select(['game_id', 'created_at', 'profit_multiplier', 'user_id'])
      .where(`t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`)
      .andWhere("t_gbt.created_at >= CURRENT_DATE - INTERVAL '1 month'")
      .getQuery();

    const sql_s = this.GameStripeTransactionRepository.createQueryBuilder(
      't_gst',
    )
      .select(['game_id', 'created_at', 'profit_multiplier', 'user_id'])
      .where(`t_gst.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`)
      .andWhere("t_gst.created_at >= CURRENT_DATE - INTERVAL '1 month'")
      .getQuery();

    result = await this.GameBlockchainTransactionRepository.query(`
      SELECT
        t_g.id as id,
        t_g.title as title,
        t_g.identifier as identifier,
        t_gp.name as producer_name,
        t_g.payout as payout,
        COALESCE(MAX(t_gt.profit_multiplier), 0) as profit_multiplier
      FROM (
        (${sql_b})
        UNION
        (${sql_s})
      ) t_gt
      INNER JOIN game t_g ON t_g.id = t_gt.game_id AND t_g.is_visible = true
      INNER JOIN game_provider t_gp ON t_gp.id = t_g.producer AND t_gp.is_visible = true
      WHERE t_gt.user_id = '${user.id}'
      GROUP BY t_gt.game_id, t_g.id, t_gp.name
      ORDER BY MAX(t_gt.created_at) DESC
      OFFSET ${(page - 1) * page_size}
      LIMIT ${page_size}
    `);

    return {
      total_count,
      total_page,
      page,
      page_size,
      games: result,
    };
  }

  async getFavoriteGames(user: User, page: number, page_size: number) {
    const result = await this.GameFavoriteRepository.createQueryBuilder('t_gf')
      .select('COUNT(t_g.id) as total_count')
      .innerJoin(Game, 't_g', 't_g.id = t_gf.game_id AND t_g.is_visible = true')
      .innerJoin(
        GameProvider,
        't_gp',
        `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
      )
      .where('t_gf.user_id = :user_id', { user_id: user.id })
      .getRawOne();

    const total_count = Number(result.total_count);
    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page === 0 ? 1 : total_page;

    if (total_page < page) {
      throw new HttpException(
        exceedTotalPageNumberError.error,
        exceedTotalPageNumberError.code,
      );
    }

    return {
      total_count,
      total_page,
      page,
      page_size,
      games: await this.GameFavoriteRepository.createQueryBuilder('t_gf')
        .select([
          't_g.id as id',
          't_g.title as title',
          't_g.identifier as identifier',
          't_g.payout as payout',
          't_gp.name as producer_name',
          'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
        ])
        .leftJoin(
          Game,
          't_g',
          't_g.id = t_gf.game_id AND t_g.is_visible = true',
        )
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
        .where('t_gf.user_id = :user_id', { user_id: user.id })
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany(),
    };
  }

  async getPickGamesForYou(page: number, page_size: number) {
    const total_count = await this.GameRepository.createQueryBuilder('t_g')
      .innerJoin(
        GameProvider,
        't_gp',
        `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
      )
      .where('t_g.is_visible = true')
      .getCount();

    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page === 0 ? 1 : total_page;

    return {
      total_count,
      total_page,
      page,
      page_size,
      games: await this.GameRepository.createQueryBuilder('t_g')
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
        .where('t_g.is_visible = true')
        .groupBy('t_g.id')
        .addGroupBy('t_gp.name')
        .orderBy('t_g.priority', 'DESC')
        .addOrderBy('profit_multiplier', 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany(),
    };
  }

  async getTotalWagerAmountUsdByUserId(user_id: string) {
    const sql_b = this.GameBlockchainTransactionRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where(
        `user_id = '${user_id}' AND action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .getQuery();
    const sql_s = this.GameStripeTransactionRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0)', 'sum')
      .where(
        `user_id = '${user_id}' AND action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
      )
      .getQuery();

    const result = await this.GameBlockchainTransactionRepository.query(`
      SELECT TRUNC((t_b.sum + t_s.sum), 6) as sum
      FROM (${sql_b}) AS t_b, (${sql_s}) AS t_s
    `);

    return result[0].sum;
  }

  async getGameCountByProviderId(provider_id: string) {
    const result = await this.GameRepository.createQueryBuilder()
      .select('COUNT(*) as count')
      .where('producer = :producer', { producer: provider_id })
      .andWhere('is_visible = true')
      .getRawOne();

    return Number(result.count);
  }

  async getGameByIdentifier(ip: string, identifier: string) {
    const geo = geoip.lookup(ip);
    const country = geo?.country ?? null;

    if (!country) {
      throw new HttpException(
        canDetectLocationError.error,
        canDetectLocationError.code,
      );
    }

    const game = await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        't_g.identifier as identifier',
        't_g.description as description',
        't_g.multiplier as multiplier',
        't_g.payout as payout',
        "TO_CHAR(t_g.released_at, 'YYYY-MM-DD') as released_at",
        't_g.allow_demo as allow_demo',
        't_g.title as title',
        't_gp.id as producer_id',
        't_gp.name as producer_name',
        't_gp.identifier as producer_identifier',
        't_g.restrictions as restrictions',
        '(SELECT COUNT(*) FROM game_favorite WHERE game_id = t_g.id) as favorite_count',
        't_g.hit_rate as hit_rate',
        't_g.ways as win_ways',
        "'mobile' = ANY(t_g.devices) as is_mobile",
        't_g.volatility_rating as volatility',
        't_g.has_freespins as has_freespins',
      ])
      .innerJoin(
        GameProvider,
        't_gp',
        't_gp.id = t_g.producer AND t_gp.is_visible = true',
      )
      .where('LOWER(t_g.identifier) = :identifier', {
        identifier,
      })
      .andWhere('t_g.is_visible = true')
      .getRawOne();

    if (!game) {
      throw new HttpException(isExistGameError.error, isExistGameError.code);
    }

    let allow_location = true;
    const { restrictions } = game;

    if (restrictions && restrictions['CW']) {
      if (restrictions['CW'] && restrictions['CW']['blacklist']) {
        if (restrictions['CW']['blacklist'].indexOf(country) != -1) {
          allow_location = false;
        }
      } else if (restrictions['CW'] && restrictions['CW']['whitelist']) {
        if (restrictions['CW']['whitelist'].indexOf(country) === -1) {
          allow_location = false;
        }
      }
    }

    return {
      ...game,
      allow_location,
      restrictions: [],
      producer_details: {
        game_count: await this.getGameCountByProviderId(game.producer_id),
      },
    };
  }

  async getLatestBets() {
    const sql_b = this.GameBlockchainTransactionRepository.createQueryBuilder(
      't_gbt',
    )
      .select([
        't_gbt.id as id',
        't_u.id as player_id',
        `CASE 
          WHEN t_u.setting_hide_user_name = TRUE THEN ''
          ELSE t_u.name
          END AS player_name`,
        't_u.avatar as player_avatar',
        't_gbt.created_at as time',
        't_gbt.profit_multiplier as multiplier',
        't_gbt.amount * (t_gbt.profit_multiplier - 1) as profit_amount',
        't_gbt.amount_usd * (t_gbt.profit_multiplier - 1) as profit_amount_usd',
        't_g.id as game_id',
        't_g.title as game_name',
        't_g.identifier as game_identifier',
        't_gp.name as provider_name',
        't_gbt.amount as bet_amount',
        't_gbt.amount_usd as bet_amount_usd',
        't_bs.symbol as currency',
        `'${ENUM_CURRENCY.Crypto}' as currency_type`,
        `CASE 
         WHEN t_gbt.profit_multiplier >= 1 THEN TRUE
         ELSE FALSE
         END AS win`,
        't_gbt.created_at as created_at',
      ])
      .innerJoin(User, 't_u', 't_u.id = t_gbt.user_id')
      .innerJoin(
        Game,
        't_g',
        't_g.id = t_gbt.game_id AND t_g.is_visible = true',
      )
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_gbt.currency_id')
      .innerJoin(
        GameProvider,
        't_gp',
        't_g.producer = t_gp.id AND t_gp.is_visible = true',
      )
      .where(`t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`)
      .getQuery();
    return await this.GameBlockchainTransactionRepository.query(`
      SELECT
        *
      FROM (
        (${sql_b})
      ) as t_g
      ORDER BY t_g.created_at DESC
      LIMIT 25
    `);
  }

  async getHighRollers() {
    const minimum_amount_usd =
      await this.settingService.getMinimumAmountUsdForHighRoller();

    const sql_b = this.GameBlockchainTransactionRepository.createQueryBuilder(
      't_gbt',
    )
      .select([
        't_gbt.id as id',
        't_u.id as player_id',
        `CASE 
          WHEN t_u.setting_hide_user_name = TRUE THEN ''
          ELSE t_u.name
          END AS player_name`,
        't_u.avatar as player_avatar',
        't_gbt.created_at as time',
        't_gbt.profit_multiplier as multiplier',
        't_gbt.amount * (t_gbt.profit_multiplier - 1) as profit_amount',
        't_gbt.amount_usd * (t_gbt.profit_multiplier - 1) as profit_amount_usd',
        't_g.id as game_id',
        't_g.title as game_name',
        't_g.identifier as game_identifier',
        't_gp.name as provider_name',
        't_gbt.amount as bet_amount',
        't_gbt.amount_usd as bet_amount_usd',
        't_bs.symbol as currency',
        `'${ENUM_CURRENCY.Crypto}' as currency_type`,
        `CASE 
         WHEN t_gbt.profit_multiplier >= 1 THEN TRUE
         ELSE FALSE
         END AS win`,
        't_gbt.created_at as created_at',
      ])
      .innerJoin(User, 't_u', 't_u.id = t_gbt.user_id')
      .innerJoin(
        Game,
        't_g',
        't_g.id = t_gbt.game_id AND t_g.is_visible = true',
      )
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_gbt.currency_id')
      .innerJoin(GameProvider, 't_gp', 't_g.producer = t_gp.id')
      .where(`t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`)
      .andWhere(`t_gbt.amount_usd >= ${minimum_amount_usd}`)
      .getQuery();

    return await this.GameBlockchainTransactionRepository.query(`
      SELECT
        *
      FROM (
        (${sql_b})
      ) as t_g
      ORDER BY t_g.created_at DESC
      LIMIT 25
    `);
  }

  async getLatestBetsByGameId(game_id: string) {
    const sql_b = this.GameBlockchainTransactionRepository.createQueryBuilder(
      't_gbt',
    )
      .select([
        't_gbt.id as id',
        't_u.id as player_id',
        `CASE 
          WHEN t_u.setting_hide_user_name = TRUE THEN ''
          ELSE t_u.name
          END AS player_name`,
        't_u.avatar as player_avatar',
        't_gbt.created_at as time',
        't_gbt.profit_multiplier as multiplier',
        't_gbt.amount * (t_gbt.profit_multiplier - 1) as profit_amount',
        't_gbt.amount_usd * (t_gbt.profit_multiplier - 1) as profit_amount_usd',
        't_g.id as game_id',
        't_g.title as game_name',
        't_g.identifier as game_identifier',
        't_gp.name as provider_name',
        't_gbt.amount as bet_amount',
        't_gbt.amount_usd as bet_amount_usd',
        't_bs.symbol as currency',
        `'${ENUM_CURRENCY.Crypto}' as currency_type`,
        `CASE 
         WHEN t_gbt.profit_multiplier >= 1 THEN TRUE
         ELSE FALSE
         END AS win`,
        't_gbt.created_at as created_at',
      ])
      .innerJoin(User, 't_u', 't_u.id = t_gbt.user_id')
      .innerJoin(
        Game,
        't_g',
        `t_g.id = t_gbt.game_id and t_g.id = '${game_id}' AND t_g.is_visible = true`,
      )
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_gbt.currency_id')
      .innerJoin(GameProvider, 't_gp', 't_g.producer = t_gp.id')
      .where(`t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`)
      .getQuery();
    return await this.GameBlockchainTransactionRepository.query(`
      SELECT
        *
      FROM (
        (${sql_b})
      ) as t_g
      ORDER BY t_g.created_at DESC
      LIMIT 40
    `);
  }

  async getLatestBetsByUserIdAndGameId(user_id: string, game_id: string) {
    const sql_b = this.GameBlockchainTransactionRepository.createQueryBuilder(
      't_gbt',
    )
      .select([
        't_gbt.id as id',
        't_u.id as player_id',
        `CASE 
          WHEN t_u.setting_hide_user_name = TRUE THEN ''
          ELSE t_u.name
          END AS player_name`,
        't_u.avatar as player_avatar',
        't_gbt.created_at as time',
        't_gbt.profit_multiplier as multiplier',
        't_gbt.amount * (t_gbt.profit_multiplier - 1) as profit_amount',
        't_gbt.amount_usd * (t_gbt.profit_multiplier - 1) as profit_amount_usd',
        't_g.id as game_id',
        't_g.title as game_name',
        't_g.identifier as game_identifier',
        't_gp.name as provider_name',
        't_gbt.amount as bet_amount',
        't_gbt.amount_usd as bet_amount_usd',
        't_bs.symbol as currency',
        `'${ENUM_CURRENCY.Crypto}' as currency_type`,
        `CASE 
         WHEN t_gbt.profit_multiplier >= 1 THEN TRUE
         ELSE FALSE
         END AS win`,
        't_gbt.created_at as created_at',
      ])
      .innerJoin(User, 't_u', 't_u.id = t_gbt.user_id')
      .innerJoin(
        Game,
        't_g',
        `t_g.id = t_gbt.game_id and t_g.id = '${game_id}' AND t_g.is_visible = true`,
      )
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_gbt.currency_id')
      .innerJoin(GameProvider, 't_gp', 't_g.producer = t_gp.id')
      .where(`t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`)
      .andWhere(`t_gbt.user_id = '${user_id}'`)
      .getQuery();
    return await this.GameBlockchainTransactionRepository.query(`
      SELECT
        *
      FROM (
        (${sql_b})
      ) as t_g
      ORDER BY t_g.created_at DESC
      LIMIT 40
    `);
  }

  async getGamesByNameAndProvider(search: string) {
    const slices = search
      .split(' ')
      .map((slice) => slice.trim())
      .filter((slice) => slice.length);
    const result = await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        't_g.title as title',
        't_g.identifier as identifier',
        't_g.payout as payout',
        't_gp.name as producer_name',
        'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
      ])
      .innerJoin(
        GameProvider,
        't_gp',
        't_g.producer = t_gp.id AND t_gp.is_visible = true',
      )
      .leftJoin(GameBlockchainTransaction, 't_gbt', 't_gbt.game_id = t_g.id')
      .leftJoin(GameStripeTransaction, 't_gst', 't_gst.game_id = t_g.id')
      .where(
        `(UPPER(t_gp.name) LIKE '${search}%') OR (UPPER(t_g.title) LIKE '%${search}%') OR ${slices
          .map((slice) => `(UPPER(t_g.title) LIKE '%${slice}%')`)
          .join(' OR ')}`,
      )
      .andWhere('t_g.is_visible = true')
      .orderBy('t_g.title', 'ASC')
      .groupBy('t_g.id')
      .addGroupBy('t_gp.name')
      .getRawMany();
    return {
      total_count: result.length,
      data: result,
    };
  }

  async getThemes() {
    const result = await this.GameRepository.createQueryBuilder()
      .select('DISTINCT(theme)')
      .where('is_visible = true')
      .getRawMany();

    return result.map((r) => getThemeName(r.theme));
  }

  async getGamesByTheme(
    theme: string,
    providers: string[],
    page: number,
    page_size: number,
  ) {
    const all_providers = await this.getProvidersByTheme(theme);

    if (!providers.length) {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id = t_g.producer AND t_gp.is_visible = true`,
        )
        .where('t_g.theme = :theme', { theme })
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      return {
        total_count,
        total_page,
        page,
        page_size,
        games: await this.GameRepository.createQueryBuilder('t_g')
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
          .where('t_g.theme = :theme', { theme })
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.created_at', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany(),
        all_providers,
      };
    } else {
      const result = await this.GameRepository.createQueryBuilder('t_g')
        .select('COUNT(*)', 'total_count')
        .innerJoin(
          GameProvider,
          't_gp',
          `t_gp.id in (${providers
            .map((provider) => `'${provider}'`)
            .join(',')}) AND t_gp.is_visible = true`,
        )
        .where('theme = :theme', { theme })
        .andWhere('t_gp.id = t_g.producer')
        .andWhere('t_g.is_visible = true')
        .getRawOne();
      const total_count = Number(result.total_count);
      let total_page = Math.ceil(total_count / page_size);
      total_page = total_page === 0 ? 1 : total_page;

      if (total_page < page) {
        throw new HttpException(
          exceedTotalPageNumberError.error,
          exceedTotalPageNumberError.code,
        );
      }

      return {
        total_count,
        total_page,
        page,
        page_size,
        games: await this.GameRepository.createQueryBuilder('t_g')
          .select([
            't_g.id as id',
            'title',
            't_g.identifier as identifier',
            'payout',
            't_gp.name as producer_name',
            'COALESCE(GREATEST(MAX(t_gbt.profit_multiplier), MAX(t_gst.profit_multiplier)), 0) as profit_multiplier',
          ])
          .innerJoin(
            GameProvider,
            't_gp',
            `t_gp.id in (${providers
              .map((provider) => `'${provider}'`)
              .join(',')}) AND t_gp.is_visible = true`,
          )
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
          .where('theme = :theme', { theme })
          .andWhere('t_gp.id = t_g.producer')
          .andWhere('t_g.is_visible = true')
          .groupBy('t_g.id')
          .addGroupBy('t_gp.name')
          .orderBy('t_g.created_at', 'DESC')
          .offset((page - 1) * page_size)
          .limit(page_size)
          .getRawMany(),
        all_providers,
      };
    }
  }

  async getTotalWinsByUserId(user_id: string) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('COUNT(*) as count')
        .where('action = :action', {
          action: ENUM_GAME_TRANSACTION_ACTION.win,
        })
        .andWhere('user_id = :user_id', { user_id })
        .getRawOne();

    return Number(result.count);
  }

  async getTotalBetsByUserId(user_id: string) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('COUNT(*) as count')
        .where('action = :action', {
          action: ENUM_GAME_TRANSACTION_ACTION.bet,
        })
        .andWhere('user_id = :user_id', { user_id })
        .getRawOne();

    return Number(result.count);
  }

  async getTopThreeGames(user_id: string) {
    return await this.GameRepository.createQueryBuilder('t_g')
      .select([
        't_g.id as id',
        't_g.title as title',
        't_g.identifier as identifier',
        'TRUNC(SUM(t_gbt.amount_usd), 6) as total_wagered_amount_usd',
      ])
      .innerJoin(
        GameBlockchainTransaction,
        't_gbt',
        `t_gbt.game_id = t_g.id AND t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet} AND t_gbt.user_id = '${user_id}'`,
      )
      .where('t_g.is_visible = true')
      .orderBy('total_wagered_amount_usd', 'DESC')
      .groupBy('t_g.id')
      .limit(3)
      .getRawMany();
  }

  async getBetStatistics(user_id: string) {
    return await this.BlockchainSymbolRepository.query(`
      SELECT
        t_s.currency_name,
        t_s.currency_logo,
        SUM(CASE WHEN t_s.action = 'win_count' THEN t_s.count END) AS total_wins,
        SUM(CASE WHEN t_s.action = 'bet_count' THEN t_s.count END) AS total_bets,
        SUM(CASE WHEN t_s.action = 'bet_count' THEN t_s.total_amount END) AS wagered_amount,
        SUM(CASE WHEN t_s.action = 'bet_count' THEN t_s.total_amount_usd END) AS wagered_amount_usd
      FROM (
        SELECT
          t_s.logo as currency_logo,
          t_s.symbol as currency_name,
          (
            CASE 
              WHEN t_s.action = ${ENUM_GAME_TRANSACTION_ACTION.bet} THEN 'bet_count'
              ELSE 'win_count'
            END
          ) AS action,
          COUNT(t_s.action) as count,
          TRUNC(COALESCE(SUM(t_s.amount), 0), 6) as total_amount,
          TRUNC(COALESCE(SUM(t_s.amount_usd), 0), 6) as total_amount_usd
        FROM (
          SELECT
            *
          FROM "blockchain_symbol" AS "t_bs"
          INNER JOIN "game_blockchain_transaction" AS "t_gbt" ON t_gbt.currency_id = t_bs.id AND t_gbt.user_id = '${user_id}' AND (t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.bet} OR t_gbt.action = ${ENUM_GAME_TRANSACTION_ACTION.win})
          GROUP BY t_bs.id, t_gbt.id
        ) AS t_s
        GROUP BY t_s.action, t_s.logo, t_s.symbol
      ) AS t_s
      GROUP BY t_s.currency_name, t_s.currency_logo
    `);
  }

  async getWagerAmountUsdByUserIdForQuest(
    user_id: string,
    start_time: number,
    end_time: number,
  ) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('COALESCE(SUM(amount_usd), 0) AS sum')
        .where('user_id = :user_id', { user_id })
        .andWhere('action = :action', {
          action: ENUM_GAME_TRANSACTION_ACTION.bet,
        })
        .andWhere('created_at >= TO_TIMESTAMP(:start_time)', { start_time })
        .andWhere('created_at < TO_TIMESTAMP(:end_time)', { end_time })
        .getRawOne();

    return Number(result.sum);
  }

  async getSlotsProfitByUserIdForQuest(
    user_id: string,
    start_time: number,
    end_time: number,
  ) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder('t_gbt')
        .select(
          'COALESCE(SUM(t_gbt.amount_usd * (t_gbt.profit_multiplier - 1)), 0) AS sum',
        )
        .innerJoin(
          Game,
          't_g',
          "t_g.id = t_gbt.game_id AND t_g.category = 'slots'",
        )
        .where('t_gbt.user_id = :user_id', { user_id })
        .andWhere('t_gbt.action = :action', {
          action: ENUM_GAME_TRANSACTION_ACTION.bet,
        })
        .andWhere('t_gbt.profit_multiplier > 1')
        .andWhere('t_gbt.created_at >= TO_TIMESTAMP(:start_time)', {
          start_time,
        })
        .andWhere('t_gbt.created_at < TO_TIMESTAMP(:end_time)', { end_time })
        .getRawOne();

    return Number(result.sum);
  }

  async getBigWinByUserIdForQuest(
    user_id: string,
    vip_level: number,
    start_time: number,
    end_time: number,
  ) {
    return await this.GameBlockchainTransactionRepository.createQueryBuilder()
      .select('*')
      .where('t_gbt.user_id = :user_id', { user_id })
      .andWhere(`t_gbt.amount_usd >= :amount_usd`, {
        amount_usd: 0.4 * (Number(vip_level) + 1),
      })
      .andWhere('t_gbt.profit_multiplier >= 50')
      .andWhere('t_gbt.created_at >= TO_TIMESTAMP(:start_time)', {
        start_time,
      })
      .andWhere('t_gbt.created_at < TO_TIMESTAMP(:end_time)', { end_time })
      .getRawOne();
  }

  async getTotalProfitAmountUsdByUserId(user_id: string) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('SUM(amount_usd * (profit_multiplier - 1)) as sum')
        .where('user_id = :user_id', { user_id })
        .andWhere('action = :action', {
          action: ENUM_GAME_TRANSACTION_ACTION.bet,
        })
        .andWhere('profit_multiplier > 1')
        .getRawOne();

    return Number(result.sum);
  }

  async getTotalWagerAmountUsdByUserIdAndRolloverAt(user_id: string) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder('t_gbt')
        .select('COALESCE(SUM(amount_usd), 0) AS sum')
        .innerJoin(User, 't_u', 't_u.id = t_gbt.user_id')
        .where('t_gbt.user_id = :user_id', { user_id })
        .andWhere('t_gbt.created_at >= t_u.rollover_at')
        .andWhere('t_gbt.action = :action', {
          action: ENUM_GAME_TRANSACTION_ACTION.bet,
        })
        .getRawOne();

    return Number(result.sum);
  }

  async getAllGames() {
    const result = await this.GameRepository.createQueryBuilder()
      .select('array_agg(identifier) AS games')
      .where('is_visible = true')
      .getRawMany();

    return result[0].games;
  }

  async getAllGameProviders() {
    const result = await this.GameProviderRepository.createQueryBuilder()
      .select('array_agg(identifier) AS providers')
      .where('is_visible = true')
      .getRawMany();

    return result[0].providers;
  }
}
