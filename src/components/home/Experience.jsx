'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaFlask, FaLaptopCode } from 'react-icons/fa';
import Image from 'next/image';

export default function Experience() {
  const [experience, setExperience] = useState(null);
  const [activeTab, setActiveTab] = useState('work'); // 'work' or 'education'
  
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await import('@/data/experience.json');
        setExperience(data);
      } catch (error) {
        console.error('Failed to load experience data:', error);
      }
    };
    
    fetchExperience();
  }, []);
  
  // Icon mapping for jobs
  const iconMap = {
    'briefcase': <FaBriefcase className="text-primary text-xl" />,
    'graduation-cap': <FaGraduationCap className="text-primary text-xl" />,
    'flask': <FaFlask className="text-primary text-xl" />,
    'laptop-code': <FaLaptopCode className="text-primary text-xl" />
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
  
  if (!experience) {
    return (
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto"></div>
            <p className="mt-4 text-text-secondary">Loading experience data...</p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            My career path and educational background in data science and quality assurance
          </p>
        </motion.div>
        
        {/* Tabs for switching between experience types */}
        <div className="flex justify-center mb-12">
          <div className="bg-background-secondary rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'work' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-background-accent text-text-secondary'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'education' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-background-accent text-text-secondary'
              }`}
            >
              Education
            </button>
          </div>
        </div>
        
        {activeTab === 'work' ? (
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline central line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {experience.work.map((job, index) => (
              <motion.div 
                key={job.title}
                variants={itemVariants}
                className={`relative mb-16 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-10 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-10 md:ml-1/2'
                } max-w-full md:max-w-[calc(50%-40px)]`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-auto md:right-[-8px] md:translate-x-1/2 top-6 w-4 h-4 rounded-full bg-primary md:shadow-glow"></div>
                
                <div className="card p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      {iconMap[job.icon] || <FaBriefcase className="text-primary text-xl" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-primary">{job.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex items-center text-sm text-text-secondary">
                    <span>{job.start_date} - {job.end_date}</span>
                    <span className="mx-2">•</span>
                    <span>{job.location}</span>
                  </div>
                  
                  <p className="text-text-secondary mb-6">{job.description}</p>
                  
                  {/* Technical Contributions */}
                  {job.technical_contributions && job.technical_contributions.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gradient">Technical Contributions</h4>
                      <ul className="space-y-2">
                        {job.technical_contributions.map((contribution, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-secondary mr-2 mt-1">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Achievements */}
                  {job.achievements && job.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-gradient">Key Achievements</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="max-w-2xl w-full">
              {experience.education.map((edu) => (
                <motion.div 
                  key={edu.degree}
                  className="card p-8 mb-8 border-l-4 border-primary"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <FaGraduationCap className="text-primary text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree} in {edu.field}</h3>
                      <p className="text-primary">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 text-sm text-text-secondary">
                    <div className="flex items-center justify-between mb-2">
                      <span>Graduated: {edu.graduation_date}</span>
                      <span className="px-3 py-1 bg-background-secondary rounded-full">GPA: {edu.gpa}</span>
                    </div>
                    <p>{edu.location}</p>
                  </div>
                  
                  {/* Thesis Section */}
                  {edu.thesis && (
                    <div className="mb-6 bg-background-secondary/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Thesis</h4>
                      <p className="font-medium mb-1">{edu.thesis.title}</p>
                      <p className="text-text-secondary text-sm">{edu.thesis.description}</p>
                    </div>
                  )}
                  
                  {/* Relevant Coursework */}
                  {edu.relevant_coursework && edu.relevant_coursework.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant_coursework.map((course, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-background-secondary rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}