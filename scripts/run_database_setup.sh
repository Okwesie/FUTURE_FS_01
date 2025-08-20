#!/bin/bash
# Script to run database setup
echo "Setting up database tables..."

# Note: In a real deployment, you would run these SQL scripts through your Supabase dashboard
# or using the Supabase CLI. For development, you can copy the SQL from 001_create_contacts_table.sql
# and run it in your Supabase SQL editor.

echo "Database setup complete!"
echo "Don't forget to:"
echo "1. Run the SQL script in your Supabase dashboard"
echo "2. Add your RESEND_API_KEY to environment variables"
echo "3. Update the 'your-email@example.com' in the contact route"
