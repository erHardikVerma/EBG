import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export function SubscriptionPlan() {
  return (
    <Section className="bg-brand-dark text-white">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-brand-primary font-semibold text-sm mb-6">
              Most Popular
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The 5-Day Office Flex Plan</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              Don't worry about lunch from Monday to Friday. Set your preferences, and we'll deliver a balanced meal directly to your desk every single day.
            </p>
            <ul className="space-y-4 mb-10">
              {['Save up to 20% compared to daily ordering', 'Free delivery to registered offices', 'Pause or skip days anytime', 'Exclusive early access to new menu items'].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Button size="lg" className="shadow-lg shadow-brand-primary/20 bg-brand-primary hover:bg-[#01a856]">
                Subscribe for $45/week
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-[45%]">
            {/* Visual Representation of the plan */}
            <div className="bg-brand-secondary/30 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-brand-dark px-4 py-2 rounded-full font-bold shadow-xl">
                Best Value
              </div>
              
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">This Week's Menu</h3>
              
              <div className="space-y-4">
                {[
                  { day: 'Mon', meal: 'Roasted Salmon Bowl' },
                  { day: 'Tue', meal: 'Mediterranean Wrap' },
                  { day: 'Wed', meal: 'Harvest Chicken Salad' },
                  { day: 'Thu', meal: 'Spicy Tofu Quinoa' },
                  { day: 'Fri', meal: 'Chef\'s Surprise (Taco Friday)' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="font-semibold text-brand-primary w-12">{item.day}</span>
                    <span className="flex-1 text-gray-200">{item.meal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
