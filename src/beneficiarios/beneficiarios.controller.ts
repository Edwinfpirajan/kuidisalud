import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Request
  } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { BeneficiarioDto } from './dtos/beneficiario.dto';
import { Beneficiarios } from '@prisma/client';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
  
  @Controller('api/v1/beneficiarios')
  export class BeneficiariosController {
    constructor(private readonly beneficiariosService: BeneficiariosService) {}
    
    @UseGuards(AccessTokenGuard)
    @Post()
    create(@Body() data: { beneficiario: BeneficiarioDto, email: string }) {
      return this.beneficiariosService.create(data.beneficiario, data.email);
    }
  
    @UseGuards(AccessTokenGuard)
    @Get('usuario')
    findAll(@Request() req): Promise<Beneficiarios[]> {      
      return this.beneficiariosService.findAll(req.user.id);
    }
  
    @UseGuards(AccessTokenGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.beneficiariosService.findOne(+id);
    }
    
    @UseGuards(AccessTokenGuard)
    @Patch(':id')
    update(
      @Param('id') beneficiarioId: string,
      @Body() beneficiarioDto: BeneficiarioDto,
      @Request() req
    ) {
      const id = Number(beneficiarioId);
      if (isNaN(id))
        throw Error('Id de usuario inválido');

      return this.beneficiariosService.update(id, beneficiarioDto, req.user.id);
    }
    
    @UseGuards(AccessTokenGuard)
    @Delete(':id')
    remove(@Param('id') beneficiarioId: string) {
      const id = Number(beneficiarioId);
      if (isNaN(id))
        throw Error('Id de usuario inválido');

      return this.beneficiariosService.remove(id);
    }
  }