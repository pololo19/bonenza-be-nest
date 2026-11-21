import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class gameDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: { value: string }) =>
    value.split('-').join(':').toLowerCase(),
  )
  identifier: string;
}
