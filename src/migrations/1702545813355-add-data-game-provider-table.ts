import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDataGameProviderTable1702545813355
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "game_provider"
          (name, identifier)
        VALUES
          ('Ezugi', 'ezugi'),
          ('Bgaming', 'bgaming'),
          ('Yggdrasil', 'yggdrasil'),
          ('Playson', 'playson'),
          ('Booongo', 'booongo'),
          ('Quickspin', 'quickspin'),
          ('GameArt', 'gameart'),
          ('Thunderkick', 'thunderkick'),
          ('Wazdan', 'wazdan'),
          ('Evoplay Entertainment', 'evoplay'),
          ('Tom Horn', 'tomhornnative'),
          ('Betsoft', 'bsg'),
          ('Booming Games', 'booming'),
          ('Absolutely Live Gaming', 'alg'),
          ('Belatra', 'belatra'),
          ('CT Interactive', 'technology'),
          ('Endorphina', 'endorphina'),
          ('FelixGaming', 'felixgaming'),
          ('Igrosoft', 'igrosoft'),
          ('Mancala', 'mancala'),
          ('Merkur', 'merkur'),
          ('MrSlotty', 'mrslotty'),
          ('Platipus', 'platipus'),
          ('Kiron', 'kiron'),
          ('Kalamba', 'kalamba'),
          ('EAGaming', 'eagaming'),
          ('Fazi', 'fazi'),
          ('KA Gaming', 'kagaming'),
          ('Mascot', 'mascot'),
          ('NetGame', 'netgame'),
          ('Nucleus', 'nucleus'),
          ('Swntt', 'swntt'),
          ('1spin4win', '1spin4win'),
          ('Atmosfera', 'atmosfera'),
          ('Onlyplay', 'onlyplay'),
          ('Zillion', 'zillion'),
          ('Gamebeat', 'gamebeat'),
          ('Gamzix', 'gamzix'),
          ('3oaks', '3oaks'),
          ('5men', '5men'),
          ('AvatarUX', 'avatarux'),
          ('Fugaso', 'fugaso'),
          ('Lucky', 'lucky'),
          ('Mplay', 'mplay'),
          ('Reevo', 'reevo'),
          ('Smartsoft', 'smartsoft'),
          ('Spadegaming', 'spadegaming'),
          ('Spearhead', 'spearhead'),
          ('Turbo Games', 'turbogames'),
          ('7mojos', '7mojos'),
          ('Altente', 'altente'),
          ('RFranco', 'rfranco'),
          ('RubyPlay', 'rubyplay'),
          ('Pragmatic Play', 'pragmaticplay'),
          ('Pragmatic Live Play', 'pragmaticplaylive'),
          ('Bet2Tech', 'bet2tech'),
          ('TVBET', 'tvbet'),
          ('Golden Race', 'goldenrace'),
          ('Apparat Gaming', 'apparat'),
          ('Jade Rabbit', 'jaderabbit'),
          ('TaDa Gaming', 'tadagaming'),
          ('Fantasma', 'fantasma'),
          ('Popiplay', 'popiplay')
        ON CONFLICT (identifier) 
        DO NOTHING;
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "game_provider"');
  }
}

// ('Lucky Streak', 'luckystreak'),
