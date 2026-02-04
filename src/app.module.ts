import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), AlbumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
