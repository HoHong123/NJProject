import { Request } from 'express';
import { RedisService } from 'src/providers/redis/redis.service';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { DuckException } from 'src/commons/exception/default.exception';
import { ResponseCode } from 'src/commons/enum/error-code.enum';


@Injectable()
export class SessionAuthGuard implements CanActivate {
  constructor(private readonly redisService: RedisService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    
    // TODO : 세션 ignore decorator 적용하기

    const sessionId = request.cookies['SESSION_ID']; // 저장된 세션 아이디를 유추

    if (!sessionId) {
      throw new DuckException(ResponseCode.NotFound, 'Session ID not found');
    }

    const session = await this.redisService.getCacheValue(sessionId);

    if (!session) {
      throw new DuckException(ResponseCode.NotFound, 'Invalid session');
    }
    
    return true;
  }
}
