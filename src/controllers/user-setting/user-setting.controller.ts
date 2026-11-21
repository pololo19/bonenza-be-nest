import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { UserService } from 'modules/user/user.service';

import { confirmQRcodeDto, editSettingDto } from './dtos';

@ApiTags('User Setting')
@Controller('user-setting')
export class UserSettingController {
  constructor(private userService: UserService) {}

  @Get('get-general-setting')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getGeneralSetting(@Request() req: any) {
    return this.userService.getUserSetting(req.user, 'general');
  }

  @Get('get-privacy-setting')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getPrivacySetting(@Request() req: any) {
    return this.userService.getUserSetting(req.user, 'privacy');
  }

  @Get('get-email-and-phone-verify')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getEmailAndPhoneVerify(@Request() req: any) {
    return this.userService.getUserSetting(req.user, 'verify');
  }

  @Put('edit-setting')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async updateSetting(@Request() req: any, @Body() body: editSettingDto) {
    return this.userService.updateUserSetting(req.user, body);
  }

  @Post('confirm-qr-code')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async confirmQRCode(@Request() req: any, @Body() body: confirmQRcodeDto) {
    return this.userService.confirmQrCode(
      req.user,
      body.code_otp,
      body.password,
    );
  }

  @Post('disable-two-factor-authentication')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async disable2FA(@Request() req: any, @Body() body: confirmQRcodeDto) {
    return this.userService.disable2FA(req.user, body.code_otp, body.password);
  }

  @Post('upload-id-cards')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files'))
  async uploadsIdCard(
    @Request() req: any,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.userService.uploadIds(req.user, files);
  }
}
