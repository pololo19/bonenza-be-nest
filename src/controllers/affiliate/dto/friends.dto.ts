import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { IsPositiveConstraint } from 'validators';

export class friendsDto {
  @ApiPropertyOptional()
  user_name: string | undefined;

  @ApiPropertyOptional()
  user_id: string | undefined;

  @ApiPropertyOptional()
  registration_start_date: number | undefined;

  @ApiPropertyOptional()
  registration_end_date: number | undefined;

  @ApiPropertyOptional()
  wager_start_date: number | undefined;

  @ApiPropertyOptional()
  wager_end_date: number | undefined;

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
