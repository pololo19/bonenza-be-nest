import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDataVipMedal1706936955579 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "vip_medal" (name, start_level, end_level)
        VALUES
            ('Bronze', 2, 7),
            ('Silver', 8, 21),
            ('Gold', 22, 37),
            ('Platinum I', 38, 55),
            ('Platinum II', 56, 69),
            ('Diamond I', 70, 84),
            ('Diamond II', 85, 106),
            ('Diamond III', 107, 124)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM vip_medal');
  }
}
