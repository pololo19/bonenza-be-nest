import { MigrationInterface, QueryRunner } from 'typeorm';

import { ENUM_ROLE } from '../enums';

export class AddAvailableWithdrawBalance1719364293658
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = await queryRunner.query(
      `SELECT * FROM "user" where role = ${ENUM_ROLE.USER}`,
    );
    const symbols = await queryRunner.query(
      `SELECT * FROM "blockchain_symbol"`,
    );

    for (const user of users) {
      for (const symbol of symbols) {
        await queryRunner.query(
          `INSERT INTO available_withdraw_balance (user_id, symbol_id) VALUES ('${user.id}', '${symbol.id}')`,
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "available_withdraw_balance"`);
  }
}
