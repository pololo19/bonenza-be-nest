import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'entities';
import { ENUM_ROLE } from 'enums';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async _getAdminByEmail(email: string) {
    const admin = await this.UserRepository.findOne({
      where: { email, role: ENUM_ROLE.ADMIN },
    });

    return admin;
  }

  _generateToken(user: User) {
    const payload = Object.assign(
      {},
      {
        userId: user.id,
        username: user.name,
        email: user.email,
        role: user.role,
      },
    );
    const token = this.jwtService.sign(payload);
    return token;
  }

  async login(email: string, pass: string) {
    const admin = await this._getAdminByEmail(email);
    if (!admin) {
      throw new HttpException('Email not exist', 404);
    }

    if (!admin.password) {
      throw new HttpException('Password not exist', 404);
    }

    const isMatch = await bcrypt.compare(pass, admin.password);
    if (!isMatch) {
      throw new HttpException('Password not match', 400);
    }

    return {
      token: this._generateToken(admin),
    };
  }
}
