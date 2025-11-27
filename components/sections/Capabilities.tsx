'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { capabilities } from '@/lib/data';

const DataStream = dynamic(() => import('@/components/three/DataStream'), { ssr: false });

export default function Capabilities() {
  const systemHighlights = [
    'Deterministic routing mesh',
    'Streaming + batch support',
    'Adaptive guardrails AI',
    'Observability grade metrics',
  ];

  return (
    <section id="capabilities" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl space-y-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-300 mb-4">API Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Unified AI infrastructure rendered in 3D
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Visualize data flows, embeddings, and agent orchestration across the NeuralAPI cortex in realtime.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="gradient-border rounded-[32px]">
              <div className="relative h-[480px] overflow-hidden rounded-[32px] glass-panel">
                <div className="absolute inset-0">
                  <DataStream />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-transparent to-slate-950/40 pointer-events-none" />
                <div className="absolute bottom-6 left-6 space-y-1 bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary-200">Live data stream</p>
                  <p className="text-2xl font-semibold text-white">27k events / sec</p>
                  <p className="text-sm text-slate-400">Synthesizing embeddings & guardrails</p>
                </div>
                <div className="absolute top-6 right-6 text-right space-y-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
                    <p className="text-xs text-slate-400">Latency mesh</p>
                    <p className="text-xl font-semibold text-white">38ms p95</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
                    <p className="text-xs text-slate-400">Regions</p>
                    <p className="text-xl font-semibold text-white">22 POPs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-300">Realtime observability</p>
            <h3 className="text-3xl font-semibold text-white">
              Data pipelines, agents, and embeddings orchestrated in a single programmable surface.
            </h3>
            <p className="text-slate-400">
              Every request is verified, routed, and introspected through our 3D control plane. Tap into adaptive guardrails,
              multimodal processing, and intent-aware scaling without leaving your favorite API client.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {systemHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-pulse" />
                  <span className="text-slate-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="rounded-2xl border border-primary-500/30 bg-primary-500/10 px-4 py-3 text-sm text-primary-100">
                Realtime streaming + REST
              </div>
              <div className="rounded-2xl border border-secondary-500/30 bg-secondary-500/10 px-4 py-3 text-sm text-secondary-100">
                SOC2 + ISO27001 ready
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl glass-panel p-6 backdrop-blur-xl border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-500" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="h-6 w-6 text-primary-300" />
                  </div>
                  <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-medium text-primary-200 border border-primary-500/30">
                    {capability.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-200 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse" />
                  {capability.latency}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-12 text-center space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            Ready to build the next generation?
          </h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join 19,000+ developers shipping AI products with enterprise-grade reliability.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold text-lg shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-all duration-300"
          >
            Get API keys
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
