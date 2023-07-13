import { Module } from '@nestjs/common';
import { DolenciasEspecialidadService } from './dolencias-especialidad.service';
import { DolenciasEspecialidadController } from './dolencias-especialidad.controller';

@Module({
  controllers: [DolenciasEspecialidadController],
  providers: [DolenciasEspecialidadService],
})
export class DolenciasEspecialidadModule {}
