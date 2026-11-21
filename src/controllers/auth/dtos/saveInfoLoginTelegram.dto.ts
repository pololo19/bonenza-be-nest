import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class saveInfoLoginTelegramDto {
  @ApiPropertyOptional()
  auth_date: string | number;

  @ApiPropertyOptional()
  first_name: string;

  @ApiPropertyOptional()
  last_name: string;

  @ApiPropertyOptional()
  username: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  id: string | number;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  hash: string;

  @ApiPropertyOptional()
  referral_code: string;
}
