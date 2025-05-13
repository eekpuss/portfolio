'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import DownloadCVButton from '@/components/common/DownloadCVButton';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 background-grid opacity-5"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/10 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/10 to-transparent opacity-30 blur-3xl"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-10 md:p-16 bg-gradient-to-r from-background-secondary/80 to-background/80 backdrop-blur-md max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-10">
            Have a project in mind or want to explore how data analysis and machine learning can help your organization? I'm available for freelance projects and full-time opportunities.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn btn-primary flex items-center gap-2 group"
            >
              Get in Touch
              <FaEnvelope className="group-hover:animate-bounce" />
            </Link>
            
            <DownloadCVButton variant="secondary" size="md" />
            
            <Link 
              href="/projects" 
              className="btn btn-outline flex items-center gap-2 group"
            >
              View Projects
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="mt-10 text-text-secondary">
            <p>Or email me directly at: <a href="mailto:ninomarcellino16@gmail.com" className="text-primary hover:underline">ninomarcellino16@gmail.com</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}