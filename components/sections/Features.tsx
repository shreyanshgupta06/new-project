'use client';

import { motion } from 'framer-motion';
import { features } from '@/lib/data';

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] bg-gradient-to-r from-primary-500/10 via-white/5 to-secondary-500/10 blur-3xl" />
      <div className="relative z-10 container mx-auto max-w-7xl space-y-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-300 mb-4">Platform</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Engineered for regulated, mission-critical AI
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Each capability is architected with observability, compliance, and developer experience at its core.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group [perspective:1500px]"
            >
              <div className="relative overflow-hidden rounded-3xl glass-panel p-8 backdrop-blur-xl border border-white/5 transform-gpu transition duration-500 group-hover:-rotate-x-2 group-hover:rotate-y-2 group-hover:shadow-[0_25px_60px_rgba(8,145,178,0.25)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />
                <div className="relative flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <feature.icon className="h-6 w-6 text-primary-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-primary-300">{feature.metric}</p>
                  </div>
                </div>

                <p className="relative mt-6 text-slate-400 text-base leading-relaxed">
                  {feature.description}
                </p>

                <div className="relative mt-8 grid grid-cols-2 gap-3">
                  {feature.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-slate-200 transition-all duration-300 group-hover:border-primary-500/50 group-hover:bg-primary-500/5"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
