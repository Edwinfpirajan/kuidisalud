import { Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { OtpController } from './otp.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OtpController],
  providers: [OtpService],
  exports: [OtpService],
  imports: [PrismaModule],
})
export class OtpModule {}
