import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

export const AboutPage = () => {
  return (
    <div className="py-6">
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
};
