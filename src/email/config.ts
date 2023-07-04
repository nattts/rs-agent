import * as Nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import { IMailOptions } from '../types/declaration';
dotenv.config();

export const transporter = Nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS
    }
  });
  
  export const mailOptions: IMailOptions = template => {
    return {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: 'RS report',
        html: template
    }
  };