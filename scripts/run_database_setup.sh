#!/bin/bash

echo "Setting up database for Caleb Arthur Portfolio..."

# Check if psql is available
if ! command -v psql &> /dev/null; then
    echo "Error: psql is not installed. Please install PostgreSQL client tools."
    exit 1
fi

# Check if environment variables are set
if [ -z "$DATABASE_URL" ]; then
    echo "Error: DATABASE_URL environment variable is not set."
    echo "Please set it to your Supabase database connection string."
    exit 1
fi

echo "Running database setup scripts..."

# Run the contacts table creation script
psql "$DATABASE_URL" -f scripts/001_create_contacts_table.sql

if [ $? -eq 0 ]; then
    echo "✅ Database setup completed successfully!"
    echo "The contacts table has been created and configured."
else
    echo "❌ Database setup failed. Please check your connection and try again."
    exit 1
fi
