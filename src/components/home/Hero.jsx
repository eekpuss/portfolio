'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import CountUp from 'react-countup';
import TypewriterComponent from 'typewriter-effect';
import ParticlesBackground from '@/components/animations/ParticlesBackground';
import DownloadCVButton from '@/components/common/DownloadCVButton';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6 + (i * 0.2),
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    })
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 background-dots opacity-5 pointer-events-none"></div>
      
      {/* Gradient Overlay - Top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg-primary to-transparent pointer-events-none"></div>
      
      {/* Gradient Overlay - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none"></div>
      
      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-6 py-12 z-10 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <motion.div 
            className="w-full md:w-1/2"
            style={{ opacity }}
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Arief Marcellino <span className="text-gradient">Ferdiansyah</span>
            </motion.h1>
            
            {/* Dynamic Headline with Typewriter Effect */}
            <motion.h2 
              className="text-xl md:text-2xl font-medium mb-6 h-10"
              variants={itemVariants}
            >
              <span className="text-text-primary">I'm a </span>
              <span className="text-gradient-accent">
                <TypewriterComponent 
                  options={{
                    strings: [
                      'Data Analyst',
                      'QA Specialist',
                      'Machine Learning Engineer',
                      'Computer Vision Developer'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50
                  }}
                />
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-text-secondary mb-8 max-w-lg"
              variants={itemVariants}
            >
              Transforming data into strategic insights for manufacturing excellence with expertise in Python, SQL, and Machine Learning.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {/* Download CV Button - Primary Call to Action */}
              <DownloadCVButton variant="primary" size="md" className="animate-pulse-once" />
              
              {/* Projects Button */}
              <Link 
                href="/projects" 
                className="btn btn-outline flex items-center gap-2 group"
              >
                View Projects
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              {/* Contact Button */}
              <Link 
                href="/contact" 
                className="btn btn-secondary"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Visual */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            variants={containerVariants}
            style={{ y, opacity }}
          >
            {/* Profile Image */}
            <motion.div 
              className="relative mx-auto w-40 h-40 md:w-56 md:h-56 mb-8 md:mb-0"
              variants={itemVariants}
            >
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-1"
                animate={{ 
                  boxShadow: ['0 0 10px rgba(50, 130, 184, 0.5)', '0 0 20px rgba(50, 130, 184, 0.8)', '0 0 10px rgba(50, 130, 184, 0.5)'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <div className="rounded-full overflow-hidden w-full h-full bg-bg-secondary">
                  <Image 
                    src="/images/profile/profile-photo.png" 
                    alt="Arief Marcellino Ferdiansyah" 
                    width={224}
                    height={224}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Stats Cards */}
            <div 
              ref={statsRef}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <AnimatePresence>
                {isVisible && (
                  <>
                    <motion.div 
                      className="card card-glass p-4 rounded-lg text-center min-w-32 border border-border-color"
                      variants={statsVariants}
                      custom={0}
                      whileHover={{ 
                        y: -10, 
                        boxShadow: '0 10px 25px rgba(50, 130, 184, 0.3)',
                        transition: { duration: 0.2 } 
                      }}
                    >
                      <span className="block text-3xl font-bold text-gradient">
                        <CountUp end={15} suffix="%" duration={2.5} />
                      </span>
                      <span className="text-sm text-text-secondary">Production Uptime</span>
                    </motion.div>
                    
                    <motion.div 
                      className="card card-glass p-4 rounded-lg text-center min-w-32 border border-border-color"
                      variants={statsVariants}
                      custom={1}
                      whileHover={{ 
                        y: -10, 
                        boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                        transition: { duration: 0.2 } 
                      }}
                    >
                      <span className="block text-3xl font-bold bg-gradient-to-r from-secondary to-secondary-light text-transparent bg-clip-text">
                        <CountUp end={50} suffix="%" duration={2.5} />
                      </span>
                      <span className="text-sm text-text-secondary">QA Reporting Time</span>
                    </motion.div>
                    
                    <motion.div 
                      className="card card-glass p-4 rounded-lg text-center min-w-32 border border-border-color"
                      variants={statsVariants}
                      custom={2}
                      whileHover={{ 
                        y: -10, 
                        boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
                        transition: { duration: 0.2 } 
                      }}
                    >
                      <span className="block text-3xl font-bold bg-gradient-to-r from-accent to-accent-light text-transparent bg-clip-text">
                        <CountUp end={98.5} suffix="%" duration={2.5} />
                      </span>
                      <span className="text-sm text-text-secondary">Vision System Accuracy</span>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-text-secondary text-sm mb-2">Scroll Down</span>
            <motion.div 
              className="w-8 h-12 border-2 border-text-secondary rounded-full flex justify-center p-1"
              animate={{ 
                boxShadow: [
                  '0 0 0 rgba(148, 163, 184, 0)', 
                  '0 0 10px rgba(148, 163, 184, 0.3)', 
                  '0 0 0 rgba(148,, 163, 184, 0)'
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ 
                  y: [0, 16, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}