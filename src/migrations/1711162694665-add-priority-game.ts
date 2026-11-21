import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPriorityGame1711162694665 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const identifiers = [
      'pragmaticexternal:SweetBonanza',
      'pragmaticexternal:GatesofOlympus1000',
      'pragmaticexternal:GatesOfOlympus1',
      'softswiss:MergeUp',
      'pragmaticexternal:StarlightPrincess1000',
      'pragmaticexternal:TheDogHouse',
      'softswiss:BurningChilliX',
      'pragmaticexternal:SugarRush1',
      'pragmaticexternal:ZeusvsHadesGodsofWar',
      'pragmaticexternal:MadameDestinyMegaways1',
      'pragmaticexternal:FloatingDragonDragonBoatFestival',
      'pragmaticexternal:BigBassHoldandSpinner',
      'gameart:WildDolphin',
      'pragmaticexternal:SugarSupremePowernudge',
      'pragmaticexternal:StarlightChristmas',
      'pragmaticexternal:BigBassBonanza',
      'pragmaticexternal:BigBassKeepingitReel',
      'pragmaticexternal:FloatingDragon1',
      'pragmaticexternal:TheDogHouseMegaways1',
      'softswiss:BigAtlantisFrenzy',
      'belatra:MummylandTreasures',
      'pragmaticexternal:ChristmasBassBananza',
      'pragmaticexternal:GemsBonanza1',
      'pragmaticexternal:BigBassHalloween',
      'pragmaticexternal:CloverGold',
      'gamzix:JuicyWinHoldTheSpin',
      'pragmaticexternal:BuffaloKingMegaways1',
      'pragmaticexternal:TheDogHouseMultihold',
      'softswiss:LuckyLadyMoonMegaways',
      'pragmaticexternal:BookofGoldenSands',
      'wazdan:Sizzling777',
      'pragmaticexternal:BigBassSplash',
      'softswiss:WildCashX9990',
      'pragmaticexternal:StarlightPrincess',
    ];
    for (const identifier of identifiers) {
      await queryRunner.query(
        `UPDATE "game" SET priority = 1 WHERE identifier = '${identifier}'`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('UPDATE "game" SET priority = 0');
  }
}
