'use client';

import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

export default function ThemeToggle() {
  const { theme, toggle, ready } = useTheme();

  return (
    <button
      onClick={toggle}
      disabled={!ready}
      className="relative h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-primary-400 hover:border-primary-500/50 transition-colors disabled:opacity-60"
      aria-label="Toggle theme"
    >
      <SunMedium className={`h-5 w-5 transition-all duration-300 ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-45 scale-0 opacity-0 absolute'}`} />
      <Moon className={`h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-45 scale-0 opacity-0 absolute'}`} />
    </button>
  );
}
