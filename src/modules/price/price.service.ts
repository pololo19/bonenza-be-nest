import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppEnvironment } from 'app.environment';
import axios from 'axios';
import { ETH_CMC_ID, USD_CMC_ID } from 'constant';
import { BlockchainSymbol, FiatCurrency } from 'entities';
import { ENUM_CURRENCY } from 'enums';
import { MessageGateway } from 'modules/message/message.gateway';
import { Repository } from 'typeorm';

@Injectable()
export class PriceService {
  constructor(
    private readonly messageGateway: MessageGateway,
    private readonly appEnvironment: AppEnvironment,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(FiatCurrency)
    private FiatCurrencyRepository: Repository<FiatCurrency>,
  ) {}

  async updateTotalPrices() {
    const { ethId, cryptos } = await this.getCryptoList();
    const { usdId, fiats } = await this.getFiatList();
    const currencies = [...cryptos, ...fiats];
    if (currencies.length) {
      let totalQuote = {};

      for (let i = 0; i < currencies.length; i += 8) {
        const response = await axios.get(
          `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=2&convert_id=${currencies
            .map((c) => c.cmc_id)
            .filter((c) => c != ETH_CMC_ID)
            .slice(i, i + 8)
            .join(',')}`,
          {
            headers: {
              'X-CMC_PRO_API_KEY': this.appEnvironment.cmcProApiKey,
              Accept: 'application/json',
              'Accept-Encoding': 'deflate, gzip',
            },
          },
        );
        const { data } = response;
        //  Get eth quote
        const { quote } = data.data[1];

        totalQuote = { ...totalQuote, ...quote };
      }

      const prices = { cryptocurrency: [], fiat: [] };

      console.log('ETH', totalQuote[USD_CMC_ID]['price']);
      await this.updateCryptoPriceBySymbol(
        'ETH',
        totalQuote[USD_CMC_ID]['price'],
      );
      prices.cryptocurrency.push({
        id: ethId,
        price: totalQuote[USD_CMC_ID]['price'],
      });

      console.log('USD', 1);
      await this.updateFiatPriceBySymbol('USD', 1);
      prices.fiat.push({ id: usdId, price: 1 });

      for (const { id, type, currency, cmc_id } of currencies) {
        if (currency != 'ETH' && currency != 'USD') {
          //  Calculate the correct price
          const price =
            totalQuote[USD_CMC_ID]['price'] / totalQuote[cmc_id]['price'];

          console.log(currency, price);

          //  Update price on db
          if (type === ENUM_CURRENCY.Crypto) {
            await this.updateCryptoPriceBySymbol(currency, price);
            prices.cryptocurrency.push({ id, price });
          } else {
            await this.updateFiatPriceBySymbol(currency, price);
            prices.fiat.push({ id, price });
          }
        }
      }
      this.messageGateway.broadcastPrice(JSON.stringify(prices));
    } else {
      console.log('No currencies');
    }
  }

  async getCryptoList() {
    const cryptos = await this.BlockchainSymbolRepository.createQueryBuilder()
      .select([
        'id',
        'symbol as currency',
        `'${ENUM_CURRENCY.Crypto}' as type`,
        'cmc_id',
      ])
      .where("symbol != 'DRON'")
      .getRawMany();

    let ethId = null;

    for (const crypto of cryptos) {
      if (crypto.currency === 'ETH') {
        ethId = crypto.id;
        break;
      }
    }

    return { ethId, cryptos };
  }

  async getFiatList() {
    const fiats = await this.FiatCurrencyRepository.createQueryBuilder()
      .select([
        'id',
        'symbol as currency',
        `'${ENUM_CURRENCY.Fiat}' as type`,
        'cmc_id',
      ])
      .getRawMany();

    let usdId = null;

    for (const fiat of fiats) {
      if (fiat.currency === 'USD') {
        usdId = fiat.id;
        break;
      }
    }

    return { usdId, fiats };
  }

  async updateCryptoPriceBySymbol(symbol: string, price: number) {
    await this.BlockchainSymbolRepository.createQueryBuilder()
      .update(BlockchainSymbol)
      .set({ price })
      .where('symbol = :symbol', { symbol })
      .execute();
  }

  async updateFiatPriceBySymbol(symbol: string, price: number) {
    await this.FiatCurrencyRepository.createQueryBuilder()
      .update(FiatCurrency)
      .set({ price })
      .where('symbol = :symbol', { symbol })
      .execute();
  }
}
