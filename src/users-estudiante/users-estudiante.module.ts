import { Module } from '@nestjs/common';
import { UsersEstudianteService } from './users-estudiante.service';
import { UsersEstudianteController } from './users-estudiante.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersEstudianteController],
  providers: [UsersEstudianteService],
  exports: [UsersEstudianteService],
  imports: [PrismaModule],
})
export class UsersEstudianteModule {}
