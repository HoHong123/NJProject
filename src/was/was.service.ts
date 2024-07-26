import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/user.repository/user.repository';
import { DatabaseService } from 'src/providers/databse/database.service';
import { EmailLoginEntity, EmailSignupEntity, SessionLoginEntity, UserEntity } from './entities/was.login.entity';
import { DuckException } from 'src/commons/exception/default.exception';
import { ResponseCode } from 'src/commons/enum/error-code.enum';
import { RedisService } from 'src/providers/redis/redis.service';
import { v1 as uuid } from 'uuid'
import * as bcrypt from 'bcrypt';

@Injectable()
export class WasService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly dbService: DatabaseService,
    private readonly redisService: RedisService,
  ) {}

  async hashingPassword(
    password : string
  ) : Promise<string>{
    // 비밀번호 암호화
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  async findUser(
    email : string
  ) : Promise<UserEntity> {
    let user = await this.userRepo.findUnique({where: { email: email }});
    return user;
  }
  
  async findUserWithPassword(
    payload : EmailLoginEntity
  ) : Promise<UserEntity> {
    const hashedPassword = await this.hashingPassword(payload.password);

    let user = await this.userRepo.findUnique({
      where: {
        email: payload.email,
        password: hashedPassword
      }
    });

    if (!user) throw new DuckException(ResponseCode.NotFound, "User not found");

    return user;
  }

  async sessionLogin(
    payload : SessionLoginEntity
  ) : Promise<string> {
    const id = this.redisService.getCacheValue(payload.cachedId);

    if (!id) throw new DuckException(ResponseCode.NotFound, "Cache not found.");

    return id;
  }

  async emailLogin(
    payload : EmailLoginEntity
  ) : Promise<string> {
    let user = await this.findUserWithPassword(payload);
    if (!user) throw new DuckException(ResponseCode.NotFound, "User not found.");

    user = await this.userRepo.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }, // 현재 날짜와 시간으로 업데이트
    });

    const uid = uuid();
    await this.redisService.setCacheKey(uid, user.email);
    
    return uid;
  }

  async emailSignup(
    payload : EmailSignupEntity
  ) : Promise<string> {
    let user = await this.findUser(payload.email);
    if (user) throw new DuckException(ResponseCode.Conflict, "User already exist!");

    const hashedPassword = await this.hashingPassword(payload.password);

    // 새 사용자 생성
    user = await this.userRepo.create({
      data: {
        name: payload.name,
        email: payload.email,
        password: hashedPassword
      }
    });

    

    return user.email;
  }
}
