import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';
import { ENUM_MULTI_LANG } from 'enums';

export class startDemoDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  game_id: string;

  @ApiProperty({
    type: 'enum',
    enum: ENUM_MULTI_LANG,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_MULTI_LANG)
  locale: string;
}
