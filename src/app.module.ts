import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderManagementModule } from './modules/order-management/order-management.module';
import { ControllerModule } from './controller/controller.module';
import { LoginModule } from './modules/login/login.module';
import { DaoModule } from './dao/dao.module';

@Module({
  imports: [OrderManagementModule, ControllerModule, LoginModule, DaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
