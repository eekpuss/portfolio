// src/app/providers/ClientThemeProvider.jsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Buat context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // Default dark mode

  // Cek preferensi user saat komponen di-mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle('light', savedTheme === 'light');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else {
        // Cek preferensi sistem
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('light', !prefersDark);
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Manage class pada html element
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      
      // Dispatch custom event untuk komponen lain yang perlu update
      document.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook untuk menggunakan tema
export function useTheme() {
  return useContext(ThemeContext);
}

// Export provider component
export default function ClientThemeProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}