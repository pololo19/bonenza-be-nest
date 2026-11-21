import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockchainCryptocurrency, BlockchainSymbol } from 'entities';
import { Repository } from 'typeorm';

@Injectable()
export class WalletCryptocurrencyService {
  constructor(
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(BlockchainCryptocurrency)
    private BlockchainCryptocurrencyRepository: Repository<BlockchainCryptocurrency>,
  ) {}

  async getBlockchainSymbols() {
    return await this.BlockchainSymbolRepository.find();
  }

  async getBlockchainCryptocurrencyById(id: string) {
    return await this.BlockchainCryptocurrencyRepository.findOne({
      where: { id },
      relations: ['network', 'symbol'],
    });
  }

  async getblockchainCryptocurrencyByNetworkIdAndSymbolId(
    network_id: string,
    symbol_id: string,
  ) {
    return await this.BlockchainCryptocurrencyRepository.findOne({
      where: { network: { id: network_id }, symbol: { id: symbol_id } },
      relations: ['network', 'symbol'],
    });
  }
}
