import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBotBetRange1719608257786 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const ranges = [
      { order: 1, amounts: [0.2, 0.4, 1, 1.6, 2.4], percentage: 44 },
      { order: 2, amounts: [3, 4, 5, 6, 8, 10, 15], percentage: 30 },
      { order: 3, amounts: [20, 25, 30, 40, 50], percentage: 20 },
      {
        order: 4,
        amounts: [100, 160, 220, 240, 300, 400, 500, 600, 800],
        percentage: 5,
      },
      {
        order: 5,
        amounts: [1000, 1500, 2000, 2500, 3000, 4000, 5000],
        percentage: 1,
      },
    ];
    for (const range of ranges) {
      await queryRunner.query(`
        INSERT INTO "bot_bet_range" (seq, percentage, amounts) 
        VALUES (${range.order}, ${range.percentage}, ARRAY[${range.amounts.join(
          ', ',
        )}])
        ON CONFLICT (seq) 
        DO UPDATE SET
          percentage = EXCLUDED.percentage,
          amounts = EXCLUDED.amounts
    `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "bot_bet_range"`);
  }
}
