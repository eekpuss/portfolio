'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import ThemeMetaUpdater from './ThemeMetaUpdater';

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider>
      <ThemeMetaUpdater />
      {children}
    </ThemeProvider>
  );
}