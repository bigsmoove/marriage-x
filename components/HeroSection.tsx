'use client';

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  onGetFreeGuide: () => void;
  onBuyPremium: () => void;
}

export const HeroSection = ({ onGetFreeGuide, onBuyPremium }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heart Icon */}
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4">
              <Heart className="h-12 w-12 text-white" fill="white" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Revitalize Your Marriage
            <span className="block pb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Starting Today
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-xl text-gray-600 lg:text-2xl">
            Discover proven strategies to strengthen your connection, reignite the spark, 
            and build the marriage you've always dreamed of.
          </p>

          {/* Trust Indicators */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-purple-600">✓</span>
              <span>Practical & Actionable</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-purple-600">✓</span>
              <span>Easy to Implement</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-purple-600">✓</span>
              <span>Real Results</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={onGetFreeGuide}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-semibold hover:from-purple-700 hover:to-pink-700 sm:w-auto"
            >
              Get Free Guide (10 Tips)
            </Button>
            <Button
              onClick={onBuyPremium}
              size="lg"
              variant="outline"
              className="w-full border-2 border-purple-600 text-lg font-semibold text-purple-600 hover:bg-purple-50 sm:w-auto"
            >
              Buy Full Version ($9.99)
            </Button>
          </div>

          {/* Social Proof Badge */}
          <div className="mt-10 flex justify-center">
            <div className="rounded-full bg-white px-6 py-3 shadow-lg">
              <p className="text-sm text-gray-600">
                Follow us on X:{' '}
                <a
                  href="https://x.com/Marriage_Corner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-600 hover:underline"
                >
                  @Marriage_Corner
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -left-4 top-20 h-72 w-72 rounded-full bg-purple-300 opacity-20 blur-3xl"></div>
        <div className="absolute -right-4 top-40 h-72 w-72 rounded-full bg-pink-300 opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

