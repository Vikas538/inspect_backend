import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { format } from 'winston';
import Console from 'winston-console-transport';
import { ValidationPipe } from '@nestjs/common';

const DailyRotateFile = require('winston-daily-rotate-file');

const configService = new ConfigService();
const { combine, timestamp, printf } = format;
const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ['inspect'] [${level}] [${message}]`;
});

async function bootstrap() {
  const appOptions = {
    cors: true,
    bufferLogs: true,
    logger: WinstonModule.createLogger({
      transports: [
        new DailyRotateFile({
          handleExceptions: true,
          filename: `logs/inspect-%DATE%.log`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '100m',
          JSON: true,
        }),
        new Console(),
      ],

      format: combine(timestamp(), myFormat),
    }),
  };
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.setGlobalPrefix('/api/v1');
  await app.listen(3002);
}

bootstrap();
