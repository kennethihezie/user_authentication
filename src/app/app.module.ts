import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Constants } from 'src/utils/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),

    MongooseModule.forRootAsync({
      inject: [ ConfigService ],
      useFactory: (config: ConfigService) => {
        return {
          uri: config.get<string>(Constants.DATABASE_URL),
          dbName: config.get<string>(Constants.DATABASE_NAME),
          user: config.get<string>(Constants.DATABSE_USER_NAME),
          pass: config.get<string>(Constants.DATABASE_PASS)
        }
      }
    }),

    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
