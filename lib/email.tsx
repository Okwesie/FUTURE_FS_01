import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(to: string, subject: string, html: string, replyTo?: string): Promise<{ success: boolean; error?: string; data?: any }> {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Caleb Arthur <onboarding@resend.dev>',
      to: [to],
      subject: subject,
      html: html,
      reply_to: replyTo,
    })

    if (error) {
      console.error('Resend API error:', error)
      return { success: false, error: error.message }
    }

    console.log('Email sent successfully:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

export function generateContactNotificationEmail(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #164e63; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #164e63; }
        .value { margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #84cc16; margin-top: 10px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">From:</div>
            <div class="value">${data.firstName} ${data.lastName} (${data.email})</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${data.subject}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
          <div class="footer">
            <p>This message was sent from your portfolio contact form.</p>
            <p>You can reply directly to this email to respond to ${data.firstName}.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export function generateAutoReplyEmail(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting me!</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #164e63; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
        .greeting { font-size: 18px; margin-bottom: 20px; }
        .message { margin-bottom: 20px; }
        .timeline { background: white; padding: 15px; border-left: 4px solid #84cc16; margin: 20px 0; }
        .contact-info { background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        .social-links { text-align: center; margin: 20px 0; }
        .social-links a { display: inline-block; margin: 0 10px; color: #164e63; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank you for reaching out!</h1>
        </div>
        <div class="content">
          <div class="greeting">
            <p>Hi ${data.firstName},</p>
          </div>
          <div class="message">
            <p>Thank you for contacting me through my portfolio website. I've received your message and I'm excited to connect with you!</p>
          </div>
          <div class="timeline">
            <h3>What happens next?</h3>
            <ul>
              <li>I'll review your message within 24 hours</li>
              <li>You'll receive a personalized response from me</li>
              <li>We can schedule a call or meeting if needed</li>
            </ul>
          </div>
          <div class="contact-info">
            <h3>In the meantime, you can:</h3>
            <ul>
              <li>Check out my <a href="https://github.com/Okwesie" style="color: #164e63;">GitHub</a> for my latest projects</li>
              <li>Connect with me on <a href="https://linkedin.com/in/caleb-okwesie-arthur-29b378263" style="color: #164e63;">LinkedIn</a></li>
              <li>Email me directly at <a href="mailto:arthurcaleb12@gmail.com" style="color: #164e63;">arthurcaleb12@gmail.com</a></li>
            </ul>
          </div>
          <div class="social-links">
            <a href="https://github.com/Okwesie">GitHub</a> |
            <a href="https://linkedin.com/in/caleb-okwesie-arthur-29b378263">LinkedIn</a> |
            <a href="mailto:arthurcaleb12@gmail.com">Email</a>
          </div>
          <div class="footer">
            <p>Best regards,<br>Caleb Okwesie Arthur</p>
            <p>Computer Science Student & Software Developer<br>Ashesi University</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}
