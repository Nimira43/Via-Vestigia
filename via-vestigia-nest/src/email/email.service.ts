import { Injectable } from '@nestjs/common'
import * as nodemailer from 'nodemailer'

@Injectable()
export class EmailService {
  private transport: nodemailer.Transporter
  // Sensitive data ommitted
  
  
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
          <a href="http://localhost:5173/callback?token=${token}&operation=register">Create Your Account</a>
        </div>
      `
    })
  }
}
