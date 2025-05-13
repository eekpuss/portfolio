'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [industries, setIndustries] = useState([]);
  const testimonialsRef = useRef(null);
  
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
  
  const nextTestimonial = () => {
    if (testimonials.length === 0) return;
    
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    if (testimonials.length === 0) return;
    
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // Auto rotate testimonials
  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/5 to-transparent opacity-30 blur-3xl"></div>
      
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
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`absolute w-full h-full transition-all duration-500 ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="card p-8 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="text-primary mb-4">
                        <FaQuoteLeft className="w-8 h-8 opacity-30" />
                      </div>
                      <p className="text-text-secondary text-lg italic mb-6">
                        {testimonial.text}
                      </p>
                      <div className="text-right">
                        <FaQuoteRight className="w-8 h-8 text-primary opacity-30 ml-auto" />
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-6 pt-6 border-t border-border-color">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-background-secondary border-2 border-primary/20">
                        {/* Fallback image jika belum ada */}
                        <div className="w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30 flex items-center justify-center text-white text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-primary text-sm">{testimonial.role}</p>
                        <p className="text-text-secondary text-sm">{testimonial.company}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-3 py-1 bg-background rounded-full text-xs text-text-secondary">
                          {testimonial.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-background-accent'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['Pharmaceutical', 'Manufacturing', 'Technology', 'Retail', 'Education'].map((industry) => (
              <div 
                key={industry}
                className="px-4 py-2 bg-background rounded-lg text-text-secondary border border-border-color hover:border-primary/30 transition-colors"
              >
                {industry}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}