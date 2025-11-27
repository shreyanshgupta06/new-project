import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://neuralapi.ai'),
  title: 'NeuralAPI - Advanced AI API Solutions',
  description: 'Transform your applications with cutting-edge AI APIs. Fast, reliable, and scalable artificial intelligence solutions for modern developers.',
  keywords: ['AI API', 'Machine Learning', 'Artificial Intelligence', 'API Platform', 'Neural Networks'],
  authors: [{ name: 'NeuralAPI' }],
  openGraph: {
    title: 'NeuralAPI - Advanced AI API Solutions',
    description: 'Transform your applications with cutting-edge AI APIs',
    url: 'https://neuralapi.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuralAPI - Advanced AI API Solutions',
    description: 'Transform your applications with cutting-edge AI APIs',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, 'bg-slate-950 text-slate-100 antialiased')}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
