import { MigrationInterface, QueryRunner } from 'typeorm';

import { ENUM_ROLE } from '../enums';
import { getRandomItemFromArray } from '../utils';

export class AddBotUserCurrency1719995741022 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const currencyGroup = [
      ['ETH'],
      ['BNB'],
      ['MATIC'],
      ['DOGE'],
      ['WBTC'],
      ['LTC'],
      ['SHIB'],
      ['XRP'],
      ['ETH', 'USDT'],
      ['ETH', 'DAI'],
      ['ETH', 'USDC'],
      ['BNB', 'USDT'],
      ['BNB', 'DAI'],
      ['BNB', 'USDC'],
      ['MATIC', 'USDT'],
      ['MATIC', 'DAI'],
      ['MATIC', 'USDC'],
      ['USDC'],
      ['USDT'],
      ['XRP', 'USDT'],
      ['XRP', 'DAI'],
      ['XRP', 'USDC'],
      ['WBTC', 'USDT'],
      ['WBTC', 'DAI'],
      ['WBTC', 'USDC'],
    ];
    const users = await queryRunner.query(
      `SELECT * FROM "user" WHERE role = ${ENUM_ROLE.BOT}`,
    );

    for (const user of users) {
      const currencies = getRandomItemFromArray(currencyGroup);
      for (const currency of currencies) {
        await queryRunner.query(
          `INSERT INTO "bot_user_currency" ("user_id", "currency_id") VALUES ('${user.id}', (SELECT id FROM "blockchain_symbol" WHERE symbol = '${currency}'))`,
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "bot_user_currency"');
  }
}
