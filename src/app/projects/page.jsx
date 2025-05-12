'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // In production, this would be fetched from an API or CMS
        const data = await import('@/data/projects.json');
        setProjects(data.projects);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load projects:', error);
        setIsLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'machine learning', name: 'Machine Learning' },
    { id: 'data visualization', name: 'Data Visualization' },
    { id: 'data analysis', name: 'Data Analysis' },
    { id: 'process optimization', name: 'Process Optimization' },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">My Projects</h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A showcase of my data analysis, machine learning, and quality assurance projects.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-background-secondary text-text-secondary hover:bg-background-accent'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="card animate-pulse h-96"></div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  className="card overflow-hidden group card-hover"
                  variants={childVariants}
                >
                  <div className="relative h-48 overflow-hidden">
                  <Image
                      src={`/images/projects/${project.image}`}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <div className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text mr-2">
                        {project.highlight_value}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {project.highlight_label}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-background-secondary text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <button className="btn btn-sm btn-primary">View Details</button>
                      <div className="flex gap-3">
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-background-secondary text-primary hover:bg-primary hover:text-white transition-colors">
                          <FaGithub className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-background-secondary text-primary hover:bg-primary hover:text-white transition-colors">
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {filteredProjects.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4 opacity-30"><FaStar /></div>
              <h3 className="text-2xl font-bold mb-2">No Projects Found</h3>
              <p className="text-text-secondary">No projects match the selected filter criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="pb-20 bg-background">
        <div className="container">
          <div className="card p-8 bg-gradient-to-r from-background-secondary to-background backdrop-blur-lg border border-primary/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Technical Skills Used</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                The technologies and methodologies I've used across these projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'Python', level: '90%', color: 'from-primary to-primary-light' },
                { name: 'SQL', level: '85%', color: 'from-primary to-primary-light' },
                { name: 'Power BI', level: '90%', color: 'from-secondary to-secondary-light' },
                { name: 'Scikit-learn', level: '80%', color: 'from-secondary to-secondary-light' },
                { name: 'Pandas/NumPy', level: '92%', color: 'from-accent to-accent-light' },
                { name: 'Matplotlib', level: '85%', color: 'from-accent to-accent-light' },
                { name: 'Statistical Analysis', level: '88%', color: 'from-primary to-primary-light' },
                { name: 'Data Cleaning', level: '95%', color: 'from-secondary to-secondary-light' }
              ].map((skill, index) => (
                <div key={index} className="bg-background/50 p-4 rounded-lg hover:shadow-md transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-text-secondary">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full animate-pulse-slow`} 
                      style={{width: skill.level}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}