'use client';

import { FaFileDownload } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function DownloadCVButton({ variant = 'primary', size = 'md', className = '' }) {
  const [isDownloading, setIsDownloading] = useState(false);
  
  // File size in MB (untuk tampilan)
  const fileSize = '0.23';
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    const link = document.createElement('a');
    link.href = '/Arief_Marcellino_Resume.pdf';
    link.setAttribute('download', 'Arief_Marcellino_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    
    // Tracking sederhana (bisa ditingkatkan dengan analytics di masa depan)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cv_downloaded', new Date().toString());
      
      // Hitung jumlah download (sederhana)
      const downloadCount = parseInt(localStorage.getItem('cv_download_count') || '0');
      localStorage.setItem('cv_download_count', (downloadCount + 1).toString());
    }
    
    // Animasi feedback
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };
  
  // Class berdasarkan variant dan size
  const baseClasses = 'inline-flex items-center gap-2 font-semibold transition-all duration-300 rounded-full shadow-md';
  
  const variantClasses = {
    'primary': 'bg-gradient-to-r from-primary to-primary-dark text-white hover:-translate-y-1 hover:shadow-lg',
    'secondary': 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-1',
    'accent': 'bg-gradient-to-r from-accent to-accent-dark text-white hover:-translate-y-1 hover:shadow-lg',
    'ghost': 'bg-transparent text-primary hover:bg-primary/10'
  };
  
  const sizeClasses = {
    'sm': 'px-4 py-2 text-sm',
    'md': 'px-6 py-3',
    'lg': 'px-8 py-4 text-lg'
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button 
      onClick={handleDownload}
      className={buttonClasses}
      disabled={isDownloading}
    >
      <FaFileDownload className={`${isDownloading ? 'animate-bounce' : ''}`} />
      <span>{isDownloading ? 'Downloading...' : 'Download CV'}</span>
      <span className="text-xs opacity-70">({fileSize} MB)</span>
    </button>
  );
}