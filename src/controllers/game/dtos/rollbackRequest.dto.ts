import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class rollbackActionDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  action: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  action_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  original_action_id: string;
}

export class rollbackRequestDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  game: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  game_id: string | null;

  @ApiPropertyOptional()
  finished: boolean | null;

  @ApiProperty({ type: [rollbackActionDto] })
  actions: rollbackActionDto[];
}
