import { Module } from '@nestjs/common';
import { UsersUniversidadService } from './users-universidad.service';
import { UsersUniversidadController } from './users-universidad.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersUniversidadController],
  providers: [UsersUniversidadService],
  exports: [UsersUniversidadService],
  imports: [PrismaModule],
})
export class UsersUniversidadModule {}
