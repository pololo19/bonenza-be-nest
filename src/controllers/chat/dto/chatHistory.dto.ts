import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { IsPositiveConstraint } from 'validators';

export class chatHistoryDto {
  @ApiProperty({
    default: 0,
  })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  offset: number;

  @ApiProperty({
    default: 20,
  })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  @Validate(IsPositiveConstraint)
  limit: number;
}
