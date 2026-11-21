import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Validate,
} from 'class-validator';
import { ENUM_GAME_SORT } from 'enums';
import { IsPositiveConstraint } from 'validators';

export class liveCasinoDto {
  @ApiProperty({
    type: String,
    description:
      'Array provider IDs in JSON format(ex: ["0292a3c8-7026-4ed8-b272-a55a0b452776", "048ad1bb-45c4-4956-851e-3d3320f0af35"], [])',
    default: '[]',
  })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => {
    try {
      return JSON.parse(value);
    } catch (error) {
      return [];
    }
  })
  @IsUUID('4', { each: true })
  providers: string[];

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

  @ApiProperty({
    type: 'enum',
    enum: ENUM_GAME_SORT,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_GAME_SORT)
  sort: ENUM_GAME_SORT;

  @ApiPropertyOptional()
  @Transform(({ value }: { value: string }) => value.trim().toUpperCase())
  search: string;
}
