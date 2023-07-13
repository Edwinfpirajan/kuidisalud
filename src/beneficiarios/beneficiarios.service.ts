import { Injectable } from '@nestjs/common';
import { BeneficiarioDto } from './dtos/beneficiario.dto'
import { BeneficiarioMapper } from './beneficiario.mapper';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { Beneficiarios } from '@prisma/client';

@Injectable()
export class BeneficiariosService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}
  
  public async create(beneficiarioDto: BeneficiarioDto, usuarioEmail: string): Promise<any> {
    const usuario = await this.usersService.findByEmail(usuarioEmail);
    const data: Beneficiarios = BeneficiarioMapper.toEntity(beneficiarioDto, usuario.id);
    const beneficiario = await this.prisma.beneficiarios.create({data});
    
    return {id: beneficiario.id};
  }

  findAll(usuarioId: number) {
    const query = { where: { usuario_id: usuarioId } };
    return this.prisma.beneficiarios.findMany(query);
  }

  findOne(beneficiario_id: number) {
    const query = { where: { id: beneficiario_id } };
    return this.prisma.beneficiarios.findUnique(query);
  }

  public async update(id: number, beneficiarioDto: BeneficiarioDto, userId: number) {
    const query = {id}
    const data: Beneficiarios = BeneficiarioMapper.toEntity(beneficiarioDto, userId);
    return this.prisma.beneficiarios.update({where: query, data});
  }

  remove(id: number) {
    const query = {id}
    return this.prisma.beneficiarios.delete({where: query});
  }
}
