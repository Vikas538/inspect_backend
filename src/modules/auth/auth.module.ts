import { Module } from '@nestjs/common';
import { DaoModule } from 'src/dao/dao.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
    providers: [AuthService],
  imports:[DaoModule]
})
export class AuthModule {}
