'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { docsSections } from '@/lib/data';

export default function Documentation() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopied(title);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="docs" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl space-y-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-300 mb-4">Documentation</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Ship in minutes, not weeks
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Pristine docs, auto-generated SDKs, and a living reference that stays current with every API update.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {docsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 glass-panel rounded-3xl p-6 border border-white/5"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{section.title}</h3>
                <p className="text-sm text-slate-400">{section.description}</p>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl bg-slate-950/60 border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <button
                      onClick={() => handleCopy(section.code, section.title)}
                      className="flex items-center gap-2 text-xs text-slate-400 hover:text-primary-400 transition-colors"
                    >
                      {copied === section.title ? (
                        <>
                          <Check size={14} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-sm text-slate-300 overflow-x-auto">
                    <code>{section.code}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                {section.endpoints.map((endpoint) => (
                  <div
                    key={endpoint.path}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`rounded-lg px-2 py-1 text-xs font-semibold ${
                        endpoint.method === 'POST'
                          ? 'bg-secondary-500/20 text-secondary-300'
                          : endpoint.method === 'DELETE'
                          ? 'bg-red-500/20 text-red-300'
                          : 'bg-primary-500/20 text-primary-300'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-slate-300">{endpoint.path}</code>
                    </div>
                    <span className="text-xs text-slate-500">{endpoint.latency}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-slate-400">Explore SDKs for Python, TypeScript, Rust, Go, and more.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/10 text-white rounded-xl font-semibold hover:border-primary-500/50 transition-all duration-300"
          >
            Read full documentation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
