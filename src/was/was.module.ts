import { Module } from '@nestjs/common';
import { WasService } from './was.service';
import { WasController } from './was.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [
    WasController
  ],
  providers: [
    WasService
  ],
  imports: [
    AuthModule,
  ]
})
export class WasModule {}
