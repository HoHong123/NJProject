import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { WasModule } from './was/was.module';
import { DuckExceptionFilter } from './commons/filter/default.exception.filter';
import { DatabaseService } from './providers/databse/database.service';

@Module({
  imports: [
    WasModule,
  ],
  providers: [
    DatabaseService,
  ],
})
export class AppModule {}
