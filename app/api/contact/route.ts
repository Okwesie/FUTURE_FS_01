import { type NextRequest, NextResponse } from "next/server"
import { saveContactSubmission } from "@/lib/supabase/client"
import { sendEmail, generateContactNotificationEmail, generateAutoReplyEmail, type ContactFormData } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const contactData: ContactFormData = {
      firstName,
      lastName,
      email,
      subject,
      message,
    }

    console.log("Contact form submission:", {
      name: `${firstName} ${lastName}`,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // 1. Save to database
    const dbResult = await saveContactSubmission({
      name: `${firstName} ${lastName}`,
      email,
      subject,
      message,
    })

    if (!dbResult.success) {
      console.error("Database save failed:", dbResult.error)
      // Continue with email sending even if database fails
    }

    // 2. Send notification email to admin
    const notificationEmail = generateContactNotificationEmail(contactData)
    const notificationResult = await sendEmail(
      "arthurcaleb12@gmail.com",
      `New Contact Form Submission from ${firstName} ${lastName}`,
      notificationEmail,
      email // Reply-to set to user's email
    )

    if (!notificationResult.success) {
      console.error("Notification email failed:", notificationResult.error)
    }

    // 3. Send auto-reply email to user
    const autoReplyEmail = generateAutoReplyEmail(contactData)
    const autoReplyResult = await sendEmail(
      email,
      "Thank you for contacting me!",
      autoReplyEmail
    )

    if (!autoReplyResult.success) {
      console.error("Auto-reply email failed:", autoReplyResult.error)
    }

    // Return success even if some operations failed
    return NextResponse.json(
      {
        message: "Message sent successfully",
        data: {
          name: `${firstName} ${lastName}`,
          email,
          subject,
        },
        emailSent: notificationResult.success && autoReplyResult.success,
        savedToDatabase: dbResult.success,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
