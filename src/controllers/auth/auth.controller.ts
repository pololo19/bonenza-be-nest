import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { selfExclusionDto } from 'controllers/user-setting/dtos';
import { IpAddress } from 'decorators/ip-address.decorator';
import { Agent } from 'decorators/user-agent.decorator';
import {
  disabledAccountError,
  internalServerError,
  isExistMailError,
  isExistPhoneError,
  isNotAllowedActionError,
  isNotExistMailError,
  isNotExistMailOrPhoneError,
  isNotExistPhoneError,
  isNotMatchConfirmationPasswordError,
  isNotValidSelfExlusionTimeError,
  isNotValidTokenError,
  isRequiredMailError,
} from 'errors';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { AuthService } from 'modules/auth/auth.service';
import { UserService } from 'modules/user/user.service';
import { _convertUser } from 'utils';

import {
  ChangePasswordDto,
  forgetPasswordDto,
  LoginDto,
  ResetPasswordDto,
  saveInfoLoginGoogleDto,
  saveInfoLoginGooglePopupDto,
  saveInfoLoginTelegramDto,
  saveInfoLoginWallet,
  sendMailDto,
  sendSMSDto,
  sendVerifyQrCodeDto,
  setLoginPasswordDto,
  setSelfExclusionDto,
  SignUpWithEmailDto,
  SignUpWithPhoneDto,
  twoFactorAuthenticateDto,
  verifyCodeDto,
} from './dtos';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Get('auth-key/:key')
  @UsePipes(new ValidationPipe({ transform: true }))
  async generateAuthKey(
    @Param('key') authKey: string,
    @IpAddress() ip: string,
  ) {
    return await this.authService.checkAuthKey(authKey, ip);
  }

  @Get('validate-auth-key/:token')
  @UsePipes(new ValidationPipe({ transform: true }))
  async validateAuthKey(
    @Param('token') token: string,
    @IpAddress() ip: string,
  ) {
    return await this.authService.checkAuthKeyToken(token, ip);
  }

  @Post('sign-up-with-email')
  @UsePipes(new ValidationPipe({ transform: true }))
  async signUpWithEmail(
    @Body() body: SignUpWithEmailDto,
    @IpAddress() ipAddress: string,
  ) {
    const result = await this.authService.signUpWithEmail(
      body.email,
      body.password,
      body.referral_code,
      ipAddress,
    );
    return result;
  }

  @Post('sign-up-with-phone')
  @UsePipes(new ValidationPipe({ transform: true }))
  async signUpWithPhone(
    @Body() body: SignUpWithPhoneDto,
    @IpAddress() ipAddress: string,
  ) {
    const result = await this.authService.signUpWithPhone(
      body.phone,
      body.password,
      body.referral_code,
      ipAddress,
    );
    return result;
  }

  @Post('save-info-login-google')
  async saveInfoLoginGoogle(
    @Body() body: saveInfoLoginGoogleDto,
    @IpAddress() ipAddress: string,
    @Agent() agent: any,
  ) {
    const res = await this.authService.authWithGoogle(
      body.code,
      body.referral_code,
      ipAddress,
    );
    if (!res)
      throw new HttpException(
        internalServerError.error,
        internalServerError.code,
      );
    const _exclusive = await this.authService.checkSelfExclusive(res.user);
    if (_exclusive) {
      throw new HttpException(
        `${disabledAccountError.error}_${res.user.disabled_to}`,
        disabledAccountError.code,
        {
          cause: res.user.disabled_to,
        },
      );
    }
    const deviceInfo = `${agent.browser} ${agent.browserVersion} / ${agent.os} ${agent.osVersion}`;
    await this.userService.createSession(res.user, deviceInfo, ipAddress);
    return {
      ...res,
      user: _convertUser(res.user),
    };
  }

  @Post('save-info-login-google-one-tap')
  async saveInfoLoginGooglePopup(
    @Body() body: saveInfoLoginGooglePopupDto,
    @IpAddress() ipAddress: string,
    @Agent() agent: any,
  ) {
    const res = await this.authService.authWithGooglePopup(
      body.token,
      ipAddress,
      body.referral_code,
    );
    if (!res) {
      throw new HttpException(
        internalServerError.error,
        internalServerError.code,
      );
    }
    const _exclusive = await this.authService.checkSelfExclusive(res.user);

    if (_exclusive) {
      throw new HttpException(
        `${disabledAccountError.error}_${res.user.disabled_to}`,
        disabledAccountError.code,
        {
          cause: res.user.disabled_to,
        },
      );
    }
    const deviceInfo = `${agent.browser} ${agent.browserVersion} / ${agent.os} ${agent.osVersion}`;
    await this.userService.createSession(res.user, deviceInfo, ipAddress);
    return {
      ...res,
      user: _convertUser(res.user),
    };
  }

  @Post('save-info-login-telegram')
  async saveInfoLoginTelegram(
    @Body() body: saveInfoLoginTelegramDto,
    @IpAddress() ipAddress: string,
    @Agent() agent: any,
  ) {
    const id = body.id;
    const hash = body.hash;
    const code = body.referral_code;

    delete body.hash;
    delete body.referral_code;
    const sortedKeys = Object.keys(body).sort();

    const data_check_string = sortedKeys
      .map((key) => `${key}=${body[key]}`)
      .join('\n');
    const res = await this.authService.authWithTelegram(
      String(id),
      data_check_string,
      hash,
      code,
      ipAddress,
    );
    const _exclusive = await this.authService.checkSelfExclusive(res.user);

    if (_exclusive) {
      throw new HttpException(
        `${disabledAccountError.error}_${res.user.disabled_to}`,
        disabledAccountError.code,
        {
          cause: res.user.disabled_to,
        },
      );
    }
    const deviceInfo = `${agent.browser} ${agent.browserVersion} / ${agent.os} ${agent.osVersion}`;
    await this.userService.createSession(res.user, deviceInfo, ipAddress);
    return {
      ...res,
      user: _convertUser(res.user),
    };
  }

  @Post('save-info-login-wallet')
  async saveInfoLoginWallet(
    @Body() body: saveInfoLoginWallet,
    @IpAddress() ipAddress: string,
    @Agent() agent: any,
  ) {
    const res = await this.authService.authWithWallet(
      body.address,
      body.signature,
      body.referral_code,
      ipAddress,
    );
    const _exclusive = await this.authService.checkSelfExclusive(res.user);

    if (_exclusive) {
      throw new HttpException(
        `${disabledAccountError.error}_${res.user.disabled_to}`,
        disabledAccountError.code,
      );
    }
    const deviceInfo = `${agent.browser} ${agent.browserVersion} / ${agent.os} ${agent.osVersion}`;
    await this.userService.createSession(res.user, deviceInfo, ipAddress);
    return {
      ...res,
      user: _convertUser(res.user),
    };
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(
    @Body() body: LoginDto,
    @IpAddress() ipAddress: string,
    @Agent() agent: any,
  ) {
    const res = await this.authService.login(
      body.phone,
      body.email,
      body.password,
      body.code_otp,
      ipAddress,
    );
    const deviceInfo = `${agent.browser} ${agent.browserVersion} / ${agent.os} ${agent.osVersion}`;
    const _exclusive = await this.authService.checkSelfExclusive(res.user);
    if (_exclusive) {
      throw new HttpException(
        `${disabledAccountError.error}_${res.user.disabled_to}`,
        disabledAccountError.code,
        {
          cause: new Error(String(res.user.disabled_to)),
          description: String(res.user.disabled_to),
        },
      );
    }

    await this.userService.createSession(res.user, deviceInfo, ipAddress);
    return {
      ...res,
      user: _convertUser(res.user),
    };
  }

  @Post('forgot-password')
  async forgetPassword(
    @IpAddress() ipAddress: string,
    @Body() body: forgetPasswordDto,
  ) {
    return this.authService._sendEmailForgetPassword(body.email);
  }

  @Post('send-mail')
  async sendMail(@Body() body: sendMailDto) {
    const user = await this.userService.getUserByEmailOrPhone(body.email, '');
    if (!user) {
      throw new HttpException(
        isNotExistMailError.error,
        isNotExistMailError.code,
      );
    }
    return await this.authService.sendMail(body.email, user, body.request);
  }

  @Post('send-sms')
  async sendSMS(@Body() body: sendSMSDto) {
    const user = await this.userService.getUserByEmailOrPhone('', body.phone);
    if (!user) {
      throw new HttpException(
        isNotExistPhoneError.error,
        isNotExistPhoneError.code,
      );
    }
    return await this.authService.sendSMS(body.phone, user, body.request);
  }

  @Post('verify-otp')
  async verifyOtp(@Body('phone') phone: string, @Body('OTP') otp: string) {}

  // @Post('')
  @Post('verify-code')
  async verifyCode(
    @Body() body: verifyCodeDto,
    @IpAddress() ipAddress: string,
    @Agent() agent: any,
  ) {
    const user = await this.userService.getUserByEmailOrPhone(
      body.email,
      body.phone,
    );
    if (!user) {
      throw new HttpException(
        isNotExistMailOrPhoneError.error,
        isNotExistMailOrPhoneError.code,
      );
    }
    if (body.email && body.phone) {
      throw new HttpException(
        isNotAllowedActionError.error,
        isNotAllowedActionError.code,
      );
    }
    const res = await this.authService.verifyCode(
      user,
      body.code,
      body.request,
      body.email ? 'email' : 'phone',
    );
    const deviceInfo = `${agent.browser} ${agent.browserVersion} / ${agent.os} ${agent.osVersion}`;

    await this.userService.createSession(res.user, deviceInfo, ipAddress);
    return {
      ...res,
      user: _convertUser(res.user),
    };
  }

  @Post('send-user-mail')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async sendUserMail(@Body() body: sendMailDto, @Request() req: any) {
    const user = req.user;
    const emailUser = await this.userService.getUserByEmailOrPhone(
      body.email,
      '',
    );
    if (emailUser && emailUser.id !== user.id) {
      throw new HttpException(isExistMailError.error, isExistMailError.code);
    }
    return await this.authService.sendMail(body.email, user, '');
  }

  @Post('send-user-phone')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async sendUserPhone(@Body() body: sendSMSDto, @Request() req: any) {
    const user = req.user;
    const phoneUser = await this.userService.getUserByEmailOrPhone(
      '',
      body.phone,
    );
    if (phoneUser && phoneUser?.id !== user.id) {
      throw new HttpException(isExistPhoneError.error, isExistPhoneError.code);
    }
    return await this.authService.sendSMS(body.phone, user, '');
  }

  @Post('verify-user-code')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async verifyUserCode(@Body() body: verifyCodeDto, @Request() req: any) {
    const user = req.user;
    const res = await this.authService.verifyCode(
      user,
      body.code,
      body.request,
      body.email ? 'email' : 'phone',
    );
    return {
      ...res,
      user: _convertUser(res.user),
    };
  }

  @Post('reset-password')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async resetPasswordWithAuth(
    @Request() req: any,
    @Body() body: ResetPasswordDto,
  ) {
    const user = req.user;
    const { password, confirm_password } = body;
    if (password != confirm_password) {
      throw new HttpException(
        isNotMatchConfirmationPasswordError.error,
        isNotMatchConfirmationPasswordError.code,
      );
    }
    const _updatedUser = await this.userService.updatePassword(user, password);
    return _convertUser(_updatedUser);
  }

  @Get('validate/:token')
  async validateToken(@Param('token') token: string) {
    const res = await this.authService.validateToken(token);
    const _exclusive = await this.authService.checkSelfExclusive(res);

    if (_exclusive) {
      throw new HttpException(
        `${disabledAccountError.error}_${res.disabled_to}`,
        disabledAccountError.code,
        {
          cause: res.disabled_to,
        },
      );
    }
    return _convertUser(res);
  }

  @Post('reset-password/:token')
  async resetPassword(
    @Param('token') token: string,
    @Body('password') password: string,
  ) {
    const users = await this.userService.getUsersByResetToken(token);
    if (!users.length)
      throw new HttpException(
        isNotValidTokenError.error,
        isNotValidTokenError.code,
      );
    const _updatedUser = await this.userService.updatePassword(
      users[0],
      password,
    );
    return _convertUser(_updatedUser);
  }

  @Post('change-password')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async changePassword(@Request() req: any, @Body() body: ChangePasswordDto) {
    await this.authService.changePassword(
      req.user,
      body.old_password,
      body.new_password,
      body.confirm_new_password,
      body.code_otp,
    );
    return _convertUser(req.user);
  }

  @Get('get-user-info')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getUserInfo(@Request() req: any) {
    return _convertUser(req.user);
  }

  @Get('get-avatar')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getAvatar(@Request() req: any) {
    return req.user.avatar;
  }

  @Get('get-set-login')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getSetLogin(@Request() req: any) {
    return this.userService.getSetLogin(req.user);
  }

  @Put('set-login-password')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async setLoginPassword(
    @Request() req: any,
    @Body() body: setLoginPasswordDto,
  ) {
    return this.userService.setLoginPassword(req.user, body.password);
  }

  @Post('generate-secret')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async generateSecretKey(@Request() req: any) {
    return this.userService.generateSecretKey(req.user);
  }

  @Post('send-verify-qr-code')
  async sendVerifyQrCode(@Body() body: sendVerifyQrCodeDto) {
    const user = await this.userService.getUserByEmailOrPhone(body.email, '');
    if (!user)
      throw new HttpException(
        isNotExistMailError.error,
        isNotExistMailError.code,
      );
    return await this.authService._sendVerifyQrCodeToUser(
      user.email,
      user.name,
      user.secret_key,
    );
  }

  @ApiOperation({
    summary: 'Get Two Factor Authentication Status',
    description: "EndPoint to get user's 2fa with email",
  })
  @Get('get-two-factor-auth-status')
  async get2FAStatus(@Query() body: twoFactorAuthenticateDto) {
    const email = body.email;
    const user = await this.userService.getUserByEmailOrPhone(email, '');
    if (!user)
      throw new HttpException(
        isNotExistMailError.error,
        isNotExistMailError.code,
      );
    return user.tfa;
  }

  @Post('request-self-exclusion')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async selfExclusion(@Request() req: any, @Body() body: selfExclusionDto) {
    if (!req.user.email) {
      throw new HttpException(
        isRequiredMailError.error,
        isRequiredMailError.code,
      );
    }
    // send mail to user
    const unixTime = Date.now() / 1000;
    if (body.disabled_to < unixTime && body.disabled_to !== -1) {
      throw new HttpException(
        isNotValidSelfExlusionTimeError.error,
        isNotValidSelfExlusionTimeError.code,
      );
    }
    const token = this.authService._generateToken(req.user);
    return this.userService._sendSelfExclusiveMailToUser(
      req.user,
      body.disabled_to,
      token,
    );
  }

  @Post('set-self-exclusion')
  async setSelfExclusion(@Body() body: setSelfExclusionDto) {
    const user = await this.authService.validateToken(body.token);
    if (Date.now() / 1000 > body.disabled_to && body.disabled_to !== -1) {
      throw new HttpException(
        isNotValidSelfExlusionTimeError.error,
        isNotValidSelfExlusionTimeError.code,
      );
    }
    const res = await this.userService.setSelfExclusive(user, body.disabled_to);
    return _convertUser(res);
  }
}
