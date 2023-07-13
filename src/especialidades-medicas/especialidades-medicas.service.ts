import { Injectable } from '@nestjs/common';
import { CreateEspecialidadesMedicaDto } from './dto/create-especialidades-medica.dto';
import { UpdateEspecialidadesMedicaDto } from './dto/update-especialidades-medica.dto';

@Injectable()
export class EspecialidadesMedicasService {
  create(createEspecialidadesMedicaDto: CreateEspecialidadesMedicaDto) {
    return 'This action adds a new especialidadesMedica';
  }

  findAll() {
    return `This action returns all especialidadesMedicas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} especialidadesMedica`;
  }

  update(
    id: number,
    updateEspecialidadesMedicaDto: UpdateEspecialidadesMedicaDto,
  ) {
    return `This action updates a #${id} especialidadesMedica`;
  }

  remove(id: number) {
    return `This action removes a #${id} especialidadesMedica`;
  }
}
