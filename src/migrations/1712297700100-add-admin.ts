import { MigrationInterface, QueryRunner } from 'typeorm';

import { ENUM_ROLE } from '../enums';

export class AddCronAdmin1712297700100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "user" (name, email, password, role, allowed, email_verified)
      VALUES
          ('cronmanager', 'cronmanager@bonenza.com', '$2b$10$5VDHVRaICI5VXV14T/H4y.Crr7kzmRrmA.ZHCVomuxs7vfp0AFYxO', ${ENUM_ROLE.ADMIN}, true, true)
    `);
    await queryRunner.query(`
      INSERT INTO "tier" (name, email, password, role)
      VALUES
          ('admin', 'admin@bonenza.com', '$2b$10$5VDHVRaICI5VXV14T/H4y.Crr7kzmRrmA.ZHCVomuxs7vfp0AFYxO', ${ENUM_ROLE.ADMIN})
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "user" WHERE email = 'cronmanager@bonenza.com'
    `);
    await queryRunner.query(`
      DELETE FROM "tier" WHERE email = 'admin@bonenza.com'
    `);
  }
}
