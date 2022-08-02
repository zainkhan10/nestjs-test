import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';

// @TODO: should be in the env variables
const MONDODB_CONNECTION_STRING = "";

@Module({
  imports: [
    MongooseModule.forRoot(MONDODB_CONNECTION_STRING, { 
      dbName: "scalio-test",
     }),
    ConfigModule.forRoot(),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
