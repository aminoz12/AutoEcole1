-- Create registrations table for storing form submissions
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  license_type VARCHAR(10) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_registrations_email ON registrations(email);

-- Create index on created_at for sorting
CREATE INDEX idx_registrations_created_at ON registrations(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from API
CREATE POLICY "Allow inserts from API" ON registrations
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated users to read their own registrations
CREATE POLICY "Allow users to read own registrations" ON registrations
  FOR SELECT
  USING (true);
