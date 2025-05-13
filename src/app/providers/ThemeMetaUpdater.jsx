'use client';

import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

// Komponen untuk mengupdate meta theme-color
export default function ThemeMetaUpdater() {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Update meta theme-color untuk mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'dark' ? '#1B262C' : '#F2F2F2';
    }
  }, [theme]);
  
  return null; // Komponen ini tidak merender apapun
}