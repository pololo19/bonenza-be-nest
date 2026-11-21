import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class sendTipDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  receiver_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  symbol_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
