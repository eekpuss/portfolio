'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';
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

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-navbar-bg backdrop-filter backdrop-blur-lg shadow-lg' : 'py-6'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-3xl font-bold relative group"
        >
          <span className="text-primary">AM</span>
          <span className="text-secondary">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              custom={i}
              variants={linkVariants}
            >
              <Link 
                href={link.path} 
                className={`nav-link ${pathname === link.path ? 'active' : ''}`}
              >
                {link.title}
                {pathname === link.path && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"
                    layoutId="underline"
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          {/* CV Download Button - Desktop */}
          <motion.div
            variants={linkVariants}
            custom={navLinks.length}
          >
            <DownloadCVButton 
              variant="primary" 
              size="sm" 
              className="hidden lg:inline-flex"
            />
          </motion.div>
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
          <motion.button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-bg-tertiary text-text-primary hover:bg-primary hover:text-white transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? 
              <FaSun className="w-5 h-5" /> : 
              <FaMoon className="w-5 h-5" />
            }
          </motion.button>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="ml-4 md:hidden p-2 rounded-full bg-bg-tertiary text-text-primary hover:bg-primary hover:text-white transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden overflow-hidden"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="container mx-auto px-6 py-4 bg-bg-secondary backdrop-filter backdrop-blur-lg border-t border-border-color">
          {navLinks.map((link, i) => (
            <motion.div 
              key={link.path}
              variants={menuItemVariants}
              className="py-2"
            >
              <Link 
                href={link.path} 
                className={`block text-lg transition-colors ${pathname === link.path ? 'text-primary font-medium' : 'text-text-primary hover:text-primary'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
          
          {/* CV Download Button - Mobile */}
          <motion.div 
            className="pt-4 mt-2 border-t border-border-color"
            variants={menuItemVariants}
          >
            <DownloadCVButton 
              variant="primary" 
              size="md" 
              className="w-full justify-center"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}