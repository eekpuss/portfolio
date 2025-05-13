'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { FaPython, FaDatabase, FaChartBar, FaBrain, FaFileExcel, FaCheckCircle } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

// Register ChartJS components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Skills() {
  const { theme } = useTheme();
  const [skills, setSkills] = useState(null);
  const [activeTab, setActiveTab] = useState('technical');
  
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await import('@/data/skills.json');
        setSkills(data);
      } catch (error) {
        console.error('Failed to load skills data:', error);
      }
    };
    
    fetchSkills();
  }, []);
  
  // Konfigurasi radar chart
  const radarData = {
    labels: skills?.chartData?.labels || [],
    datasets: [
      {
        label: 'Skill Level',
        data: skills?.chartData?.datasets[0]?.data || [],
        backgroundColor: theme === 'dark' 
          ? 'rgba(37, 99, 235, 0.3)' 
          : 'rgba(37, 99, 235, 0.2)',
        borderColor: theme === 'dark' 
          ? 'rgba(37, 99, 235, 0.8)' 
          : 'rgba(37, 99, 235, 0.7)',
        borderWidth: 2,
        pointBackgroundColor: theme === 'dark' 
          ? 'rgba(16, 185, 129, 0.8)' 
          : 'rgba(16, 185, 129, 0.7)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(37, 99, 235, 1)',
      }
    ]
  };
  
  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          color: theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)',
        },
        grid: {
          color: theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.7)' 
            : 'rgba(0, 0, 0, 0.7)',
          font: {
            size: 12
          }
        },
        ticks: {
          backdropColor: 'transparent',
          color: theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.7)' 
            : 'rgba(0, 0, 0, 0.7)',
        },
        suggestedMin: 0,
        suggestedMax: 100,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme === 'dark' 
          ? 'rgba(30, 41, 59, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        titleColor: theme === 'dark' 
          ? 'rgba(255, 255, 255, 0.9)' 
          : 'rgba(0, 0, 0, 0.9)',
        bodyColor: theme === 'dark' 
          ? 'rgba(255, 255, 255, 0.7)' 
          : 'rgba(0, 0, 0, 0.7)',
        borderColor: theme === 'dark' 
          ? 'rgba(37, 99, 235, 0.5)' 
          : 'rgba(37, 99, 235, 0.3)',
        borderWidth: 1,
      }
    },
    maintainAspectRatio: false,
  };
  
  // Mapping ikon untuk kategori skill
  const skillIcons = {
    'Python': <FaPython size={24} className="text-primary" />,
    'SQL': <FaDatabase size={24} className="text-primary" />,
    'Power BI': <FaChartBar size={24} className="text-secondary" />,
    'Machine Learning': <FaBrain size={24} className="text-accent" />,
    'Excel': <FaFileExcel size={24} className="text-secondary" />,
    'Quality Assurance': <FaCheckCircle size={24} className="text-accent" />,
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
  
  if (!skills) {
    return (
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto"></div>
            <p className="mt-4 text-text-secondary">Loading skills...</p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary/10 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/10 to-transparent opacity-30 blur-3xl"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive showcase of my technical abilities and professional competencies
          </p>
        </motion.div>
        
        {/* Tabs for switching between skill types */}
        <div className="flex justify-center mb-12">
          <div className="bg-background-secondary rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'technical' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-background-accent text-text-secondary'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'soft' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-background-accent text-text-secondary'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>
        
        {activeTab === 'technical' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Radar Chart for visualization */}
            <motion.div
              className="card p-6 h-96"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">Skill Distribution</h3>
              <div className="w-full h-full">
                <Radar data={radarData} options={radarOptions} />
              </div>
            </motion.div>
            
            {/* Skill bars for detailed view */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Technical Proficiency</h3>
              <div className="space-y-6">
                {skills.technical.map((skill, index) => (
                  <motion.div key={skill.name} variants={itemVariants} className="mb-4">
                    <div className="flex items-center mb-2">
                      <div className="mr-3">
                        {skillIcons[skill.name] || <FaCheckCircle size={24} className="text-primary" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-text-secondary text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full rounded-full bg-gradient-to-r ${
                              skill.category === 'Programming' || skill.category === 'Data' 
                                ? 'from-primary to-primary-light' 
                                : skill.category === 'Visualization' 
                                  ? 'from-secondary to-secondary-light' 
                                  : 'from-accent to-accent-light'
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tools related to this skill */}
                    {skill.tools && (
                      <div className="ml-11 mt-1 flex flex-wrap gap-1">
                        {skill.tools.map((tool, i) => (
                          <span 
                            key={i}
                            className="text-xs px-2 py-0.5 rounded-full bg-background-accent text-text-secondary"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.soft.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="card p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-text-secondary text-sm">Proficiency</span>
                    <span className="text-text-secondary text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                </div>
                <p className="text-text-secondary">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        )}
        
        {/* Certification Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Google Data Analytics Professional Certificate', date: 'March 2024', icon: 'google.svg' },
              { name: 'Microsoft Certified: Azure AI Fundamentals', date: 'December 2024', icon: 'microsoft.svg' },
              { name: 'AI Deep Learning Certification', date: 'February 2025', icon: 'ai.svg' },
              { name: 'Lean Six Sigma Green Belt', date: 'July 2023', icon: 'sixsigma.svg' },
              { name: 'Total Productive Maintenance (TPM)', date: 'June 2024', icon: 'tpm.svg' },
              { name: 'Data Science Bootcamp (Coursera)', date: 'January 2025', icon: 'coursera.svg' }
            ].map((cert, index) => (
              <motion.div 
                key={cert.name}
                className="bg-background-secondary/50 p-4 rounded-lg border border-border-color hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{cert.name}</h4>
                    <p className="text-sm text-text-secondary">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}