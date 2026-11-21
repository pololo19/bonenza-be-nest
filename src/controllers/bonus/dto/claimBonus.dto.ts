import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { ENUM_BONUS_CLAIM } from 'enums';

export class claimBonusDto {
  @ApiProperty({
    type: 'enum',
    enum: ENUM_BONUS_CLAIM,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_BONUS_CLAIM)
  type: ENUM_BONUS_CLAIM;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  bonus_id: string;
}
