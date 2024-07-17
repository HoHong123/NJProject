import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ResponseCode } from 'src/commons/enum/error-code.enum';
import { DuckException } from 'src/commons/exception/default.exception';
import { DatabaseService } from 'src/providers/databse/database.service';
import { UserEntity } from 'src/was/entities/was.login.entity';

// 유저 DAO 핸들링 (완벽히 DAO와 Repository가 동일하지는 않다.)
// DAO : 데이터에 접근하도록 DB 접근 관련 로직을 모은 객체
// Repository : 엔티티 객체를 보관하고 관리하는 저장소
@Injectable()
export class UserRepository {
  constructor(private readonly dbService: DatabaseService) {}

  // TODO : - Return 타입 명시, Param 타입 명시 (void 타입 포함)
  //        - 비동기 함수는 반드시 Promise를 통해 반환값을 명시해야 한다.
  async create(args: Prisma.userCreateArgs) : Promise<UserEntity> {

    if (!args.data) throw new DuckException(ResponseCode.Validation, "User info is invalid.");

    return this.dbService.user.create(args);
  }

  async findUnique(args: Prisma.userFindUniqueArgs) : Promise<UserEntity> {

    if (!args.where.id) throw new DuckException(ResponseCode.Validation, "User id is invalid.");

    return this.dbService.user.findUnique(args);
  }

  async findMany(args?: Prisma.userFindManyArgs) : Promise<UserEntity[]> {

    if (!args) throw new DuckException(ResponseCode.Validation, "User info is invalid.");

    return this.dbService.user.findMany(args);
  }

  async delete(args: Prisma.userDeleteArgs) : Promise<UserEntity> {

    if (!args.where.id) throw new DuckException(ResponseCode.Validation, "User info is invalid.");

    return this.dbService.user.delete(args);
  }

  async update(args: Prisma.userUpdateArgs) : Promise<UserEntity> {

    if (!args.data) throw new DuckException(ResponseCode.Validation, "User info is invalid.");

    return this.dbService.user.update(args);
  }
}
