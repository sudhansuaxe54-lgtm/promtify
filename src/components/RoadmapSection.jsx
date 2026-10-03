import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Award, 
  LayoutDashboard,
  ArrowRight,
  Filter
} from 'lucide-react';
import { roadmapData } from '../data/roadmapData';
import { RoadmapYearCard } from './RoadmapYearCard';
import { useRoadmap } from '../context/RoadmapContext';

export const RoadmapSection = () => {
  const [selectedYearFilter, setSelectedYearFilter] = useState('all');
  const { getTotalProgress } = useRoadmap();
  const { percentage, completedCount, totalCount } = getTotalProgress();

  const filteredYears = selectedYearFilter === 'all'
    ? roadmapData
    : roadmapData.filter(y => y.yearNumber.toString() === selectedYearFilter);

  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-[#F8FAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Context */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] border border-[#087443]/20 shadow-xs">
            <Compass className="w-4 h-4 text-[#087443]" />
            <span className="text-xs font-bold text-[#065B35] uppercase tracking-wider">
              Core Curriculum Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight">
            The 4-Year IT Career Roadmap
          </h2>

          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            The heart of HOCROW Education. An interactive, step-by-step engineering roadmap designed to bridge the gap between academic syllabus and real-world technology industry expectations.
          </p>

          {/* Quick Progress Banner */}
          <div className="p-4 rounded-2xl bg-white border border-[#087443]/20 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center font-bold text-lg">
                {percentage}%
              </div>
              <div>
                <div className="text-sm font-bold text-[#17251D]">Your Overall Roadmap Completion</div>
                <div className="text-xs text-[#66736B]">{completedCount} of {totalCount} total career milestones completed</div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="w-36 bg-[#E8F5EC] rounded-full h-2.5 overflow-hidden hidden md:block">
                <div 
                  className="bg-[#087443] h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#087443] hover:text-white bg-[#E8F5EC] hover:bg-[#087443] rounded-xl transition-all border border-[#087443]/20 w-full sm:w-auto"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Open Dashboard</span>
              </Link>
            </div>
          </div>

          {/* Year Switcher Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedYearFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedYearFilter === 'all'
                  ? 'bg-[#087443] text-white shadow-xs'
                  : 'bg-white text-[#17251D] hover:bg-[#E8F5EC] border border-gray-200'
              }`}
            >
              All 4 Years
            </button>

            {roadmapData.map(y => (
              <button
                key={y.id}
                onClick={() => setSelectedYearFilter(y.yearNumber.toString())}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  selectedYearFilter === y.yearNumber.toString()
                    ? 'bg-[#087443] text-white shadow-xs'
                    : 'bg-white text-[#17251D] hover:bg-[#E8F5EC] border border-gray-200'
                }`}
              >
                Year {y.yearNumber} ({y.badge})
              </button>
            ))}
          </div>
        </div>

        {/* Roadmap Year Cards Container */}
        <div className="max-w-5xl mx-auto">
          {filteredYears.map((yearObj, index) => (
            <RoadmapYearCard
              key={yearObj.id}
              yearData={yearObj}
              defaultExpanded={index === 0 || selectedYearFilter !== 'all'}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 max-w-4xl mx-auto text-center p-6 rounded-3xl bg-gradient-to-r from-[#E8F5EC] via-white to-[#E8F5EC] border border-[#087443]/20">
          <h3 className="text-lg font-bold text-[#17251D] mb-1">
            Want to track your weekly coding targets alongside this roadmap?
          </h3>
          <p className="text-sm text-[#66736B] mb-4">
            Use the Interactive Student Dashboard to personalize weekly goals, monitor skill progression, and keep your career vision on track.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#087443] hover:bg-[#065B35] shadow-xs transition-all"
          >
            <span>Launch Student Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
