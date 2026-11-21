import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { IsPositiveConstraint } from 'validators';

export class SystemNotificationHistoryDto {
  @ApiProperty({
    default: 0,
  })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  offset: number;

  @ApiProperty({
    default: 10,
  })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  @Validate(IsPositiveConstraint)
  limit: number;
}
