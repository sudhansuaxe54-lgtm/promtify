import React from 'react';
import { Quote, Sparkles, Info, Users, Compass } from 'lucide-react';
import { sampleTestimonials, testimonialDisclaimer } from '../data/testimonialsData';

export const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAF8] border-t border-b border-[#087443]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] border border-[#087443]/20 shadow-xs">
            <Users className="w-4 h-4 text-[#087443]" />
            <span className="text-xs font-bold text-[#065B35] uppercase tracking-wider">
              Student Trajectories
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17251D] tracking-tight">
            Curriculum Journeys & Blueprints
          </h2>

          <p className="text-sm sm:text-base text-[#66736B]">
            Illustrative perspectives demonstrating how students methodically navigate the 4-year learning framework.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {sampleTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-[#087443]/15 shadow-xs flex flex-col justify-between text-left relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    {t.badge}
                  </span>
                  <Quote className="w-5 h-5 text-[#087443]/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#17251D] italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="font-bold text-xs text-[#17251D]">{t.author}</div>
                <div className="text-[11px] text-[#66736B]">{t.college}</div>
                <div className="text-[10px] text-[#087443] font-semibold mt-0.5">{t.focus}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Transparency Banner */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-gray-200 text-xs text-[#66736B] flex items-center gap-3 text-left">
          <Info className="w-5 h-5 text-[#087443] shrink-0" />
          <p>{testimonialDisclaimer}</p>
        </div>

      </div>
    </section>
  );
};
