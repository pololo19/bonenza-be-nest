import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class reportCommentDto {
  @ApiPropertyOptional()
  @IsUUID('4', { message: 'Invalid UUID format' })
  @IsOptional()
  comment_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  reason: string;
}
