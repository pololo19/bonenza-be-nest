import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Validate,
} from 'class-validator';
import { ENUM_GAME_SORT } from 'enums';
import { IsPositiveConstraint } from 'validators';

export class providerDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  provider_name: string;

  @ApiProperty({
    type: 'enum',
    enum: ENUM_GAME_SORT,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_GAME_SORT)
  sort: ENUM_GAME_SORT;

  @ApiProperty({ default: 1 })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  @Validate(IsPositiveConstraint)
  page: number;

  @ApiProperty({ default: 20 })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  @Validate(IsPositiveConstraint)
  page_size: number;
}
