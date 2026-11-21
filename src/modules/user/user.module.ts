import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FiatCurrency, User, UserMedal, UserSession } from 'entities';
import { ContestModule } from 'modules/contest/contest.module';
import { GameModule } from 'modules/game/game.module';

import { UserService } from './user.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserSession, UserMedal, FiatCurrency]),
    GameModule,
    ContestModule,
  ],
  providers: [UserService],

  exports: [UserService],
})
export class UserModule {}
