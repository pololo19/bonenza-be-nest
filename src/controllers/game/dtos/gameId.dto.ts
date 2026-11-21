import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class gameIdDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  game_id: string;
}
