import { Module } from '@nestjs/common';
import { CryptService } from './services/common.crypt';
import { CommonService } from './services/common.service';
import { TokenService } from './services/token.service';
import { JwtService } from '@nestjs/jwt';
@Module({
  providers: [CryptService, CommonService, TokenService, JwtService],
  exports: [CryptService, CommonService, TokenService],
})
export class CommonModule {}
