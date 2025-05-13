'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Skills from '@/components/home/Skills';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Experience from '@/components/home/Experience';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';
import ScrollToTop from '@/components/common/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}