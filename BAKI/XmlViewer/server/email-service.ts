import { MailService } from '@sendgrid/mail';

const mailService = new MailService();

// Initialize SendGrid API key if available
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.warn('SENDGRID_API_KEY not configured. Email not sent.');
      return false;
    }

    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendContactFormEmail(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<boolean> {
  const recipientEmail = process.env.CONTACT_EMAIL || 'your-email@example.com';
  const fromEmail = process.env.FROM_EMAIL || 'noreply@yoursite.com';
  
  const emailHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><em>Sent from your portfolio website</em></p>
  `;

  const emailText = `
    New Contact Form Submission
    
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    
    Message:
    ${message}
    
    ---
    Sent from your portfolio website
  `;

  return await sendEmail({
    to: recipientEmail,
    from: fromEmail,
    subject: `Portfolio Contact: ${subject}`,
    text: emailText,
    html: emailHtml
  });
}