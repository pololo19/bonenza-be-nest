import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordWithTokenDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;
}
