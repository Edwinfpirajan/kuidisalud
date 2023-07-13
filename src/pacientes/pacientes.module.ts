import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PacientesController],
  providers: [PacientesService],
  exports: [PacientesService],
  imports: [PrismaModule, UsersModule],
})
export class PacientesModule {}
