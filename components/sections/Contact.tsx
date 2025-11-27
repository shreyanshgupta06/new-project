'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    };

    setStatus('loading');
    setFeedback(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.error ?? 'Something went wrong');
      }

      setStatus('success');
      setFeedback('We received your message. A solutions architect will reach out shortly.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setFeedback(error instanceof Error ? error.message : 'Unable to send message right now.');
    } finally {
      setTimeout(() => {
        setStatus('idle');
        setFeedback(null);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent" />
      <div className="relative z-10 container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5"
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-300">Get in Touch</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-white">
                Launch your AI product with confidence
              </h2>
              <p className="text-lg text-slate-400">
                Our solutions architects help design, deploy, and scale AI systems that meet your compliance, latency, and resilience requirements.
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Fast onboarding</p>
                    <p className="text-sm text-slate-400">Production-ready in under 48 hours with white-glove support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🔒</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Custom SLAs</p>
                    <p className="text-sm text-slate-400">We architect to your performance and compliance needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📈</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Expert guidance</p>
                    <p className="text-sm text-slate-400">24/7 access to AI infrastructure specialists.</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-slate-500 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Alex Morgan"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Work email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-slate-500 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="alex@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-slate-500 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Tell us about your use case
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-slate-500 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                  placeholder="We're building a regulated AI-powered assistant..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' && (
                  <>
                    <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle size={18} />
                    Sent successfully!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    Send message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
