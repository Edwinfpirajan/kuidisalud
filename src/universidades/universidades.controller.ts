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
import { UniversidadesService } from './universidades.service';
import { Universidad, Prisma } from '@prisma/client';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'src/users/schemas/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('universidades')
export class UniversidadesController {
  constructor(private readonly universdiadService: UniversidadesService) {}

  /* 
    Solo un usuario con permisos de administrador puede obtener
    información acerca una universidad
  */

  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll(): Promise<Universidad[]> {
    return this.universdiadService.findAll();
  }

  /* 
      Solamente usuarios pueden registrar una universidad,
      sin importar que sea un usuario normal o un administrador
  */

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() data: Universidad): Promise<Universidad> {
    return this.universdiadService.create(data);
  }

  /* 
    Solo usuarios autorizados pueden obtener información sobre universidades,
    ya sea la misma universidad o un administrador
  */

  @Roles(Role.ADMIN, Role.UNIVERSIDAD)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Universidad | null> {
    return this.universdiadService.findById(id);
  }

  /* 
    Solo usuarios autorizados pueden actualizar información sobre la universidad en cuestion,
    ya sea la misma universidad o  un administrador
  */

  @Roles(Role.ADMIN, Role.UNIVERSIDAD)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.PacienteUpdateInput,
  ): Promise<Universidad> {
    return this.universdiadService.update(+id, data);
  }

  /* 
    Solo usuarios autorizados pueden eliminar la universidad en cuestion,
    ya sea la misma universidad o un administrador
  */

  @Roles(Role.ADMIN, Role.UNIVERSIDAD)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Universidad> {
    return this.universdiadService.remove(id);
  }
}
