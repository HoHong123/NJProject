import { Injectable } from '@nestjs/common';
import { CreateWasDto } from './dto/create-was.dto';
import { UpdateWasDto } from './dto/update-was.dto';

@Injectable()
export class WasService {
  create(createWasDto: CreateWasDto) {
    return 'This action adds a new was';
  }

  findAll() {
    return `This action returns all was`;
  }

  findOne(id: number) {
    return `This action returns a #${id} was`;
  }

  update(id: number, updateWasDto: UpdateWasDto) {
    return `This action updates a #${id} was`;
  }

  remove(id: number) {
    return `This action removes a #${id} was`;
  }
}
