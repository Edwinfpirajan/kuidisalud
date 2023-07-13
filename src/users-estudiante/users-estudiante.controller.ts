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
import { UsersEstudianteService } from './users-estudiante.service';
import { UsuarioEstudiante, Prisma } from '@prisma/client';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'src/users/schemas/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('users-estudiante')
export class UsersEstudianteController {
  constructor(
    private readonly usersEstudianteService: UsersEstudianteService,
  ) {}

  /* 
    Solo un usuario con permisos de administrador puede obtener
    información acerca un usuario de tipo universidad
  */

  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll(): Promise<UsuarioEstudiante[]> {
    return this.usersEstudianteService.findAll();
  }

  /* 
      Solamente usuarios pueden crear un usuario de tipo universidad,
      sin importar que sea un usuario normal o un administrador
  */

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() data: UsuarioEstudiante): Promise<UsuarioEstudiante> {
    return this.usersEstudianteService.create(data);
  }

  /* 
    Solo usuarios autorizados pueden obtener información sobre usuarios de tipo universidad,
    ya sea el mismo usuario, usuario universidad o un administrador
  */

  @Roles(Role.ADMIN, Role.USER, Role.UNIVERSIDAD_USER)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<UsuarioEstudiante | null> {
    return this.usersEstudianteService.findById(id);
  }

  /* 
    Solo usuarios autorizados pueden actualizar información sobre usuarios de tipo universidad,
    ya sea el usuario universidad o un administrador
  */

  @Roles(Role.ADMIN, Role.UNIVERSIDAD_USER, Role.ESTUDIANTE)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.UsuarioEstudianteUpdateInput,
  ): Promise<UsuarioEstudiante> {
    return this.usersEstudianteService.update(+id, data);
  }

  /* 
    Solo usuarios autorizados pueden eliminar usuarios de tipo universidad,
    ya sea el usuario universidad o un administrador
  */

  @Roles(Role.ADMIN, Role.UNIVERSIDAD_USER, Role.ESTUDIANTE)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<UsuarioEstudiante> {
    return this.usersEstudianteService.remove(id);
  }
}
