'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonialsRef = useRef(null);
  const autoplayRef = useRef(null);
  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await import('@/data/testimonials.json');
        setTestimonials(data.testimonials);
        setIndustries(data.industries);
      } catch (error) {
        console.error('Failed to load testimonials:', error);
      }
    };
    
    fetchTestimonials();
  }, []);
  
  useEffect(() => {
    // Auto rotate testimonials
    if (testimonials.length === 0) return;
    
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);
    };
    
    startAutoplay();
    
    // Reset autoplay on user interaction
    const resetAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        startAutoplay();
      }
    };
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(autoplayRef.current);
      } else {
        startAutoplay();
      }
    });
    
    // Cleanup
    return () => {
      clearInterval(autoplayRef.current);
      document.removeEventListener('visibilitychange', resetAutoplay);
    };
  }, [testimonials.length]);
  
  const nextTestimonial = () => {
    if (testimonials.length === 0) return;
    
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    // Reset autoplay
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);
    }
  };
  
  const prevTestimonial = () => {
    if (testimonials.length === 0) return;
    
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    // Reset autoplay
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);
    }
  };
  
  const sliderVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };
  
  const dotVariants = {
    inactive: { width: '8px', backgroundColor: 'var(--bg-tertiary)' },
    active: { width: '24px', backgroundColor: 'var(--primary-color)' }
  };
  
  const industryVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }
  };
  
  if (testimonials.length === 0) {
    return (
      <section className="py-20 bg-background-secondary relative overflow-hidden">
        <div className="container">
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="loader"></div>
            <p className="mt-4 text-text-secondary">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/10 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/10 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute inset-0 background-dots opacity-5 pointer-events-none"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Feedback from colleagues and clients across various industries
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative" ref={testimonialsRef}>
          {/* Testimonial Cards */}
          <div className="overflow-hidden relative h-[400px] md:h-[320px]">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                className="absolute w-full h-full"
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <div className="card glass-effect p-8 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="text-primary mb-4 opacity-80">
                        <FaQuoteLeft className="w-8 h-8" />
                      </div>
                      <p className="text-text-secondary text-lg italic mb-6">
                        {testimonials[currentIndex].text}
                      </p>
                      <div className="text-right">
                        <FaQuoteRight className="w-8 h-8 text-primary opacity-80 ml-auto" />
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-6 pt-6 border-t border-border-color">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-bg-secondary border-2 border-primary/20 flex-shrink-0">
                        {/* Fallback if image is not available */}
                        <div className="w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30 flex items-center justify-center text-white text-xl font-bold">
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary">{testimonials[currentIndex].name}</h4>
                        <p className="text-primary text-sm">{testimonials[currentIndex].role}</p>
                        <p className="text-text-secondary text-sm">{testimonials[currentIndex].company}</p>
                      </div>
                      <div className="ml-auto">
                        <motion.span 
                          className="px-3 py-1 bg-background rounded-full text-xs text-text-secondary border border-border-color"
                          whileHover={{ 
                            backgroundColor: 'var(--primary-color)',
                            color: '#fff',
                            scale: 1.05
                          }}
                        >
                          {testimonials[currentIndex].industry}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <motion.button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary border border-border-color"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'var(--primary-color)', 
                color: '#fff',
                borderColor: 'var(--primary-color)'
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </motion.button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="h-3 rounded-full bg-bg-tertiary"
                  variants={dotVariants}
                  animate={index === currentIndex ? 'active' : 'inactive'}
                  transition={{ duration: 0.3 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  initial={false}
                />
              ))}
            </div>
            
            <motion.button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary border border-border-color"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'var(--primary-color)', 
                color: '#fff',
                borderColor: 'var(--primary-color)'
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
        
        {/* Industry Context */}
        <div className="mt-16">
          <motion.h3 
            className="text-xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industries I've Worked With
          </motion.h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {industries.map((industry, i) => (
              <motion.div 
                key={industry}
                className="px-4 py-2 bg-background rounded-lg text-text-secondary border border-border-color backdrop-filter backdrop-blur-sm"
                variants={industryVariants}
                custom={i}
                whileHover="hover"
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}