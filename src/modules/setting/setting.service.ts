import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Setting } from 'entities';
import { ENUM_SETTING } from 'enums';
import { Repository } from 'typeorm';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(Setting)
    private SettingRepository: Repository<Setting>,
  ) {}

  async getSwapFee() {
    const result = await this.SettingRepository.findOneBy({
      key: ENUM_SETTING.SWAP_FEE,
    });
    return Number(result.value.fee);
  }

  async getReferralRewardsRule() {
    const result = await this.SettingRepository.findOneBy({
      key: ENUM_SETTING.REFERRAL_REWARDS_RULE,
    });

    return result.value;
  }

  async getMinimumAmountUsdForHighRoller() {
    const result = await this.SettingRepository.findOneBy({
      key: ENUM_SETTING.MINIMUM_BET_AMOUNT_USD_FOR_HIGH_ROLLER,
    });

    return result.value.bet_amount;
  }
}
