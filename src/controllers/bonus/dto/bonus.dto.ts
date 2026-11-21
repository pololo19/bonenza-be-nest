import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEnum, IsNotEmpty } from 'class-validator';
import { ENUM_BONUS_TYPE } from 'enums';

export class bonusDto {
  @ApiProperty({
    type: 'enum',
    enum: ENUM_BONUS_TYPE,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_BONUS_TYPE)
  category: ENUM_BONUS_TYPE;
}
