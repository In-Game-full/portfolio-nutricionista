/*
  # Create avaliacoes table

  1. New Tables
    - `avaliacoes`
      - `id` (uuid, primary key)
      - `pergunta1` (text)
      - `pergunta2` (text)
      - `pergunta3` (text)
      - `pergunta4` (text)
      - `pergunta5` (text)
      - `pergunta6` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `avaliacoes` table
    - Add policy for public inserts
*/

CREATE TABLE IF NOT EXISTS avaliacoes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pergunta1 text NOT NULL,
  pergunta2 text NOT NULL,
  pergunta3 text NOT NULL,
  pergunta4 text NOT NULL,
  pergunta5 text NOT NULL,
  pergunta6 text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE avaliacoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON avaliacoes
  FOR INSERT
  TO public
  WITH CHECK (true);