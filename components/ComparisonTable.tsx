'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

interface ComparisonTableProps {
  onGetFreeGuide: () => void;
  onBuyPremium: () => void;
}

export const ComparisonTable = ({ onGetFreeGuide, onBuyPremium }: ComparisonTableProps) => {
  return (
    <section id="pricing" className="w-full bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Choose Your Path to a Better Marriage
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with our free guide, or get the complete toolkit
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Free Version */}
          <Card className="flex flex-col border-2 p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-foreground">Free Guide</h3>
              <p className="mb-4 text-sm text-muted-foreground">Perfect to Get Started</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">$0</span>
              </div>
            </div>

            <ul className="mb-8 flex-grow space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-foreground">
                  <strong>10 Essential Tips</strong> to revitalize your marriage
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-foreground">Core strategies for immediate improvement</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-foreground">Quick-start guide format</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                  <X className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <span className="text-muted-foreground">15 additional advanced strategies</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                  <X className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <span className="text-muted-foreground">Worksheets and action plans</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                  <X className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <span className="text-muted-foreground">Real-world examples and scenarios</span>
              </li>
            </ul>

            <Button
              onClick={onGetFreeGuide}
              variant="outline"
              className="w-full border-2"
              size="lg"
            >
              Get Free Guide
            </Button>
          </Card>

          {/* Premium Version */}
          <Card className="relative flex flex-col border-2 border-primary p-8 shadow-lg">
            <Badge className="absolute -top-3 right-8 bg-primary px-3 py-1 text-xs font-semibold">
              ⭐ MOST POPULAR
            </Badge>

            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-foreground">Full Guide</h3>
              <p className="mb-4 text-sm text-muted-foreground">Complete Marriage Toolkit</p>
              <div className="mb-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">$9.99</span>
                <span className="text-sm text-muted-foreground">one-time</span>
              </div>
            </div>

            <ul className="mb-8 flex-grow space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">
                  <strong>All 10 free tips</strong> included
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">
                  <strong>15 Additional Strategies</strong> for deeper connection
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-foreground">
                  <strong>Worksheets & Action Plans</strong> to implement immediately
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-foreground">
                  <strong>Real-World Examples</strong> and practical scenarios
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-foreground">
                  <strong>Expanded Content</strong> with detailed explanations
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-foreground">
                  <strong>Lifetime Access</strong> - download and keep forever
                </span>
              </li>
            </ul>

            <Button
              onClick={onBuyPremium}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Get Full Guide for $9.99
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              🔒 Secure payment via Stripe
            </p>
          </Card>
        </div>

        {/* Value Proposition */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-base text-muted-foreground">
            <strong className="text-foreground">Why invest in your marriage?</strong> A strong marriage 
            is the foundation of a happy life. For less than the cost of a dinner out, you'll gain 
            insights that can transform your relationship for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};
