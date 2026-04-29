import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >

      {/* Theme Toggle */}
      <div className="absolute top-8 left-8 z-50">
        <ThemeToggle />
      </div>

      {/* TEXT CONTENT */}
      <div className="max-w-7xl mx-auto w-full relative z-20 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left space-y-10"
          >

            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/5 bg-foreground/5 text-muted-foreground text-xs font-semibold uppercase backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>Open for New Opportunities</span>
              </div>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-8xl xl:text-9xl font-bold text-foreground leading-[0.9]"
              >
                CHETHAN<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/40 via-foreground to-foreground/40 animate-pulse">
                  YALLAMPALLI
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
              >
                Architecting <span className="text-foreground">intelligent RAG pipelines</span> &
                <span className="text-foreground"> AI classification</span> with a focus on seamless user experience.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 pt-6">
              <MagneticButton
                onClick={handleConnectClick}
                className="bg-foreground text-background px-6 py-2 rounded-full font-semibold text-base shadow-md hover:shadow-lg focus:scale-95 whitespace-nowrap min-w-[170px]"
              >
                <span className="flex items-center justify-center gap-2 w-full">
                  Let's Collaborate <ArrowRight className="h-4 w-4" />
                </span>
              </MagneticButton>

              {/* Use asChild for anchor button for accessibility and smoothness */}
              <MagneticButton
                variant="outline"
                className="border-foreground/20 text-foreground px-10 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg focus:scale-95"
                // @ts-ignore
                asChild
              >
                <a href="/chethan-uploads/Chethan-Resume(L).pdf" download className="flex items-center w-full h-full cursor-pointer" tabIndex={0}>
                  View Resume <Download className="ml-2 h-5 w-5" />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-12 pt-12 border-t border-foreground/5">
              {[
                { label: 'Industry Exp', val: '1Y+' },
                { label: 'AI Models', val: '3+' },
                { label: 'Precision', val: '94%' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold">{stat.val}</div>
                  <div className="text-xs text-muted-foreground uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* 🔥 HERO IMAGE (FIXED CORRECTLY) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="
          absolute 
          top-0 
          right-0 
          h-full 
          w-[45%] 
          hidden lg:flex
          items-end 
          justify-center
          z-0
        "
      >

        {/* Glow */}
<div className="absolute right-10 bottom-20 w-[300px] h-[300px] bg-[#007AFF]/20 blur-[80px] rounded-full"></div>
        {/* Image */}
        <motion.img
          src="/chethan-uploads/chethan-cutout.png"
          alt="Chethan"
          className="
            h-[90%]
            object-contain
            object-bottom
            drop-shadow-[0_60px_120px_rgba(0,0,0,0.4)]
            dark:drop-shadow-[0_60px_120px_rgba(0,122,255,0.5)]
            pointer-events-none
          "
          whileHover={{ scale: 1.02 }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>

      </motion.div>

    </section>
  );
};

export default Hero;