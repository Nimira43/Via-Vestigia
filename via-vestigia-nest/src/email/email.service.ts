import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'

@Injectable()
export class EmailService {
  private transport: nodemailer.Transporter

  constructor(private configService: ConfigService) {
    this.transport = nodemailer.createTransport({
      host: this.configService.get<string>('EMAIL_HOST'),
      port: this.configService.get<number>('EMAIL_PORT'),
      auth: {
        user: this.configService.get<string>('EMAIL_USERNAME'),
        pass: this.configService.get<string>('EMAIL_PASSWORD')
      }
    })
  }
 
  async sendSignUpEmail(
    email: string,
    token: string  
  ): Promise<void> {
    this.transport.sendMail({
      from: 'info@my-app.com',
      to: email,
      subject: 'Finish creating your accoun on My App.',
      html: `
        <h1>You are almost there</h1>
        <span>Click the link below to confirm you email and finish creating your My App account.</span>
        <div>
          <a href="${this.configService.get<string>('CLIENT_HOST')}}/callback?token=${token}&operation=register">Create Your Account</a>
        </div>
      `
    })
  }
}
