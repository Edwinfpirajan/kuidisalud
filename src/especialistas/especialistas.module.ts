import { Module } from '@nestjs/common';
import { EspecialistasService } from './especialistas.service';
import { EspecialistasController } from './especialistas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [EspecialistasController],
  providers: [EspecialistasService],
  imports: [PrismaModule, UsersModule]
})
export class EspecialistasModule {}
