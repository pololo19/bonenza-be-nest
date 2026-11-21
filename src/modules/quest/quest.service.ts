import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BlockchainSymbol,
  Game,
  GameBlockchainTransaction,
  QuestBonus,
  User,
} from 'entities';
import {
  ENUM_GAME_TRANSACTION_ACTION,
  ENUM_QUEST_CATEGORY,
  ENUM_QUEST_TYPE,
} from 'enums';
import { Repository } from 'typeorm';
import {
  dailyQuestTime,
  enumToKeyValue,
  fixedNumber,
  getBonusAmountForBigWin,
  getBonusAmountForJustWagerOn,
  getBonusAmountForSlotsMaster,
  getBonusAmountForWagerWeek,
  getGoalAmountUsdForBigWin,
  getGoalAmountUsdForJustWagerOn,
  getGoalAmountUsdForSlotsMaster,
  getGoalAmountUsdForWagerWeek,
  getGoalMultiplierForBigWin,
  pastTwoWeeksQuestTime,
  weeklyQuestTime,
} from 'utils';

@Injectable()
export class QuestService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(QuestBonus)
    private QuestBonusRepository: Repository<QuestBonus>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
  ) {}

  async getUSDTPrice() {
    const usdt = await this.BlockchainSymbolRepository.findOne({
      select: ['price'],
      where: { symbol: 'USDT' },
    });

    return Number(usdt.price);
  }

  async updateTaskById(id: string, status: boolean, status_amount: number) {
    await this.QuestBonusRepository.createQueryBuilder()
      .update(QuestBonus)
      .set({ status, status_amount })
      .where('id = :id', { id })
      .execute();
  }

  async checkTasksOnBet(user_id: string) {
    const unixcurrenttime = Math.floor(Date.now() / 1000);
    const tasks = await this.QuestBonusRepository.createQueryBuilder()
      .select([
        'id',
        'user_id',
        'category',
        'type',
        'vip_level',
        'started_at',
        'ended_at',
        'status_amount',
      ])
      .where('user_id = :user_id', { user_id })
      .andWhere(`started_at <= TO_TIMESTAMP(${unixcurrenttime})`)
      .andWhere(`ended_at > TO_TIMESTAMP(${unixcurrenttime})`)
      .andWhere('status = false')
      .andWhere(
        `category IN (${ENUM_QUEST_CATEGORY.Just_Wager_On},${ENUM_QUEST_CATEGORY.Wager_Week})`,
      )
      .getRawMany();

    for (const task of tasks) {
      if (task.category === ENUM_QUEST_CATEGORY.Just_Wager_On) {
        const wagerAmountUsd = await this.getWagerAmountUsdByUserIdForQuest(
          task.user_id,
          task.started_at,
          task.ended_at,
        );
        const goalAmountUsd = getGoalAmountUsdForJustWagerOn(task.vip_level);
        await this.updateTaskById(
          task.id,
          wagerAmountUsd >= goalAmountUsd,
          wagerAmountUsd,
        );
      } else if (task.category === ENUM_QUEST_CATEGORY.Wager_Week) {
        const wagerAmountUsd = await this.getWagerAmountUsdByUserIdForQuest(
          task.user_id,
          task.started_at,
          task.ended_at,
        );

        const goalAmountUsd = getGoalAmountUsdForWagerWeek(task.vip_level);
        await this.updateTaskById(
          task.id,
          wagerAmountUsd >= goalAmountUsd,
          wagerAmountUsd,
        );
      }
    }
  }

  async checkTasksOnWin(user_id: string) {
    const unixcurrenttime = Math.floor(Date.now() / 1000);
    const tasks = await this.QuestBonusRepository.createQueryBuilder()
      .select([
        'id',
        'user_id',
        'category',
        'type',
        'vip_level',
        'started_at',
        'ended_at',
      ])
      .where('user_id = :user_id', { user_id })
      .andWhere('started_at <= TO_TIMESTAMP(:unixcurrenttime)', {
        unixcurrenttime,
      })
      .andWhere('ended_at > TO_TIMESTAMP(:unixcurrenttime)', {
        unixcurrenttime,
      })
      .andWhere('status = false')
      .andWhere(
        `category IN (${ENUM_QUEST_CATEGORY.Big_Win},${ENUM_QUEST_CATEGORY.Slots_Master})`,
      )
      .getRawMany();
    for (const task of tasks) {
      if (task.category === ENUM_QUEST_CATEGORY.Big_Win) {
        const transacton = await this.getBigWinByUserIdForQuest(
          task.user_id,
          task.vip_level,
          task.started_at,
          task.ended_at,
        );
        if (transacton) {
          await this.updateTaskById(task.id, true, 1);
        }
      } else if (task.category === ENUM_QUEST_CATEGORY.Slots_Master) {
        const profitAmountUsd = await this.getSlotsProfitByUserIdForQuest(
          task.user_id,
          task.started_at,
          task.ended_at,
        );
        const goalAmountUsd = getGoalAmountUsdForSlotsMaster(task.vip_level);
        await this.updateTaskById(
          task.id,
          profitAmountUsd >= goalAmountUsd,
          profitAmountUsd,
        );
      }
    }
  }

  async getWagerAmountUsdByUserIdForQuest(
    user_id: string,
    start_time: Date,
    end_time: Date,
  ) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('COALESCE(SUM(amount_usd), 0) AS sum')
        .where('user_id = :user_id', { user_id })
        .andWhere('action = :action', {
          action: ENUM_GAME_TRANSACTION_ACTION.bet,
        })
        .andWhere('created_at >= :start_time', { start_time })
        .andWhere('created_at < :end_time', { end_time })
        .getRawOne();

    return Number(result.sum);
  }

  async getSlotsProfitByUserIdForQuest(
    user_id: string,
    start_time: Date,
    end_time: Date,
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
        .andWhere('t_gbt.created_at >= :start_time', {
          start_time,
        })
        .andWhere('t_gbt.created_at <:end_time', { end_time })
        .getRawOne();

    return Number(result.sum);
  }

  async getBigWinByUserIdForQuest(
    user_id: string,
    vip_level: number,
    start_time: Date,
    end_time: Date,
  ) {
    const goalMultiplier = getGoalMultiplierForBigWin(vip_level);
    const goalAmountUSd = getGoalAmountUsdForBigWin(vip_level);
    return await this.GameBlockchainTransactionRepository.createQueryBuilder(
      't_gbt',
    )
      .select('*')
      .where('t_gbt.user_id = :user_id', { user_id })
      .andWhere(`t_gbt.amount_usd >= :amount_usd`, {
        amount_usd: goalAmountUSd,
      })
      .andWhere('t_gbt.profit_multiplier >= :goalMultiplier', {
        goalMultiplier,
      })
      .andWhere('t_gbt.created_at >= :start_time', {
        start_time,
      })
      .andWhere('t_gbt.created_at < :end_time', { end_time })
      .getRawOne();
  }

  async getAccumulatedRewards(user_id: string) {
    const result = await this.QuestBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0) as sum')
      .where('user_id = :user_id', { user_id })
      .andWhere('claim_status = true')
      .getRawOne();

    return Number(result.sum).toFixed(4);
  }

  async getCurrentQuestListByUserId(user_id: string) {
    const now = Math.floor(Date.now() / 1000);
    const dailyTimes = dailyQuestTime();
    const weeklyTimes = weeklyQuestTime();

    const _quests = await this.QuestBonusRepository.createQueryBuilder()
      .where('user_id = :user_id', { user_id })
      .andWhere('started_at <= TO_TIMESTAMP(:now)', { now })
      .andWhere('ended_at > TO_TIMESTAMP(:now)', { now })
      .orderBy('created_at')
      .getMany();

    const dailyQuests = [];
    const weeklyQuests = [];

    const questCategories = enumToKeyValue(ENUM_QUEST_CATEGORY);
    const usdtPrice = await this.getUSDTPrice();

    const user = await this.UserRepository.findOneBy({ id: user_id });
    const bonus_pool = user.bonus_pool;

    for (const quest of _quests) {
      if (quest.type === ENUM_QUEST_TYPE.Daily) {
        if (quest.category === ENUM_QUEST_CATEGORY.Big_Win) {
          const amount = getBonusAmountForBigWin(quest.vip_level);
          const amount_usd = amount * usdtPrice;

          dailyQuests.push({
            id: quest.id,
            allow_claim:
              quest.status && !quest.claim_status && bonus_pool >= amount_usd
                ? true
                : false,
            claim_status: quest.claim_status,
            category: questCategories[quest.category],
            amount,
            amount_usd,
            status: quest.status,
            goal_multiplier: getGoalMultiplierForBigWin(quest.vip_level),
            goal_amount: getGoalAmountUsdForBigWin(quest.vip_level),
          });
        } else if (quest.category === ENUM_QUEST_CATEGORY.Just_Wager_On) {
          const amount = getBonusAmountForJustWagerOn(quest.vip_level);
          const amount_usd = amount * usdtPrice;

          dailyQuests.push({
            id: quest.id,
            allow_claim:
              quest.status && !quest.claim_status && bonus_pool >= amount_usd
                ? true
                : false,
            claim_status: quest.claim_status,
            category: questCategories[quest.category],
            amount,
            amount_usd,
            status: quest.status,
            status_amount: fixedNumber(quest.status_amount, 2),
            goal_amount: getGoalAmountUsdForJustWagerOn(quest.vip_level),
          });
        } else if (quest.category === ENUM_QUEST_CATEGORY.Slots_Master) {
          const amount = getBonusAmountForSlotsMaster(quest.vip_level);
          const amount_usd = amount * usdtPrice;

          dailyQuests.push({
            id: quest.id,
            allow_claim:
              quest.status && !quest.claim_status && bonus_pool >= amount_usd
                ? true
                : false,
            claim_status: quest.claim_status,
            category: questCategories[quest.category],
            amount,
            amount_usd,
            status: quest.status,
            status_amount: fixedNumber(quest.status_amount, 2),
            goal_amount: getGoalAmountUsdForSlotsMaster(quest.vip_level),
          });
        }
      } else {
        if (quest.category === ENUM_QUEST_CATEGORY.Wager_Week) {
          const amount = getBonusAmountForWagerWeek(quest.vip_level);
          const amount_usd = amount * usdtPrice;

          weeklyQuests.push({
            id: quest.id,
            allow_claim:
              quest.status && !quest.claim_status && bonus_pool >= amount_usd
                ? true
                : false,
            claim_status: quest.claim_status,
            category: questCategories[quest.category],
            amount,
            amount_usd,
            status: quest.status,
            status_amount: fixedNumber(quest.status_amount, 2),
            goal_amount: getGoalAmountUsdForWagerWeek(quest.vip_level),
          });
        }
      }
    }

    return {
      accumulated_rewards: await this.getAccumulatedRewards(user.id),
      daily: {
        start_time: dailyTimes.startTime,
        end_time: dailyTimes.endTime,
        current_time: dailyTimes.currentTime,
        quests: dailyQuests,
      },
      weekly: {
        start_time: weeklyTimes.startTime,
        end_time: weeklyTimes.endTime,
        current_time: weeklyTimes.currentTime,
        quests: weeklyQuests,
      },
    };
  }

  async getQuestHistoryByUserId(user_id: string) {
    const pastDailyUnclaimedQuests = [];
    const pastWeeklyUnclaimedQuests = [];
    const pastDailyUnfinishedQuests = [];
    const pastWeeklyUnfinishedQuests = [];
    const pastDailyClaimedQuests = [];
    const pastWeeklyClaimedQuests = [];

    const pastTwoWeeksTimes = pastTwoWeeksQuestTime();

    const questCategories = enumToKeyValue(ENUM_QUEST_CATEGORY);
    const usdtPrice = await this.getUSDTPrice();

    const _pastQuests = await this.QuestBonusRepository.createQueryBuilder()
      .where('user_id = :user_id', { user_id })
      .andWhere('EXTRACT(EPOCH FROM started_at) >= :started_at', {
        started_at: pastTwoWeeksTimes.startTime,
      })
      .andWhere('EXTRACT(EPOCH FROM ended_at) <= :ended_at', {
        ended_at: pastTwoWeeksTimes.endTime,
      })
      .andWhere('status_amount > 0')
      .orderBy('created_at', 'DESC')
      .getMany();

    for (const quest of _pastQuests) {
      if (quest.type === ENUM_QUEST_TYPE.Daily) {
        if (quest.category === ENUM_QUEST_CATEGORY.Big_Win) {
          const amount = getBonusAmountForBigWin(quest.vip_level);
          const amount_usd = amount * usdtPrice;

          if (!quest.status) {
            //  Unfinished
            if (
              Math.floor(quest.ended_at.getTime() / 1000) <=
              pastTwoWeeksTimes.middleTime
            ) {
              pastDailyUnfinishedQuests.push({
                category: questCategories[quest.category],
                amount,
                amount_usd,
                status: quest.status,
                goal_multiplier: getGoalMultiplierForBigWin(quest.vip_level),
                goal_amount: getGoalAmountUsdForBigWin(quest.vip_level),
              });
            }
          } else {
            if (quest.claim_status) {
              //  Claimed
              pastDailyClaimedQuests.push({
                category: questCategories[quest.category],
                amount,
                amount_usd,
                status: quest.status,
                goal_multiplier: getGoalMultiplierForBigWin(quest.vip_level),
                goal_amount: getGoalAmountUsdForBigWin(quest.vip_level),
              });
            } else {
              //  Unclaimed
              if (
                Math.floor(quest.started_at.getTime() / 1000) >=
                pastTwoWeeksTimes.middleTime
              ) {
                pastDailyUnclaimedQuests.push({
                  category: questCategories[quest.category],
                  amount,
                  amount_usd,
                  status: quest.status,
                  goal_multiplier: getGoalMultiplierForBigWin(quest.vip_level),
                  goal_amount: getGoalAmountUsdForBigWin(quest.vip_level),
                });
              }
            }
          }
        } else if (quest.category === ENUM_QUEST_CATEGORY.Just_Wager_On) {
          const amount = getBonusAmountForJustWagerOn(quest.vip_level);
          const amount_usd = amount * usdtPrice;
          const goal_amount = getGoalAmountUsdForJustWagerOn(quest.vip_level);
          if ((quest.status_amount / goal_amount) * 100 >= 1) {
            if (!quest.status) {
              //  Unfinished
              if (
                Math.floor(quest.ended_at.getTime() / 1000) <=
                pastTwoWeeksTimes.middleTime
              ) {
                pastDailyUnfinishedQuests.push({
                  category: questCategories[quest.category],
                  amount,
                  amount_usd,
                  status: quest.status,
                  status_amount: fixedNumber(quest.status_amount, 2),
                  goal_amount,
                });
              }
            } else {
              if (quest.claim_status) {
                //  Claimed
                pastDailyClaimedQuests.push({
                  category: questCategories[quest.category],
                  amount,
                  amount_usd,
                  status: quest.status,
                  status_amount: fixedNumber(quest.status_amount, 2),
                  goal_amount,
                });
              } else {
                //  Unclaimed
                if (
                  Math.floor(quest.started_at.getTime() / 1000) >=
                  pastTwoWeeksTimes.middleTime
                ) {
                  pastDailyUnclaimedQuests.push({
                    category: questCategories[quest.category],
                    amount,
                    amount_usd,
                    status: quest.status,
                    status_amount: fixedNumber(quest.status_amount, 2),
                    goal_amount,
                  });
                }
              }
            }
          }
        } else if (quest.category === ENUM_QUEST_CATEGORY.Slots_Master) {
          const amount = getBonusAmountForSlotsMaster(quest.vip_level);
          const amount_usd = amount * usdtPrice;
          const goal_amount = getGoalAmountUsdForSlotsMaster(quest.vip_level);
          if ((quest.status_amount / goal_amount) * 100 >= 1) {
            if (!quest.status) {
              if (
                Math.floor(quest.ended_at.getTime() / 1000) <=
                pastTwoWeeksTimes.middleTime
              ) {
                pastDailyUnfinishedQuests.push({
                  category: questCategories[quest.category],
                  amount,
                  amount_usd,
                  status: quest.status,
                  status_amount: fixedNumber(quest.status_amount, 2),
                  goal_amount,
                });
              }
            } else {
              if (quest.claim_status) {
                pastDailyClaimedQuests.push({
                  category: questCategories[quest.category],
                  amount,
                  amount_usd,
                  status: quest.status,
                  status_amount: fixedNumber(quest.status_amount, 2),
                  goal_amount,
                });
              } else {
                if (
                  Math.floor(quest.started_at.getTime() / 1000) >=
                  pastTwoWeeksTimes.middleTime
                ) {
                  pastDailyUnclaimedQuests.push({
                    category: questCategories[quest.category],
                    amount,
                    amount_usd,
                    status: quest.status,
                    status_amount: fixedNumber(quest.status_amount, 2),
                    goal_amount,
                  });
                }
              }
            }
          }
        }
      } else {
        if (quest.category === ENUM_QUEST_CATEGORY.Wager_Week) {
          const amount = getBonusAmountForWagerWeek(quest.vip_level);
          const amount_usd = amount * usdtPrice;
          const goal_amount = getGoalAmountUsdForWagerWeek(quest.vip_level);
          if ((quest.status_amount / goal_amount) * 100 >= 1) {
            if (!quest.status) {
              if (
                Math.floor(quest.ended_at.getTime() / 1000) <=
                pastTwoWeeksTimes.middleTime
              ) {
                pastWeeklyUnfinishedQuests.push({
                  category: questCategories[quest.category],
                  amount,
                  amount_usd,
                  status: quest.status,
                  status_amount: fixedNumber(quest.status_amount, 2),
                  goal_amount,
                });
              }
            } else {
              if (quest.claim_status) {
                pastWeeklyClaimedQuests.push({
                  category: questCategories[quest.category],
                  amount,
                  amount_usd,
                  status: quest.status,
                  status_amount: fixedNumber(quest.status_amount, 2),
                  goal_amount,
                });
              } else {
                if (
                  Math.floor(quest.started_at.getTime() / 1000) >=
                  pastTwoWeeksTimes.middleTime
                ) {
                  pastWeeklyUnclaimedQuests.push({
                    category: questCategories[quest.category],
                    amount,
                    amount_usd,
                    status: quest.status,
                    status_amount: fixedNumber(quest.status_amount, 2),
                    goal_amount,
                  });
                }
              }
            }
          }
        }
      }
    }
    return {
      start_time: pastTwoWeeksTimes.startTime,
      end_time: pastTwoWeeksTimes.endTime,
      unclaimed: {
        daily: pastDailyUnclaimedQuests,
        weekly: pastWeeklyUnclaimedQuests,
      },
      unfinished: {
        daily: pastDailyUnfinishedQuests.slice(0, 2),
        weekly: pastWeeklyUnfinishedQuests,
      },
      claimed: {
        daily: pastDailyClaimedQuests,
        weekly: pastWeeklyClaimedQuests,
      },
    };
  }

  async createDailyTasksByUser(
    user: User,
    started_at: number,
    ended_at: number,
  ) {
    const big_win_amount = await getBonusAmountForBigWin(user.vip_level);
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
}
