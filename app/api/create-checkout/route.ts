import { NextRequest, NextResponse } from 'next/server';
import { stripe, PRODUCT_PRICE } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is properly configured
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_placeholder') {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please set STRIPE_SECRET_KEY in environment variables.' },
        { status: 500 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: '25 Ways to Revitalize Your Marriage - Complete Guide',
              description:
                'The complete guide with 25 strategies, worksheets, action plans, and real-world examples.',
              images: [`${appUrl}/og-image.jpg`],
            },
            unit_amount: PRODUCT_PRICE,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}?canceled=true`,
      customer_email: undefined, // They'll enter it in Stripe checkout
      metadata: {
        type: 'premium_pdf',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

