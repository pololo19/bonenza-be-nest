import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { requestType } from './verifyCode.dto';

export class sendMailDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim().toLowerCase())
  email: string;

  @ApiProperty()
  @IsString()
  request: requestType;
}
