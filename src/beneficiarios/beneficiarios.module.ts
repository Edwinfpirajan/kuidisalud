import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { BeneficiariosController } from './beneficiarios.controller';
import { BeneficiariosService } from './beneficiarios.service';

@Module({
  controllers: [BeneficiariosController],
  providers: [BeneficiariosService],
  exports: [BeneficiariosService],
  imports: [PrismaModule, UsersModule]
})
export class BeneficiariosModule {}
