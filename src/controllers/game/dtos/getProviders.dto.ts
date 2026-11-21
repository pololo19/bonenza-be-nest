import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEnum, IsNotEmpty } from 'class-validator';
import { ENUM_GAME_CATEGORY } from 'enums';

export class getProvidersDto {
  @ApiProperty({
    type: 'enum',
    enum: ENUM_GAME_CATEGORY,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_GAME_CATEGORY)
  category: ENUM_GAME_CATEGORY;
}
