import { PromModule } from '@digikare/nestjs-prom';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PromModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
