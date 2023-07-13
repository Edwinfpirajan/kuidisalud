import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OTP, Prisma } from '@prisma/client';

@Injectable()
export class OtpService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<OTP[]> {
    return this.prisma.oTP.findMany();
  }

  async findById(id: string): Promise<OTP | null> {
    const parse = parseInt(id, 10);
    return this.prisma.oTP.findUnique({ where: { id: parse } });
  }

  /*   async create(data: OTP): Promise<OTP> {
    return this.prisma.oTP.create({
      data,
    });
  } */

  async create(otpData: {
    code: string;
    timestamp: Date;
    userId: number;
  }): Promise<OTP> {
    const { code, timestamp, userId } = otpData;

    const otp = await this.prisma.oTP.create({
      data: {
        code,
        timestamp,
        user: {
          connect: { id: userId },
        },
      },
    });

    return otp;
  }

  async update(id: number, data: Prisma.OTPUpdateInput): Promise<OTP> {
    return this.prisma.oTP.update({ where: { id }, data });
  }

  async remove(id: number): Promise<OTP> {
    return this.prisma.oTP.delete({
      where: { id: Number(id) },
    });
  }
}
