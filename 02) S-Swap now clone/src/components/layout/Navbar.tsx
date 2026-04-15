import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full lg:pt-6 px-0 lg:px-6 pointer-events-none">
      <div 
        className="
          pointer-events-auto
          w-full max-w-[1860px] 
          bg-white 
          flex items-center justify-between
          px-6 pt-10 pb-3    /* Mobile padding */
          lg:px-8 lg:py-4    /* Desktop padding */
          lg:rounded-full lg:shadow-[0px_2px_12px_0px_rgba(0,0,0,0.12)]
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Stylized Logo Placeholder */}
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-brand-dark">Swapnow</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-brand-secondary">
          <Link href="#menu" className="hover:text-brand-primary transition-colors">Menu</Link>
          <Link href="#plans" className="hover:text-brand-primary transition-colors">Meal Plans</Link>
          <Link href="#office" className="hover:text-brand-primary transition-colors">For Office</Link>
          <Link href="#about" className="hover:text-brand-primary transition-colors">Our Story</Link>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex" size="sm">Log In</Button>
          <Button variant="primary" className="hidden lg:inline-flex" size="sm">Get Started</Button>
          <button className="lg:hidden p-2 text-brand-dark" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
