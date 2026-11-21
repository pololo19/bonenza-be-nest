import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class leaveMessageDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  text: string;
}
