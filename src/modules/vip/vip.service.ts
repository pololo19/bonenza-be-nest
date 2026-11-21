import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BlockchainDepositTransaction,
  BlockchainSymbol,
  CashbackBonus,
  GameBlockchainTransaction,
  LevelUpBonus,
  User,
  VipLevel,
  VipLevelBenefit,
  VipMedal,
} from 'entities';
import {
  ENUM_BLOCKCHAIN_DEPOSIT_STATUS,
  ENUM_BONUS_TYPE,
  ENUM_GAME_TRANSACTION_ACTION,
  ENUM_SPIN,
  ENUM_VIP_BONUS_TYPE,
} from 'enums';
import { AffiliateService } from 'modules/affiliate/affiliate.service';
import { MessageGateway } from 'modules/message/message.gateway';
import { SettingService } from 'modules/setting/setting.service';
import { SpinService } from 'modules/spin/spin.service';
import { Repository } from 'typeorm';
import { fixedNumber } from 'utils';

@Injectable()
export class VipService {
  constructor(
    private readonly affiliateService: AffiliateService,
    private readonly settingService: SettingService,
    private readonly spinService: SpinService,
    private readonly messageGateway: MessageGateway,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(VipLevel)
    private VipLevelRepository: Repository<VipLevel>,
    @InjectRepository(GameBlockchainTransaction)
    private GameBlockchainTransactionRepository: Repository<GameBlockchainTransaction>,
    @InjectRepository(CashbackBonus)
    private CashbackBonusRepository: Repository<CashbackBonus>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(BlockchainDepositTransaction)
    private BlockchainDepositTransactionRepository: Repository<BlockchainDepositTransaction>,
    @InjectRepository(VipMedal)
    private VipMedalRepository: Repository<VipMedal>,
    @InjectRepository(LevelUpBonus)
    private LevelUpBonusRepository: Repository<LevelUpBonus>,
  ) {}

  async getTotalWagerAmountUsdByUserId(user_id: string) {
    const result =
      await this.GameBlockchainTransactionRepository.createQueryBuilder()
        .select('TRUNC(COALESCE(SUM(amount_usd), 0), 6)', 'sum')
        .where(
          `user_id = '${user_id}' AND action = ${ENUM_GAME_TRANSACTION_ACTION.bet}`,
        )
        .getRawOne();

    return Number(result.sum);
  }

  async getTotalDepositAmountUsdByUserId(user_id: string) {
    const result =
      await this.BlockchainDepositTransactionRepository.createQueryBuilder()
        .select('TRUNC(SUM(amount_usd), 6)', 'sum')
        .where(`user_id = '${user_id}'`)
        .andWhere(`status = ${ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete}`)
        .getRawOne();

    return Number(result.sum);
  }

  async getVIPProgressByUserId(user_id: string) {
    const [total_wager_amount_usd, total_deposit_amount_usd] =
      await Promise.all([
        await this.getTotalWagerAmountUsdByUserId(user_id),
        await this.getTotalDepositAmountUsdByUserId(user_id),
      ]);

    const current_vip = await this.VipLevelRepository.createQueryBuilder('t_vl')
      .select([
        't_vl.level as level',
        't_vl.name as name',
        't_vm.name as medal',
        't_vl.from_xp as from_xp',
      ])
      .leftJoin(
        VipMedal,
        't_vm',
        `t_vl.level >= t_vm.start_level AND t_vl.level <= t_vm.end_level`,
      )
      .where(`t_vl.from_xp <= :total_wager_amount_usd`, {
        total_wager_amount_usd,
      })
      .andWhere(':total_wager_amount_usd < t_vl.to_xp', {
        total_wager_amount_usd,
      })
      .getRawOne();

    const next_vip = await this.VipLevelRepository.createQueryBuilder()
      .where(`level = :level`, { level: current_vip.level + 1 })
      .getOne();

    const current_vip_xp = Number(current_vip.from_xp);
    const current_xp =
      total_wager_amount_usd < 1
        ? fixedNumber(total_wager_amount_usd, 2)
        : fixedNumber(total_wager_amount_usd, 0);
    const next_vip_xp = Number(next_vip.from_xp);
    const remaining_xp = next_vip_xp - current_xp;
    const progress =
      ((current_xp - current_vip_xp) / (next_vip_xp - current_vip_xp)) * 100;

    return {
      current_vip_xp,
      current_xp,
      current_vip_level: current_vip.level,
      current_vip_name: current_vip.name,
      current_vip_medal: current_vip.medal,
      remaining_xp:
        total_wager_amount_usd < 1
          ? fixedNumber(remaining_xp, 2)
          : fixedNumber(remaining_xp, 0),
      next_vip_level: next_vip.level,
      next_vip_name: next_vip.name,
      next_vip_xp: fixedNumber(next_vip_xp, 0),
      next_level_bonus: Number(next_vip.level_up_bonus).toFixed(1),
      progress: fixedNumber(progress, 0),
      total_deposit_amount_usd,
    };
  }

  async updateVIPLevelByUser(user: User) {
    const wager_amount = await this.getTotalWagerAmountUsdByUserId(user.id);
    const vip = await this.VipLevelRepository.createQueryBuilder()
      .where(`:wager_amount >= from_xp `, { wager_amount })
      .andWhere(':wager_amount < to_xp', { wager_amount })
      .getOne();
    const p_level = Number(user.vip_level);
    const a_level = Number(vip.level);
    console.log(new Date(), 'level', p_level, a_level);

    //  If the vip level is higher than before
    if (p_level < a_level) {
      //  Give level up bonus
      if (vip.level_up_bonus > 0) {
        const bonuses = await this.VipLevelRepository.createQueryBuilder()
          .where('level > :p_level', { p_level })
          .andWhere('level <= :a_level', { a_level })
          .getMany();

        const usdt_price = await this.getUSDPriceForUSDT();

        for (const bonus of bonuses) {
          //  save level up bonus
          await this.LevelUpBonusRepository.save(
            this.LevelUpBonusRepository.create({
              user,
              amount: bonus.level_up_bonus,
              amount_usd: bonus.level_up_bonus * usdt_price,
            }),
          );
          //  emit bonus
          this.messageGateway.emitBonus(user.id, {
            type: ENUM_BONUS_TYPE.LEVEL_UP,
            amount: bonus.level_up_bonus,
            symbol: 'USDT',
          });
        }
      }

      //  Update user's vip level
      user.vip_level = vip.level;

      //  Add free spins
      if (p_level >= 8) {
        user.total_spin_count =
          Number(user.total_spin_count) + (a_level - p_level);
      }

      await this.UserRepository.save(user);

      //  Save spin log
      await this.spinService.addSpinLog(
        user.id,
        vip.level,
        ENUM_SPIN.Level_Up,
        a_level - p_level,
      );

      const rule = await this.settingService.getReferralRewardsRule();

      //  Add usd commission rewards for affiliate
      if (Object.keys(rule).includes(vip.level.toString())) {
        const _referral_user = await this.UserRepository.findOne({
          where: { id: user.id },
          select: ['referral_user'],
        });
        await this.affiliateService.addReferralBonus(
          _referral_user.referral_user,
          user,
          vip.level,
        );
      }
    }
  }

  async getVIPBonusByUserId(user_id: string) {
    const [vip_progress] = await Promise.all([
      await this.getVIPProgressByUserId(user_id),
    ]);

    return {
      level_up_rewards: {
        current_vip_xp: vip_progress.current_xp,
        current_vip_name: vip_progress.current_vip_name,
        next_vip_xp: vip_progress.next_vip_xp,
        bonus_amount_usd: await this.getTotalLevelUpBonusByUserId(user_id),
      },
    };
  }

  async getUSDPriceForUSDT() {
    const usdt = await this.BlockchainSymbolRepository.findOneBy({
      symbol: 'USDT',
    });

    return Number(usdt.price);
  }

  async getTotalLevelUpBonusByUserId(user_id: string) {
    const result = await this.LevelUpBonusRepository.createQueryBuilder()
      .select('COALESCE(SUM(amount_usd), 0) as sum')
      .where('user_id = :user_id', { user_id })
      .andWhere('claim_status = false')
      .getRawOne();

    return fixedNumber(result.sum, 4);
  }

  async getTotalVipBonusByUserId(user_id: string) {
    const result = await this.CashbackBonusRepository.query(`
      SELECT SUM(sum) as sum
      FROM (
        (
          SELECT COALESCE(SUM(amount_usd), 0) as sum
          FROM "level_up_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
        UNION
        (
          SELECT COALESCE(SUM(amount_usd), 0) as sum
          FROM "cashback_bonus"
          WHERE user_id = '${user_id}' AND claim_status = true
        )
      ) AS "t_combined"
    `);
    return fixedNumber(result[0].sum, 4);
  }

  async getVIPLevelSystem() {
    return await this.VipMedalRepository.createQueryBuilder('t_vm')
      .select([
        't_vm.name as medal_name',
        't_vl_s.name as start_level',
        't_vl_e.name as end_level',
        't_vm.start_level as start_level_num',
        't_vm.end_level as end_level_num',
        `array_agg(
          json_build_object(
            'bonus_type',
            CASE bonus_type
              WHEN ${ENUM_VIP_BONUS_TYPE.LEVEL_UP} THEN 'level_up'
              WHEN ${ENUM_VIP_BONUS_TYPE.WEEKLY_CASHBACK} THEN 'weekly_cashback'
              WHEN ${ENUM_VIP_BONUS_TYPE.MONTHLY_CASHBACK} THEN 'monthly_cashback'
            END,
            'level_up_total_prize_amount_usd', level_up_total_prize_amount_usd,
            'weekly_cashback_percentage', weekly_cashback_percentage,
            'monthly_cashback_percentage', monthly_cashback_percentage
          )
        ) as bonuses`,
      ])
      .innerJoin(VipLevelBenefit, 't_vlb', 't_vlb.medal_id = t_vm.id')
      .innerJoin(VipLevel, 't_vl_s', 't_vl_s.level = t_vm.start_level')
      .innerJoin(VipLevel, 't_vl_e', 't_vl_e.level = t_vm.end_level')
      .groupBy('t_vm.name')
      .addGroupBy('t_vl_s.name')
      .addGroupBy('t_vl_e.name')
      .addGroupBy('t_vm.start_level')
      .addGroupBy('t_vm.end_level')
      .orderBy('t_vm.start_level', 'ASC')
      .getRawMany();
  }

  async getLevelUpDetails() {
    const medals = await this.VipMedalRepository.createQueryBuilder('t_vm')
      .select([
        't_vm.name as medal_name',
        't_vl_s.name as start_level',
        't_vl_e.name as end_level',
        't_vm.start_level as start_level_num',
        't_vm.end_level as end_level_num',
        `array_agg(
          json_build_object(
            'level', t_vl.level,
            'name', t_vl.name,
            'required_xp', t_vl.from_xp,
            'level_up_bonus', t_vl.level_up_bonus
          )
        ) as levels`,
      ])
      .innerJoin(
        VipLevel,
        't_vl',
        't_vl.level >= t_vm.start_level AND t_vl.level <= t_vm.end_level',
      )
      .innerJoin(VipLevel, 't_vl_s', 't_vl_s.level = t_vm.start_level')
      .innerJoin(VipLevel, 't_vl_e', 't_vl_e.level = t_vm.end_level')
      .groupBy('t_vm.name')
      .addGroupBy('t_vl_s.name')
      .addGroupBy('t_vl_e.name')
      .addGroupBy('t_vm.start_level')
      .addGroupBy('t_vm.end_level')
      .orderBy('t_vm.start_level', 'ASC')
      .getRawMany();

    for (const i in medals) {
      medals[i].levels.sort((a: any, b: any) => a.level - b.level);
    }

    return medals;
  }
}
