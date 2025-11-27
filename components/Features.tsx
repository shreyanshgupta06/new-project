'use client';

import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  BoltIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  CodeBracketIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CpuChipIcon,
    title: 'Advanced AI Models',
    description: 'Access state-of-the-art machine learning models trained on vast datasets for superior accuracy.',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    icon: BoltIcon,
    title: 'Lightning Fast',
    description: 'Sub-100ms response times with globally distributed infrastructure and optimized edge computing.',
    color: 'from-yellow-400 to-orange-400'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliant, with granular access controls and audit logs.',
    color: 'from-green-400 to-emerald-400'
  },
  {
    icon: ChartBarIcon,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards with detailed insights into API usage, performance, and costs.',
    color: 'from-purple-400 to-pink-400'
  },
  {
    icon: CodeBracketIcon,
    title: 'Developer Friendly',
    description: 'Clean SDKs in 10+ languages, extensive documentation, and interactive API playground.',
    color: 'from-indigo-400 to-blue-400'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Scale',
    description: 'Auto-scaling infrastructure across 50+ regions worldwide to handle any workload.',
    color: 'from-teal-400 to-cyan-400'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-white dark:bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Built for Modern Developers
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to integrate powerful AI capabilities into your applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative p-8 rounded-2xl glass-effect hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 text-slate-900 dark:text-white"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
