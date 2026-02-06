import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Tools } from '@/components/Tools';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Tools />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
