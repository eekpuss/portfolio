import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
// Anda akan menambahkan komponen lain nanti
// import Skills from '@/components/home/Skills';
// import FeaturedProjects from '@/components/home/FeaturedProjects';
// import Experience from '@/components/home/Experience';
// import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Komponen lain akan ditambahkan di sini nanti */}
      <Footer />
    </main>
  );
}