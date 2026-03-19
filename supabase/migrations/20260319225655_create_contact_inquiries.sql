/*
  # Create contact_inquiries table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `phone` (text, required)
      - `email` (text, required)
      - `unit_type` (text)
      - `city` (text)
      - `event_date` (date)
      - `duration` (text)
      - `details` (text)
      - `created_at` (timestamptz, defaults to now)

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add insert-only policy for anonymous users (public form submissions)
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  unit_type text DEFAULT '',
  city text DEFAULT '',
  event_date date,
  duration text DEFAULT '',
  details text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts for contact form"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);
