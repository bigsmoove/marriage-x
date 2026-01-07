'use client';

import { Trophy, BookOpen, Target } from 'lucide-react';

export const StatsSection = () => {
  return (
    <section className="w-full bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Join Thousands of Couples Improving Their Marriage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're newlyweds or celebrating your 50th anniversary, it's never too early or 
            too late to strengthen your relationship.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {/* Years of Expertise */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold text-primary">27+</div>
            <p className="mt-2 text-sm text-muted-foreground">Years of Marriage Expertise</p>
          </div>

          {/* Proven Strategies */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold text-primary">25</div>
            <p className="mt-2 text-sm text-muted-foreground">Proven Strategies</p>
          </div>

          {/* Practical & Actionable */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold text-primary">100%</div>
            <p className="mt-2 text-sm text-muted-foreground">Practical & Actionable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

