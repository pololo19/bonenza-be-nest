import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBotGames1719605412507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const identifiers = [
      'pragmaticexternal:gatesofolympus1',
      'pragmaticexternal:speedbaccaratd', // true
      'pragmaticexternal:bookofgoldensands',
      'gameart:5luckysevens',
      'alg:baccarata', // true
      'alg:turkishroulette', //  true
      'tomhornnative:81crystalfruits',
      'pragmaticexternal:blackjack22azure', // true
    ];

    for (const identifier of identifiers) {
      await queryRunner.query(`
        INSERT INTO "bot_game" ("game_id")
        VALUES (
          (SELECT id FROM "game" WHERE LOWER("identifier") = '${identifier}')
        )
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "bot_game"`);
  }
}
