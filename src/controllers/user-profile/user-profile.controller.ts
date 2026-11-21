import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { AuthService } from 'modules/auth/auth.service';
import { ContestService } from 'modules/contest/contest.service';
import { UserService } from 'modules/user/user.service';
import { VipService } from 'modules/vip/vip.service';

import {
  betStatisticsDto,
  contestHistoryDto,
  editProfileDto,
  openBoxDto,
} from './dtos';

@Controller('user-profile')
export class UserProfileController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private vipService: VipService,
    private contestService: ContestService,
  ) {}

  @ApiTags('User Profile')
  @Get('get-user-profile')
  async getUserProfile(@Request() req: any, @Query('user_id') userId: string) {
    const user = await this.userService.getUserByUserId(userId);
    let result = { ...user };
    const [userExtraInfo, vipProgress] = await Promise.all([
      this.userService.getUserInformation(user),
      this.vipService.getVIPProgressByUserId(user.id),
    ]);

    result = {
      ...result,
      ...userExtraInfo,
      ...vipProgress,
    };

    return result;
  }

  @ApiTags('User Profile')
  @Post('edit-profile')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async updateProfile(@Request() req: any, @Body() body: editProfileDto) {
    return this.userService.updateProfile(req.user, body.username);
  }

  @ApiTags('User Profile')
  @Post('upload-avatar')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadAvatar(
    @UploadedFile() file: Express.Multer.File,
    @Request() req: any,
  ) {
    return this.userService.uploadAvatar(req.user, file);
  }

  @ApiTags('User Profile')
  @Get('bet-statistics')
  async getBetStatistics(
    @Request() req: any,
    @Query() query: betStatisticsDto,
  ) {
    const { user_id } = query;
    return this.userService.getBetStatistics(user_id);
  }

  @ApiTags('User Profile')
  @Get('user-information')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getUserInformation(@Request() req: any) {
    return this.userService.getUserInformation(req.user);
  }

  @ApiTags('User Profile')
  @Get('contest/history')
  async getContestHistory(@Query() query: contestHistoryDto) {
    const { user_id, page, page_size } = query;
    return this.contestService.getContestHistoryByUserId(
      user_id,
      page,
      page_size,
    );
  }

  @ApiTags('Medal')
  @Get('medal/statistics')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getMedalStatistics() {
    return this.userService.getMedalStatistics();
  }

  @ApiTags('Medal')
  @Post('medal/open-box')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async openBoxForMedals(@Request() req: any, @Body() body: openBoxDto) {
    return this.userService.openBoxForMedals(req.user, body.box);
  }
}
