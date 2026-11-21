import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class swapDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  from: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  to: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
