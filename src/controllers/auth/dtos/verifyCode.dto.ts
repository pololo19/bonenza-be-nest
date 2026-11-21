import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsPhoneNumber, IsString, ValidateIf } from 'class-validator';

export type requestType = 'reset' | '';
export type requestTool = 'email' | 'phone';

export class verifyCodeDto {
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
  @IsString()
  code: string;

  @ApiPropertyOptional()
  request: requestType;
}
