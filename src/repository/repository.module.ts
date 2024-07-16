import { Global, Module } from '@nestjs/common';
import { UserRepository } from './user.repository/user.repository';

@Global()
@Module({
  providers: [
    UserRepository,
  ],
  exports: [
    UserRepository,
  ],
})
export class RepositoryModule {}
