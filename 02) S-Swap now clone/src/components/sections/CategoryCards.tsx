import React from 'react';
import Image from 'next/image';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { ArrowRight } from 'lucide-react';

const categories = [
  { title: 'Weight Loss Plan', desc: 'Nutrient-packed bases tailored to help you shed pounds.', color: 'bg-green-100', image: '/images/Weigh loss plan.jpg' },
  { title: 'High Protein Menu', desc: 'Perfect portions loaded with high-quality proteins for recovery.', color: 'bg-orange-100', image: '/images/High Protein Plan.avif' },
  { title: 'Diabetic Plan', desc: 'Carefully measured macronutrients to keep blood sugar stable.', color: 'bg-teal-100', image: '/images/Diabetic Plan.jpg' },
];

export function CategoryCards() {
  return (
    <Section className="bg-brand-lightBg">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Deliciously crafted.<br />Nutritionally balanced.</h2>
            <p className="text-lg text-brand-secondary">Explore our variety of healthy options made fresh every morning.</p>
          </div>
          <button className="text-brand-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            See full menu <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-50 flex flex-col items-start cursor-pointer group">
              <div className={`w-full aspect-[4/3] rounded-2xl ${cat.color} mb-8 flex items-center justify-center relative overflow-hidden`}>
                <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-bold text-brand-dark bg-white px-4 py-2 rounded-full shadow-lg">Quick View</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-3">{cat.title}</h3>
              <p className="text-brand-secondary leading-relaxed mb-6 flex-grow">{cat.desc}</p>
              
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-colors z-10">
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
