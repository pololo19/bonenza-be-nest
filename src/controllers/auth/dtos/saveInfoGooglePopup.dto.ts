import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class saveInfoLoginGooglePopupDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  token: string;

  @ApiPropertyOptional()
  referral_code: string;
}
