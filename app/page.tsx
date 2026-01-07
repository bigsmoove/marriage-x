'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Testimonials } from '@/components/Testimonials';
import { StatsSection } from '@/components/StatsSection';
import { EmailCaptureModal } from '@/components/EmailCaptureModal';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Lock } from 'lucide-react';

export default function Home() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  const handleGetFreeGuide = () => {
    setEmailModalOpen(true);
  };

  const handleBuyPremium = async () => {
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation onGetFreeGuide={handleGetFreeGuide} />

      {/* Hero Section */}
      <HeroSection onGetFreeGuide={handleGetFreeGuide} onBuyPremium={handleBuyPremium} />

      {/* Comparison Table */}
      <ComparisonTable onGetFreeGuide={handleGetFreeGuide} onBuyPremium={handleBuyPremium} />

      {/* Testimonials */}
      <Testimonials />

      {/* Stats Section */}
      <StatsSection />

      {/* Final CTA Section */}
      <section className="w-full bg-primary py-12 text-primary-foreground lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <Heart className="h-8 w-8 fill-primary-foreground text-primary-foreground" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Transform Your Marriage?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Start with our free guide today, or get the complete toolkit for just $9.99
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              onClick={handleGetFreeGuide}
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
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
              Get Free Guide
            </Button>
            <Button
              onClick={handleBuyPremium}
              size="lg"
              variant="outline"
              className="w-full border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="mb-8 grid gap-8 md:grid-cols-2">
            {/* Left - Logo & Tagline */}
            <div className="flex flex-col items-start">
              <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Heart className="h-5 w-5 fill-primary text-primary" />
                <span>Marriage Corner</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Helping couples build stronger, more loving relationships since 1997.
              </p>
            </div>

            {/* Right - Social & Security */}
            <div className="flex flex-col items-start md:items-end">
              <div className="mb-4 flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-muted-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <a
                  href="https://x.com/Marriage_Corner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  @Marriage_Corner
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-3.5 w-3.5" />
                  <span>Privacy Protected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Marriage Corner. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Email Capture Modal */}
      <EmailCaptureModal open={emailModalOpen} onOpenChange={setEmailModalOpen} />
    </main>
  );
}
