import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class withdrawDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  symbol_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  network_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  withdraw_address: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  withdraw_amount: number;
}
