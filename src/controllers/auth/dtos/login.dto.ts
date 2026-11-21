import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  ValidateIf,
} from 'class-validator';

export class LoginDto {
  @ApiPropertyOptional()
  @ValidateIf(
    (object, value) => value !== undefined && value !== '' && value !== null,
  )
  @IsEmail()
  @Transform(({ value }: { value: string }) => value.trim().toLowerCase())
  email: string;

  @ApiPropertyOptional()
  @ValidateIf(
    (object, value) => value !== undefined && value !== '' && value !== null,
  )
  @IsPhoneNumber()
  @Transform(({ value }: { value: string }) => value.trim().toLowerCase())
  phone: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiPropertyOptional()
  code_otp: string;
}
