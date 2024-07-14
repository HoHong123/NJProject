import { Module } from '@nestjs/common';
import { WasModule } from './was/was.module';
import { Login } from './login/login';
import { DatabseService } from './databse.service/databse.service';

@Module({
  imports: [
    WasModule,
  ],
  providers: [Login, DatabseService],
})
export class AppModule {}
