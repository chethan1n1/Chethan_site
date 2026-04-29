import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, MessageCircle, Sparkles, Rocket } from 'lucide-react';
// ❌ removed ThemeToggle import
// import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'ventures', label: 'Ventures', icon: Rocket },
    { id: 'skills', label: 'Skills', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 hidden lg:flex items-center gap-4 ${isScrolled ? 'top-6' : 'top-8'}`}>
        <div className={`px-2 py-2 backdrop-blur-3xl border border-foreground/10 rounded-full transition-all duration-700 shadow-[0_0_80px_rgba(0,0,0,0.2)] ${isScrolled ? 'bg-background/60 scale-95' : 'bg-background/5'}`}>

          <div className="flex items-center relative space-x-1">
            {/* Active Indicator */}
            <div
              className="absolute h-full bg-foreground/5 rounded-full border border-foreground/10 shadow-inner transition-all duration-500"
              style={{
                left: `${navItems.findIndex(i => i.id === activeSection) * (100 / navItems.length)}%`,
                width: `${100 / navItems.length}%`
              }}
            />

            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-2.5 rounded-full text-[13px] font-bold tracking-tight transition-all duration-500
                  ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* ❌ COMPLETELY REMOVED THEME TOGGLE FROM NAVBAR */}

        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">

          {/* ❌ REMOVED MOBILE TOGGLE ALSO */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-12 h-12 bg-background/60 backdrop-blur-2xl border border-foreground/10 rounded-full shadow-2xl flex items-center justify-center transition-all duration-700 ${isOpen ? 'rotate-90' : ''}`}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        <div className={`fixed inset-0 z-40 transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setIsOpen(false)} />

          <div className={`absolute inset-x-6 top-24 bg-background/95 backdrop-blur-2xl border border-foreground/10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] transition-all duration-700 ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-10'}`}>
            <div className="p-8">
              <div className="space-y-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-6 py-5 rounded-3xl text-lg font-bold transition-all duration-500 flex items-center justify-between
                      ${isActive ? 'text-foreground bg-foreground/5 border border-foreground/10' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      <span>{item.label}</span>
                      <item.icon className={`h-5 w-5 ${isActive ? 'text-[#007AFF]' : 'opacity-20'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div
          className="h-[1px] bg-foreground/10 transition-all duration-500 ease-out overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="w-full h-full bg-primary shadow-[0_0_15px_rgba(0,122,255,0.8)]" />
        </div>
      </div>
    </>
  );
};

export default Navigation;