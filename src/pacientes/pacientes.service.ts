import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Paciente, User, Prisma, Role } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';

@Injectable()
export class PacientesService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async findAll(): Promise<Paciente[]> {
    return this.prisma.paciente.findMany();
  }

  async findById(id: string): Promise<Paciente | null> {
    const parse = parseInt(id, 10);
    return this.prisma.paciente.findUnique({ where: { paciente_id: parse } });
  }

  async findByUserId(id: number): Promise<Paciente | null> {
    return this.prisma.paciente.findUnique({ where: { usuario_id: id } });
  }

  async create(data: Paciente): Promise<Paciente> {
    return this.prisma.paciente.create({
      data,
    });
  }

  async createPatient(data: CreatePacienteDto, email: string): Promise<any> {
    const user: User = await this.usersService.findByEmail(email);
    let paciente: Paciente = await this.findByUserId(user.id);
    if (paciente) {
      throw new BadRequestException('Paciente ya registrado');
    }
    const newUser = {
      user_roles: ['user', 'paciente'] as Role[],
    };
    
    await this.usersService.update(user.id, newUser);
    
    paciente = {
      createdAt: new Date(),
      updatedAt: new Date(),
      paciente_id: undefined,
      tipo_dependencia: 0,
      primer_nombre: user.primer_nombre,
      segundo_nombre: user.segundo_nombre,
      primer_apellido: user.primer_apellido,
      segundo_apellido: user.segundo_apellido,
      codigo_postal: data.codigo_postal,
      direccion: data.direccion,
      es_usuario_principal: data.es_usuario_principal,
      fecha_nacimiento: new Date(data.fecha_nacimiento),
      genero: data.genero,
      nro_documento: data.nro_documento,
      sexo: 'I',
      pais_id: 0,
      Pais: data.Pais,
      estado_id: 0,
      ciudad_id: 0,
      municipio_id: 0,
      MunicipioCiudad: data.MunicipioCiudad,
      delegacion_id: 0,
      Delegacion: data.Delegacion,
      Estado: data.Estado,
      telefono_fijo: data.telefono_fijo,
      telefono_movil: data.telefono_movil,
      tipo_documento: data.tipo_documento,
      usuario_id: user.id
    }
    
    return await this.create(paciente);
  }

  async update(
    id: number,
    data: Prisma.UsuarioUniversidadUpdateInput,
  ): Promise<Paciente> {
    return this.prisma.paciente.update({ where: { paciente_id: id }, data });
  }

  async remove(id: number): Promise<Paciente> {
    return this.prisma.paciente.delete({
      where: { paciente_id: Number(id) },
    });
  }
}
