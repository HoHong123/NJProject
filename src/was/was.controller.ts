import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WasService } from './was.service';
import { CreateWasDto } from './dto/create-was.dto';
import { UpdateWasDto } from './dto/update-was.dto';

@Controller('was')
export class WasController {
  constructor(private readonly wasService: WasService) {}

  @Post()
  create(@Body() createWasDto: CreateWasDto) {
    return this.wasService.create(createWasDto);
  }

  @Get()
  findAll() {
    return this.wasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWasDto: UpdateWasDto) {
    return this.wasService.update(+id, updateWasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wasService.remove(+id);
  }
}
