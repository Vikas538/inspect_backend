import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
const configService = new ConfigService();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  console.log("========================>Port",configService.get('PORT'))
  await app.listen(configService.get('PORT'));
}
bootstrap();
