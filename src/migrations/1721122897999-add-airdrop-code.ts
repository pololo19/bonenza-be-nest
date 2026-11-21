import { MigrationInterface, QueryRunner } from 'typeorm';

const code = 'bonenza@2024';

export class AddAirdropCode1721122897999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "airdrop" (code, symbol_id, amount, expired_at, times)
        VALUES (
            '${code}',
            (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT'),
            100,
            NOW() + INTERVAL '1000 days',
            1000
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM "airdrop"
        WHERE code = '${code}'
    `);
  }
}
