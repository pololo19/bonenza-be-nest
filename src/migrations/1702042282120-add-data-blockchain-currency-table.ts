import { MigrationInterface, QueryRunner } from 'typeorm';

import { NodeEnvironment } from '../app.environment';

require('dotenv').config();

export class AddDataBlockchainCurrencyTable1702042282120
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    if (process.env.NODE_ENV === NodeEnvironment.Production) {
      await queryRunner.query(`
        INSERT INTO "blockchain_cryptocurrency" (network_id, symbol_id, decimals, type, contract_address, withdraw_fee)
        VALUES
        (
            (SELECT id FROM "blockchain_network" WHERE network='Ethereum'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='ETH'),
            18,
            1,
            NULL,
            0.002
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='Ethereum'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='USDT'),
            6,
            2,
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            8
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='BNB'),
            18,
            1,
            NULL,
            0.001
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='USDT'),
            18,
            2,
            '0x55d398326f99059fF775485246999027B3197955',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='USDC'),
            18,
            2,
            '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='DOGE'),
            8,
            2,
            '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='DAI'),
            18,
            2,
            '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='LTC'),
            18,
            2,
            '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='WBTC'),
            18,
            2,
            '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='SHIB'),
            18,
            2,
            '0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='XRP'),
            18,
            2,
            '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='Polygon'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='MATIC'),
            18,
            1,
            NULL,
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='Polygon'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='USDT'),
            6,
            2,
            '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
            1
        )
        ON CONFLICT (network_id, symbol_id) 
        DO UPDATE SET
            type = EXCLUDED.type,
            contract_address = EXCLUDED.contract_address,
            decimals = EXCLUDED.decimals,
            withdraw_fee = EXCLUDED.withdraw_fee
    `);
    } else {
      await queryRunner.query(`
        INSERT INTO "blockchain_cryptocurrency" (network_id, symbol_id, decimals, type, contract_address, withdraw_fee)
        VALUES
        (
            (SELECT id FROM "blockchain_network" WHERE network='Ethereum'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='ETH'),
            18,
            1,
            NULL,
            0.002
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='Ethereum'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='USDT'),
            6,
            2,
            '0x8F8e04988EE619b20366C475A30ed94fb8475dea',
            8
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='BNB'),
            18,
            1,
            NULL,
            0.001
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='USDT'),
            18,
            2,
            '0x8F8e04988EE619b20366C475A30ed94fb8475dea',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='USDC'),
            18,
            2,
            '0xE2aDd57B4Be0cBc658E70F726CC268E8FeC4fCB4',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='DOGE'),
            8,
            2,
            '0x06A0F0fa38AE42b7B3C8698e987862AfA58e90D9',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='DAI'),
            18,
            2,
            '0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='LTC'),
            18,
            2,
            '0x9396EF1506b5F178FDCa00B044Aa4EffE672AD1a',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='WBTC'),
            18,
            2,
            '0x96d7774Bddb2346071576dF91f1E55A4eAaC6787',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='SHIB'),
            18,
            2,
            '0x08cf5795c325a0059E14AE404b9a35f58e779bc5',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='BSC'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='XRP'),
            18,
            2,
            '0xCEe9a92A7fcD19878d547E284F813748B2Da50D7',
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='Polygon'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='MATIC'),
            18,
            1,
            NULL,
            1
        ),
        (
            (SELECT id FROM "blockchain_network" WHERE network='Polygon'),
            (SELECT id FROM "blockchain_symbol" WHERE symbol='USDT'),
            6,
            2,
            '0x8F8e04988EE619b20366C475A30ed94fb8475dea',
            1
        )
        ON CONFLICT (network_id, symbol_id) 
        DO UPDATE SET
            type = EXCLUDED.type,
            contract_address = EXCLUDED.contract_address,
            decimals = EXCLUDED.decimals,
            withdraw_fee = EXCLUDED.withdraw_fee
    `);
    }

    //  Pair(BSC -> GOD)
    // await queryRunner.query(`
    //     INSERT INTO "blockchain_cryptocurrency" (network_id, symbol_id, decimals, type, contract_address)
    //     VALUES(
    //         (SELECT id FROM "blockchain_network" WHERE network='BSC'),
    //         (SELECT id FROM "blockchain_symbol" WHERE symbol='GOD'),
    //         18,
    //         2,
    //         '0xd0e844a41CF9269ae8B05d41E4e97D2DF66066a6'
    //     )
    //     ON CONFLICT (network_id, symbol_id)
    //     DO NOTHING;
    // `);
    //  Pair(TRON -> TRX)
    // await queryRunner.query(`
    //     INSERT INTO "blockchain_cryptocurrency" (network_id, symbol_id, decimals, type)
    //     VALUES(
    //         (SELECT id FROM "blockchain_network" WHERE network='TRON'),
    //         (SELECT id FROM "blockchain_symbol" WHERE symbol='TRX'),
    //         18,
    //         1
    //     )
    //     ON CONFLICT (network_id, symbol_id)
    //     DO NOTHING;
    // `);
    //  Pair(TRON -> USDT)
    // await queryRunner.query(`
    //     INSERT INTO "blockchain_cryptocurrency" (network_id, symbol_id, decimals, type)
    //     VALUES(
    //         (SELECT id FROM "blockchain_network" WHERE network='TRON'),
    //         (SELECT id FROM "blockchain_symbol" WHERE symbol='USDT'),
    //         6,
    //         2
    //     )
    //     ON CONFLICT (network_id, symbol_id)
    //     DO NOTHING;
    // `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "blockchain_cryptocurrency"');
  }
}
