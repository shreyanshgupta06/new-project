import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Capabilities from '@/components/sections/Capabilities';
import Pricing from '@/components/sections/Pricing';
import Documentation from '@/components/sections/Documentation';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Capabilities />
      <Pricing />
      <Documentation />
      <Testimonials />
      <Contact />
    </>
  );
}
