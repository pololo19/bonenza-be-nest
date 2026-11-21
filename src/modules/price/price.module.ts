import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockchainSymbol, FiatCurrency } from 'entities';
import { MessageModule } from 'modules/message/message.module';

import { PriceService } from './price.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BlockchainSymbol, FiatCurrency]),
    MessageModule,
  ],
  providers: [PriceService],
  exports: [PriceService],
})
export class PriceModule {}
