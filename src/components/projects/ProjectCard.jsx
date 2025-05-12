import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div 
      className="bg-card-bg rounded-xl overflow-hidden shadow-lg border border-border-color"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative h-52 overflow-hidden">
        <Image 
          src={`/images/projects/${project.image}`} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r 
          from-primary to-secondary text-white shadow-md">
          {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-text-secondary mb-4 text-sm">{project.description}</p>
        
        {/* Highlight stats */}
        {project.highlight_value && (
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              {project.highlight_value}
            </span>
            <span className="ml-2 text-sm text-text-secondary">
              {project.highlight_label}
            </span>
          </div>
        )}
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs rounded-full bg-background-accent text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex justify-between">
          <button className="btn btn-sm btn-primary">
            View Details
          </button>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-background-accent hover:bg-primary hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-background-accent hover:bg-primary hover:text-white transition-colors">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}