import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockchainSymbol, QuestBonus, User } from 'entities';
import { ENUM_QUEST_CATEGORY, ENUM_QUEST_TYPE, ENUM_ROLE } from 'enums';
import { Repository } from 'typeorm';
import {
  getBonusAmountForBigWin,
  getBonusAmountForJustWagerOn,
  getBonusAmountForSlotsMaster,
  getBonusAmountForWagerWeek,
  pastTwoWeeksQuestTime,
} from 'utils';

@Injectable()
export class CronQuestService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(QuestBonus)
    private QuestBonusRepository: Repository<QuestBonus>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
  ) {}

  async getUSDTPrice() {
    const usdt = await this.BlockchainSymbolRepository.findOne({
      select: ['price'],
      where: { symbol: 'USDT' },
    });

    return Number(usdt.price);
  }

  async createDailyTasksByUser(
    user: User,
    started_at: number,
    ended_at: number,
  ) {
    const big_win_amount = getBonusAmountForBigWin(user.vip_level);
    const usdt_price = await this.getUSDTPrice();
    await this.QuestBonusRepository.save(
      this.QuestBonusRepository.create({
        user: { id: user.id },
        type: ENUM_QUEST_TYPE.Daily,
        vip_level: user.vip_level,
        category: ENUM_QUEST_CATEGORY.Big_Win,
        started_at: new Date(started_at * 1000),
        ended_at: new Date(ended_at * 1000),
        amount: big_win_amount,
        amount_usd: big_win_amount * usdt_price,
      }),
    );
    const wager_on_amount_usd = getBonusAmountForJustWagerOn(user.vip_level);
    await this.QuestBonusRepository.save(
      this.QuestBonusRepository.create({
        user: { id: user.id },
        type: ENUM_QUEST_TYPE.Daily,
        vip_level: user.vip_level,
        category: ENUM_QUEST_CATEGORY.Just_Wager_On,
        started_at: new Date(started_at * 1000),
        ended_at: new Date(ended_at * 1000),
        amount: wager_on_amount_usd,
        amount_usd: wager_on_amount_usd * usdt_price,
      }),
    );
    const slot_master_amount_usd = getBonusAmountForSlotsMaster(user.vip_level);
    await this.QuestBonusRepository.save(
      this.QuestBonusRepository.create({
        user: { id: user.id },
        type: ENUM_QUEST_TYPE.Daily,
        vip_level: user.vip_level,
        category: ENUM_QUEST_CATEGORY.Slots_Master,
        started_at: new Date(started_at * 1000),
        ended_at: new Date(ended_at * 1000),
        amount: slot_master_amount_usd,
        amount_usd: slot_master_amount_usd * usdt_price,
      }),
    );
  }

  async createWeeklyTasksByUser(
    user: User,
    started_at: number,
    ended_at: number,
  ) {
    const wager_week_amount = getBonusAmountForWagerWeek(user.vip_level);
    const usdt_price = await this.getUSDTPrice();
    await this.QuestBonusRepository.save(
      this.QuestBonusRepository.create({
        user: { id: user.id },
        type: ENUM_QUEST_TYPE.Weekly,
        vip_level: user.vip_level,
        category: ENUM_QUEST_CATEGORY.Wager_Week,
        started_at: new Date(started_at * 1000),
        ended_at: new Date(ended_at * 1000),
        amount: wager_week_amount,
        amount_usd: wager_week_amount * usdt_price,
      }),
    );
  }

  async createDailyTasks(started_at: number, ended_at: number) {
    const users = await this.UserRepository.find({
      select: ['id', 'vip_level'],
      where: { allowed: true, role: ENUM_ROLE.USER },
    });

    for (const user of users) {
      this.createDailyTasksByUser(user, started_at, ended_at);
    }
  }
  async createWeeklyTasks(started_at: number, ended_at: number) {
    const users = await this.UserRepository.find({
      select: ['id', 'vip_level'],
      where: { allowed: true, role: ENUM_ROLE.USER },
    });

    for (const user of users) {
      this.createWeeklyTasksByUser(user, started_at, ended_at);
    }
  }

  async deleteExpiredTasks() {
    await this.QuestBonusRepository.createQueryBuilder()
      .delete()
      .where('status_amount = 0')
      .andWhere('status = false')
      .andWhere('ended_at <= current_timestamp')
      .execute();
  }

  async deleteUnfinishedTasks() {
    const { startTime } = pastTwoWeeksQuestTime();

    await this.QuestBonusRepository.createQueryBuilder()
      .delete()
      .where('status_amount <> 0')
      .andWhere('status = false')
      .andWhere('ended_at <= TO_TIMESTAMP(:endTime)', { endTime: startTime })
      .execute();
  }

  async deleteUnclaimedAndFinishTasks() {
    await this.QuestBonusRepository.createQueryBuilder()
      .delete()
      .where('status = true')
      .andWhere('claim_status = false')
      .andWhere('ended_at <= current_timestamp')
      .execute();
  }
}
