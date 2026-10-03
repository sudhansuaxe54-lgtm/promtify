import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  GitBranch, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  ShieldCheck, 
  Layers
} from 'lucide-react';
import { useRoadmap } from '../context/RoadmapContext';

export const Hero = () => {
  const { getTotalProgress, currentYear } = useRoadmap();
  const { percentage, completedCount, totalCount } = getTotalProgress();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#F8FAF8] via-[#E8F5EC]/30 to-[#F8FAF8]">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#087443]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#10B981]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Brand Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] border border-[#087443]/20 shadow-xs"
            >
              <div className="w-2 h-2 rounded-full bg-[#087443] animate-pulse" />
              <span className="text-xs font-semibold text-[#065B35] tracking-wide uppercase">
                HOCROW Education • Official Career Roadmap
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17251D] tracking-tight leading-[1.12]"
            >
              Your 4-Year Roadmap to a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087443] to-[#065B35] underline decoration-[#087443]/20 decoration-wavy">
                High-Package IT Career
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#66736B] leading-relaxed max-w-2xl font-normal"
            >
              From mastering the fundamentals to becoming industry-ready. Follow a structured four-year learning journey with HOCROW Education and turn your career ambitions into reality.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/roadmap"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#087443] hover:bg-[#065B35] shadow-brand hover:shadow-brand-lg transition-all duration-200 transform hover:-translate-y-0.5 text-base"
              >
                <span>Explore 4-Year Roadmap</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#065B35] bg-white hover:bg-[#E8F5EC] border border-[#087443]/20 shadow-xs hover:shadow-sm transition-all duration-200 text-base"
              >
                <span>Start Learning</span>
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              </Link>
            </motion.div>

            {/* Trust statement & Brand Value Props */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-[#087443]/10"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-[#087443] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#087443]" />
                "Learn. Build. Grow. Get Career Ready."
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#66736B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087443] shrink-0" />
                  <span>Verified 4-Year Milestones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087443] shrink-0" />
                  <span>Real Hands-On Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087443] shrink-0" />
                  <span>ATS Resume & System Design</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Modern 4-Year Career Timeline & Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Glowing Card */}
            <div className="relative rounded-3xl bg-white p-6 shadow-brand-lg border border-[#087443]/15">
              
              {/* Header of preview card */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5EC] flex items-center justify-center text-[#087443]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#17251D]">HOCROW Trajectory</h3>
                    <p className="text-xs text-[#66736B]">Active Year: Year {currentYear} CS Undergraduate</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-xs font-bold text-[#087443] bg-[#E8F5EC] rounded-full">
                  Live Tracker
                </span>
              </div>

              {/* Four-Year Interactive Pathway Graphic */}
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-[#66736B]">
                  <span>4-Year Journey Progression</span>
                  <span className="text-[#087443] font-bold">{percentage}% Complete</span>
                </div>

                {/* Progress Track */}
                <div className="w-full bg-[#E8F5EC] rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#087443] to-[#10B981] h-2.5 rounded-full transition-all duration-700" 
                    style={{ width: `${Math.max(percentage, 15)}%` }}
                  />
                </div>

                {/* 4 Connected Year Pills */}
                <div className="grid grid-cols-4 gap-2 pt-2">
                  {[
                    { y: 1, label: 'Year 1', desc: 'Foundations', icon: Terminal, active: currentYear >= 1 },
                    { y: 2, label: 'Year 2', desc: 'DSA & OOP', icon: Code2, active: currentYear >= 2 },
                    { y: 3, label: 'Year 3', desc: 'Full Stack', icon: Layers, active: currentYear >= 3 },
                    { y: 4, label: 'Year 4', desc: 'Placements', icon: Briefcase, active: currentYear >= 4 }
                  ].map((item) => (
                    <div 
                      key={item.y}
                      className={`p-2 rounded-xl text-center border transition-all ${
                        item.y === currentYear 
                          ? 'bg-[#E8F5EC] border-[#087443] shadow-xs' 
                          : 'bg-[#F8FAF8] border-gray-100'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 mx-auto mb-1 ${item.y === currentYear ? 'text-[#087443]' : 'text-gray-400'}`} />
                      <div className="text-[11px] font-bold text-[#17251D]">{item.label}</div>
                      <div className="text-[9px] text-[#66736B] truncate">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Code Snippet / Skill Indicator Card */}
              <div className="p-3.5 rounded-2xl bg-[#065B35] text-white text-xs font-mono shadow-inner space-y-2 mt-2">
                <div className="flex items-center justify-between text-[11px] text-green-200">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5 text-green-300" /> hocrow-career.sh
                  </span>
                  <span className="text-[10px] bg-[#043621] px-2 py-0.5 rounded text-green-300">Target: High Package SDE</span>
                </div>
                <div className="text-green-100 text-[11px] space-y-1">
                  <p><span className="text-green-300">$</span> init_hocrow_roadmap --year 1..4</p>
                  <p><span className="text-green-300">✓</span> Computer Science Fundamentals [VERIFIED]</p>
                  <p><span className="text-green-300">✓</span> 150+ DSA Problems & Algorithms [ACTIVE]</p>
                  <p><span className="text-green-300">✓</span> Production Full-Stack Deployments [READY]</p>
                  <p className="text-yellow-300">→ Status: Interview & System Design Ready</p>
                </div>
              </div>

              {/* Bottom Quick Stats */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-gray-100 text-center">
                <div className="p-2 rounded-xl bg-[#F8FAF8]">
                  <div className="text-lg font-bold text-[#087443]">4</div>
                  <div className="text-[10px] text-[#66736B] font-medium">Curated Years</div>
                </div>
                <div className="p-2 rounded-xl bg-[#F8FAF8]">
                  <div className="text-lg font-bold text-[#087443]">{totalCount}</div>
                  <div className="text-[10px] text-[#66736B] font-medium">Core Milestones</div>
                </div>
                <div className="p-2 rounded-xl bg-[#F8FAF8]">
                  <div className="text-lg font-bold text-[#087443]">100%</div>
                  <div className="text-[10px] text-[#66736B] font-medium">Free Access</div>
                </div>
              </div>

            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-[#087443]/20 flex items-center gap-3 animate-bounce duration-1000 hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5EC] flex items-center justify-center text-[#087443]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left pr-2">
                <div className="text-xs font-bold text-[#17251D]">Structured Growth</div>
                <div className="text-[10px] text-[#087443] font-semibold">Tier-1 IT Readiness</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
