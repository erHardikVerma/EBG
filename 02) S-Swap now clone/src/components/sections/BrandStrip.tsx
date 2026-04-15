import React from 'react';
import { Container } from '../ui/Container';

export function BrandStrip() {
  return (
    <div className="border-y border-gray-100 bg-white py-10">
      <Container>
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold text-brand-secondary mb-8 uppercase tracking-wider">
            Trusted by modern teams at
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* SVG Logo Placeholders for Trust Strip */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-32 h-8 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-xs font-bold text-gray-400">BRAND {item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
