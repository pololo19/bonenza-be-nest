import { MigrationInterface, QueryRunner } from 'typeorm';

import { ENUM_SETTING } from '../enums';

export class AddDataSetting1707915915183 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "setting" (key, value)
      VALUES
          ('${ENUM_SETTING.SWAP_FEE}', '{"fee": 0.015}'),
          ('${ENUM_SETTING.REFERRAL_REWARDS_RULE}', '{"4": 0.5, "8": 2.5, "14": 5, "22": 12, "30": 25, "38": 50, "46": 80, "54": 120, "62": 205, "70": 500}'),
          ('${ENUM_SETTING.MINIMUM_BET_AMOUNT_USD_FOR_HIGH_ROLLER}', '{"bet_amount": 500}')
      ON CONFLICT (key) 
      DO UPDATE SET
        value = EXCLUDED.value
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "setting"`);
  }
}
