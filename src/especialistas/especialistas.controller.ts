import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { EspecialistasService } from './especialistas.service';
import { CreateEspecialistaDto } from './dto/create-especialista.dto';
import { UpdateEspecialistaDto } from './dto/update-especialista.dto';
import { EspecialistaDto } from './dto/especialista.dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('especialistas')
export class EspecialistasController {
  constructor(private readonly especialistasService: EspecialistasService) {}

  
  @Post()
  create(@Body() data: { especialista: EspecialistaDto, email: string }) {
    return this.especialistasService.create(data.especialista, data.email);
  }

  @Get()
  findAll() {
    return this.especialistasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especialistasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEspecialistaDto: EspecialistaDto,
  ) {
    return this.especialistasService.update(id, updateEspecialistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especialistasService.remove(id);
  }
}
