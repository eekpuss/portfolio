'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };
  
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Contact Me</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-2">
              <motion.div 
                className="card p-8 h-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                
                <div className="space-y-8 mb-10">
                  <div className="flex items-start">
                    <div className="min-w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-text-secondary mb-2">For any inquiries:</p>
                      <a href="mailto:ninomarcellino16@gmail.com" className="text-primary">ninomarcellino16@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="min-w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 text-secondary mr-4">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-text-secondary mb-2">Current base:</p>
                      <p>Bandung, West Java, Indonesia</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/arief-marcellino-81a751156/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background-secondary text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                    href="https://github.com/eekpuss" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background-secondary text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background-secondary text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-3">
              <motion.div 
                className="card p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaPaperPlane className="text-secondary text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-text-secondary mb-6">
                      Thank you for reaching out. I'll get back to you as soon as possible!
                    </p>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-text-secondary mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-text-secondary mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-text-secondary mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="How can I help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="Tell me about your project, request, or question..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
          
          <div className="card p-8 backdrop-blur-md bg-opacity-30 border border-white/5">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background-secondary/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">What services do you offer?</h3>
                <p className="text-text-secondary">
                  I specialize in data analysis, machine learning, and quality assurance consulting. This includes predictive modeling, data visualization, process optimization, and more.
                </p>
              </div>
              
              <div className="bg-background-secondary/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Do you work remotely?</h3>
                <p className="text-text-secondary">
                  Yes, I'm available for both remote and on-site work depending on the project requirements. I've successfully collaborated with distributed teams in the past.
                </p>
              </div>
              
              <div className="bg-background-secondary/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">What industries have you worked with?</h3>
                <p className="text-text-secondary">
                  My primary experience is in pharmaceutical manufacturing, but I've also worked with retail, e-commerce, and educational sectors. My data skills are transferable across industries.
                </p>
              </div>
              
              <div className="bg-background-secondary/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">How can your expertise benefit my organization?</h3>
                <p className="text-text-secondary">
                  By combining quality assurance expertise with data science, I can help identify process improvements, predict outcomes, visualize complex data, and streamline operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}