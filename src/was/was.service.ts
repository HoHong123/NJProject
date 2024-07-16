import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/user.repository/user.repository';
import { DatabaseService } from 'src/providers/databse/database.service';
import { EmailLoginEntity } from './entities/was.login.entity';
import { DuckException } from 'src/commons/exception/default.exception';
import { ErrorCode } from 'src/commons/enum/error-code.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class WasService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly dbService: DatabaseService,
  ) {}

  async emailLogin(
    payload : EmailLoginEntity
  ) : Promise<string> {
    // 비밀번호 해시화
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(payload.password, saltRounds);

    let user = await this.userRepo.findUnique({
      where: {
        email: payload.email,
        password: hashedPassword
      },
    });

    if (!user) {
      throw new DuckException(ErrorCode.NotFound, "User not found");
    }

    // TODO : Add session service
    // ....
    
    user = await this.userRepo.update({
      where: {
        id: user.id,
      },
      data: {
        lastLogin: new Date(), // 현재 날짜와 시간으로 업데이트
      },
    });

    return user.email;
  }

  async emailSignup(
    payload : EmailLoginEntity
  ) : Promise<any> {
    // 암호화한 비밀번호에 솔트 값을 추가로 넣어서 저장하는 방법 고려
    let user = await this.userRepo.findUnique({
      where: {
        email: payload.email
      },
    });

    if (user) {
      throw new DuckException(ErrorCode.Conflict, "User already exist.");
    }
    
    // 비밀번호 해시화
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(payload.password, saltRounds);

    // 새 사용자 생성
    user = await this.userRepo.create({
      data: {
        name: 'UNKNOWN',
        email: payload.email,
        password: hashedPassword,
      },
    });

    return user;
  }
}
