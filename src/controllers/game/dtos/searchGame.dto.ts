import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, Validate } from 'class-validator';
import { overThreeLengthConstraint } from 'validators';

export class searchGameDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim().toUpperCase())
  @Validate(overThreeLengthConstraint)
  search: string;
}
