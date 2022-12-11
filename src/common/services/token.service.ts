import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ExpiryTokenTime } from 'src/constants/appConstants';
import { GetTokens, Tokens } from 'src/interfaces/auth.dto';

@Injectable()
export class TokenService {
  @Inject()
  private JwtService: JwtService;
  @Inject()
  private configService: ConfigService;

  async getTokens(data: GetTokens): Promise<Tokens> {
    const payload = {
      username: data.phoneNumber,
      hospitalId: data.userId,
      roles: data.role,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.JwtService.signAsync(payload, {
        secret: this.configService.get('JWT_SECRET_KEY') + data.userId,
        expiresIn: ExpiryTokenTime.ACCESS_TOKEN,
      }),
      this.JwtService.signAsync(payload, {
        secret: this.configService.get('REFRESH_JWT_SECRET_KEY') + data.userId,
        expiresIn: ExpiryTokenTime.REFRESH_TOKEN,
      }),
    ]);
    return { accessToken, refreshToken };
  }
  async generateNewAccessToken(
    data: GetTokens,
  ): Promise<{ accessToken: String }> {
    const payload = {
      username: data.phoneNumber,
      hospitalId: data.userId,
      role: data.role,
    };
    const [accessToken] = await Promise.all([
      this.JwtService.signAsync(payload, {
        secret: this.configService.get('JWT_SECRET_KEY') + data.userId,
        expiresIn: ExpiryTokenTime.ACCESS_TOKEN,
      }),
    ]);
    return { accessToken };
  }
}
