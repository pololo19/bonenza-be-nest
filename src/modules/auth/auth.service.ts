import { getCountry } from '@ladjs/country-language';
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AppEnvironment } from 'app.environment';
import * as bcrypt from 'bcrypt';
import { requestTool, requestType } from 'controllers/auth/dtos';
import { enc, HmacSHA256, SHA256 } from 'crypto-js';
import { Tier, User } from 'entities';
import { ENUM_MULTI_LANG, ENUM_ROLE } from 'enums';
import {
  isBadRequestError,
  isExistMailError,
  isExistPhoneError,
  isExpiredTokenError,
  isExpiredVerificationCodeError,
  isMatchReferralCodeError,
  isNotAllowedUerError,
  isNotExistMailError,
  isNotExistMailOrPhoneError,
  isNotExistPasswordError,
  isNotExistPhoneError,
  isNotExistUserError,
  isNotMailVerifiedError,
  isNotMatchConfirmationPasswordError,
  isNotMatched2FAError,
  isNotMatchedCurrentPasswordError,
  isNotMatchedPasswordError,
  isNotMatchedVerificationCodeError,
  isNotPhoneVerifiedError,
  isNotValidTgInfoError,
  isNotValidTokenError,
  sendGridError,
  twiloError,
} from 'errors';
import * as geoip from 'geoip-lite';
import { OAuth2Client } from 'google-auth-library';
import { QuestService } from 'modules/quest/quest.service';
import {
  EmailService,
  SendEmailParams,
} from 'modules/shared/services/email.service';
import { UserService } from 'modules/user/user.service';
import { WalletService } from 'modules/wallet/wallet.service';
import { WalletWithdrawService } from 'modules/wallet/wallet-withdraw.service';
import * as moment from 'moment';
import { authenticator } from 'otplib';
import { toDataURL as QRCodeTodataUrl } from 'qrcode';
import { DeepPartial, Repository } from 'typeorm';
import {
  convertDataUrlToBase64,
  dailyQuestTime,
  generateOTPAuthUrl,
  generateReferralCode,
  getDailyQuestGenerateTime,
  getEmailHtml,
  getExpiredTime,
  getWeeklyQuestGenerateTime,
  guessDailyQuestTime,
  guessWeeklyQuestTime,
  randomString,
  removeIPv6Prefix,
  weeklyQuestTime,
} from 'utils';

@Injectable()
export class AuthService {
  private readonly verifyCodeLength = 6;
  constructor(
    private readonly appEnvironment: AppEnvironment,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly emailService: EmailService,
    private readonly walletService: WalletService,
    private readonly walletWithdrawService: WalletWithdrawService,
    private readonly questService: QuestService,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(Tier)
    private TierRepository: Repository<Tier>,
  ) {}

  async checkAuthKey(key: string, ip: string) {
    if (key !== this.appEnvironment.feAuthKey) {
      return { success: false };
    } else {
      const payload = Object.assign(
        {},
        {
          time: Date.now(),
          ip: ip,
        },
      );
      const token = this.jwtService.sign(payload);
      return { success: true, token };
    }
  }

  async checkAuthKeyToken(token: string, ip: string) {
    let decode: any;
    try {
      decode = await this.jwtService.verifyAsync(token);
    } catch (error) {
      throw new HttpException(isBadRequestError.error, isBadRequestError.code);
    }

    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime > decode.exp) {
      throw new HttpException(isBadRequestError.error, isBadRequestError.code);
    }
    const ipAddress = decode.ip;
    if (ipAddress !== ip) {
      throw new HttpException(isBadRequestError.error, isBadRequestError.code);
    }
    return token;
  }

  async doTasksForNewUser(user: User) {
    //  Create wallets
    await this.walletService.createUserWallets(user);

    //  Add the default favorite currencies (crypto + fiat)
    await this.walletService.setDefaultCurrencies(user);

    //  Create new quest tasks
    const dailyTimes = dailyQuestTime();
    await this.questService.createDailyTasksByUser(
      user,
      dailyTimes.startTime,
      dailyTimes.endTime,
    );
    const weeklyTimes = weeklyQuestTime();
    await this.questService.createWeeklyTasksByUser(
      user,
      weeklyTimes.startTime,
      weeklyTimes.endTime,
    );
    const dailyQuestGenerateTime = getDailyQuestGenerateTime(
      dailyTimes.startTime,
    );
    if (dailyTimes.currentTime > dailyQuestGenerateTime) {
      const nextDailyTimes = guessDailyQuestTime(dailyQuestGenerateTime);
      await this.questService.createDailyTasksByUser(
        user,
        nextDailyTimes.startTime,
        nextDailyTimes.endTime,
      );
    }
    const weeklyQuestGenerateTime = getWeeklyQuestGenerateTime(
      weeklyTimes.endTime,
    );
    if (weeklyTimes.currentTime > weeklyQuestGenerateTime) {
      const nextWeeklyTimes = guessWeeklyQuestTime(weeklyQuestGenerateTime);
      await this.questService.createWeeklyTasksByUser(
        user,
        nextWeeklyTimes.startTime,
        nextWeeklyTimes.endTime,
      );
    }
    // create avaialble withdraw balance
    await this.walletWithdrawService.createAvaiableWithdraBalanceByUserId(
      user.id,
    );
  }

  async languageCodeByCount(code: string): Promise<ENUM_MULTI_LANG> {
    return new Promise(function (resolve) {
      getCountry(code, function (err, country) {
        if (err) {
          resolve(ENUM_MULTI_LANG.English);
        } else {
          const languages = country.languages;
          const defaultLanguage = languages[0];
          const fullLanguage = defaultLanguage.name[0];
          const language =
            ENUM_MULTI_LANG[fullLanguage] || ENUM_MULTI_LANG.English;
          resolve(language);
        }
      });
    });
  }

  async signUpWithEmail(
    email: string,
    password: string,
    code: string,
    ip: string,
  ) {
    const isExistEmail = await this.UserRepository.findOneBy({ email });
    let isExistReferral: DeepPartial<User>;
    let isExistTier: DeepPartial<Tier>;

    if (isExistEmail) {
      throw new HttpException(isExistMailError.error, isExistMailError.code);
    }

    // signup with referralCode
    if (code && code.length) {
      isExistReferral = await this.UserRepository.findOneBy({
        referral_code: code,
      });
      isExistTier = await this.TierRepository.findOne({
        where: { code },
        relations: ['tier1', 'tier2'],
      });

      if (!isExistReferral && !isExistTier) {
        throw new HttpException(
          isMatchReferralCodeError.error,
          isMatchReferralCodeError.code,
        );
      }
    }

    const salt = await bcrypt.genSalt();
    const newPassword = await bcrypt.hash(password, salt);
    const verifyCode = randomString(this.verifyCodeLength);

    const numberOfUsers = await this.UserRepository.count();
    const assignReferralCode = generateReferralCode(numberOfUsers + 1);

    const geo = geoip.lookup(ip);
    const country = geo?.country ?? '';

    const defaultFiat = await this.walletService.getDefaultFiat(country);
    const language: ENUM_MULTI_LANG = await this.languageCodeByCount(country);
    console.log(language, country, '-----228');

    const newUser: DeepPartial<User> = {
      name: randomString(11),
      email: email,
      password: newPassword,
      verify_code: {
        code: verifyCode,
        expired_at: getExpiredTime(),
      },
      referral_code: assignReferralCode,
      country,
      ip,
      setting_language: language,
    };

    newUser.setting_fiat_currency = defaultFiat;
    if (isExistReferral) newUser.referral_user = isExistReferral;
    else if (isExistTier) {
      if (isExistTier.role === ENUM_ROLE.TIER1) {
        newUser.tier1 = isExistTier;
      } else if (isExistTier.role === ENUM_ROLE.TIER2) {
        newUser.tier2 = isExistTier;
        newUser.tier1 = isExistTier.tier1;
      } else if (isExistTier.role === ENUM_ROLE.TIER3) {
        newUser.tier3 = isExistTier;
        newUser.tier2 = isExistTier.tier2;
        newUser.tier1 = isExistTier.tier1;
      }
    }
    const user = this.UserRepository.create(newUser);
    const createdUser = await this.UserRepository.save(user);

    // send sms to user
    await this._sendEmailToCreatedUser(user, verifyCode);

    await this.doTasksForNewUser(createdUser);

    return { success: true, email: createdUser.email };
  }

  async signUpWithPhone(
    phone: string,
    password: string,
    code: string,
    ip: string,
  ) {
    const isExistPhone = await this.UserRepository.findOneBy({ phone });
    let isExistReferral: DeepPartial<User>;
    let isExistTier: DeepPartial<Tier>;

    if (isExistPhone)
      throw new HttpException(isExistPhoneError.error, isExistPhoneError.code);

    const salt = await bcrypt.genSalt();
    const newPassword = await bcrypt.hash(password, salt);
    const verifyCode = randomString(this.verifyCodeLength);

    // signup with referralCode
    if (code && code.length) {
      isExistReferral = await this.UserRepository.findOneBy({
        referral_code: code,
      });
      isExistTier = await this.TierRepository.findOne({
        where: { code },
        relations: ['tier1', 'tier2'],
      });

      if (!isExistReferral && !isExistTier) {
        throw new HttpException(
          isMatchReferralCodeError.error,
          isMatchReferralCodeError.code,
        );
      }
    }

    const numberOfUsers = await this.UserRepository.count();
    const assignReferralCode = generateReferralCode(numberOfUsers + 1);

    const geo = geoip.lookup(ip);
    const country = geo?.country ?? '';

    const defaultFiat = await this.walletService.getDefaultFiat(country);
    const language = await this.languageCodeByCount(country);

    const newUser: DeepPartial<User> = {
      name: randomString(11),
      phone: phone,
      password: newPassword,
      verify_code: {
        code: verifyCode,
        expired_at: getExpiredTime(),
      },
      referral_code: assignReferralCode,
      country,
      ip,
      setting_language: language,
    };
    newUser.setting_fiat_currency = defaultFiat;
    if (isExistReferral) newUser.referral_user = isExistReferral;
    else if (isExistTier) {
      if (isExistTier.role === ENUM_ROLE.TIER1) {
        newUser.tier1 = isExistTier;
      } else if (isExistTier.role === ENUM_ROLE.TIER2) {
        newUser.tier2 = isExistTier;
        newUser.tier1 = isExistTier.tier1;
      } else if (isExistTier.role === ENUM_ROLE.TIER3) {
        newUser.tier3 = isExistTier;
        newUser.tier2 = isExistTier.tier2;
        newUser.tier1 = isExistTier.tier1;
      }
    }

    const user = this.UserRepository.create(newUser);

    const createdUser = await this.UserRepository.save(user);

    // send sms to phone
    await this._sendPhoneToCreateUser(user, verifyCode);

    await this.doTasksForNewUser(createdUser);

    return { success: true, phone: createdUser.phone };
  }

  async login(
    phone: string,
    email: string,
    pass: string,
    code_otp: string,
    ip?: string,
  ) {
    const user = await this.userService.getUserByEmailOrPhone(email, phone);
    if (!user) {
      throw new HttpException(
        isNotExistMailOrPhoneError.error,
        isNotExistMailOrPhoneError.code,
      );
    }
    if (!user.allowed) {
      if (phone) {
        await this.sendSMS(user.phone, user);
      } else {
        await this.sendMail(user.email, user);
      }

      throw new HttpException(
        isNotAllowedUerError.error,
        isNotAllowedUerError.code,
      );
    }

    if (user.allowed) {
      if (phone && !user.phone_verified) {
        throw new HttpException(
          isNotPhoneVerifiedError.error,
          isNotPhoneVerifiedError.code,
        );
      }
      if (email && !user.email_verified) {
        throw new HttpException(
          isNotMailVerifiedError.error,
          isNotMailVerifiedError.code,
        );
      }
    }

    if (!user.password) {
      throw new HttpException(
        isNotExistPasswordError.error,
        isNotExistPasswordError.code,
      );
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new HttpException(
        isNotMatchedPasswordError.error,
        isNotMatchedPasswordError.code,
      );
    }

    //require tfa
    if (user.tfa) {
      const secretKey = user.secret_key;
      const isVerifyOtp = authenticator.check(code_otp, secretKey);
      if (!isVerifyOtp)
        throw new HttpException(
          isNotMatched2FAError.error,
          isNotMatched2FAError.code,
        );
    }

    if (ip) {
      const geo = geoip.lookup(ip);
      const country = geo?.country ?? '';

      user.country = country;
      user.ip = removeIPv6Prefix(ip);
    }

    // update last join time
    user.last_joined_at = new Date();
    await this.UserRepository.save(user);

    return {
      token: this._generateToken(user),
      user,
    };
  }

  async validateToken(token: string) {
    let decode: any;
    try {
      decode = await this.jwtService.verifyAsync(token);
    } catch (error) {
      throw new HttpException(
        isNotValidTokenError.error,
        isNotValidTokenError.code,
      );
    }

    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime > decode.exp) {
      throw new HttpException(
        isExpiredTokenError.error,
        isExpiredTokenError.code,
      );
    }
    const userId = decode.userId;
    const user = await this.UserRepository.findOne({
      where: { id: userId },
      relations: ['setting_fiat_currency'],
    });
    if (!user) {
      throw new HttpException(
        isNotExistUserError.error,
        isNotExistUserError.code,
      );
    }
    return user;
  }

  async changePassword(
    user: User,
    oldPass: string,
    newPass: string,
    confirmNewPass: string,
    codeOtp: string,
  ) {
    const isMatch = await bcrypt.compare(oldPass, user.password);
    if (!isMatch) {
      throw new HttpException(
        isNotMatchedCurrentPasswordError.error,
        isNotMatchedCurrentPasswordError.code,
      );
    }
    if (newPass !== confirmNewPass) {
      throw new HttpException(
        isNotMatchConfirmationPasswordError.error,
        isNotMatchConfirmationPasswordError.code,
      );
    }

    // two factor authenticator
    if (user.tfa) {
      const secretKey = user.secret_key;
      const isVerifyOtp = authenticator.check(codeOtp, secretKey);
      if (!isVerifyOtp) {
        throw new HttpException(
          isNotMatched2FAError.error,
          isNotMatched2FAError.code,
        );
      }
    }

    const result = await this.userService.updatePassword(user, newPass);

    return result;
  }

  async checkSelfExclusive(user: User) {
    const currentTime = Math.floor(Date.now() / 1000);
    return (
      Number(user.disabled_to) > currentTime || Number(user.disabled_to) === -1
    );
  }

  async sendMail(email: string, user: User, request: requestType = '') {
    const verifyCode = randomString(this.verifyCodeLength);

    //save token
    const newCode = {
      code: verifyCode,
      expired_at: getExpiredTime(),
    };

    user.email = email;
    if (request === 'reset') {
      user.reset_pwd = { ...newCode };
    } else {
      user.verify_code = { ...newCode };
    }

    await this.UserRepository.save(user);

    // send mail
    try {
      const res = await this._sendEmailToCreatedUser(user, verifyCode, request);
      if (!res)
        throw new HttpException(sendGridError.error, sendGridError.code);
    } catch (error) {
      throw new HttpException(sendGridError.error, sendGridError.code);
    }

    return { error_code: 0, msg: 'success' };
  }

  async sendSMS(phone: string, user: User, request: requestType = '') {
    const verifyCode = randomString(this.verifyCodeLength);
    if (!user)
      throw new HttpException(
        isNotExistPhoneError.error,
        isNotExistPhoneError.code,
      );

    //save Token
    const newToken = {
      code: verifyCode,
      expired_at: getExpiredTime(),
    };
    user.phone = phone;
    if (request === 'reset') {
      user.reset_pwd = { ...newToken };
    } else {
      user.verify_code = { ...newToken };
    }

    await this.UserRepository.save(user);

    // send SMS
    try {
      const res = await this._sendPhoneToCreateUser(user, verifyCode);
      if (!res) throw new HttpException(twiloError.error, twiloError.code);
    } catch (error) {
      throw new HttpException(twiloError.error, twiloError.code);
    }

    return { msg: 'success' };
  }

  async verifyCode(
    user: User,
    code: string,
    type: requestType = '',
    tool: requestTool = 'email',
  ) {
    const existCode =
      type === 'reset' ? user.reset_pwd.code : user.verify_code.code;
    const expiredDate =
      type === 'reset'
        ? moment(user.reset_pwd.expired_at)
        : moment(user.verify_code.expired_at);
    if (existCode != code) {
      throw new HttpException(
        isNotMatchedVerificationCodeError.error,
        isNotMatchedVerificationCodeError.code,
      );
    }
    const now = moment();
    if (!expiredDate.isAfter(now)) {
      throw new HttpException(
        isExpiredVerificationCodeError.error,
        isExpiredVerificationCodeError.code,
      );
    }
    user.allowed = true;
    if (tool === 'email') {
      user.email_verified = true;
    }

    if (tool === 'phone') {
      user.phone_verified = true;
    }

    const updatedUser = await this.UserRepository.save(user);

    return {
      user: updatedUser,
      token: this._generateToken(updatedUser),
    };
  }

  async authWithGoogle(googleCode: string, code: string = '', ip: string) {
    let isExistReferral: DeepPartial<User>;
    let isExistTier: DeepPartial<Tier>;

    if (code) {
      isExistReferral = await this.UserRepository.findOneBy({
        referral_code: code,
      });
      isExistTier = await this.TierRepository.findOne({
        where: { code },
        relations: ['tier1', 'tier2'],
      });

      if (!isExistReferral && !isExistTier) {
        throw new HttpException(
          isMatchReferralCodeError.error,
          isMatchReferralCodeError.code,
        );
      }
    }
    const oAuth2Client = new OAuth2Client(
      this.appEnvironment.googleClientId,
      this.appEnvironment.googleClientSecret,
      'postmessage',
    );
    const { tokens } = await oAuth2Client.getToken(googleCode);
    oAuth2Client.setCredentials(tokens);
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: this.appEnvironment.googleClientId,
    });
    const payload = ticket.getPayload();
    const email = payload.email;
    if (payload.email_verified) {
      const existUser = await this.UserRepository.findOne({
        where: { email },
        relations: ['setting_fiat_currency'],
      });
      let createdUser: User;

      const geo = geoip.lookup(ip);
      const country = geo?.country ?? '';

      if (existUser) {
        existUser.name = existUser.name ? existUser.name : payload.name;
        existUser.allowed = true;
        existUser.email_verified = true;
        existUser.country = country;
        existUser.ip = removeIPv6Prefix(ip);
        await this.UserRepository.save(existUser);
      } else {
        const defaultFiat = await this.walletService.getDefaultFiat(country);
        const language = await this.languageCodeByCount(country);

        const numberOfUsers = await this.UserRepository.count();
        const assignReferralCode = generateReferralCode(numberOfUsers + 1);

        const newUser: DeepPartial<User> = {
          name: payload.name,
          email: email,
          allowed: true,
          email_verified: true,
          referral_code: assignReferralCode,
          country,
          ip,
          setting_language: language,
        };
        newUser.setting_fiat_currency = defaultFiat;
        if (isExistReferral) newUser.referral_user = isExistReferral;
        else if (isExistTier) {
          if (isExistTier.role === ENUM_ROLE.TIER1) {
            newUser.tier1 = isExistTier;
          } else if (isExistTier.role === ENUM_ROLE.TIER2) {
            newUser.tier2 = isExistTier;
            newUser.tier1 = isExistTier.tier1;
          } else if (isExistTier.role === ENUM_ROLE.TIER3) {
            newUser.tier3 = isExistTier;
            newUser.tier2 = isExistTier.tier2;
            newUser.tier1 = isExistTier.tier1;
          }
        }

        const user = this.UserRepository.create(newUser);
        createdUser = await this.UserRepository.save(user);

        await this.doTasksForNewUser(createdUser);
      }

      const accessToken = this._generateToken(
        existUser ? existUser : createdUser,
      );
      return {
        token: accessToken,
        user: existUser ? existUser : createdUser,
      };
    }
    return null;
  }

  async authWithGooglePopup(token: string, ip: string, code: string = '') {
    let isExistReferral: DeepPartial<User>;
    let isExistTier: DeepPartial<Tier>;
    const oAuth2Client = new OAuth2Client(
      this.appEnvironment.googleClientId,
      this.appEnvironment.googleClientSecret,
      'postmessage',
    );

    if (code) {
      isExistReferral = await this.UserRepository.findOneBy({
        referral_code: code,
      });
      isExistTier = await this.TierRepository.findOne({
        where: { code },
        relations: ['tier1', 'tier2'],
      });

      if (!isExistReferral && !isExistTier) {
        throw new HttpException(
          isMatchReferralCodeError.error,
          isMatchReferralCodeError.code,
        );
      }
    }

    const ticket = await oAuth2Client.verifyIdToken({
      idToken: token,
      audience: this.appEnvironment.googleClientId,
    });
    const payload = ticket.getPayload();
    const email = payload.email;
    if (payload.email_verified) {
      const existUser = await this.UserRepository.findOne({
        where: { email },
        relations: ['setting_fiat_currency'],
      });
      let createdUser: User;

      const geo = geoip.lookup(ip);
      const country = geo?.country ?? '';

      if (existUser) {
        existUser.name = existUser.name ? existUser.name : payload.name;
        existUser.allowed = true;
        existUser.email_verified = true;
        existUser.country = country;
        existUser.ip = removeIPv6Prefix(ip);
        await this.UserRepository.save(existUser);
      } else {
        const defaultFiat = await this.walletService.getDefaultFiat(country);
        const language = await this.languageCodeByCount(country);
        // save referral Code
        const numberOfUsers = await this.UserRepository.count();
        const assignReferralCode = generateReferralCode(numberOfUsers + 1);

        const newUser: DeepPartial<User> = {
          name: payload.name,
          email: email,
          allowed: true,
          email_verified: true,
          referral_code: assignReferralCode,
          country,
          ip,
          setting_language: language,
        };
        newUser.setting_fiat_currency = defaultFiat;
        if (isExistReferral) newUser.referral_user = isExistReferral;
        else if (isExistTier) {
          if (isExistTier.role === ENUM_ROLE.TIER1) {
            newUser.tier1 = isExistTier;
          } else if (isExistTier.role === ENUM_ROLE.TIER2) {
            newUser.tier2 = isExistTier;
            newUser.tier1 = isExistTier.tier1;
          } else if (isExistTier.role === ENUM_ROLE.TIER3) {
            newUser.tier3 = isExistTier;
            newUser.tier2 = isExistTier.tier2;
            newUser.tier1 = isExistTier.tier1;
          }
        }
        const user = this.UserRepository.create(newUser);
        createdUser = await this.UserRepository.save(user);

        await this.doTasksForNewUser(createdUser);
      }

      const accessToken = this._generateToken(
        existUser ? existUser : createdUser,
      );
      return {
        token: accessToken,
        user: existUser ? existUser : createdUser,
      };
    }
    return null;
  }

  async authWithTelegram(
    id: string,
    data_check_string: string,
    hash: string,
    code: string = '',
    ip: string,
  ) {
    let isExistReferral: DeepPartial<User>;
    let isExistTier: DeepPartial<Tier>;

    if (code) {
      isExistReferral = await this.UserRepository.findOneBy({
        referral_code: code,
      });
      isExistTier = await this.TierRepository.findOne({
        where: { code },
        relations: ['tier1', 'tier2'],
      });

      if (!isExistReferral && !isExistTier) {
        throw new HttpException(
          isMatchReferralCodeError.error,
          isMatchReferralCodeError.code,
        );
      }
    }
    // verify hash
    const secretKey = SHA256(this.appEnvironment.telegramBotToken);
    const computedHash = HmacSHA256(data_check_string, secretKey).toString(
      enc.Hex,
    );

    if (computedHash !== hash) {
      throw new HttpException(
        isNotValidTgInfoError.error,
        isNotValidTgInfoError.code,
      );
    }

    const existUser = await this.UserRepository.findOne({
      where: { telegram_user_name: id },
      relations: ['setting_fiat_currency'],
    });
    let createdUser: User;

    const geo = geoip.lookup(ip);
    const country = geo?.country ?? '';

    if (existUser) {
      existUser.country = country;
      await this.UserRepository.save(existUser);
      return {
        token: this._generateToken(existUser),
        user: existUser,
      };
    } else {
      const defaultFiat = await this.walletService.getDefaultFiat(country);
      const language = await this.languageCodeByCount(country);
      // save referral Code
      const numberOfUsers = await this.UserRepository.count();
      const assignReferralCode = generateReferralCode(numberOfUsers + 1);

      const newUser: DeepPartial<User> = {
        name: randomString(11),
        allowed: true,
        telegram_user_name: id,
        referral_code: assignReferralCode,
        country,
        ip,
        setting_language: language,
      };
      newUser.setting_fiat_currency = defaultFiat;
      if (isExistReferral) newUser.referral_user = isExistReferral;
      else if (isExistTier) {
        if (isExistTier.role === ENUM_ROLE.TIER1) {
          newUser.tier1 = isExistTier;
        } else if (isExistTier.role === ENUM_ROLE.TIER2) {
          newUser.tier2 = isExistTier;
          newUser.tier1 = isExistTier.tier1;
        } else if (isExistTier.role === ENUM_ROLE.TIER3) {
          newUser.tier3 = isExistTier;
          newUser.tier2 = isExistTier.tier2;
          newUser.tier1 = isExistTier.tier1;
        }
      }

      const user = this.UserRepository.create(newUser);
      createdUser = await this.UserRepository.save(user);

      await this.doTasksForNewUser(createdUser);
    }

    const accessToken = this._generateToken(
      existUser ? existUser : createdUser,
    );
    return {
      token: accessToken,
      user: existUser ? existUser : createdUser,
    };
  }

  async authWithWallet(
    address: string,
    signature: string,
    code: string = '',
    ip: string,
  ) {
    let isExistReferral: DeepPartial<User>;
    let isExistTier: DeepPartial<Tier>;
    let createdUser: User;

    if (code) {
      isExistReferral = await this.UserRepository.findOneBy({
        referral_code: code,
      });
      isExistTier = await this.TierRepository.findOne({
        where: { code },
        relations: ['tier1', 'tier2'],
      });

      if (!isExistReferral && !isExistTier) {
        throw new HttpException(
          isMatchReferralCodeError.error,
          isMatchReferralCodeError.code,
        );
      }
    }

    const geo = geoip.lookup(ip);
    const country = geo?.country ?? '';

    const existUser = await this.UserRepository.findOne({
      where: { wallet_address: address, wallet_signature: signature },
      relations: ['setting_fiat_currency'],
    });

    if (existUser) {
      existUser.country = country;
      existUser.ip = removeIPv6Prefix(ip);
      await this.UserRepository.save(existUser);
      return {
        token: this._generateToken(existUser),
        user: existUser,
      };
    } else {
      const defaultFiat = await this.walletService.getDefaultFiat(country);
      const language = await this.languageCodeByCount(country);
      const numberOfUsers = await this.UserRepository.count();
      const assignReferralCode = generateReferralCode(numberOfUsers + 1);

      const newUser: DeepPartial<User> = {
        name: randomString(11),
        allowed: true,
        wallet_address: address,
        referral_code: assignReferralCode,
        wallet_signature: signature,
        country,
        ip,
        setting_language: language,
      };
      newUser.setting_fiat_currency = defaultFiat;
      if (isExistReferral) newUser.referral_user = isExistReferral;
      else if (isExistTier) {
        if (isExistTier.role === ENUM_ROLE.TIER1) {
          newUser.tier1 = isExistTier;
        } else if (isExistTier.role === ENUM_ROLE.TIER2) {
          newUser.tier2 = isExistTier;
          newUser.tier1 = isExistTier.tier1;
        } else if (isExistTier.role === ENUM_ROLE.TIER3) {
          newUser.tier3 = isExistTier;
          newUser.tier2 = isExistTier.tier2;
          newUser.tier1 = isExistTier.tier1;
        }
      }

      const user = this.UserRepository.create(newUser);
      createdUser = await this.UserRepository.save(user);

      await this.doTasksForNewUser(createdUser);
    }
    const accessToken = this._generateToken(
      existUser ? existUser : createdUser,
    );
    return {
      token: accessToken,
      user: existUser ? existUser : createdUser,
    };
  }

  async _sendEmailForgetPassword(email: string) {
    const user = await this.UserRepository.findOneBy({ email });
    if (!user)
      throw new HttpException(
        isNotExistMailError.error,
        isNotExistMailError.code,
      );

    const token = randomString(this.verifyCodeLength);
    user.reset_pwd = {
      code: token,
      expired_at: getExpiredTime(),
    };

    await this.UserRepository.save(user);

    const subject = `Bonenza, Password Reset`;

    const content = getEmailHtml([
      {
        type: 'img',
        data: [
          `<img src="https://bonenza.com/img/logo-mobile.png" style="margin: auto; width: 40px; height: 59px; "alt="logo">`,
        ],
      },
      { type: 'element1', data: ['Dear Bonenza lover.'] },
      {
        type: 'element12',
        data: [
          `Thank you for choosing our service. Your email confirmation code is`,
        ],
      },
      {
        type: 'element5',
        data: [`<b>${token}</b>`],
      },
      {
        type: 'element12',
        data: [
          `Please use this code to complete the email confirmation process.`,
        ],
      },
      {
        type: 'element12',
        data: [
          `If you have any questions or need further assistance, feel free to contact our support team.`,
        ],
      },
      {
        type: 'element12',
        data: [`Thank you for trusting us.`],
      },
      {
        type: 'element12',
        data: [`Best regards,`],
      },
      {
        type: 'element12',
        data: [`BONENZA TEAM`],
      },
    ]);
    const params: SendEmailParams = {
      from: this.appEnvironment.mainMail,
      subject,
      text: subject,
      html: content,
      to: user.email,
    };
    await this.emailService.send2Email(params);
    return true;
  }

  async _sendEmailToCreatedUser(
    user: User,
    code: string,
    request: requestType = '',
  ) {
    const subject =
      request === 'reset'
        ? `Bonenza, Password Reset`
        : `Bonenza, Account Created`;
    const content = getEmailHtml([
      {
        type: 'img',
        data: [
          `<img src="https://bonenza.com/img/logo-mobile.png" style="margin: auto; width: 40px; height: 59px; "alt="logo">`,
        ],
      },
      { type: 'element1', data: ['Dear Bonenza lover.'] },
      {
        type: 'element12',
        data: [
          `Thank you for choosing our service. Your email confirmation code is`,
        ],
      },
      {
        type: 'element5',
        data: [`<b>${code}</b>`],
      },
      {
        type: 'element12',
        data: [
          `Please use this code to complete the email confirmation process.`,
        ],
      },
      {
        type: 'element12',
        data: [
          `If you have any questions or need further assistance, feel free to contact our support team.`,
        ],
      },
      {
        type: 'element12',
        data: [`Thank you for trusting us.`],
      },
      {
        type: 'element12',
        data: [`Best regards,`],
      },
      {
        type: 'element12',
        data: [`BONENZA TEAM`],
      },
    ]);
    const message = `<div><h3> Dear Bonenza lover.</h3> <h2>${code}</h2></div>`;

    const params: SendEmailParams = {
      from: this.appEnvironment.mainMail,
      subject,
      text: subject,
      html: content,
      to: user.email,
    };
    return await this.emailService.send2Email(params);
  }

  async _sendPhoneToCreateUser(user: User, code: string) {
    const content = `Your BONENZA SMS confirmation code is: ${code}`;

    const params = {
      from: this.appEnvironment.mainPhone,
      to: user.phone,
      body: content,
    };
    return await this.emailService.send2Phone(params);
  }

  async _sendVerifyQrCodeToUser(
    email: string,
    name: string,
    secretKey: string,
  ) {
    // generate OTP URL
    const otpAuthUrl = generateOTPAuthUrl(email, secretKey);

    // generate qrcode
    const qrCodeImg = await QRCodeTodataUrl(otpAuthUrl);

    // save the QR code image as a PNG file

    // const qrCodeFileName = `${Date.now()}--${email}--qr_code.png`;
    // const qrCodeSavedPath = `./upload/${qrCodeFileName}`;
    // const qrCodeBuffer = Buffer.from(
    //   convertDataUrlToBase64(qrCodeImg),
    //   'base64',
    // );
    // fs.writeFileSync(qrCodeSavedPath, qrCodeBuffer);

    const attachments = [
      {
        filename: 'my-qr-code.png',
        content: convertDataUrlToBase64(qrCodeImg),
        encoding: 'base64',
        disposition: 'inline',
        type: 'image/png',
        content_id: 'my-qr-code',
      },
    ];

    const content = getEmailHtml([
      {
        type: 'img',
        data: [
          `<img src="https://bonenza.com/img/logo-mobile.png" style="margin: auto; width: 40px; height: 59px; "alt="logo">`,
        ],
      },
      { type: 'element1', data: ['Google Security 2FA Key'] },
      {
        type: 'element12',
        data: [`Dear <b>${name}</b>.`],
      },
      {
        type: 'element12',
        data: [
          `You're receiving this e-mail because you want to recover the Google 2FA Code at BONENZA. You can use Google Authenticator to scan the QR code below.`,
        ],
      },
      {
        type: 'img',
        data: [`<img src="cid:my-qr-code" style="margin: auto;"alt="QR Code">`],
      },
      {
        type: 'element2',
        data: [`<span style="color: green;">${secretKey}</span>`],
      },
      {
        type: 'element12',
        data: [
          `If the QR code is not displayed, please copy the 2FA backup key to add to Google Authenticator.`,
        ],
      },
      {
        type: 'element12',
        data: [`Thank you for trusting us.`],
      },
      {
        type: 'element12',
        data: [`Best regards.`],
      },
      {
        type: 'element12',
        data: [`BONENZA Team.`],
      },
    ]);
    const params = {
      to: email,
      subject: 'Google Security 2FA Key',
      html: content,
      attachments,
    };
    await this.emailService.send2Email(params);
    return { qrcode: qrCodeImg, secret: secretKey };
  }

  _generateToken(user: User) {
    const payload = Object.assign(
      {},
      {
        userId: user.id,
        username: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    );
    const token = this.jwtService.sign(payload);
    return token;
  }
}
