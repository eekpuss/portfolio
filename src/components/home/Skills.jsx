'use client';

import { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
import { FaPython, FaDatabase, FaChartBar, FaBrain, FaFileExcel, FaCheckCircle, FaCog, FaAngleDown, FaAngleUp } from 'react-icons/fa';
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
  const [skillDetailsOpen, setSkillDetailsOpen] = useState(null);
  
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
    
    // Listen to theme change to update the chart
    const handleThemeChange = () => {
      // This will trigger a re-render when theme changes
    };
    
    document.addEventListener('themeChanged', handleThemeChange);
    return () => {
      document.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);
  
  // Radar chart configuration
  const radarData = {
    labels: skills?.chartData?.labels || [],
    datasets: [
      {
        label: 'Skill Level',
        data: skills?.chartData?.datasets[0]?.data || [],
        backgroundColor: theme === 'dark' 
          ? 'rgba(50, 130, 184, 0.3)' 
          : 'rgba(11, 105, 161, 0.2)',
        borderColor: theme === 'dark' 
          ? 'rgba(50, 130, 184, 0.8)' 
          : 'rgba(11, 105, 161, 0.7)',
        borderWidth: 2,
        pointBackgroundColor: theme === 'dark' 
          ? 'rgba(16, 185, 129, 0.8)' 
          : 'rgba(5, 150, 105, 0.7)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: theme === 'dark'
          ? 'rgba(50, 130, 184, 1)'
          : 'rgba(11, 105, 161, 1)',
        pointRadius: 5,
        pointHoverRadius: 7,
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
            size: 12,
            family: "'Inter', sans-serif",
            weight: 500
          },
          padding: 10
        },
        ticks: {
          backdropColor: 'transparent',
          color: theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.7)' 
            : 'rgba(0, 0, 0, 0.7)',
          font: {
            size: 10
          },
          stepSize: 20
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
          ? 'rgba(15, 23, 42, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        titleColor: theme === 'dark' 
          ? 'rgba(255, 255, 255, 0.9)' 
          : 'rgba(0, 0, 0, 0.9)',
        bodyColor: theme === 'dark' 
          ? 'rgba(255, 255, 255, 0.7)' 
          : 'rgba(0, 0, 0, 0.7)',
        borderColor: theme === 'dark' 
          ? 'rgba(50, 130, 184, 0.5)' 
          : 'rgba(11, 105, 161, 0.3)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          title: function(context) {
            return context[0].label;
          },
          label: function(context) {
            return `Proficiency: ${context.raw}%`;
          }
        }
      }
    },
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        tension: 0.4
      }
    }
  };
  
  // Skill icon mapping
  const skillIcons = {
    'Python': <FaPython size={24} className="text-primary" />,
    'SQL': <FaDatabase size={24} className="text-primary" />,
    'Power BI': <FaChartBar size={24} className="text-secondary" />,
    'Machine Learning': <FaBrain size={24} className="text-accent" />,
    'Excel': <FaFileExcel size={24} className="text-secondary" />,
    'Quality Assurance': <FaCheckCircle size={24} className="text-accent" />,
  };
  
  // Animation variants
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
      transition: { 
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };
  
  const tabVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: { 
      y: -10, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  
  if (!skills) {
    return (
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="loader"></div>
            <p className="mt-4 text-text-secondary">Loading skills...</p>
          </div>
        </div>
      </section>
    );
  }
  
  const toggleSkillDetails = (skillName) => {
    if (skillDetailsOpen === skillName) {
      setSkillDetailsOpen(null);
    } else {
      setSkillDetailsOpen(skillName);
    }
  };
  
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/5 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute inset-0 background-dots opacity-5 pointer-events-none"></div>
      
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
          <div className="bg-bg-secondary rounded-full p-1 inline-flex shadow-md">
            <motion.button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'technical' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'hover:bg-bg-accent/50 text-text-secondary'
              }`}
              whileHover={{ scale: activeTab !== 'technical' ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              Technical Skills
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'soft' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'hover:bg-bg-accent/50 text-text-secondary'
              }`}
              whileHover={{ scale: activeTab !== 'soft' ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              Soft Skills
            </motion.button>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          {activeTab === 'technical' ? (
            <motion.div 
              key="technical"
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabVariants}
            >
              {/* Radar Chart for visualization */}
              <motion.div
                className="card p-6 h-96"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ 
                  boxShadow: "0 10px 25px rgba(50, 130, 184, 0.2)",
                  translateY: -5
                }}
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
                whileHover={{ 
                  boxShadow: "0 10px 25px rgba(50, 130, 184, 0.2)",
                  translateY: -5
                }}
              >
                <h3 className="text-xl font-bold mb-6 text-center">Technical Proficiency</h3>
                <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {skills.technical.map((skill, index) => (
                    <motion.div 
                      key={skill.name} 
                      variants={itemVariants}
                      layout 
                      className="mb-4"
                    >
                      <div 
                        className="flex items-center mb-2 cursor-pointer group"
                        onClick={() => toggleSkillDetails(skill.name)}
                      >
                        <div className="mr-3 transition-transform group-hover:scale-110">
                          {skillIcons[skill.name] || <FaCog size={24} className="text-primary" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                            <span className="text-text-secondary text-sm">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full rounded-full ${
                                skill.category === 'Programming' || skill.category === 'Data' 
                                  ? 'bg-gradient-to-r from-primary to-primary-light' 
                                  : skill.category === 'Visualization' 
                                    ? 'bg-gradient-to-r from-secondary to-secondary-light' 
                                    : 'bg-gradient-to-r from-accent to-accent-light'
                              } animate-gradient`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            ></motion.div>
                          </div>
                        </div>
                        <div className="ml-2 transition-transform group-hover:scale-110">
                          {skillDetailsOpen === skill.name ? 
                            <FaAngleUp className="text-text-secondary group-hover:text-primary" /> : 
                            <FaAngleDown className="text-text-secondary group-hover:text-primary" />
                          }
                        </div>
                      </div>
                      
                      {/* Tools related to this skill - expandable section */}
                      <AnimatePresence>
                        {skillDetailsOpen === skill.name && skill.tools && (
                          <motion.div 
                            className="ml-11 mt-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="bg-bg-secondary/50 p-3 rounded-lg">
                              <div className="text-sm text-text-secondary mb-2">Technologies & Tools:</div>
                              <div className="flex flex-wrap gap-1">
                                {skill.tools.map((tool, i) => (
                                  <motion.span 
                                    key={i}
                                    className="text-xs px-2 py-0.5 rounded-full bg-bg-accent text-text-primary border border-border-color"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ 
                                      scale: 1.05, 
                                      backgroundColor: skill.category === 'Programming' || skill.category === 'Data' 
                                        ? 'rgb(var(--primary-color))' 
                                        : skill.category === 'Visualization'
                                          ? 'rgb(var(--secondary-color))'
                                          : 'rgb(var(--accent-color))',
                                      color: '#fff'
                                    }}
                                  >
                                    {tool}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              key="soft"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabVariants}
            >
              {skills.soft.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="card p-6 hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(50, 130, 184, 0.2)" }}
                >
                  <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-text-secondary text-sm">Proficiency</span>
                      <span className="text-text-secondary text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-accent to-secondary animate-gradient"
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
            </motion.div>
          )}
        </AnimatePresence>
        
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
                className="bg-bg-secondary/50 p-4 rounded-lg border border-border-color backdrop-filter backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px rgba(50, 130, 184, 0.15)",
                  backgroundColor: theme === 'dark' ? 'rgba(51, 65, 85, 0.7)' : 'rgba(255, 255, 255, 0.7)'
                }}
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3 flex-shrink-0">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gradient line-clamp-2">{cert.name}</h4>
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