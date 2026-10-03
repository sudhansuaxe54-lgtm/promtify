import React from 'react';
import { RoadmapSection } from '../components/RoadmapSection';
import { Compass, GraduationCap } from 'lucide-react';

export const RoadmapPage = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-[#E8F5EC] p-6 rounded-3xl border border-[#087443]/20 flex items-center justify-between">
          <div className="text-left">
            <span className="text-xs font-bold text-[#087443] uppercase tracking-wider">
              Comprehensive Curriculum
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17251D]">
              Complete 4-Year IT Career Roadmap
            </h1>
            <p className="text-xs sm:text-sm text-[#66736B] mt-1">
              Mark individual milestones as complete to save your progress directly into your local browser profile.
            </p>
          </div>
          <div className="hidden md:flex w-12 h-12 rounded-2xl bg-[#087443] text-white items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
        </div>
      </div>
      <RoadmapSection />
    </div>
  );
};
