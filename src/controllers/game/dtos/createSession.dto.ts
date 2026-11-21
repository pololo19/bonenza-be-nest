import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ENUM_CURRENCY } from 'enums';

export class createSessionDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  game_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEnum(ENUM_CURRENCY)
  currency_type: ENUM_CURRENCY;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  currency_id: string;
}
