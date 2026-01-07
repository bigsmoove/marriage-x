import Stripe from 'stripe';

// Allow build to succeed without env vars, but will fail at runtime if not set
const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';

export const stripe = new Stripe(stripeKey, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

export const PRODUCT_PRICE = 999; // $9.99 in cents

