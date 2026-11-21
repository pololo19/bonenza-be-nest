import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFixedNumberFunction1719842226498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE OR REPLACE FUNCTION fixed_number(num NUMERIC, decimals INTEGER DEFAULT 2)
        RETURNS NUMERIC AS $$
        DECLARE
            count INTEGER := 1;
        BEGIN
            IF num IS NULL THEN
                RETURN 0;
            END IF;
            IF num >= 1 THEN
                RETURN floor(num * power(10, decimals)) / power(10, decimals);
            ELSIF num <= 0 THEN
                RETURN 0;
            ELSE
                WHILE num * power(10, count) < 1 LOOP
                    count := count + 1;
                END LOOP;
                RETURN CAST(substring(num::text from 1 for 1 + count + decimals) AS NUMERIC);
            END IF;
        END; $$
        LANGUAGE plpgsql;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP FUNCTION IF EXISTS fixed_number(NUMERIC, INTEGER);
    `);
  }
}
