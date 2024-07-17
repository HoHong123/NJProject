import { Module } from '@nestjs/common';
import { WasService } from './was.service';
import { EmailLoginController } from './email.login.controllers/email.login.controller';
import { EmailSignupController } from './email.login.controllers/email.signup.controller';
import { DatabaseModule } from 'src/providers/databse/database.module';
import { RepositoryModule } from 'src/repository/repository.module';
import { APP_FILTER } from '@nestjs/core';
import { DuckExceptionFilter } from 'src/commons/filter/default.exception.filter';

@Module({
  imports: [
    RepositoryModule,
    DatabaseModule,
  ],
  controllers: [
    EmailLoginController,
    EmailSignupController,
  ],
  providers: [
    WasService,
    {
      provide: APP_FILTER,
      useClass: DuckExceptionFilter,
    },
  ]
})
export class WasModule {}
