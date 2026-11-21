import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class stripePaymentIntentDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: { value: string }) => value.toUpperCase())
  currency: string;
}
