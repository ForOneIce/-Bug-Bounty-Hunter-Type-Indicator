import React from 'react';
import { motion } from 'motion/react';

export const MagicalBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0c] text-[#e2d1a3] font-serif overflow-hidden selection:bg-[#e2d1a3] selection:text-[#0a0a0c]">
      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#e2d1a3] rounded-full opacity-20"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, '-10%'],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {children}
      </div>
    </div>
  );
};
