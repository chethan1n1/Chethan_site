import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, MessageCircle, Eye, Sparkles, Rocket } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'ventures', label: 'Ventures', icon: Rocket },
    { id: 'skills', label: 'Skills', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];
  // Removed ChevronDown SVG for Home button

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Fix: Home section should be active when near the top
      const aboutElement = document.getElementById('about');
      if (window.scrollY < (aboutElement?.offsetTop ?? 1) - 80) {
        setActiveSection('hero');
        return;
      }
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id).filter(id => id !== 'hero');
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'hero' ? '' : sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Minimalistic Design */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 hidden lg:block ${
        isScrolled ? 'translate-y-0' : 'translate-y-0'
      }`}>
        <div className={`bg-white/90 backdrop-blur-lg border border-gray-200/30 rounded-full shadow-lg transition-all duration-300 ${
          isScrolled ? 'shadow-xl border-gray-300/40 bg-white/95' : ''
        }`}>
          <div className="flex items-center px-8 py-2 space-x-2">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              // const isHome = item.id === 'hero';
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group
                    ${isActive ? 'text-amber-700 bg-amber-50/80' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'}`}
                >
                  <span className={`flex items-center transition-all duration-300 ${isActive ? 'font-semibold' : ''}`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        {/* Mobile Navigation Toggle - Minimalistic */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed top-6 right-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-lg border border-gray-200/30 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isScrolled ? 'shadow-xl border-gray-300/40' : ''
          } ${isOpen ? 'bg-amber-50 border-amber-200/50 scale-110' : 'hover:bg-gray-50 hover:scale-105'}`}
        >
          {isOpen ? (
            <X className="h-5 w-5 text-amber-700" />
          ) : (
            <Menu className="h-5 w-5 text-gray-700" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? 'visible' : 'invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel - Minimalistic Mobile Design */}
          <div className={`absolute top-6 right-6 left-6 bg-white/95 backdrop-blur-lg border border-gray-200/30 rounded-2xl shadow-xl transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4'
          }`}>
            <div className="p-6">
              <div className="space-y-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  // const isHome = item.id === 'hero';
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group
                        ${isActive ? 'text-amber-700 bg-amber-50/80' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'}`}
                    >
                      <span className={`flex items-center transition-all duration-300 ${isActive ? 'font-semibold' : ''}`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Minimalistic Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <div 
          className="h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transition-all duration-300 ease-out opacity-80"
          style={{
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>
    </>
  );
};

export default Navigation;
