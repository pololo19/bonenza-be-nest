import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';
import { ENUM_CURRENCY } from 'enums';

export class favoriteDto {
  @ApiProperty({
    type: 'enum',
    enum: ENUM_CURRENCY,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_CURRENCY)
  currency_type: ENUM_CURRENCY;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsUUID()
  currency_id: string;
}
