import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPriorityGameProvider1711162688671
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const providers = [
      '1spin4win',
      '3oaks',
      'apparat',
      'avatarux',
      'belatra',
      'bgaming',
      'booming',
      'bsg',
      'endorphina',
      'gameart',
      'gamzix',
      'kagaming',
      'kalamba',
      'netgame',
      'platipus',
      'pragmaticplay',
      'pragmaticplaylive',
      'quickspin',
      'smartsoft',
      'swintt',
      'tadagaming',
      'thunderkick',
      'wazdan',
      'yggdrasil',
      'zillion',
    ];
    for (const provider of providers) {
      await queryRunner.query(
        `UPDATE "game_provider" SET priority = 1 WHERE identifier = '${provider}'`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('UPDATE "game_provider" SET priority = 0');
  }
}
