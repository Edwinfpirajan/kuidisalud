import { PartialType } from '@nestjs/swagger';
import { CreateUsersUniversidadDto } from './create-users-universidad.dto';

export class UpdateUsersUniversidadDto extends PartialType(
  CreateUsersUniversidadDto,
) {}
