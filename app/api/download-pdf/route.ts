import { NextRequest, NextResponse } from 'next/server';
import { getLeadByToken, getPurchaseByToken, generateSignedPDFUrl } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    // Check if token belongs to a lead or purchase
    const lead = await getLeadByToken(token);
    const purchase = await getPurchaseByToken(token);

    if (!lead && !purchase) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 404 }
      );
    }

    // Determine if this is a premium PDF
    const isPremium = !!purchase;

    // Generate signed URL (expires in 48 hours)
    const signedUrl = await generateSignedPDFUrl(isPremium, 48 * 60 * 60);

    // Log download attempt (optional)
    console.log(`PDF download requested: ${isPremium ? 'Premium' : 'Free'} - Token: ${token.substring(0, 8)}...`);

    return NextResponse.json({
      signedUrl,
      isPremium,
      expiresIn: 48, // hours
    });
  } catch (error) {
    console.error('Error generating PDF download link:', error);
    return NextResponse.json(
      { error: 'Failed to generate download link' },
      { status: 500 }
    );
  }
}

