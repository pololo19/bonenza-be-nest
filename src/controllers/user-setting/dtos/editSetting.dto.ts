import { ApiPropertyOptional } from '@nestjs/swagger';

export class editSettingDto {
  @ApiPropertyOptional()
  setting_receive_market_promotion: boolean;

  @ApiPropertyOptional()
  setting_show_full_name_currency: boolean;

  @ApiPropertyOptional()
  setting_language: string;

  @ApiPropertyOptional()
  setting_currency: string;

  @ApiPropertyOptional()
  setting_hide_user_name: boolean;

  @ApiPropertyOptional()
  setting_hide_gaming_data: boolean;

  @ApiPropertyOptional()
  setting_refuse_tip_from_strangers: boolean;

  @ApiPropertyOptional()
  email_verified: boolean;

  @ApiPropertyOptional()
  phone_verified: boolean;

  @ApiPropertyOptional()
  setting_view_in_fiat: boolean;
}
