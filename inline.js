import fs from 'fs';
import juice from 'juice';
import { exec } from 'child_process';

const source = fs.readFileSync('email-source.html', 'utf8');
const inlined = juice(source);

fs.writeFileSync('email.html', inlined);

if (process.argv.includes('--send')) {
  exec('node sendEmail.js', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error sending email:', error);
    } else {
      console.log(stdout);
    }
  });
}
