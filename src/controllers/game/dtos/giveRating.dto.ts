import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class giveRatingDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  game_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
}
