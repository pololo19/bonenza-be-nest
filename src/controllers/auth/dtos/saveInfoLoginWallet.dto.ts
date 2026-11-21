import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class saveInfoLoginWallet {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  signature: string;

  @ApiPropertyOptional()
  referral_code: string;
}
