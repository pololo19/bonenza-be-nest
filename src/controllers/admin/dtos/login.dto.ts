import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateIf,
} from 'class-validator';

export class AdminLoginDto {
  @ApiPropertyOptional()
  @ValidateIf(
    (object, value) => value !== undefined && value !== '' && value !== null,
  )
  @IsEmail()
  @Transform(({ value }: { value: string }) => value.trim().toLowerCase())
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;
}
