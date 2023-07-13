import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioUniversidad, Prisma } from '@prisma/client';

@Injectable()
export class UsersUniversidadService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UsuarioUniversidad[]> {
    return this.prisma.usuarioUniversidad.findMany();
  }

  async findById(id: string): Promise<UsuarioUniversidad | null> {
    const parse = parseInt(id, 10);
    return this.prisma.usuarioUniversidad.findUnique({ where: { id: parse } });
  }

  async create(data: UsuarioUniversidad): Promise<UsuarioUniversidad> {
    return this.prisma.usuarioUniversidad.create({
      data,
    });
  }

  async update(
    id: number,
    data: Prisma.UsuarioUniversidadUpdateInput,
  ): Promise<UsuarioUniversidad> {
    return this.prisma.usuarioUniversidad.update({ where: { id }, data });
  }

  async remove(id: number): Promise<UsuarioUniversidad> {
    return this.prisma.usuarioUniversidad.delete({
      where: { id: Number(id) },
    });
  }
}
