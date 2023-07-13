import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersUniversidadService } from './users-universidad.service';
import { UsuarioUniversidad, Prisma } from '@prisma/client';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'src/users/schemas/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('users-universidad')
export class UsersUniversidadController {
  constructor(
    private readonly usersUniverisidadService: UsersUniversidadService,
  ) {}

  /* 
    Solo un usuario con permisos de administrador puede obtener
    información acerca un usuario de tipo universidad
  */

  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll(): Promise<UsuarioUniversidad[]> {
    return this.usersUniverisidadService.findAll();
  }

  /* 
      Solamente usuarios pueden crear un usuario de tipo universidad,
      sin importar que sea un usuario normal o un administrador
  */

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() data: UsuarioUniversidad): Promise<UsuarioUniversidad> {
    return this.usersUniverisidadService.create(data);
  }

  /* 
    Solo usuarios autorizados pueden obtener información sobre usuarios de tipo universidad,
    ya sea el mismo usuario, usuario universidad o un administrador
  */

  @Roles(Role.ADMIN, Role.USER, Role.UNIVERSIDAD_USER)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<UsuarioUniversidad | null> {
    return this.usersUniverisidadService.findById(id);
  }

  /* 
    Solo usuarios autorizados pueden actualizar información sobre usuarios de tipo universidad,
    ya sea el usuario universidad o un administrador
  */

  @Roles(Role.ADMIN, Role.UNIVERSIDAD_USER)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.UsuarioUniversidadUpdateInput,
  ): Promise<UsuarioUniversidad> {
    return this.usersUniverisidadService.update(+id, data);
  }

  /* 
    Solo usuarios autorizados pueden eliminar usuarios de tipo universidad,
    ya sea el usuario universidad o un administrador
  */

  @Roles(Role.ADMIN, Role.UNIVERSIDAD_USER)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<UsuarioUniversidad> {
    return this.usersUniverisidadService.remove(id);
  }
}
