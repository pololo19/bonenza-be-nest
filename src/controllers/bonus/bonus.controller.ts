import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ENUM_BONUS_CLAIM } from 'enums';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { BonusService } from 'modules/bonus/bonus.service';

import { bonusDto, bonusHistoryDto, claimBonusDto, redeemDto } from './dto';

@ApiTags('Bonus')
@Controller('bonus')
export class BonusController {
  constructor(private readonly bonusService: BonusService) {}

  @ApiOperation({
    summary: 'Get bonus statistics to show on dashboard',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('statistics')
  @UseGuards(JwtAuthGuard)
  async BonusStatistics(@Request() req: any) {
    return this.bonusService.getBonusStatisticsByUserId(req.user.id);
  }

  @ApiOperation({
    summary: 'Get bonus amount usd per category',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('details/categories')
  @UseGuards(JwtAuthGuard)
  async BonusDetailsCategories(@Request() req: any) {
    return this.bonusService.getTotalsForBonusCategories(req.user);
  }

  @ApiOperation({
    summary: 'Get bonus transaction history',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('details/transactions')
  @UseGuards(JwtAuthGuard)
  async BonusDetailsTransactions(
    @Request() req: any,
    @Query() query: bonusDto,
  ) {
    const { category } = query;
    return this.bonusService.getBonusTransactions(req.user, category);
  }

  @ApiOperation({
    summary: 'Get usdt bonus history',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('usdt-history')
  @UseGuards(JwtAuthGuard)
  async USDTBonusHistory(@Request() req: any, @Query() query: bonusHistoryDto) {
    const { page, page_size } = query;
    return this.bonusService.getUSDTBonusHistoryByUserId(
      req.user.id,
      page,
      page_size,
    );
  }

  @ApiOperation({
    summary: 'Get bonus list to claim',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('claim/list')
  @UseGuards(JwtAuthGuard)
  async getBonusListForClaim(@Request() req: any) {
    return this.bonusService.getBonusesForClaim(req.user);
  }

  @ApiOperation({
    summary: 'Claim bonus',
    description: `
      Type: ${JSON.stringify(Object.values(ENUM_BONUS_CLAIM))}
      Limit: 10 times / 1 min
    `,
  })
  @ApiBearerAuth()
  @Post('claim')
  @UseGuards(JwtAuthGuard)
  async claimBonus(@Body() body: claimBonusDto) {
    const { type, bonus_id } = body;

    return await this.bonusService.claimBonus(type, bonus_id);
  }

  @ApiOperation({
    summary: 'Redeem bonus with code',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('redeem')
  @UseGuards(JwtAuthGuard)
  async RedeemBonus(@Request() req: any, @Body() body: redeemDto) {
    const { code } = body;
    return this.bonusService.redeemBonus(req.user.id, code);
  }
}
