'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaArrowUp, FaMapMarkerAlt } from 'react-icons/fa';
import DownloadCVButton from '@/components/common/DownloadCVButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const socialVariants = {
    hover: {
      y: -5,
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'var(--primary-color)',
      color: '#fff',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };
  
  return (
    <footer className="relative bg-background-secondary pt-20 pb-10 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 background-dots opacity-5 pointer-events-none"></div>
      
      {/* Decorative gradient elements */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-radial from-secondary/5 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
      
      <div className="container relative z-10">
        {/* Back to Top Button */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
            whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-gradient">Arief Marcellino</span>
              <span className="text-secondary">.</span>
            </h3>
            <p className="text-text-secondary mb-4">Data Analyst | Data Sciences</p>
            <p className="text-text-secondary text-sm mb-6">
              Transforming data into strategic insights for business success.
            </p>
            
            {/* Location */}
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="w-10 h-10 rounded-full bg-bg-tertiary/50 flex items-center justify-center mr-3">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <span className="text-text-secondary">Bandung, West Java, Indonesia</span>
            </div>
            
            {/* Download CV Reminder */}
            <div className="mt-4">
              <DownloadCVButton variant="secondary" size="sm" />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <h4 className="font-semibold mb-4 text-text-primary">Quick Links</h4>
            <nav className="flex flex-col items-center gap-y-2">
              <Link href="/" className="text-text-secondary hover:text-primary transition-colors hover:translate-x-1 inline-block">Home</Link>
              <Link href="/about" className="text-text-secondary hover:text-primary transition-colors hover:translate-x-1 inline-block">About</Link>
              <Link href="/projects" className="text-text-secondary hover:text-primary transition-colors hover:translate-x-1 inline-block">Projects</Link>
              <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors hover:translate-x-1 inline-block">Contact</Link>
            </nav>
            
            <div className="mt-6 pt-6 border-t border-border-color w-24 text-center">
              <Link 
                href="/contact" 
                className="btn btn-sm btn-primary inline-flex items-center gap-2 text-sm"
              >
                Get in Touch
                <FaEnvelope className="text-xs" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end"
            variants={itemVariants}
          >
            <h4 className="font-semibold mb-4 text-text-primary">Connect With Me</h4>
            <div className="flex gap-4 mb-4">
              <motion.a 
                href="https://www.linkedin.com/in/arief-marcellino-81a751156/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a 
                href="https://github.com/eekpuss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Twitter"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="mailto:ninomarcellino16@gmail.com" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Email"
              >
                <FaEnvelope />
              </motion.a>
            </div>
            <p className="text-text-secondary text-sm text-center md:text-right">
              <a 
                href="mailto:ninomarcellino16@gmail.com" 
                className="hover:text-primary transition-colors"
              >
                ninomarcellino16@gmail.com
              </a>
            </p>
            
            <div className="mt-6 pt-6 border-t border-border-color w-full text-center md:text-right">
              <DownloadCVButton variant="ghost" size="sm" />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-border-color pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Arief Marcellino. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs mt-2 opacity-70">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}