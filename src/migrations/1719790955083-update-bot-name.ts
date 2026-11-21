import { MigrationInterface, QueryRunner } from 'typeorm';

import { ENUM_ROLE } from '../enums';

export class UpdateBotName1719790955083 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const names = [
      'murafukaJones',
      'ineedamaxwinne',
      'lady_luck7',
      '__TripleBarXXX__',
      '!!BdCarina!!',
      'Ladies+Luck🙌',
      'chipchampion👍👍👍',
      '🤙🤙METALGOD🤙🤙',
      'deucescrazy🤔😆😃',
      '💕PokerFace101',
      'Julie43❤️',
      'GameOn123⚪',
      'Vijay Lela',
      'Jackpot🎂Joe',
      'Slipperynick',
      'StagNight123',
      'THENDARAWOLF',
      'daniaseemab',
      'SlotMachine69',
      'TexasHoldem22',
      'SuiteDelight',
      'Scarlettt',
      'crapsking',
      'Realgood',
      'CasinoKing69',
      'QueenOfSpades',
      'MonteCarloMaster',
      'DoubleDownDave',
    ];
    const bots = await queryRunner.query(
      `SELECT * FROM "user" WHERE role = ${ENUM_ROLE.BOT} AND setting_hide_user_name = false`,
    );
    for (let i = 0; i < bots.length; i++) {
      await queryRunner.query(
        `UPDATE "user" SET name = '${names[i]}' WHERE id = '${bots[i].id}'`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
