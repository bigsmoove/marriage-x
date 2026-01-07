'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Heart, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface DownloadPageProps {
  params: Promise<{
    token: string;
  }>;
}

export default function DownloadPage({ params }: DownloadPageProps) {
  const [token, setToken] = useState<string>('');
  const [signedUrl, setSignedUrl] = useState<string>('');
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expiresIn, setExpiresIn] = useState(48);

  useEffect(() => {
    const loadToken = async () => {
      const resolvedParams = await params;
      setToken(resolvedParams.token);
    };
    loadToken();
  }, [params]);

  useEffect(() => {
    if (!token) return;

    const fetchSignedUrl = async () => {
      try {
        const response = await fetch('/api/download-pdf', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          if (response.status === 404) {
            setError('Invalid or expired download link');
          } else {
            throw new Error('Failed to generate download link');
          }
          setLoading(false);
          return;
        }

        const data = await response.json();
        setSignedUrl(data.signedUrl);
        setIsPremium(data.isPremium);
        setExpiresIn(data.expiresIn);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching signed URL:', err);
        setError('Something went wrong. Please try again or contact support.');
        setLoading(false);
      }
    };

    fetchSignedUrl();
  }, [token]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-2xl p-8">
          <div className="flex flex-col items-center text-center">
            <Loader2 className="mb-4 h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Preparing your download...</p>
          </div>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-2xl p-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
            </div>
            <h1 className="mb-4 text-2xl font-bold text-foreground">Download Unavailable</h1>
            <p className="mb-8 text-muted-foreground">{error}</p>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-8 w-8 fill-primary text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold text-foreground">
            {isPremium ? 'Your Premium Guide is Ready!' : 'Your Free Guide is Ready!'}
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-muted-foreground">
            {isPremium
              ? 'Thank you for your purchase! Download your complete "25 Ways to Revitalize Your Marriage" guide below.'
              : 'Thank you for downloading! Get your free "10 Ways to Revitalize Your Marriage" guide below.'}
          </p>

          {/* Download Button */}
          <a href={signedUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Your Guide
            </Button>
          </a>

          {/* Expiration Notice */}
          <p className="mb-8 text-sm text-muted-foreground">
            ⏱️ This download link will expire in {expiresIn} hours. Please save your PDF for future reference.
          </p>

          {/* Additional Info */}
          <div className="mb-8 rounded-lg bg-muted p-6">
            <h3 className="mb-2 font-semibold text-foreground">What's Next?</h3>
            <p className="text-sm text-muted-foreground">
              Save this PDF to your device and start implementing these strategies today. 
              Small, consistent actions lead to big transformations in your marriage.
            </p>
          </div>

          {/* Upsell for free users */}
          {!isPremium && (
            <div className="rounded-lg border-2 border-primary/20 bg-background p-6">
              <h3 className="mb-2 text-xl font-bold text-foreground">Want More?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                This free guide gives you 10 essential tips. Our premium guide includes 
                <strong> 15 additional strategies</strong>, worksheets, action plans, and 
                detailed examples for just $9.99.
              </p>
              <Link href="/?upgrade=true">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Upgrade to Full Guide ($9.99)
                </Button>
              </Link>
            </div>
          )}

          {/* Footer Links */}
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Follow us on{' '}
              <a
                href="https://x.com/Marriage_Corner"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                X
              </a>
              {' '}and{' '}
              <a
                href="https://tiktok.com/@chucksmarriagecorner"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
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
