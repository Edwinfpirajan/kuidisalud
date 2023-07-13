import { Injectable, NotFoundException } from '@nestjs/common';
import { EspecialistaDto } from './dto/especialista.dto';
import { EspecialistaMapper } from './especialistas.mapper';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Especialista } from '@prisma/client';


@Injectable()
export class EspecialistasService {

  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ){}

  async create(especialistaDto: EspecialistaDto, email: string): Promise<any> {

    // const data: Especialista = EspecialistaMapper
    const usuario = await this.usersService.findByEmail(email)
    console.log(usuario);
    const dto: Especialista =  EspecialistaMapper.toEntity(especialistaDto, usuario.id)
    const especialista = await this.prisma.especialista.create({data : dto})
    return {id: especialista.especialista_id};
  }

  // findAll() Promise<Especialista[]>{
  //   const query = { where: { usuario_id: usuarioId } }
  //   return this.prisma.especialista.findMany(query)
  // }

  async findAll(): Promise<Especialista[]>{
    return this.prisma.especialista.findMany()
  }

  findOne(id: string) {
    return this.prisma.especialista.findUnique({
      where: { especialista_id: parseInt(id)}
    })
  }

  async update(id: string, especialistaDto: EspecialistaDto) {

    const especialista = await this.prisma.especialista.findUnique({
      where: { especialista_id: parseInt(id) },
    });
  
    if (!especialista) {
      throw new NotFoundException('El especialista no existe');
    }

    const updatedEspecialista = await this.prisma.especialista.update({
      where: { especialista_id: parseInt(id) },
      data: especialistaDto
    });
  
    return updatedEspecialista;
  }

  async remove(id: string): Promise<{ message: string }> {

    const especialista = await this.prisma.especialista.findUnique({
      where: {especialista_id: parseInt(id)}
    })

    if (!especialista){
      throw new NotFoundException('El especialista no existe')
    }

    await this.prisma.especialista.delete({
      where: { especialista_id: parseInt(id)}
    })

    return { message: 'Especialista eliminado correctamente'}
  }
}
