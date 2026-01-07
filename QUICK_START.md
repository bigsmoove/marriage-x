# Quick Start Guide

Get your Marriage Corner site up and running in 15 minutes!

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)
- A Stripe account (test mode is fine to start)
- A Resend account (free tier: 3,000 emails/month)

## 5-Minute Setup (Development)

### 1. Install Dependencies (1 min)

```bash
cd marriage-corner
npm install
```

### 2. Set Up Supabase (2 min)

1. Create a project at [supabase.com](https://supabase.com)
2. Go to Settings > API and copy:
   - Project URL
   - Anon/Public key
3. Go to SQL Editor and run the SQL from `SUPABASE_SETUP.md`

### 3. Get API Keys (2 min)

**Stripe** (test mode):
- Go to [stripe.com/dashboard](https://dashboard.stripe.com)
- Get test API keys from Developers > API keys

**Resend**:
- Go to [resend.com/api-keys](https://resend.com/api-keys)
- Create an API key

### 4. Configure Environment Variables (< 1 min)

Create `.env.local` in the root:

```bash
# Stripe (use test keys for now)
STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx

# Resend
RESEND_API_KEY=re_xxxxx

# Admin
ADMIN_PASSWORD=admin123

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Add Your PDFs (< 1 min)

Copy your PDF files to `public/pdfs/` and rename them:
- `10-ways-revitalize-marriage.pdf` (your free guide)
- `25-ways-revitalize-marriage.pdf` (your premium guide)

If you only have one PDF, duplicate it for now to test both flows.

### 6. Run the App (< 1 min)

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Test Everything

### Test Email Capture (Free Guide)

1. Click "Get Free Guide"
2. Enter your email
3. Check your inbox for the download link
4. Click the link and download the PDF

### Test Stripe Checkout (Premium)

1. Click "Buy Full Version"
2. Use test card: `4242 4242 4242 4242`
3. Enter any future expiry date and CVC
4. Complete checkout
5. Check email for premium download link

### Test Admin Dashboard

1. Go to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Enter your admin password
3. View your stats

## Next Steps

### Ready to Go Live?

Follow the `DEPLOYMENT_GUIDE.md` for step-by-step deployment instructions.

### Customize Your Site

1. **Update Content**:
   - Edit components in `/components`
   - Modify text in `/app/page.tsx`

2. **Change Pricing**:
   - Edit `PRODUCT_PRICE` in `/lib/stripe.ts`
   - Update text throughout the site

3. **Update Branding**:
   - Replace social links in footer
   - Update metadata in `/app/layout.tsx`
   - Add your logo/images

### Content Strategy (X/Twitter)

Start posting daily on X:
- **Daily**: Share 1-2 marriage tips from your PDFs
- **Weekly**: Post a direct CTA to your landing page
- **Always**: Link in bio to your site

Example posts:
- "Marriage tip #5: Show appreciation daily. A simple 'thank you' can transform your relationship. Want 24 more strategies? 🔗 [link]"
- "After 10 years of marriage, we discovered this one thing... [thread]. Full guide: [link]"

### TikTok Setup

1. Update your TikTok link in bio to your live site
2. Your existing videos will drive traffic passively
3. No new content needed!

## Troubleshooting

### "Email not sending"
- Check Resend API key is correct
- Look at Vercel/console logs for errors
- In dev, emails go to the Resend dashboard

### "Stripe webhook not working locally"
- For local testing, webhook events won't fire
- Test the full flow after deploying to Vercel
- Or use Stripe CLI for local webhook testing

### "Database error"
- Verify Supabase tables were created
- Check your connection credentials
- Ensure RLS policies allow access

## Support

Questions? Check out:
- `README.md` - Full documentation
- `DEPLOYMENT_GUIDE.md` - Production deployment
- `SUPABASE_SETUP.md` - Database schema
- `ENV_SETUP.md` - Environment variables

Need more help? Contact: support@themarriagecorner.com

---

🎉 **You're all set!** Start driving traffic from X and TikTok to your new site!

