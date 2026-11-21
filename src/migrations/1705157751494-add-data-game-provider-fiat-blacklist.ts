import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDataGameCurrencyBlacklist1705157751494
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO game_provider_fiat_blacklist (provider_id, fiat_id)
        VALUES
          ((SELECT id FROM game_provider WHERE identifier = 'yggdrasil'), (SELECT id FROM fiat_currency WHERE symbol = 'AED')),
          ((SELECT id FROM game_provider WHERE identifier = 'yggdrasil'), (SELECT id FROM fiat_currency WHERE symbol = 'HKD')),

          ((SELECT id FROM game_provider WHERE identifier = 'booongo'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),

          ((SELECT id FROM game_provider WHERE identifier = 'bsg'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'bsg'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),

          ((SELECT id FROM game_provider WHERE identifier = 'bet2tech'), (SELECT id FROM fiat_currency WHERE symbol = 'TRY')),
          ((SELECT id FROM game_provider WHERE identifier = 'bet2tech'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),
          ((SELECT id FROM game_provider WHERE identifier = 'bet2tech'), (SELECT id FROM fiat_currency WHERE symbol = 'AED')),

          ((SELECT id FROM game_provider WHERE identifier = 'merkur'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'merkur'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),
          ((SELECT id FROM game_provider WHERE identifier = 'merkur'), (SELECT id FROM fiat_currency WHERE symbol = 'AED')),

          ((SELECT id FROM game_provider WHERE identifier = 'mrslotty'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'mrslotty'), (SELECT id FROM fiat_currency WHERE symbol = 'IDR')),
          ((SELECT id FROM game_provider WHERE identifier = 'mrslotty'), (SELECT id FROM fiat_currency WHERE symbol = 'CNY')),

          ((SELECT id FROM game_provider WHERE identifier = 'tvbet'), (SELECT id FROM fiat_currency WHERE symbol = 'TRY')),
          ((SELECT id FROM game_provider WHERE identifier = 'tvbet'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),
          ((SELECT id FROM game_provider WHERE identifier = 'tvbet'), (SELECT id FROM fiat_currency WHERE symbol = 'AED')),

          ((SELECT id FROM game_provider WHERE identifier = 'kiron'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'kiron'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),
          ((SELECT id FROM game_provider WHERE identifier = 'kiron'), (SELECT id FROM fiat_currency WHERE symbol = 'AED')),

          ((SELECT id FROM game_provider WHERE identifier = 'goldenrace'), (SELECT id FROM fiat_currency WHERE symbol = 'TRY')),
          ((SELECT id FROM game_provider WHERE identifier = 'goldenrace'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),
          ((SELECT id FROM game_provider WHERE identifier = 'goldenrace'), (SELECT id FROM fiat_currency WHERE symbol = 'AED')),

          ((SELECT id FROM game_provider WHERE identifier = 'eagaming'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'eagaming'), (SELECT id FROM fiat_currency WHERE symbol = 'IDR')),
          ((SELECT id FROM game_provider WHERE identifier = 'eagaming'), (SELECT id FROM fiat_currency WHERE symbol = 'CNY')),

          ((SELECT id FROM game_provider WHERE identifier = 'fazi'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'fazi'), (SELECT id FROM fiat_currency WHERE symbol = 'IDR')),
          ((SELECT id FROM game_provider WHERE identifier = 'fazi'), (SELECT id FROM fiat_currency WHERE symbol = 'CNY')),

          ((SELECT id FROM game_provider WHERE identifier = 'nucleus'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'nucleus'), (SELECT id FROM fiat_currency WHERE symbol = 'IDR')),
          ((SELECT id FROM game_provider WHERE identifier = 'nucleus'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),

          ((SELECT id FROM game_provider WHERE identifier = 'swntt'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),

          ((SELECT id FROM game_provider WHERE identifier = '3oaks'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = '3oaks'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),

          ((SELECT id FROM game_provider WHERE identifier = 'mplay'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'mplay'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),
          ((SELECT id FROM game_provider WHERE identifier = 'mplay'), (SELECT id FROM fiat_currency WHERE symbol = 'AED')),
          ((SELECT id FROM game_provider WHERE identifier = 'mplay'), (SELECT id FROM fiat_currency WHERE symbol = 'MYR')),
          ((SELECT id FROM game_provider WHERE identifier = 'mplay'), (SELECT id FROM fiat_currency WHERE symbol = 'CNY')),
          ((SELECT id FROM game_provider WHERE identifier = 'mplay'), (SELECT id FROM fiat_currency WHERE symbol = 'HKD')),

          ((SELECT id FROM game_provider WHERE identifier = 'reevo'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'reevo'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),

          ((SELECT id FROM game_provider WHERE identifier = 'spadegaming'), (SELECT id FROM fiat_currency WHERE symbol = 'IDR')),

          ((SELECT id FROM game_provider WHERE identifier = 'pragmaticplay'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'pragmaticplay'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),

          ((SELECT id FROM game_provider WHERE identifier = 'pragmaticplaylive'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'pragmaticplaylive'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),

          ((SELECT id FROM game_provider WHERE identifier = 'jaderabbit'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'jaderabbit'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),
          ((SELECT id FROM game_provider WHERE identifier = 'jaderabbit'), (SELECT id FROM fiat_currency WHERE symbol = 'MYR')),
          ((SELECT id FROM game_provider WHERE identifier = 'jaderabbit'), (SELECT id FROM fiat_currency WHERE symbol = 'CNY')),
          ((SELECT id FROM game_provider WHERE identifier = 'jaderabbit'), (SELECT id FROM fiat_currency WHERE symbol = 'HKD')),

          ((SELECT id FROM game_provider WHERE identifier = 'tadagaming'), (SELECT id FROM fiat_currency WHERE symbol = 'KRW')),
          ((SELECT id FROM game_provider WHERE identifier = 'tadagaming'), (SELECT id FROM fiat_currency WHERE symbol = 'IDR')),
          ((SELECT id FROM game_provider WHERE identifier = 'tadagaming'), (SELECT id FROM fiat_currency WHERE symbol = 'JPY')),
          ((SELECT id FROM game_provider WHERE identifier = 'tadagaming'), (SELECT id FROM fiat_currency WHERE symbol = 'MYR')),
          ((SELECT id FROM game_provider WHERE identifier = 'tadagaming'), (SELECT id FROM fiat_currency WHERE symbol = 'CNY')),
          ((SELECT id FROM game_provider WHERE identifier = 'tadagaming'), (SELECT id FROM fiat_currency WHERE symbol = 'HKD'))
        ON CONFLICT (provider_id, fiat_id) 
        DO NOTHING;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from game_currency_blacklist');
  }
}
