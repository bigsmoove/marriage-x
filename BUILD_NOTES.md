# Build Notes

## Important: Environment Variables Required for Build

The Next.js build process requires environment variables to be set, even for the build step.

### Option 1: Quick Build Test (Not recommended for production)

Create a minimal `.env.local` file with placeholder values just to test the build:

```bash
# Minimal placeholders for build testing
STRIPE_SECRET_KEY=sk_test_placeholder
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_placeholder
STRIPE_WEBHOOK_SECRET=whsec_placeholder
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder
RESEND_API_KEY=re_placeholder
ADMIN_PASSWORD=admin123
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Then run:
```bash
npm run build
```

### Option 2: Production Build (Recommended)

Set up all your real environment variables first (see `ENV_SETUP.md`), then build.

## Vercel Deployment

When deploying to Vercel, set all environment variables in the Vercel dashboard before deployment. Vercel will automatically build with those variables.

## Build Process

The build will:
1. Compile TypeScript
2. Generate optimized production bundle
3. Pre-render static pages
4. Prepare API routes

Environment variables are validated during this process, so they must be present.

## Why This Happens

Next.js 14+ with App Router evaluates server components and API routes during the build process to optimize the application. This means environment-dependent code needs those variables to exist at build time.

## Solution

**For Development**: Follow `QUICK_START.md` to set up `.env.local` before running `npm run dev`

**For Production**: Set environment variables in Vercel dashboard before deploying

The app is designed to fail gracefully at runtime if environment variables are missing, but the build process needs them to complete successfully.

