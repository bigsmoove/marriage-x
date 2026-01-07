# Supabase Database Setup

Run the following SQL in your Supabase SQL Editor to create the necessary tables:

```sql
-- Create leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  download_token TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create purchases table
CREATE TABLE purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  stripe_payment_id TEXT NOT NULL UNIQUE,
  amount INTEGER NOT NULL,
  download_token TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_token ON leads(download_token);
CREATE INDEX idx_purchases_email ON purchases(email);
CREATE INDEX idx_purchases_token ON purchases(download_token);
CREATE INDEX idx_purchases_stripe ON purchases(stripe_payment_id);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Create policies to allow reads/writes from service role
CREATE POLICY "Enable all access for service role" ON leads
  FOR ALL USING (true);

CREATE POLICY "Enable all access for service role" ON purchases
  FOR ALL USING (true);
```

## Storage Setup (Optional)

If you want to store PDFs in Supabase Storage instead of the public folder:

1. Go to Storage in your Supabase dashboard
2. Create a new bucket called `pdfs`
3. Set it to public if you want direct links
4. Upload your PDF files there

