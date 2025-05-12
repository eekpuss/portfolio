import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-background-secondary pt-20 pb-10 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 background-grid opacity-5"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-primary">Arief Marcellino</span>
              <span className="text-secondary">.</span>
            </h3>
            <p className="text-text-secondary mb-4">Data Analyst | Data Sciences</p>
            <p className="text-text-secondary text-sm">
              Transforming data into strategic insights for business success.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">About</Link>
              <Link href="/projects" className="text-text-secondary hover:text-primary transition-colors">Projects</Link>
              <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/arief-marcellino-81a751156/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://github.com/eekpuss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="mailto:ninomarcellino16@gmail.com" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border-color pt-8 text-center">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Arief Marcellino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}