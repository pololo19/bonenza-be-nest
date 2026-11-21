import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class userSessionDeleteDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  user_session_id: string;
}
