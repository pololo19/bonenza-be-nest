import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  Validate,
} from 'class-validator';
import { ENUM_ROLLOVER } from 'enums';
import { IsPositiveConstraint } from 'validators';

export class rolloverDto {
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
    type: 'string',
    enum: ENUM_ROLLOVER,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_ROLLOVER)
  status: ENUM_ROLLOVER;
}
