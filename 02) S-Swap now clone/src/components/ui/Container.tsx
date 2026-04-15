import React from 'react';

export function Container({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1860px] px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}
