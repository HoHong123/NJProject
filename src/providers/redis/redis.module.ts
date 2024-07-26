import { Module, Global } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisService } from './redis.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        ttl: 86400, // 24 hours
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
      })
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
