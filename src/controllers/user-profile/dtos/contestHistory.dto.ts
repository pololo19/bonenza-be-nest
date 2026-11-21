import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Validate,
} from 'class-validator';
import { IsPositiveConstraint } from 'validators';

export class contestHistoryDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  user_id: string;

  @ApiProperty({ default: 1 })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  @Validate(IsPositiveConstraint)
  page: number;

  @ApiProperty({ default: 5 })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  @Validate(IsPositiveConstraint)
  page_size: number;
}
