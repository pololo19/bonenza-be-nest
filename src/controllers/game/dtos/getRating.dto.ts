import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';

export class getRatingDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  game_id: string;
}
