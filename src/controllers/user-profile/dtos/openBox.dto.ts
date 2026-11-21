import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class openBoxDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsIn(['5', '10', 'max'])
  box: string;
}
