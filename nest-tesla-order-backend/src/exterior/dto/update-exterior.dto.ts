import { PartialType } from '@nestjs/mapped-types';
import { CreateExteriorDto } from './create-exterior.dto';

export class UpdateExteriorDto extends PartialType(CreateExteriorDto) {}
