import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'modules/admin/auth.service';

import { AdminLoginDto } from './dtos';

@ApiTags('Admin - Auth')
@Controller('admin/auth')
export class AdminAuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: AdminLoginDto) {
    return await this.authService.login(body.email, body.password);
  }
}
