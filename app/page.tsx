import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Conditions from '@/components/sections/Conditions';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import { generateSEO } from '@/lib/seo/schema';

export const metadata = generateSEO('home');

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Conditions />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
