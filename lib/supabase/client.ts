import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}

export async function saveContactSubmission(data: ContactSubmission) {
  try {
    const { data: result, error } = await supabase
      .from('contacts')
      .insert([data])
      .select()

    if (error) {
      console.error('Database error:', error)
      return { success: false, error: error.message }
    }

    console.log('Contact saved to database:', result)
    return { success: true, data: result }
  } catch (error) {
    console.error('Database operation failed:', error)
    return { success: false, error: 'Failed to save contact submission' }
  }
}

export async function getRecentContacts(limit: number = 5) {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) {
      console.error('Database error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Database operation failed:', error)
    return { success: false, error: 'Failed to fetch recent contacts' }
  }
}
