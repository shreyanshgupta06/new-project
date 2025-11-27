import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import APIShowcase from "@/components/APIShowcase";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import DocsSection from "@/components/DocsSection";
import ContactCTA from "@/components/ContactCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <APIShowcase />
      <Pricing />
      <Testimonials />
      <DocsSection />
      <ContactCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
