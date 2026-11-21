import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
  Validate,
} from 'class-validator';
import { ENUM_COMMENT_SORT } from 'enums';
import { IsPositiveConstraint } from 'validators';

export class commentListDto {
  @ApiPropertyOptional()
  @IsUUID('4', { message: 'Invalid UUID format' })
  @IsOptional()
  user_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  game_id: string;

  @ApiPropertyOptional()
  @IsUUID('4', { message: 'Invalid UUID format' })
  @IsOptional()
  comment_id: string;

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
    enum: ENUM_COMMENT_SORT,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_COMMENT_SORT)
  sort: ENUM_COMMENT_SORT;
}
