import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { createLead } from '@/lib/supabase';
import { sendFreePDFEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    // Generate download token
    const downloadToken = nanoid(32);

    // Save to database
    try {
      await createLead(email, name, downloadToken);
    } catch (dbError: any) {
      // Handle duplicate email
      if (dbError.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already registered. Check your inbox for the download link.' },
          { status: 409 }
        );
      }
      throw dbError;
    }

    // Send email with PDF link
    const emailResult = await sendFreePDFEmail(email, name, downloadToken);

    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Check your email for the download link!',
    });
  } catch (error) {
    console.error('Error capturing email:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

