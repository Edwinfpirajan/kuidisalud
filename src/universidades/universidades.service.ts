import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Universidad, Prisma } from '@prisma/client';

@Injectable()
export class UniversidadesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Universidad[]> {
    return this.prisma.universidad.findMany();
  }

  async findById(id: string): Promise<Universidad | null> {
    const parse = parseInt(id, 10);
    return this.prisma.universidad.findUnique({
      where: { universidad_id: parse },
    });
  }

  async create(data: Universidad): Promise<Universidad> {
    return this.prisma.universidad.create({
      data,
    });
  }

  async update(
    id: number,
    data: Prisma.UniversidadUpdateInput,
  ): Promise<Universidad> {
    return this.prisma.universidad.update({
      where: { universidad_id: id },
      data,
    });
  }

  async remove(id: number): Promise<Universidad> {
    return this.prisma.universidad.delete({
      where: { universidad_id: Number(id) },
    });
  }
}
