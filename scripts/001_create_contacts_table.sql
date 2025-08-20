-- Create contacts table for storing contact form submissions
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for contact form (public can insert, admin can view all)
CREATE POLICY "Anyone can submit contact form" 
  ON public.contacts FOR INSERT 
  WITH CHECK (true);

-- Create policy for reading contacts (you can modify this based on your needs)
CREATE POLICY "Admin can view all contacts" 
  ON public.contacts FOR SELECT 
  USING (true); -- You might want to restrict this to admin users later

-- Create index for better performance
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS contacts_email_idx ON public.contacts(email);
