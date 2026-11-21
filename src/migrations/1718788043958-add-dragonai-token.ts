import { MigrationInterface, QueryRunner } from 'typeorm';

import { NodeEnvironment } from '../app.environment';
import { ENUM_ROLE } from '../enums';

require('dotenv').config();

export class AddDragonaiToken1718788043958 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //  Symbol
    await queryRunner.query(`
      INSERT INTO
        "blockchain_symbol" (symbol, logo, cmc_id, name, price)
      VALUES
        ('DRON', 'https://lh3.googleusercontent.com/fife/ALs6j_HTCkmzLDSaFnQU6ADMYAYq-4NffADjZy1i2X0C32WBOUzb5G-FeR_ROo9R4qctmjszR1tCqyN9Sm3JYk7VGDN57fnG768WVDEVdh-B_KDMej3khWBiIRwmsa7lMi4uklMugKFMqNjnTcxXz3fQDP67QhKLEVlrXN2oAno9HOKP71s8JOWC1eroMJ29YVbdInBVVewlmX2LO8UgggJB-5MsRU1X79wmEYKBw-0Avyd6khYSR7R3EB2v19Vvkz4dzKZ0aFIbVWlTTh7KZ495iNBqe4qqG494BaYlIFo5MjtsfOERlWZkCxRlFUxUfL-p2-yz6YqR4mOE_TqDCVDRHf97U7cgiK8-uW9g_La0FwcBtrGBcxlSKyQUV37fHSCwfkVBt2kNEKkcMo2u_TRWA2VLuTp6JfJrPCIed8rluXOs1PHFNsQDeLmaDFGTImD4eaoZrDmdk-5Ddqrksq6YMCUYBuuEeoGRQlva3PkNnKARESFVASDgUvHS4y6e-91--T3KAGhXtWql4yFOZx5hFTLy_KDVfrWgiI0XHh8BixKLk0u-dd_CkWhxpeB2pSFox-ivAfBwQ9hJFO-WF10lizVAHmyfxnGrFlSiTnCXataOHeXWsJOLkz7HNxfwURG0YX_b263_PhcyCSJtiIyfDeDzJxEUuM_JctpXIMwpUV0X8E9r0PuU_BJkhYIFdjJXR6-I8lViR3DPRTqUhjOkIl1pK0I7XuxfQLUwU9Ne1Z2b49ad-YGBm9Ln-5fQzQXkMl26sODqUfB-chX2CIRueyLFUWNau52m5hnFLUwKx5uAAc1dS7sQ8HkY3Cd7wGp81hHQj_4jdfY3o1sLetO0nKtzwfbruyZQVepPvJD3vwBD8uPf8Q-DU2XXaSDZ-NyceHa-IzorjIqDTEM2R1ghAibiwIpT2cCLwqi5yWfhcBkxuT5vTTiChtw4vYLtXEBeUe4JpWBfnqFvIQHsaM3YuW2crK7a6Qh06uetCFsxlB3VNF609qtgvfSZvWkraG4xlL0JET3mzVlb5baCq_m2MmtaDAhV53z-kV1yj0LYbjyLoAPsKmKFZk0I9Y115IOtepE01Jq6TyrMmSl7V2a_z6IH8FILaUUiNQ9RkAnuG7NYqJF42XGk0bRKF4iWgLXXHZQYFSqiGNO23ai6w2vCqCE-HwD3678Os2k_mrFF9WxFk9fvFXaei4cs07Qhm_9Hv2HyzyHh9ciFA_7wGen6oLt_jTNrws-qN_mueL5OYjRhS49LHr76J5kLV6hZKjhGVbcKxnzkQcRLkDmomikdsLRml2B4XrMq_rWzSYfK35zQeIC6ZkzunzhZ6yqOMTsaMlqB4boWY9C7X_QZmhkKY4ibnUiRkD1PCJ3MJPMSBAePIiCptijNrly4EJOtDi9BRy-az1bLRSBrx5sg9IUQ_W7rU3-c-9tyxktfNUCoYrzQeQcQb2m8fHCVavCftSqg1xsw9HWhkB-FWczsZadZJxOGAO9fr3YDVhf3-vEL_QqD3YDl6Ci0rs2PtpeskM4m6JBKEWMy0aTtmoVnk6y0IhDdY078fSu_LUUrTvKASg2OgHw-zzOpBjJyBJRA1klAaaf27bit3ajVwzUXew8=w1920-h919', null, 'DRAGONAI', 0.05)
      ON CONFLICT (symbol)
      DO UPDATE SET
        logo = EXCLUDED.logo,
        cmc_id = EXCLUDED.cmc_id,
        name = EXCLUDED.name
    `);
    //   Cryptocurrency
    if (process.env.NODE_ENV === NodeEnvironment.Production) {
      await queryRunner.query(`
        INSERT INTO "blockchain_cryptocurrency" (network_id, symbol_id, decimals, type, contract_address, withdraw_fee)
        VALUES
        (
          (SELECT id FROM "blockchain_network" WHERE network='BSC'),
          (SELECT id FROM "blockchain_symbol" WHERE symbol='DRON'),
          18,
          2,
          '0xEAA41acB858c1c922F8cd6b6c61Bc65c4554F536',
          1
        )`);
    } else {
      await queryRunner.query(`
        INSERT INTO "blockchain_cryptocurrency" (network_id, symbol_id, decimals, type, contract_address, withdraw_fee)
        VALUES
        (
          (SELECT id FROM "blockchain_network" WHERE network='BSC'),
          (SELECT id FROM "blockchain_symbol" WHERE symbol='DRON'),
          18,
          2,
          '0xd1575a7CE61e202f3d7CAab954Fd4dBd8CC9DE45',
          1
        )`);
    }
    //  Balance
    const result = await queryRunner.query(
      `SELECT id FROM "user" WHERE role = ${ENUM_ROLE.USER}`,
    );
    for (const user of result) {
      await queryRunner.query(`
        INSERT INTO "blockchain_crypto_balance" (user_id, symbol_id)
        VALUES
        (
          '${user.id}', (SELECT id FROM "blockchain_symbol" WHERE symbol = 'DRON')
        )
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "blockchain_symbol" WHERE symbol = 'DRON'`,
    );
  }
}
