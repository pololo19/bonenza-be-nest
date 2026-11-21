import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { SettingService } from 'modules/setting/setting.service';

@ApiTags('Setting')
@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @ApiOperation({
    summary: 'Get minimum amount usd for high roller',
    description: 'Limit: 20 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('high-roller')
  @UseGuards(JwtAuthGuard)
  async getFavoriteGames() {
    return {
      minimum_amount_usd:
        await this.settingService.getMinimumAmountUsdForHighRoller(),
    };
  }

  @ApiOperation({
    summary: 'Get swap fee',
    description: 'Limit: 20 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('swap-fee')
  @UseGuards(JwtAuthGuard)
  async getSwapInfo() {
    return { fee_percentage: await this.settingService.getSwapFee() };
  }
}
