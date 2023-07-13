import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class MailerService {
  private readonly apiKey: string;
  private readonly senderEmail: string;

  constructor() {
    this.apiKey = process.env.SENDGRID_API_KEY;
    this.senderEmail = process.env.SENDGRID_SENDER_EMAIL;
    sgMail.setApiKey(this.apiKey);
  }

  async sendConfirmationEmail(
    toEmail: string,
    subject: string,
    html?: string,
  ): Promise<void> {
    const msg = {
      to: toEmail,
      from: this.senderEmail,
      subject: `${subject}`,
      html
    };
    await sgMail.send(msg);
  }
}
