import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import About from '@/components/sections/About';
import { generateSEO } from '@/lib/seo/schema';

export const metadata = generateSEO('about');

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
