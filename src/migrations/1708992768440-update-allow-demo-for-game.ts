import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateAllowDemoForGame1708992768440 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const producer_identifiers = [
      'yggdrasil',
      'alg',
      'ezugi',
      'pragmaticplaylive',
      'tvbet',
    ];

    for (const identifier of producer_identifiers) {
      await queryRunner.query(`
            UPDATE "game"
            SET allow_demo = false
            WHERE producer = (
                SELECT
                    id
                FROM "game_provider"
                WHERE identifier = '${identifier}'
            )
        `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
