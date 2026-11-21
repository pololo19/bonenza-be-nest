import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  BlockchainSymbol,
  Game,
  GameBlockchainTransaction,
  QuestBonus,
  User,
} from 'entities';

import { QuestService } from './quest.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      QuestBonus,
      BlockchainSymbol,
      Game,
      GameBlockchainTransaction,
    ]),
  ],
  providers: [QuestService],
  exports: [QuestService],
})
export class QuestModule {}
