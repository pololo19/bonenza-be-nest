import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class SignUpWithPhoneDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsPhoneNumber()
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim().toLowerCase())
  phone: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiPropertyOptional()
  referral_code: string;
}
