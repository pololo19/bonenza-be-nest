import { MigrationInterface, QueryRunner } from 'typeorm';

import { ENUM_SPIN_BONUS } from '../enums';

export class AddSpinData1710767028804 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "spin" (type, amount_usd, symbol_id)
        VALUES
            (
                ${ENUM_SPIN_BONUS.Lucky}, 0.01, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'SHIB')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 0.1, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 2, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 3, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDC')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 5, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'XRP')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 10, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'DOGE')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 15, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 20, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'MATIC')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 22, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDC')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 25, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'DAI')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 30, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'ETH')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 35, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'LTC')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 40, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'MATIC')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 45, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'BNB')
            ),
            (
                ${ENUM_SPIN_BONUS.Lucky}, 50, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'ETH')
            )
        ON CONFLICT (type, amount_usd) 
        DO NOTHING;
    `);
    await queryRunner.query(`
        INSERT INTO "spin" (type, amount_usd, symbol_id)
        VALUES
            (
                ${ENUM_SPIN_BONUS.Super}, 0.25, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'DOGE')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 0.5, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 1, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 1.5, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'SHIB')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 2, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'XRP')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 5, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'MATIC')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 10, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDC')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 20, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'DAI')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 30, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 50, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'LTC')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 80, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'MATIC')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 100, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'BNB')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 120, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'LTC')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 180, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDC')
            ),
            (
                ${ENUM_SPIN_BONUS.Super}, 200, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'ETH')
            )
        ON CONFLICT (type, amount_usd) 
        DO NOTHING;
    `);
    await queryRunner.query(`
        INSERT INTO "spin" (type, amount_usd, symbol_id)
        VALUES
            (
                ${ENUM_SPIN_BONUS.Mega}, 1, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'SHIB')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 1.5, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 5, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 30, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'DOGE')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 50, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'DAI')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 100, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'LTC')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 150, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'XRP')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 200, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'MATIC')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 300, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'XRP')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 500, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDT')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 600, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'USDC')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 700, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'LTC')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 750, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'DAI')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 800, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'BNB')
            ),
            (
                ${ENUM_SPIN_BONUS.Mega}, 1000, (SELECT id FROM "blockchain_symbol" WHERE symbol = 'ETH')
            )
        ON CONFLICT (type, amount_usd) 
        DO NOTHING;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "spin"');
  }
}
