import React from 'react';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-dark">Swapnow</span>
            </div>
            <p className="text-brand-secondary text-sm leading-relaxed">
              Healthy, fresh, and delicious meals delivered straight to your office. Perfect for individuals and teams who care about their wellbeing.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-dark">Menu</h4>
            <ul className="space-y-3 text-sm text-brand-secondary">
              <li><a href="#" className="hover:text-brand-primary">Weekly Plans</a></li>
              <li><a href="#" className="hover:text-brand-primary">Fresh Bowls</a></li>
              <li><a href="#" className="hover:text-brand-primary">Salads & Wraps</a></li>
              <li><a href="#" className="hover:text-brand-primary">Snacks & Drinks</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-dark">Company</h4>
            <ul className="space-y-3 text-sm text-brand-secondary">
              <li><a href="#" className="hover:text-brand-primary">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary">For Office Teams</a></li>
              <li><a href="#" className="hover:text-brand-primary">Careers</a></li>
              <li><a href="#" className="hover:text-brand-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-dark">Legal</h4>
            <ul className="space-y-3 text-sm text-brand-secondary">
              <li><a href="#" className="hover:text-brand-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary">Allergen Info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-secondary">
            &copy; {new Date().getFullYear()} Swapnow Clone. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-brand-primary transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-brand-primary transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-brand-primary transition-colors cursor-pointer"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
