'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFeedback('Thanks! Our team will reach out within 24 hours.');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback('Unable to submit the form right now. Please try again later.');
    }
  };

  return (
    <section className="relative py-32 bg-slate-100 dark:bg-slate-900" id="contact-form">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-blue-50/10 to-slate-50 dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-900" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Let's design intelligent experiences together
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg">
              Tell us about your use case and we'll help you architect an AI solution that scales securely across your organization.
            </p>
            <div className="space-y-4">
              {['Enterprise onboarding in under 2 weeks', '24/7 dedicated technical account manager', 'Custom SOC 2, HIPAA & GDPR compliance packages'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-600 dark:text-gray-300">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl glass-effect border border-slate-200 dark:border-white/10 space-y-6 text-slate-900 dark:text-white"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Ada Lovelace"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Visionary Labs"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Project details</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                rows={5}
                className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us about your product goals and timeline"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold text-lg shadow-lg shadow-purple-500/30 transition-all disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status !== 'idle' && (
              <p className={`text-sm ${status === 'success' ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {feedback}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
