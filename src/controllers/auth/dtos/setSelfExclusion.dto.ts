import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class setSelfExclusionDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  token: string;

  @ApiProperty({ default: Date.now() + 24 * 60 * 60 * 30 * 1000 })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  disabled_to: number;
}
