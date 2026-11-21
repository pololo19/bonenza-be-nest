import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class redeemDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  code: string;
}
