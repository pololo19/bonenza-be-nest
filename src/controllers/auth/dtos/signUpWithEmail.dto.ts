import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignUpWithEmailDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim().toLowerCase())
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiPropertyOptional()
  referral_code: string;
}
