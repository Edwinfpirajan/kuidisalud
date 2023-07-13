import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User | null> {
    const parse = parseInt(id, 10);
    return this.prisma.user.findUnique({ where: { id: parse } });
  }

  async create(data: User): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
