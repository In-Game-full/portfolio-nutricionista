/*
  # Update whatsapp column type

  1. Changes
    - Change `whatsapp` column type from `smallint` to `text`
    This allows storing full WhatsApp numbers without range limitations

  2. Security
    - No security changes needed, existing policies remain in place
*/

DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'avaliacoes' 
    AND column_name = 'whatsapp' 
    AND data_type = 'smallint'
  ) THEN
    ALTER TABLE avaliacoes 
    ALTER COLUMN whatsapp TYPE text;
  END IF;
END $$;