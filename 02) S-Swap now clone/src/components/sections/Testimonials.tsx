import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';

const reviews = [
  {
    text: "Swapnow completely changed our office lunch culture. It's affordable, incredibly fresh, and saves us so much time.",
    author: "Sarah J.",
    role: "Operations Manager"
  },
  {
    text: "The salads are actually filling! I love that I can customize my weekly plan based on when I'm actually in the office.",
    author: "Michael T.",
    role: "Software Engineer"
  },
  {
    text: "Finally, a food delivery service that feels like it cares about nutrition. The roasted salmon bowl is my weekly highlight.",
    author: "Elena R.",
    role: "Creative Director"
  }
];

export function Testimonials() {
  return (
    <Section className="bg-brand-lightBg">
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-dark mb-16">Loved by thousands of<br/>professionals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-brand-dark font-medium text-lg mb-8 flex-grow">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div>
                  <h4 className="font-bold text-brand-dark">{review.author}</h4>
                  <p className="text-sm text-brand-secondary">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
