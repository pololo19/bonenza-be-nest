import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BotBetRange,
  BotGame,
  BotUserCurrency,
  GameBlockchainTransaction,
  User,
} from 'entities';
import { ENUM_CURRENCY, ENUM_GAME_TRANSACTION_ACTION, ENUM_ROLE } from 'enums';
import { MemoryService } from 'modules/memory/memory.service';
import { MessageGateway } from 'modules/message/message.gateway';
import { DeepPartial, Repository } from 'typeorm';
import { getRandomItemFromArray, getRandomNumber, shuffleArray } from 'utils';

@Injectable()
export class CronBotService {
  constructor(
    private readonly messageGateway: MessageGateway,
    private readonly memoryService: MemoryService,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(BotGame)
    private BotGameRepository: Repository<BotGame>,
    @InjectRepository(BotBetRange)
    private BotBetRangeRepository: Repository<BotBetRange>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
    @InjectRepository(BotUserCurrency)
    private BotUserCurrencyRepository: Repository<BotUserCurrency>,
  ) {}

  async getRandomBotUser() {
    let users = await this.memoryService.get('bot:users');

    if (!users || !users.length) {
      const temp = await this.UserRepository.find({
        where: { role: ENUM_ROLE.BOT },
      });

      users = temp.map((user) => ({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        setting_hide_user_name: user.setting_hide_user_name,
      }));

      await this.memoryService.set('bot:users', users, 60 * 60 * 24);
    }

    return getRandomItemFromArray(users);
  }

  async getRandomBotGame() {
    let games = await this.memoryService.get('bot:games');
    if (!games || !games.length) {
      const temp = await this.BotGameRepository.find({
        relations: {
          game: {
            producer: true,
          },
        },
      });
      games = temp.map((game) => ({
        id: game.game.id,
        title: game.game.title,
        identifier: game.game.identifier,
        provider_name: game.game.producer.name,
        has_live: game.game.has_live,
      }));

      await this.memoryService.set('bot:games', games, 60 * 60 * 24);
    }

    return getRandomItemFromArray(games);
  }

  async getRandomBetAmounts() {
    const bets = await this.BotBetRangeRepository.find();
    const amounts = [];
    for (const bet of bets) {
      for (let i = 0; i < bet.percentage; i++) {
        amounts.push(getRandomItemFromArray(bet.amounts));
      }
    }
    return shuffleArray(amounts);
  }

  async getRandomBetAmountUsd() {
    let amounts = await this.memoryService.get('bot:seq');
    if (!amounts || !amounts.length) {
      //  Generate new sequence
      amounts = await this.getRandomBetAmounts();
    }
    const amount = amounts.shift();
    await this.memoryService.set('bot:seq', amounts, 60 * 60 * 24);
    return amount;
  }

  async getRandomBlockchainSymbolByUserId(user_id: string) {
    const result = await this.BotUserCurrencyRepository.find({
      where: { user: { id: user_id } },
      relations: ['currency'],
    });

    return getRandomItemFromArray(result.map((item) => item.currency));
  }

  async generateBotTransaction() {
    const game = await this.getRandomBotGame();
    const user = await this.getRandomBotUser();
    const symbol = await this.getRandomBlockchainSymbolByUserId(user.id);
    const amount_usd = await this.getRandomBetAmountUsd();
    const amount = amount_usd / Number(symbol.price);
    const win_percentage = getRandomNumber();
    let profit_multiplier = 0;

    //  Give 40% chance to win
    if (win_percentage <= 40) {
      //  if live game
      if (game.has_live) {
        profit_multiplier = getRandomItemFromArray([1.95, 2]);
      } else {
        profit_multiplier = getRandomNumber() / 10;
      }

      //  Add win transaction
      const _newGameBlockchainTransaction: DeepPartial<GameBlockchainTransaction> =
        {
          user: { id: user.id },
          currency: symbol,
          game: { id: game.id },
          gcp_game_id: 'bet',
          action: ENUM_GAME_TRANSACTION_ACTION.win,
          action_id: 'bet',
          profit_multiplier: 0,
          amount: amount * profit_multiplier,
          amount_usd: amount_usd * profit_multiplier,
        };

      await this.GameBlockchainTransactionRepository.save(
        _newGameBlockchainTransaction,
      );
    }

    //  Add bet transaction
    const _newGameBlockchainTransaction: DeepPartial<GameBlockchainTransaction> =
      {
        user: { id: user.id },
        currency: symbol,
        game: { id: game.id },
        gcp_game_id: 'bet',
        action: ENUM_GAME_TRANSACTION_ACTION.bet,
        action_id: 'bet',
        profit_multiplier,
        amount,
        amount_usd,
      };

    const newGameBlockchainTransaction =
      await this.GameBlockchainTransactionRepository.save(
        _newGameBlockchainTransaction,
      );

    const bet_data = {
      id: newGameBlockchainTransaction.id,
      player_id: user.id,
      player_name: user.setting_hide_user_name ? '' : user.name,
      player_avatar: user.avatar,
      time: Date.now(),
      multiplier: profit_multiplier,
      profit_amount: (profit_multiplier - 1) * amount,
      profit_amount_usd: (profit_multiplier - 1) * amount_usd,
      game_id: game.id,
      game_name: game.title,
      game_identifier: game.identifier,
      provider_name: game.provider_name,
      bet_amount: amount,
      bet_amount_usd: amount_usd,
      currency: symbol.symbol,
      currency_type: ENUM_CURRENCY.Crypto,
      win: profit_multiplier >= 1 ? true : false,
    };
    this.messageGateway.broadcastBet(JSON.stringify(bet_data));
  }
}
