'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#capabilities', label: 'API Capabilities' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#docs', label: 'Documentation' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-panel py-3' : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Sparkles className="h-8 w-8 text-primary-400" />
              <motion.div
                className="absolute inset-0 bg-primary-500 blur-xl opacity-50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent">
              NeuralAPI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="px-3 lg:px-4 py-2 text-sm lg:text-base text-slate-300 hover:text-primary-400 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-primary-500/30"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-primary-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-slate-300 hover:text-primary-400 hover:bg-slate-800/50 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center justify-between px-4 py-2">
                  <ThemeToggle />
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-sm font-semibold"
                  >
                    Contact
                  </Link>
                </div>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block mx-4 px-6 py-2.5 mt-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center rounded-lg font-medium"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
