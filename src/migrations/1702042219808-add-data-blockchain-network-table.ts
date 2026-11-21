import { MigrationInterface, QueryRunner } from 'typeorm';

import { ENUM_NETWORK } from '../enums';

export class AddDataBlockchainNetworkTable1702042219808
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO
            "blockchain_network" (network, network_full_name, type, scan_url)
        VALUES
            ('Ethereum', 'Ethereum', ${ENUM_NETWORK.eth}, 'https://etherscan.io/tx/'),
            ('BSC', 'Binance Smart Chain', ${ENUM_NETWORK.eth}, 'https://bscscan.com/tx/'),
            ('Polygon', 'POLYGON', ${ENUM_NETWORK.eth}, 'https://polygonscan.com/tx/')
        ON CONFLICT (network, network_full_name)
        DO UPDATE SET
          scan_url = EXCLUDED.scan_url
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "blockchain_network"');
  }
}

//  ('TRON', 'TRON', ${ENUM_NETWORK.tron}),
