'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-purple-900/20 dark:to-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-3xl rounded-full" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Start integrating cutting-edge AI into your applications today. Get $100 in free credits when you sign up.
          </p>
          
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Free
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-green-500 dark:text-green-400 font-semibold text-lg mb-12"
            >
              ✓ Thanks! We'll be in touch soon.
            </motion.div>
          )}
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-600 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500 dark:text-green-400">✓</span>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 dark:text-green-400">✓</span>
              Start in seconds
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 dark:text-green-400">✓</span>
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
