import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DolenciasEspecialidadService } from './dolencias-especialidad.service';
import { CreateDolenciasEspecialidadDto } from './dto/create-dolencias-especialidad.dto';
import { UpdateDolenciasEspecialidadDto } from './dto/update-dolencias-especialidad.dto';

@Controller('dolencias-especialidad')
export class DolenciasEspecialidadController {
  constructor(
    private readonly dolenciasEspecialidadService: DolenciasEspecialidadService,
  ) {}

  @Post()
  create(
    @Body() createDolenciasEspecialidadDto: CreateDolenciasEspecialidadDto,
  ) {
    return this.dolenciasEspecialidadService.create(
      createDolenciasEspecialidadDto,
    );
  }

  @Get()
  findAll() {
    return this.dolenciasEspecialidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dolenciasEspecialidadService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDolenciasEspecialidadDto: UpdateDolenciasEspecialidadDto,
  ) {
    return this.dolenciasEspecialidadService.update(
      +id,
      updateDolenciasEspecialidadDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dolenciasEspecialidadService.remove(+id);
  }
}
