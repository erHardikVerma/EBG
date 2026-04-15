import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Now delivering to downtown offices
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-brand-dark mb-6 leading-[1.1]">
              Healthy meals <br/>
              delivered to <br/>
              <span className="text-brand-primary">your office.</span>
            </h1>
            
            <p className="text-lg text-brand-secondary mb-10 max-w-lg leading-relaxed">
              Fuel your workday with chef-crafted fresh bowls, premium sandwiches, and crisp salads. Subscribe to our weekly meal plans for effortless, healthy eating.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button size="lg" fullWidth className="sm:w-auto shadow-lg shadow-brand-primary/20">
                View Meal Plans
              </Button>
              <Button size="lg" variant="outline" fullWidth className="sm:w-auto">
                Explore Menu
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            {/* Stylized CSS Image Placeholder (representing a healthy bowl) */}
            <div className="relative w-full max-w-lg mx-auto aspect-square rounded-full bg-gradient-to-tr from-brand-primary/20 to-teal-100/40 p-4 shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 border-[40px] border-white/40 rounded-full"></div>
              <div className="w-[80%] h-[80%] rounded-full bg-white shadow-inner flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-brand-primary/80 blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-orange-400/60 blur-xl"></div>
                <div className="text-brand-dark/20 font-bold text-2xl z-10 text-center">Hero Food<br/>Placeholder</div>
              </div>
              
              {/* Floating aesthetic elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce duration-1000" style={{ animationDuration: '3s' }}>
                <span className="text-xl font-bold text-brand-primary">Fresh</span>
              </div>
              <div className="absolute bottom-12 -left-8 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-xl font-bold text-orange-500">Tasty</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
