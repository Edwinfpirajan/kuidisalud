import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request
} from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { Paciente, Prisma } from '@prisma/client';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'src/users/schemas/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/pacientes')
export class PacientesController {
  constructor(private readonly pacienteService: PacientesService) {}

  /* 
    Solo un usuario con permisos de administrador puede obtener
    información acerca un usuario de tipo paciente
  */

  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll(): Promise<Paciente[]> {
    return this.pacienteService.findAll();
  }

  /* 
      Solamente usuarios pueden crear un usuario de tipo paciente,
      sin importar que sea un usuario normal o un administrador
  */

  // @Roles(Role.ADMIN, Role.USER)
  //@UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(
    @Body() data: { paciente: Paciente; email: string },
  ): Promise<Paciente> {
    return this.pacienteService.createPatient(data.paciente, data.email);
  }
  //@Roles(Role.ADMIN, Role.USER, Role.ESPECIALISTA, Role.PACIENTE)
  //@UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get('usuario')
  async findByUserId(@Request() req): Promise<Paciente | null> {
    return this.pacienteService.findByUserId(req.user.id);
  }

  /* 
    Solo usuarios autorizados pueden obtener información sobre usuarios de tipo paciente,
    ya sea el mismo usuario(paciente), usuario especialista o un administrador
  */

  //@Roles(Role.ADMIN, Role.USER, Role.ESPECIALISTA, Role.PACIENTE)
  //@UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Paciente | null> {
    return this.pacienteService.findById(id);
  }

  /* 
    Solo usuarios autorizados pueden actualizar información sobre usuarios de tipo paciente,
    ya sea el mismo usuario(paciente), usuario especialista o un administrador
  */

  @Roles(Role.ADMIN, Role.USER, Role.ESPECIALISTA, Role.PACIENTE)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.PacienteUpdateInput,
  ): Promise<Paciente> {
    return this.pacienteService.update(+id, data);
  }

  /* 
    Solo usuarios autorizados pueden eliminar información sobre usuarios de tipo paciente,
    ya sea el mismo usuario(paciente), usuario especialista o un administrador
  */

  @Roles(Role.ADMIN, Role.USER, Role.ESPECIALISTA, Role.PACIENTE)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Paciente> {
    return this.pacienteService.remove(id);
  }
}
