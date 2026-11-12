import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DataService } from '../data/data.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly data: DataService,
    private readonly jwt: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.data.authenticate(username, password);
    if (!user) throw new UnauthorizedException('Tên đăng nhập hoặc mật khẩu không chính xác');
    return {
      accessToken: await this.jwt.signAsync({ sub: user.id, username: user.username, role: user.role }),
      user,
    };
  }
}
