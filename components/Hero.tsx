'use client';

import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import ParallaxOrbs from './ParallaxOrbs';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      <div className="absolute inset-0 opacity-30 hidden dark:block">
        <Scene3D />
      </div>
      <ParallaxOrbs />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-transparent dark:to-slate-950/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.p className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-white/10 border border-white/30 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-200">
            Launch. Scale. Automate.
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Ideas with
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI-Powered APIs
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Build intelligent applications with our cutting-edge AI APIs. 
            Simple integration, powerful results, unlimited possibilities.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started Free
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass-effect text-slate-900 dark:text-white rounded-full font-semibold text-lg hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300">
              View Documentation
            </button>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-8 pt-8 text-slate-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">99.9%</div>
              <div className="text-sm">Uptime SLA</div>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">50M+</div>
              <div className="text-sm">API Calls/day</div>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">&lt;100ms</div>
              <div className="text-sm">Avg Response</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
    </section>
  );
}
