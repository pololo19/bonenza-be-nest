import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class saveInfoLoginGoogleDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiPropertyOptional()
  referral_code: string;
}
