import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddJackpotServiceGame1712227843835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "game_provider" (name, identifier, is_visible)
        VALUES
            ('Autopay', 'autopay', false)
    `);
    await queryRunner.query(`
    INSERT INTO "game"
    (title, identifier, identifier2, provider, producer, category, theme, has_freespins,feature_group, customised, devices, licenses, jackpot_type, forbid_bonus_play, lines, payout, volatility_rating, hd, released_at, bonus_buy, multiplier, restrictions, ways, description, hit_rate, has_jackpot, accumulating, has_live, accounting_group, is_visible)
    VALUES
      ('Jackpots', 'autopay:jackpots', 'jackpots', 'autopay', (SELECT id FROM "game_provider" WHERE identifier='autopay'), 'casual', 'other', false, 'basic', false, '{"desktop","mobile"}', '{"CW","NO_LICENSE"}', 'Not Available', false, 0, 0, null, false, null, true, 0, '{"default":{"blacklist":[]}}', null, null, null, null, null, null, null, false)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
