'use client';

import { Card } from '@/components/ui/card';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah & Mike',
      initials: 'SM',
      content:
        "These simple tips made such a huge difference! We started implementing just 3 of them and already feel more connected. Can't wait to try the rest!",
    },
    {
      name: 'Jennifer T.',
      initials: 'JT',
      content:
        'As a busy mom of three, I thought we didn\'t have time to work on our marriage. This guide showed us that small, consistent actions make all the difference.',
    },
    {
      name: 'David & Lisa',
      initials: 'DL',
      content:
        'After 15 years of marriage, we thought we knew it all. This guide gave us fresh perspectives and reignited the spark we thought was gone.',
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Real Couples, Real Results
          </h2>
          <p className="text-lg text-muted-foreground">
            See how these strategies have transformed marriages
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col border p-6 shadow-sm">
              {/* Quote Mark */}
              <div className="mb-4 text-4xl font-serif text-primary/20">❝</div>

              {/* Content */}
              <p className="mb-6 flex-grow text-sm leading-relaxed text-foreground">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {testimonial.initials}
                </div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
