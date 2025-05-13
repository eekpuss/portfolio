// src/app/page.jsx
'use client';

import { ThemeProvider } from '@/hooks/useTheme';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Skills from '@/components/home/Skills';
import Experience from '@/components/home/Experience';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Skills />
        <FeaturedProjects />
        <Experience />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </main>
    </ThemeProvider>
  );
}