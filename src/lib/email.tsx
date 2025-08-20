// Email service utility - using Resend as an example
// You can replace this with SendGrid, Nodemailer, or any other email service

interface EmailData {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: EmailData) {
  // Using Resend API (you can replace with your preferred email service)
  const RESEND_API_KEY = process.env.RESEND_API_KEY

  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not found. Email sending disabled.")
    return { success: false, error: "Email service not configured" }
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <noreply@yourdomain.com>", // Replace with your domain
        to: [to],
        subject,
        html,
        reply_to: replyTo,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Email API error: ${error}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    }
  }
}

// Generate email templates
export function generateContactNotificationEmail(contactData: {
  name: string
  email: string
  message: string
}) {
  return {
    subject: `New Contact Form Submission from ${contactData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0891b2;">New Contact Form Submission</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Contact Details</h3>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Message</h3>
          <p style="white-space: pre-wrap;">${contactData.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
          <p>This email was sent from your portfolio contact form.</p>
        </div>
      </div>
    `,
  }
}

export function generateAutoReplyEmail(name: string) {
  return {
    subject: "Thank you for contacting me!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0891b2;">Thank you for reaching out!</h2>
        
        <p>Hi ${name},</p>
        
        <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
        
        <p>I typically respond within 24-48 hours during business days.</p>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0891b2;">
          <p style="margin: 0;"><strong>What's next?</strong></p>
          <p style="margin: 10px 0 0 0;">I'll review your message and respond with more details about how we can work together or answer any questions you have.</p>
        </div>
        
        <p>Best regards,<br>Caleb Jesusegun</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
          <p>This is an automated response. Please don't reply to this email.</p>
        </div>
      </div>
    `,
  }
}
