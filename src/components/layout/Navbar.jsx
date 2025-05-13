'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import DownloadCVButton from '@/components/common/DownloadCVButton';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <Link href="/" className="text-3xl font-bold">
          <span className="text-primary">AM</span>
          <span className="text-secondary">.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`relative font-medium transition-colors hover:text-primary ${
              pathname === '/' ? 'text-primary' : ''
            }`}
          >
            Home
            {pathname === '/' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            )}
          </Link>
          <Link 
            href="/about" 
            className={`relative font-medium transition-colors hover:text-primary ${
              pathname === '/about' ? 'text-primary' : ''
            }`}
          >
            About
            {pathname === '/about' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            )}
          </Link>
          <Link 
            href="/projects" 
            className={`relative font-medium transition-colors hover:text-primary ${
              pathname === '/projects' ? 'text-primary' : ''
            }`}
          >
            Projects
            {pathname === '/projects' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            )}
          </Link>
          <Link 
            href="/contact" 
            className={`relative font-medium transition-colors hover:text-primary ${
              pathname === '/contact' ? 'text-primary' : ''
            }`}
          >
            Contact
            {pathname === '/contact' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            )}
          </Link>
          
          {/* CV Download Button - Desktop */}
          <DownloadCVButton 
            variant="secondary" 
            size="sm" 
            className="ml-4 hidden lg:inline-flex"
          />
        </div>
        
        {/* Right Side Controls */}
        <div className="flex items-center">
          {/* CV Download Button - Tablet */}
          <DownloadCVButton 
            variant="ghost" 
            size="sm" 
            className="mr-4 hidden md:inline-flex lg:hidden"
          />
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-background-accent text-text-primary hover:bg-primary hover:text-white transition-all"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="ml-4 md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`font-medium ${pathname === '/' ? 'text-primary' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-medium ${pathname === '/about' ? 'text-primary' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`font-medium ${pathname === '/projects' ? 'text-primary' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium ${pathname === '/contact' ? 'text-primary' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* CV Download Button - Mobile */}
            <div className="pt-2">
              <DownloadCVButton variant="primary" size="md" className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}