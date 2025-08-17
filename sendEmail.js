import fs from 'fs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const htmlInlined = fs.readFileSync('./email.html', 'utf8');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'localhost',
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 1025,
  secure: !!process.env.SMTP_PORT,
  auth: process.env.SMTP_USER
    ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    : undefined,
  ignoreTLS: !process.env.SMTP_USER,
});

transporter.sendMail(
  {
    from: process.env.SMTP_USER || 'dev@example.com',
    to: process.env.TO_EMAIL || 'you@example.com',
    subject: 'Test Email Template',
    html: htmlInlined,
  },
  (err, info) => {
    if (err) {
      console.error('❌ Error sending email:', err);
    } else {
      console.log('✅ Email sent:', info.response || info);
    }
  }
);
