'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star } from 'lucide-react';

interface ComparisonTableProps {
  onGetFreeGuide: () => void;
  onBuyPremium: () => void;
}

export const ComparisonTable = ({ onGetFreeGuide, onBuyPremium }: ComparisonTableProps) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Path to a Better Marriage
          </h2>
          <p className="text-lg text-gray-600">
            Start with our free guide, or get the complete toolkit
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Free Version */}
          <Card className="flex flex-col border-2 border-gray-200 p-8">
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-900">Free Guide</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$0</span>
              </div>
              <Badge variant="secondary" className="mb-4">
                Perfect to Get Started
              </Badge>
            </div>

            <ul className="mb-8 flex-grow space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-gray-700">
                  <strong>10 Essential Tips</strong> to revitalize your marriage
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-gray-700">Core strategies for immediate improvement</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-gray-700">Quick-start guide format</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">15 additional advanced strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">Worksheets and action plans</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">Real-world examples and scenarios</span>
              </li>
            </ul>

            <Button
              onClick={onGetFreeGuide}
              className="w-full bg-gray-900 hover:bg-gray-800"
              size="lg"
            >
              Get Free Guide
            </Button>
          </Card>

          {/* Premium Version */}
          <Card className="relative flex flex-col border-2 border-purple-600 bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-xl">
            <div className="absolute -top-4 right-8">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <Star className="mr-1 h-4 w-4" fill="white" />
                MOST POPULAR
              </Badge>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-900">Full Guide</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$9.99</span>
                <span className="ml-2 text-gray-600">one-time</span>
              </div>
              <Badge className="mb-4 bg-purple-600">Complete Marriage Toolkit</Badge>
            </div>

            <ul className="mb-8 flex-grow space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                <span className="font-semibold text-gray-900">
                  <strong>All 10 free tips</strong> included
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                <span className="font-semibold text-gray-900">
                  <strong>15 Additional Strategies</strong> for deeper connection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                <span className="text-gray-900">
                  <strong>Worksheets & Action Plans</strong> to implement immediately
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                <span className="text-gray-900">
                  <strong>Real-World Examples</strong> and practical scenarios
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                <span className="text-gray-900">
                  <strong>Expanded Content</strong> with detailed explanations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                <span className="text-gray-900">
                  <strong>Lifetime Access</strong> - download and keep forever
                </span>
              </li>
            </ul>

            <Button
              onClick={onBuyPremium}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              size="lg"
            >
              Get Full Guide for $9.99
            </Button>

            <p className="mt-4 text-center text-sm text-gray-600">
              🔒 Secure payment via Stripe
            </p>
          </Card>
        </div>

        {/* Value Proposition */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-lg text-gray-600">
            <strong className="text-gray-900">Why invest in your marriage?</strong> A strong marriage 
            is the foundation of a happy life. For less than the cost of a dinner out, you'll gain 
            insights that can transform your relationship for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

