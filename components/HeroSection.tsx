'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface HeroSectionProps {
  onGetFreeGuide: () => void;
  onBuyPremium: () => void;
}

export const HeroSection = ({ onGetFreeGuide, onBuyPremium }: HeroSectionProps) => {
  return (
    <section className="w-full bg-background py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badge */}
          <Badge variant="secondary" className="mb-8 px-4 py-1.5 text-sm font-normal">
            Trusted by 10,000+ couples
          </Badge>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Revitalize Your Marriage
            <span className="mt-2 block text-primary">
              Starting Today
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            Discover proven strategies to strengthen your connection, reignite the spark, 
            and build the marriage you've always dreamed of.
          </p>

          {/* Trust Indicators */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <span>Practical & Actionable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <span>Easy to Implement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <span>Real Results</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              onClick={onGetFreeGuide}
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
              Get Free Guide (10 Tips)
            </Button>
            <Button
              onClick={onBuyPremium}
              size="lg"
              variant="outline"
              className="w-full border-2 hover:bg-muted sm:w-auto"
            >
              Buy Full Version ($9.99)
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-10">
            <p className="text-sm text-muted-foreground">
              Follow us on X:{' '}
              <a
                href="https://x.com/Marriage_Corner"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                @Marriage_Corner
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
