# Marriage Corner - Landing Page & Monetization Platform

A modern Next.js application for monetizing marriage content through email capture and PDF sales.

## Features

- 🎨 Beautiful landing page with Tailwind CSS and shadcn/ui
- 📧 Email capture for free PDF lead magnets
- 💳 Stripe integration for premium PDF sales
- 📊 Admin dashboard with analytics
- 🔒 Secure download links with tokens
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 14

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS + shadcn/ui
- **Email**: Resend
- **Payments**: Stripe
- **Database**: Supabase
- **Hosting**: Vercel

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory. See `ENV_SETUP.md` for detailed instructions.

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

### 3. Set Up Supabase Database

Run the SQL from `SUPABASE_SETUP.md` in your Supabase SQL Editor.

### 4. Add Your PDFs

Place your PDF files in the `public/pdfs/` directory:
- `10-ways-revitalize-marriage.pdf` (free version)
- `25-ways-revitalize-marriage.pdf` (premium version)

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project to Vercel
3. Add all environment variables in Vercel settings
4. Deploy!

### Post-Deployment Setup

1. **Configure Stripe Webhook**:
   - Go to Stripe Dashboard > Webhooks
   - Add endpoint: `https://your-domain.com/api/webhooks/stripe`
   - Select event: `checkout.session.completed`
   - Copy webhook secret to environment variables

2. **Configure Resend**:
   - Add your domain in Resend dashboard
   - Update the "from" email in `lib/email.ts`

3. **Test the Flow**:
   - Test email capture
   - Test Stripe checkout (use test card: 4242 4242 4242 4242)
   - Verify emails are sent
   - Check admin dashboard

## Usage

### Pages

- `/` - Landing page
- `/download/[token]` - PDF download page
- `/success` - Payment success page
- `/admin` - Admin dashboard (password protected)

### Admin Dashboard

Access the admin dashboard at `/admin` with the password set in `ADMIN_PASSWORD` env variable.

View:
- Total leads captured
- Total purchases
- Total revenue
- Conversion rate

## Traffic Strategy

### X (Twitter) - Active Channel
- Post 1-2 times daily with marriage tips
- Link in bio to landing page
- Occasional CTA posts (weekly)

### TikTok - Passive Channel
- Update link in bio to landing page
- Existing videos drive traffic
- No new content needed

## Customization

### Update Content
- Edit components in `/components`
- Modify landing page in `/app/page.tsx`
- Adjust pricing in `/lib/stripe.ts`

### Update Emails
- Modify email templates in `/lib/email.ts`

### Update Styling
- Adjust colors in `/app/globals.css`
- Modify Tailwind config if needed

## Support

For issues or questions, contact: support@themarriagecorner.com

## Social Media

- X (Twitter): [@Marriage_Corner](https://x.com/Marriage_Corner)
- TikTok: [@chucksmarriagecorner](https://tiktok.com/@chucksmarriagecorner)
- Instagram: [@chucksmarriagecorner](https://instagram.com/chucksmarriagecorner)
- Blog: [themarriagecorner.com](https://themarriagecorner.com)

## License

Private use only. All rights reserved.
