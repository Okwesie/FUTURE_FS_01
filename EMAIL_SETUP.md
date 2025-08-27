# Email Functionality Setup Guide

## Overview

This portfolio implements a complete contact form system with:
- **Dual email system** using Resend API
- **Database storage** in Supabase
- **Professional email templates**
- **Auto-reply functionality**

## Prerequisites

1. **Resend Account** - Sign up at [resend.com](https://resend.com)
2. **Supabase Project** - Create at [supabase.com](https://supabase.com)
3. **Domain** (optional) - For custom sender email

## Setup Steps

### 1. Environment Variables

Create a `.env.local` file in your project root:

```bash
# Resend API Configuration
RESEND_API_KEY=re_iA2vkQQg_9qjdGURie8zYeArDLXrbB2du

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="https://zmcbncjkbbqtjtxuygps.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptY2JuY2prYmJxdGp0eHV5Z3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3MTQxMjQsImV4cCI6MjA3MTI5MDEyNH0.gyVKHYJsfbkp8PHsbpOsOoqkinJoZj2kog-NeLYhVzY"

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Resend API Setup

1. **Get API Key**:
   - Go to [resend.com](https://resend.com)
   - Sign up and verify your account
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key to your `.env.local`

2. **Domain Verification** (Optional):
   - Add your domain in Resend dashboard
   - Update the `from` email in `lib/email.tsx`:
   ```typescript
   from: 'Caleb Arthur <contact@yourdomain.com>'
   ```

### 3. Supabase Database Setup

1. **Create Project**:
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Get your project URL and anon key

2. **Run Database Setup**:
   ```bash
   # Option 1: Use the setup script
   ./scripts/run_database_setup.sh
   
   # Option 2: Manual setup
   # Copy the SQL from scripts/001_create_contacts_table.sql
   # Run it in your Supabase SQL editor
   ```

3. **Verify Table Creation**:
   - Go to your Supabase dashboard
   - Navigate to Table Editor
   - Verify `contacts` table exists with correct schema

### 4. Test the System

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Test Endpoint**:
   Visit `http://localhost:3000/api/test-contact` to verify:
   - Environment variables are set
   - Database connectivity
   - Email functionality

3. **Test Contact Form**:
   - Go to your portfolio contact page
   - Submit a test message
   - Check your email for notifications
   - Verify database entry

## Email Templates

### Notification Email (to you)
- **Subject**: "New Contact Form Submission from [Name]"
- **Content**: Contact details, full message, professional styling
- **Reply-to**: User's email address

### Auto-Reply Email (to user)
- **Subject**: "Thank you for contacting me!"
- **Content**: Personalized greeting, response timeline, next steps
- **Branding**: Your contact information and social links

## Customization

### Email Templates
Edit the HTML templates in `lib/email.tsx`:
- `generateContactNotificationEmail()` - Admin notification
- `generateAutoReplyEmail()` - User auto-reply

### Styling
The email templates use inline CSS for maximum compatibility. Update colors and styling in the template functions.

### Database Schema
Modify `scripts/001_create_contacts_table.sql` if you need additional fields.

## Troubleshooting

### Common Issues

1. **"Module not found: Can't resolve 'resend'"**
   ```bash
   npm install resend
   ```

2. **Database connection errors**
   - Verify Supabase URL and key
   - Check RLS policies
   - Ensure table exists

3. **Email sending failures**
   - Verify Resend API key
   - Check domain verification
   - Review Resend dashboard for errors

4. **Environment variables not loading**
   - Restart development server
   - Check `.env.local` file location
   - Verify variable names

### Debug Mode

Enable detailed logging by checking the browser console and server logs for:
- Contact form submissions
- Database operations
- Email sending results

## Production Deployment

1. **Environment Variables**: Set all required variables in your hosting platform
2. **Domain Verification**: Complete domain setup in Resend
3. **Database**: Ensure Supabase project is in production mode
4. **Testing**: Test the complete flow in production environment

## Security Considerations

- **Rate Limiting**: Consider implementing rate limiting for the contact form
- **Input Validation**: All inputs are validated server-side
- **RLS Policies**: Database access is controlled by Row Level Security
- **API Key Security**: Never expose API keys in client-side code

## Support

For issues with:
- **Resend**: Check [resend.com/docs](https://resend.com/docs)
- **Supabase**: Check [supabase.com/docs](https://supabase.com/docs)
- **Next.js**: Check [nextjs.org/docs](https://nextjs.org/docs)
