import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BlockchainSymbol,
  GameBlockchainTransaction,
  Spin,
  SpinLog,
  User,
} from 'entities';
import {
  ENUM_GAME_TRANSACTION_ACTION,
  ENUM_SPIN,
  ENUM_SPIN_BONUS,
} from 'enums';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class CronSpinService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(Spin)
    private SpinRepository: Repository<Spin>,
    @InjectRepository(SpinLog)
    private SpinLogRepository: Repository<SpinLog>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
  ) {}

  async getTotalWagerAmountUsdByUserIdForPast24hours(user: User, now: number) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('COALESCE(SUM(amount_usd), 0)', 'sum')
        .where(
          `user_id = '${user.id}' AND action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
        )
        .andWhere(
          `created_at >= TO_TIMESTAMP(${now}) AT TIME ZONE 'UTC' - INTERVAL '1 days'`,
        )
        .getRawOne();

    return Number(result.sum);
  }

  async addFreeSpinByUserId(user_id: string) {
    await this.UserRepository.createQueryBuilder()
      .update(User)
      .set({ total_spin_count: () => 'total_spin_count + 1' })
      .where('id = :id', { id: user_id })
      .execute();
  }

  async randomizeSpins() {
    //  Lucky Spin
    const luckySymbols =
      await this.BlockchainSymbolRepository.createQueryBuilder()
        .where('price <= 200')
        .andWhere("symbol != 'DRON'")
        .getMany();
    let length = luckySymbols.length;
    const newSymbolForFirstLuckySpin =
      luckySymbols[Math.floor(Math.random() * length)];
    const newSymbolForSecondLuckySpin =
      luckySymbols[Math.floor(Math.random() * length)];
    const newSymbolForThirdLuckySpin =
      luckySymbols[Math.floor(Math.random() * length)];

    const firstLuckySpin = await this.SpinRepository.createQueryBuilder()
      .where('type = :type', { type: ENUM_SPIN_BONUS.Lucky })
      .andWhere('amount_usd = 2')
      .getOne();

    firstLuckySpin.symbol = newSymbolForFirstLuckySpin;
    this.SpinRepository.save(firstLuckySpin);

    const secondLuckySpin = await this.SpinRepository.createQueryBuilder()
      .where('type = :type', { type: ENUM_SPIN_BONUS.Lucky })
      .andWhere('amount_usd = 3')
      .getOne();

    secondLuckySpin.symbol = newSymbolForSecondLuckySpin;
    this.SpinRepository.save(secondLuckySpin);

    const thirdLuckySpin = await this.SpinRepository.createQueryBuilder()
      .where('type = :type', { type: ENUM_SPIN_BONUS.Lucky })
      .andWhere('amount_usd = 5')
      .getOne();

    thirdLuckySpin.symbol = newSymbolForThirdLuckySpin;
    this.SpinRepository.save(thirdLuckySpin);

    //  Super Spin
    const superSymbols =
      await this.BlockchainSymbolRepository.createQueryBuilder()
        .where('price >= 0.1')
        .andWhere('price <= 2000')
        .getMany();
    length = superSymbols.length;
    const newSymbolForFirstSuperSpin =
      luckySymbols[Math.floor(Math.random() * length)];
    const newSymbolForSecondSuperSpin =
      luckySymbols[Math.floor(Math.random() * length)];
    const newSymbolForThirdSuperSpin =
      luckySymbols[Math.floor(Math.random() * length)];

    const firstSuperSpin = await this.SpinRepository.createQueryBuilder()
      .where('type = :type', { type: ENUM_SPIN_BONUS.Super })
      .andWhere('amount_usd = 20')
      .getOne();

    firstSuperSpin.symbol = newSymbolForFirstSuperSpin;
    this.SpinRepository.save(firstSuperSpin);

    const secondSuperSpin = await this.SpinRepository.createQueryBuilder()
      .where('type = :type', { type: ENUM_SPIN_BONUS.Super })
      .andWhere('amount_usd = 30')
      .getOne();

    secondSuperSpin.symbol = newSymbolForSecondSuperSpin;
    this.SpinRepository.save(secondSuperSpin);

    const thirdSuperSpin = await this.SpinRepository.createQueryBuilder()
      .where('type = :type', { type: ENUM_SPIN_BONUS.Super })
      .andWhere('amount_usd = 50')
      .getOne();

    thirdSuperSpin.symbol = newSymbolForThirdSuperSpin;
    this.SpinRepository.save(thirdSuperSpin);

    //  Mega Spin
    const megaSymbols =
      await this.BlockchainSymbolRepository.createQueryBuilder()
        .where('price >= 1')
        .andWhere('price <= 20000')
        .getMany();
    length = megaSymbols.length;
    const newSymbolForFirstMegaSpin =
      luckySymbols[Math.floor(Math.random() * length)];
    const newSymbolForSecondMegaSpin =
      luckySymbols[Math.floor(Math.random() * length)];
    const newSymbolForThirdMegaSpin =
      luckySymbols[Math.floor(Math.random() * length)];

    const firstMegaSpin = await this.SpinRepository.createQueryBuilder()
      .where('type = :type', { type: ENUM_SPIN_BONUS.Mega })
      .andWhere('amount_usd = 200')
      .getOne();

    firstMegaSpin.symbol = newSymbolForFirstMegaSpin;
    this.SpinRepository.save(firstMegaSpin);

    const secondMegaSpin = await this.SpinRepository.createQueryBuilder()
      .where('type = :type', { type: ENUM_SPIN_BONUS.Mega })
      .andWhere('amount_usd = 300')
      .getOne();

    secondMegaSpin.symbol = newSymbolForSecondMegaSpin;
    this.SpinRepository.save(secondMegaSpin);

    const thirdMegaSpin = await this.SpinRepository.createQueryBuilder()
      .where('type = :type', { type: ENUM_SPIN_BONUS.Mega })
      .andWhere('amount_usd = 500')
      .getOne();

    thirdMegaSpin.symbol = newSymbolForThirdMegaSpin;
    this.SpinRepository.save(thirdMegaSpin);
  }

  async addSpinLog(
    user_id: string,
    vip_level: number,
    type: ENUM_SPIN,
    count: number = 1,
  ) {
    const _newSpinLog: DeepPartial<SpinLog> = {
      user: { id: user_id },
      type,
      vip_level,
      count,
    };

    return await this.SpinLogRepository.save(
      this.SpinLogRepository.create(_newSpinLog),
    );
  }
}
