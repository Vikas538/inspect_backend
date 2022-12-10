import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderManagementModule } from './modules/order-management/order-management.module';
import { LoginModule } from './modules/auth/login.module';
import { DaoModule } from './dao/dao.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }),OrderManagementModule, LoginModule, DaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
