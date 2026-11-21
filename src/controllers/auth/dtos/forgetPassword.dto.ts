import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class forgetPasswordDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim().toLowerCase())
  email: string;
}
