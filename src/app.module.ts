import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { DolenciasEspecialidadModule } from './dolencias-especialidad/dolencias-especialidad.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { EspecialistasModule } from './especialistas/especialistas.module';
import { EspecialidadesMedicasModule } from './especialidades-medicas/especialidades-medicas.module';
import { UniversidadesModule } from './universidades/universidades.module';
import { BancosModule } from './bancos/bancos.module';
import { UsersUniversidadModule } from './users-universidad/users-universidad.module';
import { UsersEstudianteModule } from './users-estudiante/users-estudiante.module';
import { SmsService } from './sms-service/sms-service.service';
import { OtpModule } from './otp/otp.module';
import { MailerService } from './mailer/mailer.service';
import { BeneficiariosModule } from './beneficiarios/beneficiarios.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    BancosModule,
    DolenciasEspecialidadModule,
    EspecialistasModule,
    EspecialidadesMedicasModule,
    UsersEstudianteModule,
    OtpModule,
    PacientesModule,
    BeneficiariosModule,
    PrismaModule,
    UniversidadesModule,
    UsersModule,
    UsersUniversidadModule,
  ],
  controllers: [AppController],
  providers: [AppService, SmsService, MailerService],
})
export class AppModule {}
