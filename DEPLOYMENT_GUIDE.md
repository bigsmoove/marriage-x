# Deployment Guide

Step-by-step guide to deploy your Marriage Corner site to production.

## Pre-Deployment Checklist

- [ ] PDFs added to `public/pdfs/` directory
- [ ] All components tested locally
- [ ] Environment variables documented
- [ ] Supabase database created and configured
- [ ] Stripe account set up (can use test mode initially)
- [ ] Resend account created
- [ ] Code pushed to GitHub

## Step 1: Deploy to Vercel

### 1.1 Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the `marriage-corner` folder if it's in a monorepo

### 1.2 Configure Build Settings

Vercel should auto-detect Next.js settings:
- **Framework Preset**: Next.js
- **Root Directory**: `marriage-corner` (if in monorepo)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### 1.3 Add Environment Variables

Add all variables from your `.env.local`:

```bash
# Stripe
STRIPE_SECRET_KEY=sk_live_...  # Use live keys for production
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...  # Add after webhook setup

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Email (Resend)
RESEND_API_KEY=re_...

# Admin
ADMIN_PASSWORD=your-secure-production-password

# App
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### 1.4 Deploy

Click "Deploy" and wait for the build to complete.

## Step 2: Configure Stripe Webhooks

### 2.1 Create Webhook Endpoint

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers > Webhooks**
3. Click "Add endpoint"
4. Enter URL: `https://your-domain.vercel.app/api/webhooks/stripe`
5. Select events to listen to:
   - `checkout.session.completed`
6. Click "Add endpoint"

### 2.2 Get Webhook Secret

1. Click on the newly created webhook
2. Copy the "Signing secret" (starts with `whsec_`)
3. Add it to Vercel environment variables:
   - Go to Vercel Dashboard > Settings > Environment Variables
   - Add `STRIPE_WEBHOOK_SECRET` with the value
4. Redeploy the application

## Step 3: Configure Resend Email

### 3.1 Verify Domain (Production Only)

1. Go to [Resend Dashboard](https://resend.com)
2. Navigate to **Domains**
3. Click "Add Domain"
4. Enter your domain (e.g., `themarriagecorner.com`)
5. Add the DNS records to your domain provider
6. Wait for verification (usually takes a few minutes)

### 3.2 Update Email "From" Address

Edit `lib/email.ts` and update the "from" field:

```typescript
from: 'The Marriage Corner <hello@your-domain.com>',
```

Redeploy after making changes.

## Step 4: Set Up Custom Domain (Optional)

### 4.1 Add Domain in Vercel

1. Go to Vercel Dashboard > Settings > Domains
2. Add your custom domain (e.g., `marriagecorner.com`)
3. Follow DNS configuration instructions

### 4.2 Update Environment Variable

Update `NEXT_PUBLIC_APP_URL` in Vercel:
```bash
NEXT_PUBLIC_APP_URL=https://your-custom-domain.com
```

Redeploy the application.

## Step 5: Testing

### 5.1 Test Email Capture

1. Visit your live site
2. Click "Get Free Guide"
3. Enter test email
4. Verify email received with download link
5. Test download link works

### 5.2 Test Stripe Payment

Use Stripe test cards:
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002

1. Click "Buy Full Version"
2. Complete checkout with test card
3. Verify redirect to success page
4. Check email received
5. Test download link

### 5.3 Test Admin Dashboard

1. Go to `/admin`
2. Log in with admin password
3. Verify stats display correctly

## Step 6: Go Live with Stripe

When ready for real payments:

1. **Activate Stripe Account**:
   - Complete business verification in Stripe
   - Activate your account

2. **Switch to Live Keys**:
   - Get live API keys from Stripe Dashboard
   - Update `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in Vercel
   - Update webhook to use live mode
   - Get new `STRIPE_WEBHOOK_SECRET` for live webhook

3. **Update Pricing** (if needed):
   - Edit `lib/stripe.ts` to adjust `PRODUCT_PRICE`
   - Redeploy

4. **Test with Real Card**:
   - Use a real credit card to test (refund yourself after)
   - Verify entire flow works

## Step 7: Post-Launch

### Monitor

- Check Vercel Analytics for traffic
- Monitor Stripe Dashboard for payments
- Check Supabase for database entries
- Review email delivery in Resend dashboard

### Update Social Media Links

- **TikTok**: Update link in bio to your live site
- **Instagram**: Update link in bio
- **X (Twitter)**: Update link in bio and start posting

### Create Content

Start posting on X with:
- Marriage tips from your PDFs
- Link to landing page every 5-7 posts
- Pin your best-performing post with CTA

## Troubleshooting

### Emails Not Sending

- Check Resend dashboard for errors
- Verify API key is correct
- Check domain is verified (production)
- Look at Vercel function logs

### Stripe Webhook Not Working

- Verify webhook URL is correct
- Check webhook secret matches environment variable
- Look at Stripe webhook logs
- Check Vercel function logs

### Database Errors

- Verify Supabase tables are created
- Check RLS policies allow service role access
- Verify connection strings are correct

### Download Links Not Working

- Check PDFs exist in `public/pdfs/` directory
- Verify file names match exactly
- Check token generation is working

## Security Checklist

- [ ] Use strong admin password
- [ ] Stripe live keys secured
- [ ] Supabase anon key is safe to expose (RLS enabled)
- [ ] Environment variables not committed to git
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Webhook signature verification working

## Support

Need help? Contact: support@themarriagecorner.com

