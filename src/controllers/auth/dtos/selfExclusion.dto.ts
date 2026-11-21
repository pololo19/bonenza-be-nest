import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class selfExclusionDto {
  @ApiProperty({ default: Date.now() + 24 * 60 * 60 * 30 * 1000 })
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  disabled_to: number;
}
