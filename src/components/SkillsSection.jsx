import React, { useState } from 'react';
import { 
  Code2, 
  Boxes, 
  Terminal, 
  Globe, 
  Database, 
  Cloud, 
  MessageSquare, 
  Briefcase, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { skillsCategories, skillsData } from '../data/skillsData';
import { useRoadmap } from '../context/RoadmapContext';

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalSkill, setActiveModalSkill] = useState(null);
  const { getTotalProgress } = useRoadmap();
  const { percentage } = getTotalProgress();

  const iconMap = {
    Code2,
    Boxes,
    Terminal,
    Globe,
    Database,
    Cloud,
    MessageSquare,
    Briefcase
  };

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] border border-[#087443]/20 shadow-xs">
            <Layers className="w-4 h-4 text-[#087443]" />
            <span className="text-xs font-bold text-[#065B35] uppercase tracking-wider">
              Technical Competency Tracks
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight">
            Skills & Learning Paths
          </h2>

          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Targeted skill modules mapped directly to our four-year roadmap. Master industry-standard languages, modern frameworks, systems architecture, and workplace communication.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {skillsCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#087443] text-white shadow-xs'
                    : 'bg-[#F8FAF8] text-[#17251D] hover:bg-[#E8F5EC] border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const skillProgress = Math.min(100, Math.max(20, percentage + (index % 3 === 0 ? 15 : -10)));

            return (
              <div
                key={skill.id}
                className="bg-[#F8FAF8] rounded-3xl p-6 border border-[#087443]/15 hover:border-[#087443]/30 hover:shadow-brand transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Top Bar of card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#087443]/20 text-[#087443] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-[#E8F5EC] text-[#065B35] border border-[#087443]/20">
                      {skill.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#17251D] mb-1.5 leading-snug">
                    {skill.title}
                  </h3>

                  <p className="text-xs text-[#66736B] leading-relaxed line-clamp-3 mb-4">
                    {skill.description}
                  </p>

                  {/* Highlights Objectives */}
                  <div className="space-y-1.5 mb-5">
                    {skill.objectives.slice(0, 2).map((obj, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-1.5 text-xs text-[#17251D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#087443] shrink-0 mt-0.5" />
                        <span className="truncate">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer: Progress & Button */}
                <div className="pt-4 border-t border-gray-200/80 space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#66736B]">
                      <span>Mastery Progress</span>
                      <span className="text-[#087443] font-bold">{skillProgress}%</span>
                    </div>
                    <div className="w-full bg-[#E8F5EC] rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[#087443] h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${skillProgress}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModalSkill(skill)}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-[#087443] bg-white hover:bg-[#087443] hover:text-white rounded-xl border border-[#087443]/20 transition-all"
                  >
                    <span>Explore Skills</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal for Explore Skills */}
      {activeModalSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#087443]/20 relative max-h-[90vh] overflow-y-auto text-left">
            
            <button
              onClick={() => setActiveModalSkill(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#087443]">
                  {activeModalSkill.category} • {activeModalSkill.year}
                </span>
                <h3 className="text-2xl font-extrabold text-[#17251D]">
                  {activeModalSkill.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#66736B] leading-relaxed mb-6">
              {activeModalSkill.description}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold text-[#17251D] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087443]" />
                Key Learning Objectives
              </h4>
              <div className="space-y-2">
                {activeModalSkill.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAF8] border border-gray-100 text-xs sm:text-sm text-[#17251D]">
                    <span className="w-5 h-5 rounded-md bg-[#E8F5EC] text-[#087443] font-bold text-xs flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                <div className="text-xs font-bold text-[#66736B] mb-2 uppercase">Industry Tools:</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalSkill.recommendedTools.map((tool, ti) => (
                    <span key={ti} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-gray-200 text-[#17251D]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#E8F5EC]/50 border border-[#087443]/20">
                <div className="text-xs font-bold text-[#065B35] mb-1 uppercase">Target Benchmark:</div>
                <p className="text-xs text-[#17251D] leading-relaxed">
                  {activeModalSkill.progressBenchmark}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalSkill(null)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#087443] hover:bg-[#065B35] rounded-xl shadow-xs"
              >
                Close Skill Track
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
