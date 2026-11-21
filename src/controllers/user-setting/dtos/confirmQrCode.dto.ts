import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class confirmQRcodeDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  code_otp: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;
}
