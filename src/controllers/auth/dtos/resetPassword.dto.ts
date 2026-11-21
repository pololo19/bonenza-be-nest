import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  confirm_password: string;
}
