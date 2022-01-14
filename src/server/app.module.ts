import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: '' })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
