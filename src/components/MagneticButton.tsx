import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const MagneticButton = ({ children, className, onClick, variant, size }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Make the effect more subtle and responsive
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * 0.18; // less aggressive
    const y = (clientY - centerY) * 0.18;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 18, mass: 0.08 }}
      className="inline-block"
    >
      <Button
        className={
          `transition-transform duration-100 active:scale-95 cursor-pointer select-none ${className || ''}`
        }
        onClick={onClick}
        variant={variant}
        size={size}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  );
};

export default MagneticButton;
