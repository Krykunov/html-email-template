import fs from 'fs';
import nodemailer from 'nodemailer';

const html = fs.readFileSync('./email.html', 'utf8');

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  ignoreTLS: true,
});

transporter.sendMail(
  {
    from: 'dev@example.com',
    to: 'you@example.com',
    subject: 'Test Email Template',
    html,
  },
  (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent:', info);
    }
  }
);
