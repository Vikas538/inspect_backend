import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderManagementModule } from './modules/order-management/order-management.module';
import { LoginModule } from './modules/auth/login.module';
import { DaoModule } from './dao/dao.module';
import { ConfigModule } from '@nestjs/config';
import { CtxIdMiddleware } from './common/middlewares/ctxId.middleware';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }),OrderManagementModule, LoginModule, DaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(userContext: MiddlewareConsumer) {
    userContext.apply(CtxIdMiddleware).forRoutes({ path: '/**', method: RequestMethod.ALL });
  }
}
