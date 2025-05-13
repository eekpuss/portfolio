'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import DownloadCVButton from '@/components/common/DownloadCVButton';

export default function ContactCTA() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };
  
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 background-grid opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/10 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/10 to-transparent opacity-30 blur-3xl"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="card glass-effect p-10 md:p-16 bg-gradient-to-r from-background-secondary/80 to-background/80 backdrop-blur-md max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
            variants={itemVariants}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            Have a project in mind or want to explore how data analysis and machine learning 
            can help your organization? I'm available for freelance projects and full-time opportunities.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link 
                href="/contact" 
                className="btn btn-primary flex items-center gap-2 group"
              >
                Get in Touch
                <FaEnvelope className="group-hover:animate-bounce" />
              </Link>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <DownloadCVButton variant="secondary" size="md" />
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link 
                href="/projects" 
                className="btn btn-outline flex items-center gap-2 group"
              >
                View Projects
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-10 text-text-secondary"
            variants={itemVariants}
          >
            <p>Or email me directly at: <a href="mailto:ninomarcellino16@gmail.com" className="text-primary hover:underline">ninomarcellino16@gmail.com</a></p>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 blur-lg"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent opacity-30 blur-lg"></div>
        </motion.div>
      </div>
    </section>
  );
}