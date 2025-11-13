import nodemailer from 'nodemailer';

// ✅ CORRECT: Use createTransport (not createTransporter)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "ah770643@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "tzhixkiirkcpahrq",
  },
});

// Verify transporter configuration
transporter.verify(function (error: any, success: any) {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email server is ready to take messages');
  }
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, from }: EmailOptions) {
  try {
    const mailOptions = {
      from: from || process.env.EMAIL_USER || "ah770643@gmail.com",
      to,
      subject,
      html,
    };

    console.log('Attempting to send email to:', to);
    
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    
    return { 
      success: true, 
      messageId: result.messageId 
    };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
}