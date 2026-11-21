import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDataBlockchainSymbolTable1702042244230
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO
          "blockchain_symbol" (symbol, logo, cmc_id, name)
        VALUES
          ('ETH', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', 1027, 'Ethereum'),
          ('BNB', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png', 1839, 'Binance Coin'),
          ('USDT', 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png', 825, 'Tether'),
          ('MATIC', 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png', 3890, 'Polygon'),
          ('USDC', 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png', 3408, 'USD Coin'),
          ('DOGE', 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png', 74, 'Doge Coin'),
          ('DAI', 'https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png', 4943, 'Multi-collateral DAI'),
          ('LTC', 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png', 2, 'LiteCoin'),
          ('WBTC', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', 1, 'Wrapped BTC'),
          ('SHIB', 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=031', 5994, 'SHIBA INU'),
          ('XRP', 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png', 52, 'Ripple')
        ON CONFLICT (symbol)
        DO UPDATE SET
          logo = EXCLUDED.logo,
          cmc_id = EXCLUDED.cmc_id,
          name = EXCLUDED.name
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "blockchain_symbol"');
  }
}

// ('GOD', 'https://s2.coinmarketcap.com/static/img/coins/64x64/18949.png', 18949),
// ('TRX', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png', 1958),
