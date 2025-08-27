import { NextResponse } from "next/server"
import { saveContactSubmission, getRecentContacts } from "@/lib/supabase/client"
import { sendEmail, generateContactNotificationEmail, generateAutoReplyEmail } from "@/lib/email"

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      resendApiKey: !!process.env.RESEND_API_KEY,
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }

    console.log("Environment check:", envCheck)

    // Test database connectivity
    const dbTest = await getRecentContacts(1)
    console.log("Database test:", dbTest)

    // Test email functionality with a sample submission
    const testData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      subject: "System Test",
      message: "This is a test message to verify the email system is working.",
    }

    // Test database save
    const saveTest = await saveContactSubmission({
      name: `${testData.firstName} ${testData.lastName}`,
      email: testData.email,
      subject: testData.subject,
      message: testData.message,
    })

    // Test email sending (only if Resend API key is available)
    let emailTest: { success: boolean; error?: string; data?: any } = { success: false, error: "No Resend API key configured" }
    if (process.env.RESEND_API_KEY) {
      const notificationEmail = generateContactNotificationEmail(testData)
      emailTest = await sendEmail(
        "arthurcaleb12@gmail.com",
        "Test Email - Contact Form System",
        notificationEmail
      )
    }

    return NextResponse.json({
      status: "Test completed",
      timestamp: new Date().toISOString(),
      environment: envCheck,
      database: {
        connectivity: dbTest.success,
        saveTest: saveTest.success,
        error: dbTest.error || saveTest.error,
      },
      email: {
        configured: !!process.env.RESEND_API_KEY,
        testResult: emailTest,
      },
      recentContacts: dbTest.success ? dbTest.data : null,
    })
  } catch (error) {
    console.error("Test endpoint error:", error)
    return NextResponse.json(
      { error: "Test failed", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
