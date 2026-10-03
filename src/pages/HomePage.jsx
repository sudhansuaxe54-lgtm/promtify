import React from 'react';
import { Hero } from '../components/Hero';
import { RoadmapSection } from '../components/RoadmapSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { ResourceLibrary } from '../components/ResourceLibrary';
import { CareerGuidance } from '../components/CareerGuidance';
import { AboutSection } from '../components/AboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <RoadmapSection />
      <SkillsSection />
      <ProjectShowcase />
      <CareerGuidance />
      <ResourceLibrary />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};
