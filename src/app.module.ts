import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { DEFAULT_ENV_FILE, ALL_KEY_CONSTANTS } from "./app.constants";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {config} from "./config/envs/env.config";

@Module({
  imports: [
    ConfigModule.forRoot(
        {
          isGlobal: true,
          envFilePath : DEFAULT_ENV_FILE,
          load : [config]
        },
    ),
    MongooseModule.forRootAsync({
      imports : [ConfigModule],
      useFactory : async (configService : ConfigService) => ({
        uri : configService.get<string>(ALL_KEY_CONSTANTS.MONGODB),
        useNewUrlParser : true,
        useUnifiedTopology : true
      }),
      inject : [ConfigService]
    }),
  ]
})
export class AppModule {}
