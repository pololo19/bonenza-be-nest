import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MIN_MONTHLY_CASHBACK_WAGER_AMOUNT } from 'constant';
import {
  BlockchainCryptoBalance,
  BlockchainSymbol,
  CashbackBonus,
  GameBlockchainTransaction,
  User,
} from 'entities';
import {
  ENUM_BONUS_TYPE,
  ENUM_CASHBACK_BONUS,
  ENUM_GAME_TRANSACTION_ACTION,
} from 'enums';
import { MessageGateway } from 'modules/message/message.gateway';
import { DeepPartial, Repository } from 'typeorm';
import { cashbackPastMonthlyTimes, cashbackPastWeeklyTimes } from 'utils';

@Injectable()
export class CronCashbackService {
  constructor(
    private readonly messageGateway: MessageGateway,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(CashbackBonus)
    private CashbackBonusRepository: Repository<CashbackBonus>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
    @InjectRepository(BlockchainCryptoBalance)
    private BlockchainCryptoBalanceRepository: Repository<BlockchainCryptoBalance>,
  ) {}

  async getUSDPriceForUSDT() {
    const usdt = await this.BlockchainSymbolRepository.findOneBy({
      symbol: 'USDT',
    });

    return Number(usdt.price);
  }

  async getTotalWagerAmountUsdByUserId(
    user_id: string,
    start_time: number,
    end_time: number,
  ) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('TRUNC(COALESCE(SUM(amount_usd), 0), 2)', 'sum')
        .where(
          `user_id = '${user_id}' AND action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
        )
        .andWhere(`created_at >= TO_TIMESTAMP(:start_time)`, { start_time })
        .andWhere(`created_at < TO_TIMESTAMP(:end_time)`, { end_time })
        .getRawOne();

    return Number(result.sum);
  }

  //  Add USDT
  async addBonusToWallet(user_id: string, amount: number) {
    //  Get symbol id of 'USDT'
    const usdt = await this.BlockchainSymbolRepository.findOneBy({
      symbol: 'USDT',
    });

    const result =
      await this.BlockchainCryptoBalanceRepository.createQueryBuilder()
        .update(BlockchainCryptoBalance)
        .set({ balance: () => `balance + ${amount}` })
        .where('user_id = :user_id', { user_id })
        .andWhere('symbol_id = :symbol_id', { symbol_id: usdt.id })
        .returning('balance')
        .execute();

    return result.raw[0].balance;
  }

  async weeklyCashback() {
    const { startTime, endTime } = cashbackPastWeeklyTimes();

    const users = await this.UserRepository.createQueryBuilder()
      .where('vip_level >= :vip_level', { vip_level: 22 })
      .getMany();

    for (const user of users) {
      const wager_amount_usd = await this.getTotalWagerAmountUsdByUserId(
        user.id,
        startTime,
        endTime,
      );
      if (wager_amount_usd >= MIN_MONTHLY_CASHBACK_WAGER_AMOUNT) {
        const usdt_price = await this.getUSDPriceForUSDT();
        const bonus_amount_usd = wager_amount_usd / 2000;
        const bonus_amount = bonus_amount_usd / usdt_price;

        //  Add bonus to wallet
        await this.addBonusToWallet(user.id, bonus_amount);

        //  Create a new weekly cashback bonus transaction
        const _newCashback: DeepPartial<CashbackBonus> = {
          user,
          type: ENUM_CASHBACK_BONUS.Weekly,
          amount: bonus_amount,
          amount_usd: bonus_amount_usd,
        };

        await this.CashbackBonusRepository.save(
          this.CashbackBonusRepository.create(_newCashback),
        );

        // emit bonus
        this.messageGateway.emitBonus(user.id, {
          type: ENUM_BONUS_TYPE.WEEKLY_CASHBACK,
          amount: bonus_amount,
          symbol: 'USDT',
        });
      }
    }
  }

  async monthlyCashback() {
    const { startTime, endTime } = cashbackPastMonthlyTimes();

    const users = await this.UserRepository.createQueryBuilder()
      .where('vip_level >= :vip_level', { vip_level: 22 })
      .getMany();

    for (const user of users) {
      const wager_amount_usd = await this.getTotalWagerAmountUsdByUserId(
        user.id,
        startTime,
        endTime,
      );

      if (wager_amount_usd >= MIN_MONTHLY_CASHBACK_WAGER_AMOUNT) {
        const bonus_amount_usd = (wager_amount_usd / 10000) * 3;
        const usdt_price = await this.getUSDPriceForUSDT();
        const bonus_amount = bonus_amount_usd / usdt_price;

        //  Add bonus to wallet
        await this.addBonusToWallet(user.id, bonus_amount);

        //  Create a new monthly cashback bonus transaction
        const _newCashback: DeepPartial<CashbackBonus> = {
          user,
          type: ENUM_CASHBACK_BONUS.Monthly,
          amount: bonus_amount,
          amount_usd: bonus_amount_usd,
        };

        await this.CashbackBonusRepository.save(
          this.CashbackBonusRepository.create(_newCashback),
        );

        // emit bonus
        this.messageGateway.emitBonus(user.id, {
          type: ENUM_BONUS_TYPE.MONTHLY_CASHBACK,
          amount: bonus_amount,
          symbol: 'USDT',
        });
      }
    }
  }
}
