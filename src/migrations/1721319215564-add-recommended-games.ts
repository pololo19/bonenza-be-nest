import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRecommendedGames1721319215564 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const identifiers = [
      'evoplay:penaltyshootout',
      'bsg:triplecashorcrash',
      'pragmaticexternal:gatesofolympus1',
      'spadegaming:goldenchicken',
      'softswiss:wildchicago',
      'onlyplay:cricketcrash',
      'turbogames:crashxfootballedition',
      'kagaming:livestreamingstar',
      'pragmaticexternal:chickenchase',
      'pragmaticexternal:bookofgoldensands',
      'kagaming:ironchickenhunter',
      'pragmaticexternal:bigbasssplash',
      'endorphina:endorphina2_3luckystreakdice',
      'evoplay:christmascrash',
      'pragmaticexternal:rocketblastmegaways',
      'pragmaticexternal:bigbassfloatsmyboat',
      'pragmaticexternal:blackjack76azure',
      'pragmaticexternal:blackjack83emerald',
      'pragmaticexternal:yearofthedragonking',
    ];

    const games = await queryRunner.query(`
        SELECT id FROM "game" WHERE LOWER(identifier) IN ('${identifiers.join(
          "','",
        )}')
    `);

    await queryRunner.query(`
        INSERT INTO "recommended_game" (game_id) VALUES ${games
          .map((game: any) => `('${game.id}')`)
          .join(', ')}
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`Delete FROM "recommended_game"`);
  }
}
