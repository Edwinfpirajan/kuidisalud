import { Especialista, Role, UsuarioUniversidad } from '@prisma/client';

export interface ExtendedData {
  _id?: number;
  primer_nombre?: string;
  primer_apellido?: string;
  segundo_nombre?: string;
  segundo_apellido?: string;
  email?: string;
  password?: string;
  codigo_usuario?: string;
  role?: Role;
  activo?: boolean;
  bloqueado?: boolean;
  conectado?: boolean;
  ultima_modif_psw?: Date;
  token?: string;
  rememberMeToken?: string;
  refreshToken?: string;
  especialista?: Especialista;
  usuario_universidad?: UsuarioUniversidad;
}
