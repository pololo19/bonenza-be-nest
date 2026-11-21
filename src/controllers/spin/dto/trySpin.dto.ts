import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEnum, IsNotEmpty } from 'class-validator';
import { ENUM_SPIN_BONUS } from 'enums';

export class trySpinDto {
  @ApiProperty({
    type: 'enum',
    enum: ENUM_SPIN_BONUS,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ENUM_SPIN_BONUS)
  type: ENUM_SPIN_BONUS;
}
