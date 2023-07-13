import { Module } from '@nestjs/common';
import { BancosService } from './bancos.service';
import { BancosController } from './bancos.controller';

@Module({
  controllers: [BancosController],
  providers: [BancosService],
})
export class BancosModule {}
