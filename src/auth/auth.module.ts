import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { RolesGuard } from './guards/roles.guard';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { SmsService } from '../sms-service/sms-service.service'; // Twilio
import { OtpService } from 'src/otp/otp.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailerService } from 'src/mailer/mailer.service';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory() {
        return {
          secret: process.env.JWT_ACCESS_SECRET,
          signOptions: { expiresIn: '24h' },
        };
      },
    }),
    UsersModule,
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    RolesGuard,
    SmsService,
    OtpService,
    MailerService,
  ],
  exports: [
    AuthService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    PassportModule,
  ],
})
export class AuthModule {}
