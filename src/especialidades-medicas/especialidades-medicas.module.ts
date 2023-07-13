import { Module } from '@nestjs/common';
import { EspecialidadesMedicasService } from './especialidades-medicas.service';
import { EspecialidadesMedicasController } from './especialidades-medicas.controller';

@Module({
  controllers: [EspecialidadesMedicasController],
  providers: [EspecialidadesMedicasService],
})
export class EspecialidadesMedicasModule {}
