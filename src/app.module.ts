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

const configService = new ConfigService();
console.log('=======================>,', configService.get('DATABASE_URL'));
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://mongoadmin:secret@localhost:27017/inspect?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OrderManagementModule,
    DaoModule,
    AuthModule,
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
