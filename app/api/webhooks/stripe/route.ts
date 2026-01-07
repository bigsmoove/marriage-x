import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { createPurchase } from '@/lib/supabase';
import { sendPremiumPDFEmail } from '@/lib/email';
import { nanoid } from 'nanoid';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      // Get payment details
      const email = session.customer_email || session.customer_details?.email;
      const paymentIntentId = session.payment_intent as string;
      const amount = session.amount_total || 0;

      if (!email) {
        console.error('No email found in session');
        return NextResponse.json({ error: 'No email' }, { status: 400 });
      }

      // Generate download token
      const downloadToken = nanoid(32);

      // Save purchase to database
      await createPurchase(email, paymentIntentId, amount, downloadToken);

      // Send email with premium PDF
      await sendPremiumPDFEmail(email, downloadToken);

      console.log('Successfully processed purchase for:', email);
    } catch (error) {
      console.error('Error processing webhook:', error);
      // Don't return error to Stripe, as payment was successful
      // We'll need to handle this manually
    }
  }

  return NextResponse.json({ received: true });
}

