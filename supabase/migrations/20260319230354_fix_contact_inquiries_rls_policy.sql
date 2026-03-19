/*
  # Fix contact_inquiries RLS policy

  1. Security Changes
    - Drop the overly permissive "Allow anonymous inserts for contact form" policy
    - Replace with a restrictive policy that only allows inserts where required fields are non-empty
    - This ensures anonymous users can only insert valid contact inquiries, not empty/garbage rows

  2. Important Notes
    - The new policy validates that full_name, phone, and email are all provided
    - This prevents abuse of the public insert endpoint
*/

DROP POLICY IF EXISTS "Allow anonymous inserts for contact form" ON contact_inquiries;

CREATE POLICY "Anon can insert valid contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND full_name <> '' AND
    phone IS NOT NULL AND phone <> '' AND
    email IS NOT NULL AND email <> ''
  );
