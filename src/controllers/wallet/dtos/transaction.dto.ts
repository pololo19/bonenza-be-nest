import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';
import { ENUM_TRANSACTION } from 'enums';
import { IsPositiveConstraint } from 'validators';

export class transactionDto {
  @ApiProperty({
    type: 'string',
    enum: Object.keys(ENUM_TRANSACTION).map((key) => ENUM_TRANSACTION[key]),
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_TRANSACTION)
  type: ENUM_TRANSACTION;

  @ApiPropertyOptional()
  @IsDefined()
  @IsString()
  @IsOptional()
  symbol_id: string | null;

  @ApiProperty({
    default: Math.floor(Date.now() / 1000) - 24 * 60 * 60 * 360,
  })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  start_date: number;

  @ApiProperty({
    default: Math.floor(Date.now() / 1000),
  })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  end_date: number;

  @ApiProperty({
    default: 1,
  })
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

  @ApiProperty({ default: -1 })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  status: number;
}
