import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, LayoutDashboard, Sparkles, GraduationCap } from 'lucide-react';
import { useRoadmap } from '../context/RoadmapContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalProgress } = useRoadmap();
  const { percentage } = getTotalProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: '4-Year Roadmap', href: '/roadmap' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'Career Guidance', href: '/career' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#087443]/10 py-2.5'
          : 'bg-[#F8FAF8]/90 backdrop-blur-sm border-b border-[#087443]/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official HOCROW Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl bg-white p-1 border border-[#087443]/20 shadow-xs transition-transform group-hover:scale-105">
              <img
                src="/hocrow-logo.png"
                alt="HOCROW Education - Education Empowers"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#087443] font-display flex items-center gap-1">
                HOCROW
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-[#E8F5EC] text-[#065B35] font-semibold tracking-normal uppercase">
                  Edu
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#66736B] font-semibold -mt-0.5">
                Education Empowers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? 'text-[#087443] bg-[#E8F5EC] font-semibold'
                      : 'text-[#17251D] hover:text-[#087443] hover:bg-[#E8F5EC]/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dashboard Quick Badge */}
            <Link
              to="/dashboard"
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#065B35] bg-[#E8F5EC] hover:bg-[#d5ecd9] rounded-lg transition-all border border-[#087443]/20"
              title="View your interactive progress dashboard"
            >
              <LayoutDashboard className="w-4 h-4 text-[#087443]" />
              <span className="hidden md:inline">Dashboard</span>
              <span className="bg-[#087443] text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold">
                {percentage}%
              </span>
            </Link>

            {/* "Start Your Journey" Button */}
            <Link
              to="/roadmap"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#087443] hover:bg-[#065B35] rounded-xl shadow-xs hover:shadow-brand transition-all duration-200 group"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/dashboard"
              className="p-2 text-[#087443] bg-[#E8F5EC] rounded-lg"
              title="Dashboard"
            >
              <LayoutDashboard className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#17251D] hover:text-[#087443] hover:bg-[#E8F5EC] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#087443]/10 shadow-lg px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="p-3 mb-2 rounded-xl bg-[#E8F5EC] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#087443]" />
              <span className="text-xs font-semibold text-[#065B35]">Roadmap Progress</span>
            </div>
            <span className="text-xs font-bold bg-[#087443] text-white px-2 py-0.5 rounded-full">
              {percentage}% Complete
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#E8F5EC] text-[#087443] font-bold'
                      : 'text-[#17251D] hover:bg-[#F8FAF8] hover:text-[#087443]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              to="/dashboard"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#065B35] bg-[#E8F5EC] rounded-xl"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Open Student Dashboard</span>
            </Link>
            <Link
              to="/roadmap"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#087443] rounded-xl shadow-xs"
            >
              <span>Explore 4-Year Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
