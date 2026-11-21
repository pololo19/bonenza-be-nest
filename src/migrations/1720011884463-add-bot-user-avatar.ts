import { MigrationInterface, QueryRunner } from 'typeorm';

import { NodeEnvironment } from '../app.environment';
import { ENUM_ROLE } from '../enums';

require('dotenv').config();

export class AddBotUserAvatar1720011884463 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const avatars = [
      '1720018909747_61ec6abc-8fe7-4fae-8bc4-2f83d6d894d5_avatar.jpg',
      '1720018983173_bf8f3087-c70c-4ce3-a116-bccad0666f16_avatar.jpg',
      '1720019027321_f4031a4a-5d62-4e18-b68b-e873a4a72dde_avatar.jpg',
      '1720019125156_80830419-dff8-40ac-aa22-c25c31b253ce_avatar.jpg',
      '1720019166085_84188f6f-d122-47e8-b0f2-059a0aac004a_avatar.jpg',
      '1720019198802_de70af63-878d-46ae-b668-0e4ef1f17a07_avatar.jpg',
      '1720019225451_bba855c2-ab71-4d0b-a152-1d17a5f0c717_avatar.jpg',
      '1720019248709_bd8fde40-7f33-4b94-ad9f-c77fc6401277_avatar.jpg',
      '1720022192752_88a16497-ce5e-4288-9946-f56680b53d0e_avatar.jpg',
      '1720022222485_5e336ce1-8f02-4e7a-8a27-65cf6cdedc03_avatar.jpg',
      '1720022259792_88ca075d-558c-4c5a-a773-1ee7c1ece859_avatar.jpg',
      '1720022331144_5264c605-5743-409e-bf73-de8434218fe8_avatar.jpg',
      '1720022350471_83f01034-3948-4b29-b696-24ec8e22723c_avatar.jpg',
      '1720022362995_800357fa-fabb-4b78-be07-0a13159be779_avatar.jpg',
      '1720022376798_13b7c806-8564-4c07-b31e-ddeb1bb9d2f5_avatar.jpg',
      '1720022388753_9ee8dd6b-c2e1-4236-b482-10dfb76deec0_avatar.jpg',
    ];
    if (process.env.NODE_ENV === NodeEnvironment.Production) {
      for (const avatar of avatars) {
        const id = avatar.split('_')[1];
        await queryRunner.query(
          `
            UPDATE "user"
            SET avatar = '${avatar}'
            WHERE id = '${id}'`,
        );
      }
    } else {
      const bots = await queryRunner.query(
        `SELECT * FROM "user" WHERE role = ${ENUM_ROLE.BOT} AND setting_hide_user_name = false`,
      );

      for (let i = 0; i < bots.length; i++) {
        if (i < avatars.length) {
          await queryRunner.query(
            `UPDATE "user" SET avatar = '${avatars[i]}' WHERE id = '${bots[i].id}'`,
          );
        }
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
