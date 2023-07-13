import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioEstudiante, Prisma } from '@prisma/client';

@Injectable()
export class UsersEstudianteService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UsuarioEstudiante[]> {
    return this.prisma.usuarioEstudiante.findMany();
  }

  async findById(id: string): Promise<UsuarioEstudiante | null> {
    const parse = parseInt(id, 10);
    return this.prisma.usuarioEstudiante.findUnique({
      where: { usuario_id: parse },
    });
  }

  async create(data: UsuarioEstudiante): Promise<UsuarioEstudiante> {
    return this.prisma.usuarioEstudiante.create({
      data,
    });
  }

  async update(
    id: number,
    data: Prisma.UsuarioEstudianteUpdateInput,
  ): Promise<UsuarioEstudiante> {
    return this.prisma.usuarioEstudiante.update({
      where: { usuario_id: id },
      data,
    });
  }

  async remove(id: number): Promise<UsuarioEstudiante> {
    return this.prisma.usuarioEstudiante.delete({
      where: { usuario_id: Number(id) },
    });
  }
}
