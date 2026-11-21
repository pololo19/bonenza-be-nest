import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateWalletAddresIndex1720492453199
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE INDEX deposit_address_idx ON "blockchain_crypto_wallet" USING btree (deposit_address);',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX deposit_address_idx;');
  }
}
