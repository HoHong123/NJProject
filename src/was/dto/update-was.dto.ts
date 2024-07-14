import { PartialType } from '@nestjs/mapped-types';
import { CreateWasDto } from './create-was.dto';

export class UpdateWasDto extends PartialType(CreateWasDto) {}
