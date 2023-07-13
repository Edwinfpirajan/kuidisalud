import { PartialType } from '@nestjs/swagger';
import { CreateEspecialidadesMedicaDto } from './create-especialidades-medica.dto';

export class UpdateEspecialidadesMedicaDto extends PartialType(
  CreateEspecialidadesMedicaDto,
) {}
