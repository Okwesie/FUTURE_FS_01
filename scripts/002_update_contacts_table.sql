-- Add subject column to contacts table
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS subject TEXT;

-- Update the table comment
COMMENT ON TABLE public.contacts IS 'Stores contact form submissions from portfolio website';
