'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground({ children, images }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Create parallax effect for different layers
  const backY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const frontY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  
  // Opacity transforms for fade effects
  const backOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const midOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.5]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]);
  
  // Scale effects
  const midScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const frontScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  
  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Background Layer */}
      {images?.background && (
        <motion.div 
          className="absolute inset-0 w-full h-full -z-20"
          style={{ 
            y: backY,
            opacity: backOpacity
          }}
        >
          <div className="absolute inset-0 w-full h-full" style={{
            backgroundImage: `url(${images.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          <div className="absolute inset-0 bg-background/70" />
        </motion.div>
      )}
      
      {/* Middle Layer (Optional) */}
      {images?.middle && (
        <motion.div 
          className="absolute inset-0 w-full h-full -z-10"
          style={{ 
            y: midY,
            opacity: midOpacity,
            scale: midScale
          }}
        >
          <div className="absolute inset-0 w-full h-full" style={{
            backgroundImage: `url(${images.middle})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </motion.div>
      )}
      
      {/* Front Layer (Optional) */}
      {images?.foreground && (
        <motion.div 
          className="absolute inset-0 w-full h-full -z-5 pointer-events-none"
          style={{ 
            y: frontY,
            scale: frontScale
          }}
        >
          <div className="absolute inset-0 w-full h-full" style={{
            backgroundImage: `url(${images.foreground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </motion.div>
      )}
      
      {/* Content Layer */}
      <motion.div 
        className="relative z-10"
        style={{ opacity: contentOpacity }}
      >
        {children}
      </motion.div>
      
      {/* Gradient Overlay - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-5"></div>
    </div>
  );
}