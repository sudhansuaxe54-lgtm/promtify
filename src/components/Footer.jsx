import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Mail, 
  MapPin, 
  Heart,
  ArrowUp
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17251D] text-white pt-16 pb-12 border-t border-[#087443]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl">
                <img
                  src="/hocrow-logo.png"
                  alt="HOCROW Education - Education Empowers"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  HOCROW Education
                </span>
                <span className="text-[10px] uppercase tracking-widest text-green-300 font-semibold">
                  Education Empowers
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Empowering university engineering students to build successful IT careers through structured 4-year roadmaps, hands-on production projects, and rigorous technical interview readiness.
            </p>

            {/* Social Icons Placeholders */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#087443] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#087443] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#087443] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#087443] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-green-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home Page</Link></li>
              <li><Link to="/roadmap" className="hover:text-white transition-colors">4-Year Roadmap</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Student Dashboard</Link></li>
              <li><Link to="/skills" className="hover:text-white transition-colors">Skill Tracks (8)</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
              <li><Link to="/career" className="hover:text-white transition-colors">Career Pathways</Link></li>
            </ul>
          </div>

          {/* Roadmap Years */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-green-400">
              4-Year Timeline
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><Link to="/roadmap" className="hover:text-white transition-colors">Year 1: Foundations & Linux</Link></li>
              <li><Link to="/roadmap" className="hover:text-white transition-colors">Year 2: DSA & OOP Logic</Link></li>
              <li><Link to="/roadmap" className="hover:text-white transition-colors">Year 3: Full-Stack & Internships</Link></li>
              <li><Link to="/roadmap" className="hover:text-white transition-colors">Year 4: Placements & System Design</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Learning Resources Library</Link></li>
            </ul>
          </div>

          {/* Contact Details Placeholder */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-green-400">
              Academic Desk
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                <span>Bangalore Tech Corridor, Karnataka, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span>support@hocrow.edu</span>
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold text-[#065B35] bg-[#E8F5EC] hover:bg-white transition-all"
                >
                  Send Inquiry
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} HOCROW Education. All rights reserved. <span className="text-green-400 font-semibold">Education Empowers.</span>
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-500">Built for Engineering Scholars</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
