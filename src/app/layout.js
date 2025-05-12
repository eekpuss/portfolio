import './globals.css';
import { Inter, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';

// Setup font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata = {
  title: 'Arief Marcellino | Data Analyst & Data Sciences',
  description: 'Portofolio profesional Arief Marcellino Ferdiansyah - Data Analyst & Data Sciences',
  keywords: 'data analyst, data science, machine learning, quality assurance, portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}