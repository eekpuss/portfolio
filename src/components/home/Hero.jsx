'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import CountUp from 'react-countup';
import ParticlesBackground from '@/components/animations/ParticlesBackground';
import DownloadCVButton from '@/components/common/DownloadCVButton';
import TypewriterComponent from 'typewriter-effect';

// Hooks untuk cek apakah elemen sudah terlihat di viewport
function useInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInView;
}

export default function Hero() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef);

  return (
    <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 py-12 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Arief Marcellino <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Ferdiansyah</span>
            </h1>
            
            {/* Dynamic Headline with Typewriter Effect */}
            <h2 className="text-xl md:text-2xl font-medium mb-6 h-10">
              <span className="text-text-primary">I'm a </span>
              <span className="bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">
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
            </h2>
            
            <p className="text-text-secondary mb-8 max-w-lg">
              Transforming data into strategic insights for manufacturing excellence with expertise in Python, SQL, and Machine Learning.
            </p>
            
            <div className="flex flex-wrap gap-4">
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
            </div>
          </motion.div>
          
          {/* Hero Visual */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Profile Image */}
            <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 mb-8 md:mb-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-1 animate-pulse-slow">
                <div className="rounded-full overflow-hidden w-full h-full">
                  <Image 
                    src="/images/profile/profile-photo.png" 
                    alt="Arief Marcellino Ferdiansyah" 
                    width={200} 
                    height={200}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div 
              ref={statsRef}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <motion.div 
                className="bg-card-bg backdrop-blur-md p-4 rounded-lg text-center min-w-32 border border-border-color shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={statsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="block text-3xl font-bold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
                  {statsInView && <CountUp end={15} suffix="%" duration={2.5} />}
                </span>
                <span className="text-sm text-text-secondary">Production Uptime</span>
              </motion.div>
              
              <motion.div 
                className="bg-card-bg backdrop-blur-md p-4 rounded-lg text-center min-w-32 border border-border-color shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={statsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="block text-3xl font-bold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
                  {statsInView && <CountUp end={50} suffix="%" duration={2.5} />}
                </span>
                <span className="text-sm text-text-secondary">QA Reporting Time</span>
              </motion.div>
              
              <motion.div 
                className="bg-card-bg backdrop-blur-md p-4 rounded-lg text-center min-w-32 border border-border-color shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={statsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="block text-3xl font-bold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
                  {statsInView && <CountUp end={98.5} suffix="%" duration={2.5} />}
                </span>
                <span className="text-sm text-text-secondary">Vision System Accuracy</span>
              </motion.div>
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
            <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}