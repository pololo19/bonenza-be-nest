import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ENUM_SPIN_BONUS } from 'enums';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { SpinService } from 'modules/spin/spin.service';
import { enumToKeyValue } from 'utils';

import { trySpinDto } from './dto';

@ApiTags('Spin')
@Controller('spin')
export class SpinController {
  constructor(private readonly spinService: SpinService) {}

  @ApiOperation({
    summary: 'Get the latest 20 spin bonus',
    description: 'Limit: 20 times / 1 min',
  })
  @Get('latest')
  async getLatestList() {
    return await this.spinService.getLatestSpins();
  }

  @ApiOperation({
    summary: 'Get the spin data',
    description: 'Limit: 20 times / 1 min',
  })
  @Get('data')
  async getSpinData() {
    return await this.spinService.getSpinData();
  }

  @ApiOperation({
    summary: 'Round a spin',
    description: `
      Type:${JSON.stringify(enumToKeyValue(ENUM_SPIN_BONUS))}
      Limit: 20 times / 1 min
    `,
  })
  @ApiBearerAuth()
  @Post('try')
  @UseGuards(JwtAuthGuard)
  async trySpinByUserId(@Request() req: any, @Body() body: trySpinDto) {
    const { type } = body;
    return await this.spinService.trySpinByUserId(req.user.id, type);
  }

  @ApiOperation({
    summary: 'Get the available count',
    description: 'Limit: 20 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('available-count')
  @UseGuards(JwtAuthGuard)
  async getAvailableSpinCount(@Request() req: any) {
    return {
      available_spin_count: await this.spinService.getAvailableSpinCount(
        req.user.id,
      ),
    };
  }
}
