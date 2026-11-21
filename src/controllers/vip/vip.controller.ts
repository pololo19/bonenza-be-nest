import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { VipService } from 'modules/vip/vip.service';

@Controller('vip')
export class VipController {
  constructor(private readonly vipService: VipService) {}

  @ApiTags('VIP - General')
  @ApiOperation({
    summary: 'Get the vip information',
    description: 'Limit: 20 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('vip-progress')
  @UseGuards(JwtAuthGuard)
  async getVIPProgressByUserId(@Request() req: any) {
    return await this.vipService.getVIPProgressByUserId(req.user.id);
  }

  @ApiTags('VIP - General')
  @ApiOperation({
    summary: 'Get the vip level system',
    description: 'Limit: 10 times / 1 min',
  })
  @Get('vip-level-system')
  async getVIPLevelSystem() {
    const [level_system, level_up_details] = await Promise.all([
      await this.vipService.getVIPLevelSystem(),
      await this.vipService.getLevelUpDetails(),
    ]);

    return { level_system, level_up_details };
  }

  @ApiTags('VIP - General')
  @ApiOperation({
    summary: 'Get total deposit amount usd',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('vip-check-deposit')
  @UseGuards(JwtAuthGuard)
  async checkDeposit(@Request() req: any) {
    return await this.vipService.getTotalDepositAmountUsdByUserId(req.user.id);
  }
}
