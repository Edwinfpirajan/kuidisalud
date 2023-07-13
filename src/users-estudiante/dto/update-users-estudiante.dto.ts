import { PartialType } from '@nestjs/swagger';
import { CreateUsersEstudianteDto } from './create-users-estudiante.dto';

export class UpdateUsersEstudianteDto extends PartialType(
  CreateUsersEstudianteDto,
) {}
