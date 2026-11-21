import { MigrationInterface, QueryRunner } from 'typeorm';

import { ENUM_VIP_BONUS_TYPE } from '../enums';

export class AddDataVipLevelBenefit1706937354548 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //  Bronze
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, level_up_total_prize_amount_usd)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Bronze'), ${ENUM_VIP_BONUS_TYPE.LEVEL_UP}, (SELECT SUM(level_up_bonus) FROM vip_level WHERE level >= 2 AND level <= 7))
    `);
    //  Silver
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, level_up_total_prize_amount_usd)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Silver'), ${ENUM_VIP_BONUS_TYPE.LEVEL_UP}, (SELECT SUM(level_up_bonus) FROM vip_level WHERE level >= 8 AND level <= 21))
    `);
    //  Gold
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, level_up_total_prize_amount_usd)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Gold'), ${ENUM_VIP_BONUS_TYPE.LEVEL_UP}, (SELECT SUM(level_up_bonus) FROM vip_level WHERE level >= 22 AND level <= 37))
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, weekly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Gold'), ${ENUM_VIP_BONUS_TYPE.WEEKLY_CASHBACK}, 5)
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, monthly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Gold'), ${ENUM_VIP_BONUS_TYPE.MONTHLY_CASHBACK}, 3)
    `);
    //  Platinum I
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, level_up_total_prize_amount_usd)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Platinum I'), ${ENUM_VIP_BONUS_TYPE.LEVEL_UP}, (SELECT SUM(level_up_bonus) FROM vip_level WHERE level >= 38 AND level <= 55))
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, weekly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Platinum I'), ${ENUM_VIP_BONUS_TYPE.WEEKLY_CASHBACK}, 8)
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, monthly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Platinum I'), ${ENUM_VIP_BONUS_TYPE.MONTHLY_CASHBACK}, 3.5)
    `);
    //  Platinum II
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, level_up_total_prize_amount_usd)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Platinum II'), ${ENUM_VIP_BONUS_TYPE.LEVEL_UP}, (SELECT SUM(level_up_bonus) FROM vip_level WHERE level >= 56 AND level <= 69))
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, weekly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Platinum II'), ${ENUM_VIP_BONUS_TYPE.WEEKLY_CASHBACK}, 8)
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, monthly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Platinum II'), ${ENUM_VIP_BONUS_TYPE.MONTHLY_CASHBACK}, 4)
    `);
    //  Diamond I
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, level_up_total_prize_amount_usd)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Diamond I'), ${ENUM_VIP_BONUS_TYPE.LEVEL_UP}, (SELECT SUM(level_up_bonus) FROM vip_level WHERE level >= 70 AND level <= 84))
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, weekly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Diamond I'), ${ENUM_VIP_BONUS_TYPE.WEEKLY_CASHBACK}, 8)
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, monthly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Diamond I'), ${ENUM_VIP_BONUS_TYPE.MONTHLY_CASHBACK}, 5)
    `);
    //  Diamond II
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, level_up_total_prize_amount_usd)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Diamond II'), ${ENUM_VIP_BONUS_TYPE.LEVEL_UP}, (SELECT SUM(level_up_bonus) FROM vip_level WHERE level >= 85 AND level <= 106))
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, weekly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Diamond II'), ${ENUM_VIP_BONUS_TYPE.WEEKLY_CASHBACK}, 8)
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, monthly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Diamond II'), ${ENUM_VIP_BONUS_TYPE.MONTHLY_CASHBACK}, 5)
    `);
    //  Diamond III
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, level_up_total_prize_amount_usd)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Diamond III'), ${ENUM_VIP_BONUS_TYPE.LEVEL_UP}, (SELECT SUM(level_up_bonus) FROM vip_level WHERE level >= 107 AND level <= 124))
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, weekly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Diamond III'), ${ENUM_VIP_BONUS_TYPE.WEEKLY_CASHBACK}, 8)
    `);
    await queryRunner.query(`
        INSERT INTO "vip_level_benefit" (medal_id, bonus_type, monthly_cashback_percentage)
        VALUES
            ((SELECT id FROM vip_medal WHERE name = 'Diamond III'), ${ENUM_VIP_BONUS_TYPE.MONTHLY_CASHBACK}, 5)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM vip_level_benefit');
  }
}
