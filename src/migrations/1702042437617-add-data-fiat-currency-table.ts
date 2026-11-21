import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDataFiatCurrencyTable1702042437617
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "fiat_currency" (symbol, name, logo, iso_decimals, cmc_id)
      VALUES
        ('USD', 'US Dollar', '', 2, 2781),
        ('KRW', 'Korea', '', 0, 2798),
        ('EUR', 'Euro', '', 2, 2790),
        ('TRY', 'Turkey Lira', '', 2, 2810),
        ('IDR', 'Indonesia', '', 2, 2794),
        ('JPY', 'Japan', '', 0, 2797),
        ('AED', 'UAE-Dirham', '', 2, 2813),
        ('MYR', 'Malaysian Ringgit', '', 2, 2800),
        ('CNY', 'Renminbi', '', 2, 2787),
        ('HKD', 'Hong Kong Dollar', '', 2, 2792),
        ('PHP', 'Philippine', '', 2, 2803),
        ('CAD', 'Canada Dollar', '', 2, 2784),
        ('THB', 'Thailand', '', 2, 2809),
        ('INR', 'India', '', 2, 2796),
        ('AUD', 'Australia Dollar', '', 2, 2782),
        ('MXN', 'Mexico Peso', '', 2, 2799),
        ('BRL', 'Brazil', '', 2, 2783),
        ('ARS', 'Argentina Peso', '', 2, 2821),
        ('VND', 'Vietnam', '', 0, 2823)
      ON CONFLICT (symbol) 
      DO UPDATE SET
        cmc_id = EXCLUDED.cmc_id
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "fiat_currency"');
  }
}
