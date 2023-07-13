import { PrismaClient, Role } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const adminHash = await argon2.hash('adminpasswordsupersecure123');
  const admin = await prisma.user.create({
    data: {
      primer_nombre: 'Armando',
      primer_apellido: 'Kuidis',
      email: 'armando@kuidis.com',
      password: adminHash,
      activo: true,
      role: Role.admin,
    },
  });

  console.log('Admin user created:', admin);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
