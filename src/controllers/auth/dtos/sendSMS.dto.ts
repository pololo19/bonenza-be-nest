import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

import { requestType } from './verifyCode.dto';

export class sendSMSDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsPhoneNumber()
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim().toLowerCase())
  phone: string;

  @ApiProperty()
  @IsString()
  request: requestType;
}
