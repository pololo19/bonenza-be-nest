import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockchainSymbol, Spin, SpinBonus, SpinLog, User } from 'entities';

import { SpinService } from './spin.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      SpinBonus,
      Spin,
      BlockchainSymbol,
      SpinLog,
    ]),
  ],
  providers: [SpinService],
  exports: [SpinService],
})
export class SpinModule {}
