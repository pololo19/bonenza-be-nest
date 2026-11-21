import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Validate,
} from 'class-validator';
import { getThemeIdentifier } from 'utils';
import { IsPositiveConstraint } from 'validators';

export class themeDto {
  @ApiProperty({
    type: String,
    description:
      'Array provider IDs in JSON format(ex: ["0292a3c8-7026-4ed8-b272-a55a0b452776", "048ad1bb-45c4-4956-851e-3d3320f0af35"], [])',
  })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => {
    try {
      return JSON.parse(value);
    } catch (error) {
      return [];
    }
  })
  @IsUUID('4', { each: true })
  providers: string[];

  @ApiProperty({ default: 1 })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  @Validate(IsPositiveConstraint)
  page: number;

  @ApiProperty({ default: 20 })
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => Number(value))
  @IsNumber()
  @Validate(IsPositiveConstraint)
  page_size: number;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => getThemeIdentifier(value))
  theme: string;
}
