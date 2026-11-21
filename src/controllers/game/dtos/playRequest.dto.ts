import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class playActionDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  action: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  amount: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  action_id: string;

  @ApiPropertyOptional()
  jackpot_contribution: number | null;

  @ApiPropertyOptional()
  jackpot_win: number | null;
}

export class playRequestDto {
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

  @ApiPropertyOptional()
  game: string;

  @ApiPropertyOptional()
  game_id: string | null | undefined;

  @ApiPropertyOptional()
  finished: boolean | null | undefined;

  @ApiPropertyOptional()
  actions: playActionDto[] | null | undefined;
}
