import { notFound } from 'next/navigation';
import { getLeadByToken, getPurchaseByToken } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Heart } from 'lucide-react';
import Link from 'next/link';

interface DownloadPageProps {
  params: Promise<{
    token: string;
  }>;
}

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { token } = await params;

  // Check if token is for a lead or purchase
  const lead = await getLeadByToken(token);
  const purchase = await getPurchaseByToken(token);

  if (!lead && !purchase) {
    notFound();
  }

  const isPremium = !!purchase;
  const pdfFileName = isPremium ? '25-ways-revitalize-marriage.pdf' : '10-ways-revitalize-marriage.pdf';
  const pdfUrl = `/pdfs/${pdfFileName}`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4">
              <Heart className="h-12 w-12 text-white" fill="white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            {isPremium ? 'Your Premium Guide is Ready!' : 'Your Free Guide is Ready!'}
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-600">
            {isPremium
              ? 'Thank you for your purchase! Download your complete "25 Ways to Revitalize Your Marriage" guide below.'
              : 'Thank you for downloading! Get your free "10 Ways to Revitalize Your Marriage" guide below.'}
          </p>

          {/* Download Button */}
          <a href={pdfUrl} download>
            <Button
              size="lg"
              className="mb-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Your Guide
            </Button>
          </a>

          {/* Additional Info */}
          <div className="mb-8 rounded-lg bg-purple-50 p-6">
            <h3 className="mb-2 font-semibold text-gray-900">What's Next?</h3>
            <p className="text-gray-700">
              Save this PDF to your device and start implementing these strategies today. 
              Small, consistent actions lead to big transformations in your marriage.
            </p>
          </div>

          {/* Upsell for free users */}
          {!isPremium && (
            <div className="rounded-lg border-2 border-purple-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-900">Want More?</h3>
              <p className="mb-4 text-gray-700">
                This free guide gives you 10 essential tips. Our premium guide includes 
                <strong> 15 additional strategies</strong>, worksheets, action plans, and 
                detailed examples for just $9.99.
              </p>
              <Link href="/?upgrade=true">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Upgrade to Full Guide ($9.99)
                </Button>
              </Link>
            </div>
          )}

          {/* Footer Links */}
          <div className="mt-8 text-sm text-gray-600">
            <p>
              Follow us on{' '}
              <a
                href="https://x.com/Marriage_Corner"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple-600 hover:underline"
              >
                X
              </a>
              {' '}and{' '}
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

