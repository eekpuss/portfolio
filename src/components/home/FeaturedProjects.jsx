'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/projects/ProjectCard';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Dalam environment produksi, Anda mungkin ingin menggunakan getStaticProps
    // Untuk tutorial ini, kita menggunakan client-side loading
    const loadProjects = async () => {
      try {
        const data = await import('@/data/projects.json');
        // Hanya tampilkan 3 proyek pertama di halaman utama
        setProjects(data.projects.slice(0, 3));
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      }
    };
    
    loadProjects();
  }, []);
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="underline"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A showcase of my technical contributions and achievements
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
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