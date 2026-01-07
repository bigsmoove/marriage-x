# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Email (Resend)
RESEND_API_KEY=re_...

# Admin
ADMIN_PASSWORD=your-secure-password

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Setup Instructions

### 1. Stripe
1. Go to https://stripe.com/
2. Create an account or sign in
3. Get your API keys from the Dashboard
4. For webhooks, you'll need to set up a webhook endpoint after deploying

### 2. Supabase
1. Go to https://supabase.com/
2. Create a new project
3. Go to Settings > API to get your URL and anon key
4. Run the database migration (see SUPABASE_SETUP.md)

### 3. Resend
1. Go to https://resend.com/
2. Create an account
3. Get your API key from the dashboard
4. Add your domain for production emails

### 4. Admin Password
Set a secure password for accessing the admin dashboard at `/admin`

