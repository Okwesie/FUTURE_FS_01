import { NextResponse } from "next/server"
import { createClient } from "../../../lib/supabase/server"

export async function GET() {
  try {
    console.log("[v0] Testing database connection...")

    const supabase = await createClient()

    // Test database connection
    const { data: contacts, error: dbError } = await supabase.from("contacts").select("*").limit(5)

    if (dbError) {
      console.error("[v0] Database error:", dbError)
      return NextResponse.json({
        success: false,
        error: "Database connection failed",
        details: dbError,
      })
    }

    console.log("[v0] Database connection successful, found", contacts?.length, "contacts")

    // Test environment variables
    const envCheck = {
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      resendKey: !!process.env.RESEND_API_KEY,
    }

    return NextResponse.json({
      success: true,
      message: "Contact system test completed",
      database: {
        connected: true,
        contactsCount: contacts?.length || 0,
        recentContacts:
          contacts?.map((c) => ({
            id: c.id,
            name: c.name,
            email: c.email,
            created_at: c.created_at,
          })) || [],
      },
      environment: envCheck,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[v0] Test failed:", error)
    return NextResponse.json({
      success: false,
      error: "Test failed",
      details: error instanceof Error ? error.message : "Unknown error",
    })
  }
}

export async function POST() {
  try {
    console.log("[v0] Testing contact form submission...")

    // Test data
    const testData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      subject: "Test Message",
      message: "This is a test message from the contact form.",
    }

    // Call the actual contact API
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testData),
    })

    const result = await response.json()

    return NextResponse.json({
      success: response.ok,
      message: "Contact form test completed",
      testData,
      apiResponse: result,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[v0] Contact test failed:", error)
    return NextResponse.json({
      success: false,
      error: "Contact test failed",
      details: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
