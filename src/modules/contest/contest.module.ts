import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  BlockchainCryptoBalance,
  BlockchainSymbol,
  GameBlockchainTransaction,
  User,
  WagerContestBonus,
} from 'entities';

import { ContestService } from './contest.service';

@Module({
  providers: [ContestService],
  exports: [ContestService],
  imports: [
    TypeOrmModule.forFeature([
      User,
      GameBlockchainTransaction,
      WagerContestBonus,
      BlockchainSymbol,
      BlockchainCryptoBalance,
    ]),
  ],
})
export class ContestModule {}
