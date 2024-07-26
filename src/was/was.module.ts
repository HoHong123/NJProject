import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { WasService } from './was.service';
import { RedisModule } from 'src/providers/redis/redis.module';
import { DatabaseModule } from 'src/providers/databse/database.module';
import { RepositoryModule } from 'src/repository/repository.module';
import { DuckExceptionFilter } from 'src/commons/filter/default.exception.filter';
import { EmailLoginController } from './login/email.login/email.login.controllers/email.login.controller';
import { EmailSignupController } from './login/email.login/email.login.controllers/email.signup.controller';
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { SessionAuthGuard } from './login/session.login/session.login.guard/session.guard';

@Module({
  imports: [
    RepositoryModule,
    DatabaseModule,
    RedisModule,
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
    {
      provide: APP_GUARD,
      useClass: SessionAuthGuard,
    }
  ]
})
export class WasModule {}
