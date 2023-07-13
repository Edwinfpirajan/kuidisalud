import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EspecialidadesMedicasService } from './especialidades-medicas.service';
import { CreateEspecialidadesMedicaDto } from './dto/create-especialidades-medica.dto';
import { UpdateEspecialidadesMedicaDto } from './dto/update-especialidades-medica.dto';

@Controller('especialidades-medicas')
export class EspecialidadesMedicasController {
  constructor(
    private readonly especialidadesMedicasService: EspecialidadesMedicasService,
  ) {}

  @Post()
  create(@Body() createEspecialidadesMedicaDto: CreateEspecialidadesMedicaDto) {
    return this.especialidadesMedicasService.create(
      createEspecialidadesMedicaDto,
    );
  }

  @Get()
  findAll() {
    return this.especialidadesMedicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especialidadesMedicasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEspecialidadesMedicaDto: UpdateEspecialidadesMedicaDto,
  ) {
    return this.especialidadesMedicasService.update(
      +id,
      updateEspecialidadesMedicaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especialidadesMedicasService.remove(+id);
  }
}
