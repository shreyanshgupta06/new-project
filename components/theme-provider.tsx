'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
  setTheme: (theme: Theme) => void;
  ready: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem('neural-theme')) as Theme | null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || typeof document === 'undefined') return;
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('neural-theme', theme);
  }, [theme, ready]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      ready,
      toggle: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
      setTheme,
    }),
    [theme, ready]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
