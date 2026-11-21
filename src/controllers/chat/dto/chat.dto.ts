import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class chatDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  reply_id: string;
}
