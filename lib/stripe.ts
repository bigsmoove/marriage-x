import Stripe from 'stripe';

// Allow build to succeed without env vars, but will fail at runtime if not set
const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';

export const stripe = new Stripe(stripeKey, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

// Price ID from environment (Stripe Product Price ID)
export const STRIPE_PRICE_ID_PREMIUM = process.env.STRIPE_PRICE_ID_PREMIUM || 'price_1Smx1jRdLjhk4cyD5tR3xqlR';

