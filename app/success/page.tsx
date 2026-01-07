'use client';

import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-4">
              <CheckCircle className="h-16 w-16 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Payment Successful! 🎉
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-600">
            Thank you for your purchase! We've sent an email with your download link to the 
            email address you provided. Check your inbox (and spam folder) in the next few minutes.
          </p>

          {/* What's Included */}
          <div className="mb-8 rounded-lg bg-purple-50 p-6 text-left">
            <h3 className="mb-4 text-center font-semibold text-gray-900">
              What You'll Receive:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Heart className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" fill="currentColor" />
                <span>Complete "25 Ways to Revitalize Your Marriage" PDF guide</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" fill="currentColor" />
                <span>Worksheets and action plans for each strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" fill="currentColor" />
                <span>Real-world examples and practical scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" fill="currentColor" />
                <span>Lifetime access - download and keep forever</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mb-6 rounded-lg border-2 border-purple-200 bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Haven't received your email?
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Check your spam folder. If you still don't see it after 10 minutes, 
              please contact us at support@themarriagecorner.com with your order details.
            </p>
            {sessionId && (
              <p className="text-xs text-gray-500">
                Order ID: {sessionId.substring(0, 20)}...
              </p>
            )}
          </div>

          {/* Back Button */}
          <Link href="/">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Back to Home
            </Button>
          </Link>

          {/* Social Links */}
          <div className="mt-8 text-sm text-gray-600">
            <p>
              Follow us for more marriage tips on{' '}
              <a
                href="https://x.com/Marriage_Corner"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple-600 hover:underline"
              >
                X
              </a>{' '}
              and{' '}
              <a
                href="https://tiktok.com/@chucksmarriagecorner"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple-600 hover:underline"
              >
                TikTok
              </a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}

