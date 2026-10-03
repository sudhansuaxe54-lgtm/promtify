import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  TrendingUp, 
  HelpCircle, 
  ShieldAlert, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ArrowRight,
  Target
} from 'lucide-react';
import { careerPathways, careerDisclaimer } from '../data/careerData';

export const CareerGuidance = () => {
  const [expandedPathwayId, setExpandedPathwayId] = useState('path-swe');

  const togglePathway = (id) => {
    setExpandedPathwayId(expandedPathwayId === id ? null : id);
  };

  return (
    <section id="career" className="py-16 sm:py-24 bg-[#F8FAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] border border-[#087443]/20 shadow-xs">
            <Target className="w-4 h-4 text-[#087443]" />
            <span className="text-xs font-bold text-[#065B35] uppercase tracking-wider">
              Strategic Career Navigation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight">
            Plan Your Career Beyond the Classroom
          </h2>

          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Specialized engineering pathways tailored to current industry demands. Understand exactly what skills, projects, and interview topics are required for your target role.
          </p>
        </div>

        {/* Pathways Accordion Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {careerPathways.map((path) => {
            const isExpanded = expandedPathwayId === path.id;

            return (
              <div
                key={path.id}
                className="bg-white rounded-3xl border border-[#087443]/15 shadow-xs overflow-hidden transition-all duration-200"
              >
                {/* Header row of pathway */}
                <button
                  onClick={() => togglePathway(path.id)}
                  className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#E8F5EC]/30 transition-colors focus:outline-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-[#E8F5EC] text-[#065B35]">
                        {path.roadmapYears}
                      </span>
                      <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-gray-100 text-gray-700">
                        {path.demandBadge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#17251D] pt-1">
                      {path.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#66736B]">
                      {path.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <span className="text-xs font-bold text-[#087443]">
                      {isExpanded ? 'Hide Specs' : 'View Requirements'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#E8F5EC] text-[#087443] flex items-center justify-center">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-6 pt-0 border-t border-gray-100 space-y-6 text-left animate-in fade-in duration-200">
                    
                    {/* Foundational Skills */}
                    <div className="pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#087443] mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#087443]" />
                        Required Foundational Skills:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {path.foundationalSkills.map((skill, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAF8] border border-gray-100 text-xs text-[#17251D]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#087443] mt-1.5 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Additional Learning */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#065B35] mb-2">
                        Recommended Additional Learning & Tooling:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {path.recommendedAdditional.map((add, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#E8F5EC] text-[#065B35] border border-[#087443]/20">
                            {add}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 2-Column: Example Projects & Common Interview Topics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#17251D] mb-2">
                          High-Impact Portfolio Projects:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#66736B]">
                          {path.exampleProjects.map((p, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#087443] font-bold">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#17251D] mb-2">
                          Common Technical Interview Topics:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#66736B]">
                          {path.commonInterviewTopics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#087443] font-bold">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mandatory Transparency & Market Conditions Advisory Notice */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 text-left flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-amber-900">
              {careerDisclaimer.title}
            </h4>
            <p className="text-xs text-amber-800/90 leading-relaxed">
              {careerDisclaimer.text}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
