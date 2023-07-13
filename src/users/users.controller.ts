import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Prisma } from '@prisma/client';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'src/users/schemas/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /* 
    Solamente un usuario con el role de administrador 
    puede obtener todos lo usuarios registrados en la 
    base de datos
  */

  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  /* 
    Todos pueden crear un usuario, pero solo otro administrador 
    puede crear un usuario con derechos de administrador
  */

  @Post()
  async create(): Promise<BadRequestException> {
    return new BadRequestException(
      "If you're trying to create a user you might use /auth/signup instead",
    );
  }

  /* 
    Solo un usuario autorizado puede obtener su propia información.
    Un usuario con derechos de administrador puede obtener la información de cualquier usuario
  */

  /*  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findById(id);
  } */
  @UseGuards(AccessTokenGuard)
  @Get(':email')
  async findById(@Param('email') email: string): Promise<User | null> {
    return this.usersService.findByEmail(email);
  }

  /* 
    Solamente un usuario autorizado puede actualizar su propia información.
    Un usuario con permisos de administrador puede actualizar la información de cualquier usuario
  */

  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.usersService.update(+id, data);
  }

  /* 
    Solamente un usuario autorizado puede eliminar su propia información.
    Un usuario con permisos de administrador puede eliminar la información de cualquier usuario
  */

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<User> {
    return this.usersService.remove(id);
  }
}
