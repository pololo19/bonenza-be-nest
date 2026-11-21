import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';

export class twoPricesDto {
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
}
