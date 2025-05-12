import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'About Me | Arief Marcellino',
  description: 'Learn more about Arief Marcellino Ferdiansyah, his skills, experience, and professional background',
};

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h1>
            <p className="text-xl text-text-secondary max-w-3xl">
              Data Analyst and Quality Assurance professional with expertise in machine learning
              and process optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <div className="card card-hover p-6 h-full">
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-primary/30 p-1 bg-gradient-to-r from-primary to-secondary">
                    <Image 
                      src="/images/profile/profile-photo.png" 
                      alt="Arief Marcellino" 
                      width={160} 
                      height={160} 
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Arief Marcellino</h2>
                  <p className="text-primary font-medium mb-4">Data Analyst & Data Sciences</p>
                  
                  <div className="w-full space-y-3 mt-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <span className="text-text-secondary">ninomarcellino16@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-text-secondary">Bandung, West Java, Indonesia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="card card-hover p-8 h-full">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-3"><FaBriefcase /></span>
                  Professional Summary
                </h2>
                <p className="mb-4 text-text-secondary">
                  Distinguished Data Analyst and Quality Assurance Specialist with over three years of experience 
                  in pharmaceutical manufacturing, I seamlessly blend rigorous quality expertise with advanced 
                  proficiency in Python, SQL, Power BI, and machine learning to deliver transformative business solutions.
                </p>
                <p className="text-text-secondary">
                  I have spearheaded innovative initiatives, including predictive maintenance models that 
                  enhanced uptime by 15% and real-time quality dashboards that reduced reporting time by 50%. 
                  Certified in AI Deep Learning and Lean Six Sigma Green Belt, my unique ability to bridge 
                  operational excellence with data-driven insights empowers organizations to achieve 
                  unparalleled efficiency and strategic growth.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="bg-background/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">3+</div>
                    <div className="text-sm text-text-secondary">Years Experience</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">15%</div>
                    <div className="text-sm text-text-secondary">Production Uptime</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">50%</div>
                    <div className="text-sm text-text-secondary">Time Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card card-hover p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-primary mr-3"><FaBriefcase /></span>
                Experience
              </h2>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold">Quality Assurance SPF</h3>
                  <div className="text-primary mb-2">PT Damar Gayatri Jaya (Medion Group)</div>
                  <div className="text-sm text-text-secondary mb-4">February 2022 - Present</div>
                  <p className="text-text-secondary">
                    Leading quality assurance initiatives in pharmaceutical manufacturing with focus on data-driven 
                    process improvement using Python, SQL, and Power BI.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold">Freelance Data Analyst</h3>
                  <div className="text-primary mb-2">Self-Employed</div>
                  <div className="text-sm text-text-secondary mb-4">January 2022 - December 2023</div>
                  <p className="text-text-secondary">
                    Provided data analysis services to local businesses, focusing on marketing strategy optimization 
                    and sales forecasting.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card card-hover p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-primary mr-3"><FaGraduationCap /></span>
                Education & Certifications
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold">Bachelor of Science in Chemical Engineering</h3>
                <div className="text-primary mb-2">Universitas Ahmad Dahlan</div>
                <div className="text-sm text-text-secondary mb-4">Graduated October 2021 • GPA: 3.47</div>
              </div>
              
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="text-accent mr-2"><FaCertificate /></span>
                Certifications
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-secondary mt-1 mr-3"><FaCheckCircle /></div>
                  <div>
                    <div className="font-medium">AI Deep Learning Certification</div>
                    <div className="text-sm text-text-secondary">International AI Association, 2025</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary mt-1 mr-3"><FaCheckCircle /></div>
                  <div>
                    <div className="font-medium">Lean Six Sigma Green Belt</div>
                    <div className="text-sm text-text-secondary">Quality Management Institute, 2023</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary mt-1 mr-3"><FaCheckCircle /></div>
                  <div>
                    <div className="font-medium">Data Science Bootcamp</div>
                    <div className="text-sm text-text-secondary">Coursera, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card card-hover p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Data Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Python (Pandas, NumPy)</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>SQL</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Excel Advanced</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary">Data Visualization</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Power BI</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Matplotlib/Seaborn</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Dashboard Design</span>
                      <span>88%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-accent">Machine Learning</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Scikit-learn</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Predictive Modeling</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Feature Engineering</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}