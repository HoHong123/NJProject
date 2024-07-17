import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/user.repository/user.repository';
import { DatabaseService } from 'src/providers/databse/database.service';
import { EmailLoginEntity, EmailUpdateEntity, UserEntity } from './entities/was.login.entity';
import { DuckException } from 'src/commons/exception/default.exception';
import { ResponseCode } from 'src/commons/enum/error-code.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class WasService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly dbService: DatabaseService,
  ) {}

  async hashingPassword(
    password : string
  ) : Promise<string>{
    // 비밀번호 해시화
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  async findUser(
    email : string
  ) : Promise<UserEntity> {
    let user = await this.userRepo.findUnique({where: { email: email }});
    if (!user) throw new DuckException(ResponseCode.NotFound, "User not found");
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

  async emailLogin(
    payload : EmailLoginEntity
  ) : Promise<string> {
    let user = await this.findUserWithPassword(payload);

    // TODO : Add session service
    // ....
    
    user = await this.userRepo.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }, // 현재 날짜와 시간으로 업데이트
    });

    return user.email;
  }

  async emailSignup(
    payload : EmailLoginEntity
  ) : Promise<string> {
    let user = await this.findUser(payload.email);
    const hashedPassword = await this.hashingPassword(payload.password);

    // 새 사용자 생성
    user = await this.userRepo.create({
      data: {
        name: 'UNKNOWN',
        email: payload.email,
        password: hashedPassword,
      },
    });

    return user.email;
  }
}
