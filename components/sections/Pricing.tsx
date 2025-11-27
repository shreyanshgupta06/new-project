'use client';

import { motion } from 'framer-motion';
import { pricingPlans } from '@/lib/data';

export default function Pricing() {
  const comparison = [
    { feature: 'Dedicated GPU pools', tiers: ['Scale', 'Enterprise'] },
    { feature: 'Custom latency SLAs', tiers: ['Scale', 'Enterprise'] },
    { feature: 'On-prem deployment', tiers: ['Enterprise'] },
    { feature: 'Compliance automation', tiers: ['Scale', 'Enterprise'] },
    { feature: 'Red-team simulations', tiers: ['Enterprise'] },
  ];

  return (
    <section id="pricing" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-30" />
      <div className="relative z-10 container mx-auto max-w-6xl space-y-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-300 mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Simple plans, enterprise rigor
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transparent billing, usage-based discounts, and global support baked into every plan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 border glass-panel ${
                plan.popular ? 'border-primary-500/60 shadow-2xl shadow-primary-500/30' : 'border-white/5'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-1 text-xs font-semibold text-white">
                  Most adopted
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">{plan.price}</div>
                  <p className="text-sm text-primary-300">{plan.highlight}</p>
                </div>
                <button className={`w-full rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-500/50'
                    : 'border border-white/10 text-white hover:border-primary-500/50'
                }`}>
                  {plan.cta}
                </button>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {plan.features.map((featureItem) => (
                  <li key={featureItem} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                    {featureItem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/5 glass-panel p-6 overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead>
              <tr>
                <th className="py-3 text-slate-400">Capability</th>
                {pricingPlans.map((plan) => (
                  <th key={plan.name} className="py-3 text-center text-white">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-t border-white/5">
                  <td className="py-4 text-slate-400">{row.feature}</td>
                  {pricingPlans.map((plan) => (
                    <td key={plan.name} className="py-4 text-center">
                      {row.tiers.includes(plan.name) ? (
                        <span className="inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg shadow-primary-500/40" />
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
