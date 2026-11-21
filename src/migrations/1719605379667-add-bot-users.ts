import { MigrationInterface, QueryRunner } from 'typeorm';

import { ENUM_ROLE } from '../enums';
import { randomString } from '../utils';

export class AddBotUsers1719605379667 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (let i = 0; i < 30; i++) {
      await queryRunner.query(
        `INSERT INTO "user" (name, role, allowed, setting_hide_gaming_data, setting_hide_user_name)
          VALUES (
              '${randomString(11)}',
              ${ENUM_ROLE.BOT},
              true,
              ${Math.random() < 0.5},
              ${Math.random() < 0.5}
          )`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM users WHERE role = ${ENUM_ROLE.BOT}`);
  }
}
