import { MigrationInterface, QueryRunner } from 'typeorm';

import { NodeEnvironment } from '../app.environment';

require('dotenv').config();

export class UpdateSymbolLogo1720704575478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const symbols = await queryRunner.query(
      `SELECT * FROM "blockchain_symbol"`,
    );
    if (process.env.NODE_ENV === NodeEnvironment.Production) {
      for (const symbol of symbols) {
        await queryRunner.query(`
            UPDATE "blockchain_symbol"
            SET logo = 'https://bonenzasc.blob.core.windows.net/bonenza-prod/token/${
              symbol.symbol === 'WBTC' ? 'BTC' : symbol.symbol
            }.png'
            WHERE symbol = '${symbol.symbol}'
        `);
      }
    } else {
      for (const symbol of symbols) {
        await queryRunner.query(`
            UPDATE "blockchain_symbol"
            SET logo = 'https://bonenzasc.blob.core.windows.net/bonenza-staging/token/${
              symbol.symbol === 'WBTC' ? 'BTC' : symbol.symbol
            }.png'
            WHERE symbol = '${symbol.symbol}'
        `);
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
