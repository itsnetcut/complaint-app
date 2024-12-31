/*
  # Complaint Management System Schema

  1. New Tables
    - `complaints`
      - `id` (uuid, primary key)
      - `content` (text) - The complaint content
      - `status` (text) - Current status of complaint
      - `created_at` (timestamp) - When complaint was submitted
      - `user_id` (uuid, nullable) - Reference to auth.users if logged in
      - `is_anonymous` (boolean) - Whether complaint was submitted anonymously
    
  2. Security
    - Enable RLS on complaints table
    - Policies for:
      - Anyone can create complaints
      - Authenticated users can view their own complaints
      - Admins can view and manage all complaints
*/

-- Create enum for complaint status
CREATE TYPE complaint_status AS ENUM ('pending', 'in_progress', 'resolved', 'rejected');

-- Create complaints table
CREATE TABLE IF NOT EXISTS complaints (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  status complaint_status DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id),
  is_anonymous boolean DEFAULT true,
  admin_notes text
);

-- Enable RLS
ALTER TABLE complaints ENABLE ROW LEVEL SECURITY;

-- Create admin role
CREATE ROLE admin;

-- Policies
-- Allow anyone to create complaints
CREATE POLICY "Anyone can create complaints" 
  ON complaints FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Users can view their own complaints
CREATE POLICY "Users can view own complaints" 
  ON complaints FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Admins can view all complaints
CREATE POLICY "Admins can view all complaints" 
  ON complaints FOR ALL 
  TO admin 
  USING (true);