import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AppEnvironment } from 'app.environment';
import { disabledAccountError, isNotAllowedUerError } from 'errors';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private appEnvironment: AppEnvironment,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        ExtractJwt.fromUrlQueryParameter('token'),
      ]),
      ignoreExpiration: false,
      secretOrKey: appEnvironment.jwtSecretKey,
    });
  }

  async validate(payload: any) {
    if (!payload) throw new UnauthorizedException();
    if (payload.temparary) return payload;
    if (!payload.userId) throw new UnauthorizedException();

    const user = await this.userService.getUserByUserId(payload.userId);
    if (!user || !user.role) {
      throw new UnauthorizedException();
    }
    if (!user.allowed)
      throw new HttpException(
        isNotAllowedUerError.error,
        isNotAllowedUerError.code,
      );
    if (Number(user.disabled_to) === -1)
      throw new HttpException(
        disabledAccountError.error,
        disabledAccountError.code,
      );
    if (Number(user.disabled_to) > Math.floor(Date.now() / 1000))
      throw new HttpException(
        disabledAccountError.error,
        disabledAccountError.code,
      );
    // if (payload.email && !user.email_verified)
    //   throw new UnauthorizedException('User Email is not verified');
    // if (payload.phone && !user.phone_verified)
    //   throw new UnauthorizedException('User Phone is not verified');
    return user;
  }
}
