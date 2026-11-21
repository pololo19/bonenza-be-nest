import {
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { AffiliateService } from 'modules/affiliate/affiliate.service';

import { commissionRewardsDto, friendsDto, referralHistoryDto } from './dto';

@ApiTags('Affiliate')
@Controller('affiliate')
export class AffiliateController {
  constructor(private readonly affiliateService: AffiliateService) {}

  @ApiOperation({
    summary: 'Get affiliate statistics to show on dashboard',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('affiliate')
  @UseGuards(JwtAuthGuard)
  async affiliate(@Request() req: any) {
    const [
      total_friends_referred,
      total_reward_earned_usd,
      total_referral_rewards_usd,
      total_commission_rewards_usd,
      rewards_activities,
      total_rewards_sent_to_date,
      recent_rewards_activities,
    ] = await Promise.all([
      await this.affiliateService.getCountOfFriends(req.user.id),
      await this.affiliateService.getTotalRewardsByUserId(req.user.id),
      await this.affiliateService.getReferralRewardsByUserId(req.user.id),
      await this.affiliateService.getCommissionRewardsByUserId(req.user.id),
      await this.affiliateService.getRewardsActivities(req.user.id),
      await this.affiliateService.getTotalRewardsSentToDate(),
      await this.affiliateService.getRecentRewardsActivities(),
    ]);

    return {
      total_friends_referred,
      total_reward_earned_usd,
      total_referral_rewards_usd,
      total_commission_rewards_usd,
      rewards_activities,
      total_rewards_sent_to_date,
      recent_rewards_activities,
    };
  }

  @ApiOperation({
    summary: 'Get total commission rewwards USD',
    description: 'Limit: 10 times / 1 min',
  })
  @Get('total-rewards')
  async getTotalRewardsSentToDate() {
    return {
      total_commission_rewards_usd:
        await this.affiliateService.getTotalRewardsSentToDate(),
    };
  }

  @ApiOperation({
    summary: 'Get referral friend list',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('friends')
  @UseGuards(JwtAuthGuard)
  async getFriends(@Request() req: any, @Query() query: friendsDto) {
    const {
      user_name,
      user_id,
      registration_start_date,
      registration_end_date,
      wager_start_date,
      wager_end_date,
      page,
      page_size,
    } = query;

    return await this.affiliateService.getFriends(
      req.user,
      user_name,
      user_id,
      registration_start_date,
      registration_end_date,
      wager_start_date,
      wager_end_date,
      page,
      page_size,
    );
  }

  @Get('commission/history')
  @ApiOperation({
    summary: 'Get commission history',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getCommissionHistory(
    @Request() req: any,
    @Query() query: commissionRewardsDto,
  ) {
    const { page, page_size } = query;

    return await this.affiliateService.getCommissionHistory(
      req.user,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Withdraw rewards',
    description: 'Limit: 5 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('withdraw')
  @UseGuards(JwtAuthGuard)
  async withdrawRewards(@Request() req: any) {
    return await this.affiliateService.withdrawRewards(req.user);
  }

  @ApiOperation({
    summary: 'Get rewards information',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('rewards')
  @UseGuards(JwtAuthGuard)
  async getRewards(@Request() req: any) {
    const commission = await this.affiliateService.getCommissionRewards(
      req.user,
    );
    const referral = await this.affiliateService.getReferralRewards(req.user);

    return {
      ...commission,
      ...referral,
    };
  }

  @ApiOperation({
    summary: 'Get referral rewards history',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('referral/history')
  @UseGuards(JwtAuthGuard)
  async getReferralHistory(
    @Request() req: any,
    @Query() query: referralHistoryDto,
  ) {
    const {
      user_name,
      registration_start_date,
      registration_end_date,
      page,
      page_size,
    } = query;

    return await this.affiliateService.getReferralHistory(
      req.user,
      user_name,
      registration_start_date,
      registration_end_date,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get referral rule',
    description: 'Limit: 5 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('referral/rule')
  @UseGuards(JwtAuthGuard)
  async getReferralRewardsRule() {
    return await this.affiliateService.getReferralRewardsRule();
  }

  @ApiOperation({
    summary: 'Get the latest 4 rewards',
    description: 'Limit: 5 times / 1 min',
  })
  @Get('history')
  async getRewardHistory() {
    return await this.affiliateService.getRewardHistory();
  }
}
