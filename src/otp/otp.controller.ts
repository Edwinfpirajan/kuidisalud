import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { OtpService } from './otp.service';
import { OTP } from '@prisma/client';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('api/v1/otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  /* 
    Only an authorized user can 
    fetch all PriceBookEntry registered 
  */

  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll(): Promise<OTP[]> {
    return this.otpService.findAll();
  }

  /* 
    Only an authorized user can fetch PriceBookEntry by id 
  */

  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<OTP | null> {
    return this.otpService.findById(id);
  }
}
