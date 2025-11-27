'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import dynamic from 'next/dynamic';
import { heroStats } from '@/lib/data';
import ParallaxLayers from '@/components/ParallaxLayers';

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4">
      <Scene3D />
      <ParallaxLayers />
      
      <div className="relative z-10 container mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-panel rounded-full text-sm border border-primary-500/30"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          <span className="text-slate-300">Announcing: Edge mesh v2 with adaptive routing</span>
          <ArrowRight size={14} className="text-primary-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            The AI infrastructure
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent animate-gradient bg-300%">
            developers love
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Production-grade AI APIs with millisecond latency, hardware-level security, and edge orchestration that scales with your ambitions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(14, 165, 233, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold text-lg shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-all duration-300 flex items-center gap-2 group"
          >
            Start building for free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-panel text-white rounded-xl font-semibold text-lg hover:border-primary-500/50 transition-all duration-300 flex items-center gap-2"
          >
            <Play size={20} className="text-primary-400" />
            Watch demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover:border-primary-500/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-400 text-sm flex flex-col items-center gap-2"
        >
          <span>Scroll to explore</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
