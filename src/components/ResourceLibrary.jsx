import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  Calendar, 
  Filter, 
  CheckCircle, 
  Sparkles,
  Bookmark
} from 'lucide-react';
import { resourceCategories, resourcesData } from '../data/resourcesData';

export const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredResources = resourcesData.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          res.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          res.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || res.year === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <section id="resources" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] border border-[#087443]/20 shadow-xs">
            <BookOpen className="w-4 h-4 text-[#087443]" />
            <span className="text-xs font-bold text-[#065B35] uppercase tracking-wider">
              Verified Public Learning Catalog
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight">
            Curated Learning Resources
          </h2>

          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Free, open, verified public learning documentation, interactive playgrounds, and official specifications organized by undergraduate year.
          </p>

          {/* Search Bar & Year Controls */}
          <div className="pt-2 max-w-2xl mx-auto space-y-3">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tutorials, Linux docs, NeetCode, MDN, LeetCode, system design..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#087443] shadow-xs text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Year Selector */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-bold text-[#66736B] uppercase mr-1">Filter by Year:</span>
              {['All', 'Year 1', 'Year 2', 'Year 3', 'Year 4'].map(yr => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    selectedYear === yr
                      ? 'bg-[#087443] text-white shadow-xs'
                      : 'bg-[#F8FAF8] text-[#17251D] hover:bg-[#E8F5EC] border border-gray-200'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {resourceCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-[11px] font-medium rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#065B35] text-white font-bold'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.length === 0 ? (
            <div className="col-span-full py-12 text-center text-[#66736B]">
              <p className="text-base font-semibold">No learning resources matched your search filter.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedYear('All'); }}
                className="mt-2 text-xs text-[#087443] font-bold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredResources.map((res) => (
              <div
                key={res.id}
                className="bg-[#F8FAF8] rounded-3xl p-6 border border-[#087443]/15 hover:border-[#087443]/30 hover:shadow-brand transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#087443] bg-[#E8F5EC] px-2 py-0.5 rounded-full">
                      {res.category}
                    </span>
                    <span className="text-xs text-[#66736B] font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#087443]" />
                      {res.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#17251D] mb-1.5 group-hover:text-[#087443] transition-colors">
                    {res.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#065B35] mb-2 flex items-center gap-1">
                    <span>Source: {res.provider}</span>
                  </div>

                  <p className="text-xs text-[#66736B] leading-relaxed mb-4">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-[#66736B] font-medium">
                    Verified Public Domain
                  </span>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-[#087443] border border-[#087443]/20 hover:bg-[#087443] hover:text-white transition-all shadow-xs"
                  >
                    <span>Visit Resource</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
