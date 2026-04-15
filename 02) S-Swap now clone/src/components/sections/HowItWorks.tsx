import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  { step: '01', title: 'Choose your plan', desc: 'Select from daily, weekly, or flex plans that fit your schedule.' },
  { step: '02', title: 'Pick your meals', desc: 'Customize your menu each week from 20+ chef-crafted options.' },
  { step: '03', title: 'We deliver fresh', desc: 'Your meals arrive fresh at your office before lunchtime.' },
];

export function HowItWorks() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] rounded-[2rem] bg-gray-50 border border-gray-100 p-8 relative flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <h4 className="font-bold text-brand-dark">Order Confirmed!</h4>
                    <p className="text-sm text-brand-secondary">Arriving Tue, 11:30 AM</p>
                  </div>
                  <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-teal-50 flex items-center justify-center">🥗</div>
                  <div>
                    <p className="font-semibold text-brand-dark">Superfood Salad Bowl</p>
                    <p className="text-sm text-brand-secondary">Delivery to 4th Floor HQ</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Eating healthy at work has never been easier.</h2>
            <p className="text-lg text-brand-secondary mb-12">Skip the meal prep and the long lunch lines. We handle everything so you can focus on your best work.</p>
            
            <div className="space-y-8">
              {steps.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-lightBg text-brand-primary flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-brand-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
