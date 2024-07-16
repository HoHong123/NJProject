import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/providers/databse/database.service';

@Injectable()
export class UserRepository {
  constructor(private readonly dbService: DatabaseService) {}

  // TODO : - Return 타입 명시, Param 타입 명시 (void 타입 포함)
  //        - 비동기 함수는 반드시 Promise를 통해 반환값을 명시해야 한다.
  async create(args: Prisma.userCreateArgs) {
    return this.dbService.user.create(args);
  }

  async findUnique(args: Prisma.userFindUniqueArgs) {
    return this.dbService.user.findUnique(args);
  }

  async findMany(args?: Prisma.userFindManyArgs) {
    return this.dbService.user.findMany(args);
  }

  async delete(args: Prisma.userDeleteArgs) {
    return this.dbService.user.delete(args);
  }

  async update(args: Prisma.userUpdateArgs) {
    return this.dbService.user.update(args);
  }
}
