import { Injectable } from '@nestjs/common';
import * as Twilio from 'twilio';

@Injectable()
export class SmsService {
  private twilioClient: Twilio.Twilio;

  constructor() {
    this.twilioClient = Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }

  async sendSMS(to: string, body: string) {
    const message = await this.twilioClient.messages.create({
      to,
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
    });
    return message;
  }
}
