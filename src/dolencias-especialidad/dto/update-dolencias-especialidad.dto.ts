import { PartialType } from '@nestjs/swagger';
import { CreateDolenciasEspecialidadDto } from './create-dolencias-especialidad.dto';

export class UpdateDolenciasEspecialidadDto extends PartialType(
  CreateDolenciasEspecialidadDto,
) {}
