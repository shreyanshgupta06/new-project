'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5" />
      <div className="relative z-10 container mx-auto max-w-6xl space-y-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-300 mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Teams shipping the future trust NeuralAPI
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Case studies from regulated industries, hyper-growth startups, and Fortune 100 innovation labs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/5 glass-panel p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-primary-300">{testimonial.logo}</span>
                <span className="text-sm text-primary-200">{testimonial.metric}</span>
              </div>
              <p className="text-lg text-slate-200 mb-6 leading-relaxed">“{testimonial.quote}”</p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
