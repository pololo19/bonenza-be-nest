import {
  BadRequestException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppEnvironment } from 'app.environment';
import * as bcrypt from 'bcrypt';
import { paginationDto } from 'controllers/user-session/dtos';
import { editSettingDto } from 'controllers/user-setting/dtos';
import { FiatCurrency, User, UserMedal, UserSession } from 'entities';
import { ENUM_KYC_STATUS, ENUM_MEDAL } from 'enums';
import { isNotMatchedPasswordError, isNotMatchOTPError } from 'errors';
import * as geoip from 'geoip-lite';
import { ContestService } from 'modules/contest/contest.service';
import { GameService } from 'modules/game/game.service';
import {
  EmailService,
  SendEmailParams,
} from 'modules/shared/services/email.service';
import { StorageService } from 'modules/shared/services/storage.service';
import * as moment from 'moment';
import { authenticator } from 'otplib';
import { toDataURL as QRCodeTodataUrl } from 'qrcode';
import { DeepPartial, IsNull, Repository } from 'typeorm';
import { generateOTPAuthUrl, getEmailHtml } from 'utils';

type SettingType = 'general' | 'privacy' | 'verify' | 'all';

@Injectable()
export class UserService {
  constructor(
    private readonly gameService: GameService,
    private readonly contestService: ContestService,
    private readonly storageService: StorageService,
    private readonly emailService: EmailService,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(UserSession)
    private UserSessionRepository: Repository<UserSession>,
    @InjectRepository(UserMedal)
    private UserMedalRepository: Repository<UserMedal>,
    @InjectRepository(FiatCurrency)
    private FiatCurrencyRepository: Repository<FiatCurrency>,
    private readonly appEnvironment: AppEnvironment,
  ) {}

  async getUserByUserId(userId: string) {
    const user = await this.UserRepository.findOne({
      where: { id: userId },
      relations: ['setting_fiat_currency'],
    });
    if (!user)
      throw new NotFoundException('existUser', {
        description: 'User Id is invalid',
      });
    return user;
  }

  async getSetLogin(user: User) {
    return { set_login: user.password ? true : false };
  }

  async getUserByEmailOrPhone(email: string, phone: string) {
    let whereQuery = {};
    if (phone) {
      whereQuery = { phone };
    }
    if (email) {
      whereQuery = { ...whereQuery, email };
    }
    const user = await this.UserRepository.findOne({
      where: whereQuery,
      relations: ['setting_fiat_currency'],
    });
    return user;
  }

  shareUserInfo(user: DeepPartial<User>) {
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      phone: user.phone,
      role: user.role,
      tfa: user.tfa,
      referral_code: user.referral_code,
      receiveMarketPromotion: user.setting_receive_market_promotion,
      showFullNameCurrency: user.setting_show_full_name_crypto,
      language: user.setting_language,
      currency: user.setting_fiat_currency,
      hideName: user.setting_hide_user_name,
      hideGamingData: user.setting_hide_gaming_data,
      refuseTipFromStrangers: user.setting_refuse_tip_from_strangers,
      emailVerified: user.email_verified,
      phoneVerified: user.phone_verified,
    };
  }

  async generateSecretKey(user: User) {
    authenticator.options = { digits: 6 };
    let secretKey = authenticator.generateSecret();
    if (user.secret_key) {
      secretKey = user.secret_key;
    } else {
      user.secret_key = secretKey;
      await this.UserRepository.save(user);
    }

    const token = authenticator.generate(secretKey);
    console.log(token);
    const otpAuthUrl = generateOTPAuthUrl(user.email, secretKey);
    const qrCodeImg = await QRCodeTodataUrl(otpAuthUrl);
    return { qrCodeUrl: qrCodeImg, secretKey };
  }

  async confirmQrCode(user: User, code_otp: string, password: string) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      throw new HttpException(
        isNotMatchedPasswordError.error,
        isNotMatchedPasswordError.code,
      );
    const secret = user.secret_key;

    //confirm OTP
    const isValidOTP = authenticator.check(code_otp, secret);
    if (!isValidOTP)
      throw new HttpException(
        isNotMatchOTPError.error,
        isNotMatchOTPError.code,
      );

    // turn on tfa
    user.tfa = true;
    const updatedUser = await this.UserRepository.save(user);
    return updatedUser;
  }

  async disable2FA(user: User, code_otp: string, password: string) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      throw new HttpException(
        isNotMatchedPasswordError.error,
        isNotMatchedPasswordError.code,
      );
    const secret = user.secret_key;

    //confirm OTP
    const isValidOTP = authenticator.check(code_otp, secret);
    if (!isValidOTP)
      throw new HttpException(
        isNotMatchOTPError.error,
        isNotMatchOTPError.code,
      );

    // turn off tfa
    user.tfa = false;
    user.secret_key = '';
    const updatedUser = await this.UserRepository.save(user);
    return updatedUser;
  }

  async getUsersByResetToken(token: string) {
    const user = await this.UserRepository.createQueryBuilder('user')
      .select('*')
      .where(`user.reset_pwd ::jsonb @> \'{"code": "${token}"}\'`)
      .execute();
    return user;
  }

  async getUserSetting(user: User, type: SettingType = 'all') {
    let settings: any;
    switch (type) {
      case 'general':
        settings = {
          setting_receive_market_promotion:
            user.setting_receive_market_promotion,
          setting_show_full_name_crypto: user.setting_show_full_name_crypto,
          setting_language: user.setting_language,
          setting_currency: user.setting_fiat_currency,
        };
        break;
      case 'privacy':
        settings = {
          setting_hide_user_name: user.setting_hide_user_name,
          setting_hide_gaming_data: user.setting_hide_gaming_data,
          setting_refuse_tip_from_strangers:
            user.setting_refuse_tip_from_strangers,
        };
        break;
      case 'verify':
        settings = {
          email_verified: user.email_verified,
          phone_verified: user.phone_verified,
        };
        break;

      default:
        settings = {
          setting_receive_market_promotion:
            user.setting_receive_market_promotion,
          setting_show_full_name_crypto: user.setting_show_full_name_crypto,
          setting_language: user.setting_language,
          setting_fiat_currency: user.setting_fiat_currency,
          setting_hide_user_name: user.setting_hide_user_name,
          setting_hide_gaming_data: user.setting_hide_gaming_data,
          setting_refuse_tip_from_strangers:
            user.setting_refuse_tip_from_strangers,
          email_verified: user.email_verified,
          phone_verified: user.phone_verified,
        };
        break;
    }
    return settings;
  }

  async updateUserSetting(user: User, settings: editSettingDto) {
    let _updatedUser: any = {
      ...user,
      ...settings,
    };
    if (settings.setting_currency) {
      const settingCurrency = await FiatCurrency.findOneBy({
        id: settings.setting_currency,
      });
      _updatedUser = {
        ..._updatedUser,
        setting_fiat_currency: settingCurrency,
      };
    }

    await this.UserRepository.save(_updatedUser);
    return _updatedUser;
  }

  async updateProfile(user: User, name: string) {
    try {
      user.name = name;

      const _updatedUser = await this.UserRepository.save(user);
      return _updatedUser;
    } catch (error) {
      throw new InternalServerErrorException(
        'Get internal server error in edit profile',
      );
    }
  }

  async updatePassword(user: User, password: string) {
    const salt = await bcrypt.genSalt();
    const encryptNewPass = await bcrypt.hash(password, salt);

    user.password = encryptNewPass;
    // set 24 hours restriction
    const now = Math.floor(Date.now() / 1000);
    const restriction = now + 24 * 60 * 60;

    user.restricted_to = restriction;
    await this.UserRepository.save(user);
    return user;
  }

  async uploadAvatar(user: User, file: Express.Multer.File) {
    const { originalname, path } = file;

    // save file
    const fileName = `${Date.now()}_${user.id}_${originalname}`;

    // delete file from storage
    if (user.avatar) {
      await this.storageService.delete(user.avatar, 'avatar');
    }

    // await fs.promises.writeFile(filePath, content);
    await this.storageService.upload(file, fileName, 'avatar');

    user.avatar = fileName;

    const _updatedUser = await this.UserRepository.save(user);
    return _updatedUser;
  }

  async uploadIds(user: User, files: Express.Multer.File[]) {
    // delete ids from storage
    if (user.kyc_photo_front) {
      await this.storageService.delete(user.kyc_photo_front, 'ids');
    }
    if (user.kyc_photo_back) {
      await this.storageService.delete(user.kyc_photo_back, 'ids');
    }

    for (let i = 0; i < files.length; i++) {
      const originalName = files[i].originalname;
      const name = `${Date.now()}_${user.id}_${originalName}`;
      await this.storageService.upload(files[0], name, 'ids');
      if (i === 0) {
        user.kyc_photo_front = name;
      }
      if (i === 1) {
        user.kyc_photo_back = name;
      }
    }

    user.kyc = ENUM_KYC_STATUS.PENDING;
    const _updatedUser = await this.UserRepository.save(user);
    return _updatedUser;
  }

  async createSession(user: User, device: string, ipAddress: string) {
    const geo = geoip.lookup(ipAddress);
    let countryCode: string;
    if (geo) {
      countryCode = geo.country;
    }
    const isExistSession = await this.UserSessionRepository.findOne({
      where: { ip_address: ipAddress, user: { id: user.id }, browser: device },
    });
    const last_used_at = new Date();
    if (isExistSession) {
      isExistSession.last_used_at = last_used_at;
      const _updatedSession =
        await this.UserSessionRepository.save(isExistSession);
      return _updatedSession;
    }

    const newSession: DeepPartial<UserSession> = {
      user,
      browser: device,
      ip_address: ipAddress,
      location: countryCode ? countryCode : 'LO',
      last_used_at: last_used_at,
    };
    const _savedSession = this.UserSessionRepository.create(newSession);
    const _createdSession =
      await this.UserSessionRepository.save(_savedSession);
    return _createdSession;
  }

  async getSessions(user: User, filters: paginationDto) {
    const { limit, page } = filters;
    const pageNumber = Number(page) * 1 > 0 ? Number(page) * 1 : 1;
    const limitNumber = parseInt(String(limit), 10) || 10;
    const offset = (pageNumber - 1) * limitNumber;

    const sessions = await this.UserSessionRepository.find({
      where: {
        user: { id: user.id },
        delete_at: IsNull(),
      },
      order: {
        last_used_at: 'DESC',
      },
      take: limitNumber,
      skip: offset,
    });

    const cnt = await this.UserSessionRepository.count({
      where: { user: { id: user.id }, delete_at: IsNull() },
    });

    const total_count = Number(cnt);

    let total_page = Math.ceil(total_count / limitNumber);
    total_page = total_page === 0 ? 1 : total_page;
    return {
      sessions,
      total_count,
      total_page,
      page: pageNumber,
      page_size: limitNumber,
    };
  }

  async deleteSession(sessionId: string) {
    const _updatedSession = await this.UserSessionRepository.update(
      { id: sessionId },
      { delete_at: moment() },
    );
    return _updatedSession;
  }

  async setLoginPassword(user: User, password: string) {
    const salt = await bcrypt.genSalt();
    const newPassword = await bcrypt.hash(password, salt);
    user.password = newPassword;
    const updatedUser = await this.UserRepository.save(user);
    return updatedUser;
  }

  async getUserMedals(user: User) {
    return await this.UserMedalRepository.find({
      select: ['created_at', 'medal'],
      where: {
        user: { id: user.id },
      },
    });
  }

  async getUserInformation(user: User) {
    //  Bet statistics
    const [
      total_bets,
      total_wins,
      total_wagered_amount_usd,
      top_three_favorite_games,
      medals,
      contest_history,
    ] = await Promise.all([
      await this.gameService.getTotalBetsByUserId(user.id),
      await this.gameService.getTotalWinsByUserId(user.id),
      await this.gameService.getTotalWagerAmountUsdByUserId(user.id),
      await this.gameService.getTopThreeGames(user.id),
      await this.getUserMedals(user),
      await this.contestService.getContestHistoryByUserId(user.id, 1, 5),
    ]);

    //  Get top 3 favorite games
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      vip_level: user.vip_level,
      medals,
      total_bets,
      total_wins,
      total_wagered_amount_usd,
      top_three_favorite_games,
      contest_history,
    };
  }

  //  Get total users per each medal
  async getMedalStatistics() {
    const values = Object.values(ENUM_MEDAL);

    const medals = {};

    for (const value of values) {
      const result = await this.UserMedalRepository.createQueryBuilder()
        .where('medal = :medal', { medal: value })
        .getCount();

      medals[value] = Number(result);
    }

    return medals;
  }

  async openBoxForMedals(user: User, box: string) {
    const medals = await this.getUserMedals(user);
    if (box === '5') {
      if (medals.length === 5) {
      } else if (medals.length >= 5) {
        //  Add bonus
      } else {
        throw new BadRequestException('Medal', {
          description:
            'The amount of achieved medals must be same or greater than 5',
        });
      }
    } else if (box === '10') {
      if (medals.length === 10) {
      } else if (medals.length >= 10) {
        //  Add bonus
      } else {
        throw new BadRequestException('Medal', {
          description: 'The amount of achieved medals must be 10',
        });
      }
    } else if (box === 'max') {
    }
  }

  async getBetStatistics(user_id: string) {
    return await this.gameService.getBetStatistics(user_id);
  }

  async setSelfExclusive(user: User, disabledTo: number) {
    user.disabled_to = disabledTo;
    const updatedUser = await this.UserRepository.save(user);
    return updatedUser;
  }

  async _sendSelfExclusiveMailToUser(
    user: User,
    disabledTo: number,
    token: string,
  ) {
    const subject = `Bonenza, Self Exclusive`;
    const time =
      disabledTo === -1
        ? 'Your Account will be disabled permanently'
        : moment.unix(disabledTo).format('MM/DD/YYYY');
    const link = `${this.appEnvironment.websiteOrigin}/self-exclusive?token=${token}&disabledTo=${disabledTo}`;
    const content = getEmailHtml([
      { type: 'element1', data: ['Dear Bonenza lover.'] },
      {
        type: 'element2',
        data: [
          disabledTo === -1
            ? time
            : `Thank you for choosing our service. Your account will be disabled untill <b>${time}</b>.`,
        ],
      },
      {
        type: 'element6',
        data: [link, `Please use this link to disable your account.`],
      },
      {
        type: 'element2',
        data: [
          `If you have any questions or need further assistance, feel free to contact our support team.`,
        ],
      },
      {
        type: 'element2',
        data: [`Best regards,`],
      },
    ]);

    const params: SendEmailParams = {
      from: this.appEnvironment.mainMail,
      subject,
      text: subject,
      html: content,
      to: user.email,
    };
    return await this.emailService.send2Email(params);
  }
}
