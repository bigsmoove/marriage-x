'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Testimonials } from '@/components/Testimonials';
import { EmailCaptureModal } from '@/components/EmailCaptureModal';

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onGetFreeGuide={handleGetFreeGuide} onBuyPremium={handleBuyPremium} />

      {/* Comparison Table */}
      <ComparisonTable onGetFreeGuide={handleGetFreeGuide} onBuyPremium={handleBuyPremium} />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Transform Your Marriage?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Start with our free guide today, or get the complete toolkit for just $9.99
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={handleGetFreeGuide}
              className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-purple-600 transition hover:bg-gray-100"
            >
              Get Free Guide
            </button>
            <button
              onClick={handleBuyPremium}
              className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-purple-600"
            >
              Buy Full Version ($9.99)
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="mb-4 text-xl font-bold">The Marriage Corner</h3>
            <p className="mb-4 text-gray-400">
              Helping couples build stronger, more fulfilling marriages
            </p>
            <div className="mb-6 flex justify-center gap-6">
              <a
                href="https://x.com/Marriage_Corner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
              >
                X (Twitter)
              </a>
              <a
                href="https://tiktok.com/@chucksmarriagecorner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
              >
                TikTok
              </a>
              <a
                href="https://instagram.com/chucksmarriagecorner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
              >
                Instagram
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} The Marriage Corner. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Email Capture Modal */}
      <EmailCaptureModal open={emailModalOpen} onOpenChange={setEmailModalOpen} />
    </main>
  );
}
