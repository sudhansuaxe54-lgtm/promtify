import React, { useState } from 'react';
import { 
  FolderGit2, 
  Code2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  X, 
  ArrowRight,
  Cpu,
  Github
} from 'lucide-react';
import { projectCategories, projectsData } from '../data/projectsData';

export const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = projectsData.filter(proj => {
    const matchesCat = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesDiff = selectedDifficulty === 'All' || proj.difficulty === selectedDifficulty;
    return matchesCat && matchesDiff;
  });

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Beginner':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Intermediate':
        return 'bg-[#E8F5EC] text-[#065B35] border-[#087443]/30';
      case 'Advanced':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#F8FAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] border border-[#087443]/20 shadow-xs">
            <FolderGit2 className="w-4 h-4 text-[#087443]" />
            <span className="text-xs font-bold text-[#065B35] uppercase tracking-wider">
              Real-World Portfolio Showcase
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight">
            Projects & Practical Portfolio
          </h2>

          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Move beyond static exercises. Build resume-defining production applications that impress technical recruiters and hiring managers.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {projectCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#087443] text-white shadow-xs'
                    : 'bg-white text-[#17251D] hover:bg-[#E8F5EC] border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl p-6 border border-[#087443]/15 hover:border-[#087443]/30 hover:shadow-brand transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Card Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${getDifficultyColor(proj.difficulty)}`}>
                    {proj.difficulty}
                  </span>
                  <span className="text-xs font-semibold text-[#087443] bg-[#E8F5EC] px-2.5 py-0.5 rounded-full">
                    {proj.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#17251D] mb-2 group-hover:text-[#087443] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#66736B] leading-relaxed mb-4 line-clamp-3">
                  {proj.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-[#F8FAF8] border border-gray-200 text-[#17251D]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Outcome Highlights */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[11px] font-bold text-[#66736B] uppercase tracking-wider">
                    Core Learning Outcomes:
                  </div>
                  {proj.learningOutcomes.slice(0, 2).map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-1.5 text-xs text-[#17251D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087443] shrink-0 mt-0.5" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={() => setActiveProjectModal(proj)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#087443] bg-[#E8F5EC] hover:bg-[#087443] hover:text-white rounded-xl transition-all"
                >
                  <span>Project Architecture & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal with Full Project Specifications */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#087443]/20 relative max-h-[90vh] overflow-y-auto text-left">
            
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full border ${getDifficultyColor(activeProjectModal.difficulty)}`}>
                {activeProjectModal.difficulty}
              </span>
              <span className="text-xs font-bold text-[#087443] bg-[#E8F5EC] px-2.5 py-0.5 rounded-full">
                {activeProjectModal.year}
              </span>
              <span className="text-xs text-[#66736B]">
                Category: {activeProjectModal.category}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#17251D] mb-3">
              {activeProjectModal.title}
            </h3>

            <p className="text-sm text-[#66736B] leading-relaxed mb-6">
              {activeProjectModal.description}
            </p>

            {/* Architecture Overview */}
            <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#087443] mb-1.5 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#087443]" /> System Architecture Overview
              </h4>
              <p className="text-xs sm:text-sm text-[#17251D] leading-relaxed">
                {activeProjectModal.architectureOverview}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-5">
              <div className="text-xs font-bold text-[#66736B] mb-2 uppercase">Tech Stack & Frameworks:</div>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#E8F5EC] text-[#065B35] border border-[#087443]/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="space-y-2 mb-6">
              <div className="text-xs font-bold text-[#66736B] uppercase">What you will master:</div>
              {activeProjectModal.learningOutcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#17251D]">
                  <CheckCircle2 className="w-4 h-4 text-[#087443] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Github / Starter Blueprint */}
            <div className="p-4 rounded-2xl bg-[#087443] text-white flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-green-200 uppercase">HOCROW Blueprint</div>
                <div className="text-xs text-green-50">{activeProjectModal.githubGuide}</div>
              </div>
              <button
                onClick={() => {
                  alert(`Project blueprint for "${activeProjectModal.title}" is ready. Follow the suggested roadmap steps in Year ${activeProjectModal.year}.`);
                }}
                className="px-3 py-1.5 text-xs font-bold bg-white text-[#087443] hover:bg-[#E8F5EC] rounded-xl shrink-0"
              >
                View Blueprint
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
