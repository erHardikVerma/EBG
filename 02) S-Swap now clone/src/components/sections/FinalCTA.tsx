import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function FinalCTA() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center justify-center border border-white/20 shadow-2xl shadow-brand-primary/20">
          <div className="relative z-10 w-full max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to upgrade your office lunch?</h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Join thousands of professionals eating healthy, fresh, and delicious meals without the hassle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 shadow-xl w-full sm:w-auto">
                Start Your Plan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Explore Menu
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-6">Cancel or pause anytime. No hidden fees.</p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] pt-[50%] rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] pt-[50%] rounded-full bg-white/5 blur-3xl"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
