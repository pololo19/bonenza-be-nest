import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  old_password: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  new_password: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  confirm_new_password: string;

  @ApiPropertyOptional()
  code_otp: string;
}
