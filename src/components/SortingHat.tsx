import React from 'react';
import { motion } from 'motion/react';

export const SortingHat: React.FC<{ isThinking?: boolean; isSpeaking?: boolean }> = ({ isThinking, isSpeaking }) => {
  return (
    <motion.div 
      className="relative w-48 h-48 mb-8"
      animate={isThinking ? {
        rotate: [0, -2, 2, -2, 0],
        scale: [1, 1.02, 1, 1.02, 1]
      } : isSpeaking ? {
        scale: [1, 1.05, 1],
        y: [0, -5, 0]
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {/* Simple stylized hat shape using SVG */}
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        <path 
          d="M100 20 L40 160 Q100 180 160 160 Z" 
          fill="#f8f9fa" 
          stroke="#d4af37" 
          strokeWidth="2"
        />
        {/* Folds */}
        <path d="M70 50 Q85 60 100 50" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M60 80 Q90 95 120 80" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M50 110 Q100 130 150 110" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.3" />
        <path 
          d="M20 160 Q100 190 180 160 Q100 175 20 160" 
          fill="#ffffff" 
          stroke="#d4af37" 
          strokeWidth="3"
        />
        {/* Gold patterns on brim */}
        <path 
          d="M40 165 Q70 170 100 165 T160 165" 
          stroke="#d4af37" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.5"
        />
        <circle cx="50" cy="170" r="2" fill="#d4af37" opacity="0.5" />
        <circle cx="150" cy="170" r="2" fill="#d4af37" opacity="0.5" />
        <circle cx="100" cy="175" r="2" fill="#d4af37" opacity="0.5" />
        {/* Eyes/Mouth folds */}
        <motion.path 
          d="M70 100 Q100 90 130 100" 
          stroke="#d4af37" 
          strokeWidth="2" 
          fill="none"
          animate={isThinking ? { d: ["M70 100 Q100 90 130 100", "M70 105 Q100 95 130 105", "M70 100 Q100 90 130 100"] } : {}}
        />
        <motion.path 
          d="M80 130 Q100 150 120 130" 
          stroke="#d4af37" 
          strokeWidth="2" 
          fill="none"
          animate={isSpeaking ? { scaleY: [1, 1.5, 1], y: [0, 2, 0] } : {}}
        />
      </svg>
      
      {/* Magical glow */}
      <div className="absolute inset-0 bg-[#e2d1a3] opacity-5 blur-2xl rounded-full pointer-events-none" />
    </motion.div>
  );
};
