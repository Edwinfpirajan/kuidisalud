import { Especialista, Role, UsuarioUniversidad } from '@prisma/client';

export class CreateUserDto {
  primer_nombre: string;
  primer_apellido: string;
  segundo_nombre?: string;
  segundo_apellido?: string;
  email: string;
  password: string;
  newPassword?: string;
  codigo_usuario?: string;
  activo?: boolean;
  bloqueado?: boolean;
  conectado?: boolean;
  ultima_modif_psw?: Date;
  token?: string;
  rememberMeToken?: string;
  refreshToken?: string;
  role: Role;
  especialista?: Especialista;
  usuario_universidad?: UsuarioUniversidad;
}
