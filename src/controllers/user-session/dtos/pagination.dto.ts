import { ApiProperty } from '@nestjs/swagger';

export class paginationDto {
  @ApiProperty()
  limit: number | string;

  @ApiProperty()
  page: number | string;
}
