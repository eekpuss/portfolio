'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await import('@/data/projects.json');
        // Only show first 3 projects on home page
        setProjects(data.projects.slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
        setIsLoading(false);
      }
    };
    
    loadProjects();
  }, []);
  
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Loading project data...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card h-[400px] animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A showcase of my technical contributions and achievements
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card card-hover overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary/70 z-10"></div>
                <div className="bg-gradient-to-r from-background-secondary to-background flex items-center justify-center h-full">
                  <div className="text-4xl text-text-secondary opacity-20">{project.category}</div>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold text-gradient mr-2">
                    {project.highlight_value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {project.highlight_label}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <motion.span 
                      key={index} 
                      className="px-2 py-1 bg-background-secondary text-primary text-xs rounded-full"
                      whileHover={{ 
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        scale: 1.05
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-background-secondary text-text-secondary text-xs rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/projects#${project.id}`} 
                    className="btn btn-sm btn-primary"
                  >
                    View Details
                  </Link>
                  <div className="flex gap-3">
                    <motion.a 
                      href={project.github_link || "#"} 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-background-secondary text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href={project.demo_link || "#"} 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-background-secondary text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group"
          >
            View All Projects
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}