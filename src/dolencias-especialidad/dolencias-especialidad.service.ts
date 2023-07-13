import { Injectable } from '@nestjs/common';
import { CreateDolenciasEspecialidadDto } from './dto/create-dolencias-especialidad.dto';
import { UpdateDolenciasEspecialidadDto } from './dto/update-dolencias-especialidad.dto';

@Injectable()
export class DolenciasEspecialidadService {
  create(createDolenciasEspecialidadDto: CreateDolenciasEspecialidadDto) {
    return 'This action adds a new dolenciasEspecialidad';
  }

  findAll() {
    return `This action returns all dolenciasEspecialidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dolenciasEspecialidad`;
  }

  update(
    id: number,
    updateDolenciasEspecialidadDto: UpdateDolenciasEspecialidadDto,
  ) {
    return `This action updates a #${id} dolenciasEspecialidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} dolenciasEspecialidad`;
  }
}
