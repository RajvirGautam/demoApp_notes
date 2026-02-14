
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: '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'
  }
});

transporter.sendMail({
  from: 'rajvirgautam8855@gmail.com',
  to: 'rajvirgautam8855@gmail.com',
  subject: 'Test from SendGrid',
  text: 'If you receive this, SendGrid works!'
}).then(info => {
  console.log('✅ Email sent:', info.messageId);
}).catch(err => {
  console.error('❌ Error:', err.message);
});
