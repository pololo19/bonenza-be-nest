import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { IsPositiveConstraint } from 'validators';

export class commissionRewardsDto {
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
