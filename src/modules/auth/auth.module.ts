import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppEnvironment } from 'app.environment';
import { Tier, User } from 'entities';
import { QuestModule } from 'modules/quest/quest.module';
import { UserModule } from 'modules/user/user.module';
import { WalletModule } from 'modules/wallet/wallet.module';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Tier]),
    JwtModule.registerAsync({
      inject: [AppEnvironment],
      useFactory: (appEnvironment: AppEnvironment) => {
        return {
          secret: appEnvironment.jwtSecretKey,
          // signOptions: { expiresIn: appEnvironment.jwtTokenExpire },
        };
      },
    }),
    UserModule,
    WalletModule,
    QuestModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
