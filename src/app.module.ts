import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderManagementModule } from './modules/order-management/order-management.module';
import { AuthModule } from './modules/auth/auth.module';
import { DaoModule } from './dao/dao.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CtxIdMiddleware } from './common/middlewares/ctxId.middleware';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://@localhost:27017/inspect?authSource=admin&readPreference=primary',
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OrderManagementModule,
    AuthModule,
    DaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(userContext: MiddlewareConsumer) {
    userContext
      .apply(CtxIdMiddleware)
      .forRoutes({ path: '/**', method: RequestMethod.ALL });
  }
}
