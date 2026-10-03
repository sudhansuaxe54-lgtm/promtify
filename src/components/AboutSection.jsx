import React from 'react';
import { 
  Sparkles, 
  Target, 
  Eye, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Compass, 
  HeartHandshake,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Brand Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Official HOCROW Logo Spotlight */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#E8F5EC] to-white border border-[#087443]/20 shadow-brand max-w-sm w-full group">
              <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm border border-[#087443]/15">
                <img
                  src="/hocrow-logo.png"
                  alt="HOCROW Education - Education Empowers"
                  className="w-full h-auto object-contain mx-auto transition-transform group-hover:scale-105 duration-300"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-[#087443]/15">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#087443]">
                  HOCROW Education
                </span>
                <p className="text-sm font-semibold text-[#17251D] mt-0.5">
                  "Education Empowers"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Vision Description */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] border border-[#087443]/20 shadow-xs">
              <GraduationCap className="w-4 h-4 text-[#087443]" />
              <span className="text-xs font-bold text-[#065B35] uppercase tracking-wider">
                About HOCROW Education
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight">
              Education Empowers.{' '}
              <span className="text-[#087443]">Skills Transform.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
              HOCROW Education is focused on helping students develop the skills, confidence, and practical knowledge needed to navigate the modern technology industry. Through structured learning roadmaps, practical projects, and career-focused preparation, HOCROW aims to connect academic learning with real-world opportunities.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#087443]/15">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#17251D] mb-1.5">Our Mission</h3>
                <p className="text-xs text-[#66736B] leading-relaxed">
                  To democratize high-quality, transparent, and structured computer science education, turning aspiring university students into capable, industry-ready software engineers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#087443]/15">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#17251D] mb-1.5">Our Vision</h3>
                <p className="text-xs text-[#66736B] leading-relaxed">
                  A tech ecosystem where every student, regardless of tier or background, has a clear 4-year roadmap and verifiable skills to compete for top-tier global IT opportunities.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Learning Philosophy & Four-Year Roadmap Summary */}
        <div className="bg-[#F8FAF8] rounded-3xl p-8 sm:p-12 border border-[#087443]/15 text-left">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold text-[#087443] uppercase tracking-wider">
              Educational Framework
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17251D]">
              The HOCROW Learning Philosophy
            </h3>
            <p className="text-sm text-[#66736B] leading-relaxed">
              We reject passive tutorial hoarding. Our philosophy is rooted in three non-negotiable pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
              <span className="text-2xl font-extrabold text-[#087443]">01</span>
              <h4 className="text-base font-bold text-[#17251D]">Foundations First</h4>
              <p className="text-xs text-[#66736B] leading-relaxed">
                Frameworks evolve rapidly, but operating systems, memory models, networking protocols, and data structures remain timeless.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
              <span className="text-2xl font-extrabold text-[#087443]">02</span>
              <h4 className="text-base font-bold text-[#17251D]">Learn by Shipping</h4>
              <p className="text-xs text-[#66736B] leading-relaxed">
                Real learning happens when code runs in production, users encounter bugs, and architectures are tested against real-world load.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
              <span className="text-2xl font-extrabold text-[#087443]">03</span>
              <h4 className="text-base font-bold text-[#17251D]">Compound Consistency</h4>
              <p className="text-xs text-[#66736B] leading-relaxed">
                Four years of disciplined, steady progress compound into extraordinary career outcomes without burnout or panic during final-year placement drives.
              </p>
            </div>
          </div>

          {/* 4-Year Summary Bar */}
          <div className="p-6 rounded-2xl bg-[#065B35] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-brand">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold">Start executing your 4-year plan today</h4>
              <p className="text-xs text-green-200">
                Access the free curriculum modules, project blueprints, and interactive student dashboard.
              </p>
            </div>
            <Link
              to="/roadmap"
              className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-white text-[#065B35] hover:bg-[#E8F5EC] transition-all shadow-xs shrink-0"
            >
              Explore 4-Year Roadmap
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
