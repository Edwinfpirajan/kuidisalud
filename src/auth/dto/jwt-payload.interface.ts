import { Role } from '@prisma/client';

export interface IJwtPayload {
  id: number;
  name: string;
  email?: string;
  role: Role;
  born?: Date; // Token is created
}
