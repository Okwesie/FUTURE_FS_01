import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "../../../lib/supabase/server"
import { sendEmail, generateContactNotificationEmail, generateAutoReplyEmail } from "../../../lib/email"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Contact form API called")
    const body = await request.json()
    console.log("[v0] Request body:", body)

    const { firstName, lastName, email, subject, message } = body

    // Combine first and last name
    const name = `${firstName || ""} ${lastName || ""}`.trim()
    console.log("[v0] Processed name:", name)

    // Validate required fields
    if (!firstName || !email || !message) {
      console.log("[v0] Validation failed - missing required fields")
      return NextResponse.json({ error: "First name, email, and message are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("[v0] Email validation failed:", email)
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    console.log("[v0] Creating Supabase client...")
    const supabase = await createClient()

    console.log("[v0] Attempting to insert into database...")
    const { data: contactData, error: dbError } = await supabase
      .from("contacts")
      .insert({
        name: name,
        email: email.trim().toLowerCase(),
        subject: subject?.trim() || "No subject",
        message: message.trim(),
      })
      .select()
      .single()

    if (dbError) {
      console.error("[v0] Database error:", dbError)
      return NextResponse.json({ error: "Failed to save contact information" }, { status: 500 })
    }

    console.log("[v0] Database insert successful:", contactData)

    const contactFormData = {
      name: name,
      email: email.trim(),
      subject: subject?.trim() || "No subject",
      message: message.trim(),
    }

    console.log("[v0] Sending notification email...")
    const notificationEmail = generateContactNotificationEmail(contactFormData)
    const notificationResult = await sendEmail({
      to: "arthurcaleb12@gmail.com", // Your actual email from the contact form
      subject: notificationEmail.subject,
      html: notificationEmail.html,
      replyTo: email.trim(),
    })
    console.log("[v0] Notification email result:", notificationResult)

    console.log("[v0] Sending auto-reply email...")
    // Send auto-reply email to the person who contacted you
    const autoReplyEmail = generateAutoReplyEmail(name)
    const autoReplyResult = await sendEmail({
      to: email.trim(),
      subject: autoReplyEmail.subject,
      html: autoReplyEmail.html,
    })
    console.log("[v0] Auto-reply email result:", autoReplyResult)

    // Log email results (optional)
    if (!notificationResult.success) {
      console.warn("Failed to send notification email:", notificationResult.error)
    }

    if (!autoReplyResult.success) {
      console.warn("Failed to send auto-reply email:", autoReplyResult.error)
    }

    console.log("[v0] Contact form processing completed successfully")
    return NextResponse.json({
      message: "Thank you for your message! I will get back to you soon.",
      success: true,
      id: contactData.id,
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
