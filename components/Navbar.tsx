'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from './theme-provider';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI·API
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5 text-slate-600 dark:text-gray-300" />
              ) : (
                <MoonIcon className="w-5 h-5 text-slate-600 dark:text-gray-300" />
              )}
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Sign In
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-slate-200 dark:border-white/10"
        >
          <div className="px-4 pt-4 pb-6 space-y-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
            >
              {theme === 'dark' ? (
                <>
                  <SunIcon className="w-5 h-5" />
                  Light Mode
                </>
              ) : (
                <>
                  <MoonIcon className="w-5 h-5" />
                  Dark Mode
                </>
              )}
            </button>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold">
              Sign In
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
