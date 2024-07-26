import { Module } from '@nestjs/common';
import { WasModule } from './was/was.module';
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
