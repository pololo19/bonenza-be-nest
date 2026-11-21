import { MigrationInterface, QueryRunner } from 'typeorm';

import { LIVE_CASINO_CATEGORIES } from '../constant';

export class DisableDemoLiveCasino1723042462456 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE "game" SET allow_demo = false WHERE has_live=true`,
    );
    await queryRunner.query(
      `UPDATE "game" SET allow_demo = false WHERE category IN (${LIVE_CASINO_CATEGORIES.map(
        (c) => `'${c}'`,
      ).join(',')})`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE "game" SET allow_demo = true WHERE has_live=true`,
    );
    await queryRunner.query(
      `UPDATE "game" SET allow_demo = true WHERE category IN (${LIVE_CASINO_CATEGORIES.map(
        (c) => `'${c}'`,
      ).join(',')})`,
    );
  }
}
