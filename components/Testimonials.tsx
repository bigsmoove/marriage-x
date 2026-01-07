'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah & Mike',
      content:
        "These simple tips made such a huge difference! We started implementing just 3 of them and already feel more connected. Can't wait to try the rest!",
      rating: 5,
    },
    {
      name: 'Jennifer T.',
      content:
        'As a busy mom of three, I thought we didn\'t have time to work on our marriage. This guide showed us that small, consistent actions make all the difference.',
      rating: 5,
    },
    {
      name: 'David & Lisa',
      content:
        'After 15 years of marriage, we thought we knew it all. This guide gave us fresh perspectives and reignited the spark we thought was gone.',
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Real Couples, Real Results
          </h2>
          <p className="text-lg text-gray-600">
            See how these strategies have transformed marriages
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col bg-white p-6 shadow-lg">
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-4 flex-grow text-gray-700 italic">
                "{testimonial.content}"
              </p>

              {/* Name */}
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </Card>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Join Thousands of Couples Improving Their Marriage
            </h3>
            <p className="mb-6 text-gray-600">
              Whether you're newlyweds or celebrating your 50th anniversary, it's never too 
              early or too late to strengthen your relationship.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600">27+</div>
                <div className="text-sm text-gray-600">Years of Marriage Expertise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">25</div>
                <div className="text-sm text-gray-600">Proven Strategies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Practical & Actionable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

