import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  const springConfig = { damping: 30, stiffness: 300 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', moveMouse);
    
    // Initial selection and dynamic updates
    const updateListeners = () => {
      const interactables = document.querySelectorAll('a, button, [role="button"], .group');
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateListeners();
    const interval = setInterval(updateListeners, 2000); // Poll for new elements

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      clearInterval(interval);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const primaryColor = theme === 'dark' ? '#007AFF' : '#0051D7';

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'white' : 'transparent',
          borderColor: isHovered ? 'white' : primaryColor,
        }}
      >
        <motion.div 
          className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
          animate={{ scale: isHovered ? 1.2 : 0 }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: 12,
          translateY: 12,
        }}
      />
    </>
  );
};

export default CustomCursor;
