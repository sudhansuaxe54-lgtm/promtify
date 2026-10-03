import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Clock, 
  AlertCircle,
  Sparkles,
  MessageSquare
} from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setErrors({});
      setSubmitted(true);
    } else {
      setErrors(errs);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] border border-[#087443]/20 shadow-xs">
            <MessageSquare className="w-4 h-4 text-[#087443]" />
            <span className="text-xs font-bold text-[#065B35] uppercase tracking-wider">
              Get in Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight">
            Connect with HOCROW Education
          </h2>

          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Have questions about the 4-year roadmap, campus partnerships, or open-source curriculum contributions? Reach out to our academic team.
          </p>
        </div>

        {/* 2-Column: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-3xl bg-[#F8FAF8] border border-[#087443]/15 space-y-6">
              <h3 className="text-xl font-bold text-[#17251D]">
                Academic & Community Desk
              </h3>
              <p className="text-xs sm:text-sm text-[#66736B] leading-relaxed">
                We empower university scholars to reach their full potential. Reach out directly or submit your query using the adjacent form.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#17251D]">Email Inquiries</div>
                    <div className="text-[#66736B]">contact@hocrow.edu (Placeholder)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#17251D]">Student Support Desk</div>
                    <div className="text-[#66736B]">+91 (0) 800-HOCROW (Placeholder)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#17251D]">Technology Campus</div>
                    <div className="text-[#66736B]">Education Empowers Academic Hub, Bangalore / Tech Corridors</div>
                  </div>
                </div>
              </div>

              {/* Front-end Simulation Notice */}
              <div className="p-3.5 rounded-2xl bg-[#E8F5EC]/60 border border-[#087443]/20 text-[11px] text-[#065B35] leading-relaxed">
                <strong>Demonstration Mode:</strong> Submissions in this version run client-side validation to provide immediate UI feedback without backend persistence.
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#F8FAF8] rounded-3xl p-6 sm:p-8 border border-[#087443]/15 text-left">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#E8F5EC] text-[#087443] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#17251D]">Message Validated Successfully!</h3>
                <p className="text-sm text-[#66736B] max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#17251D]">{formData.name}</span>. Your inquiry regarding "{formData.subject}" has passed front-end validation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#087443] hover:bg-[#065B35] transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#17251D] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aditi Sharma"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.name ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-white focus:border-[#087443]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#17251D] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. aditi@student.college.edu"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-white focus:border-[#087443]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-[#17251D] mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Question about Year 2 DSA Roadmap"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.subject ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-white focus:border-[#087443]'
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#17251D] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your questions or notes here..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-white focus:border-[#087443]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#087443] hover:bg-[#065B35] shadow-brand transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
