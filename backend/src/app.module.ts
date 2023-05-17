import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ContactModule } from './modules/contact/contact.module';
import { MessageModule } from './modules/message/message.module';
import { MulterModule } from '@nestjs/platform-express/multer';
import { memoryStorage } from 'multer';
import { ConfigModule } from '@nestjs/config';

import { getEnvPath } from './core/envs/env.helpers';
import { AuthModule } from './modules/auth/auth.module';
import { CarModule } from './modules/car/car.module';
const envFilePath: string = getEnvPath('./src/core/envs');

@Module({
  imports: [
    MessageModule,
    ContactModule,
    MysqlModule.forRoot({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'car',
    }),
    ConfigModule.forRoot({ envFilePath: envFilePath, isGlobal: true }),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    AuthModule,
    CarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
