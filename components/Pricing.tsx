'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    frequency: 'per month',
    description: 'For startups testing AI capabilities',
    highlight: false,
    features: ['1M API credits', 'Basic analytics', 'Community support', '3 projects']
  },
  {
    name: 'Growth',
    price: '$249',
    frequency: 'per month',
    description: 'Scale with advanced features and support',
    highlight: true,
    features: ['10M API credits', 'Advanced analytics', 'Dedicated success manager', 'Unlimited projects']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: 'contact sales',
    description: 'Full control, compliance, and SLAs',
    highlight: false,
    features: ['Unlimited credits', '24/7 priority support', 'Custom SLAs & on-prem', 'Security reviews & audits']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-blue-50/20 to-slate-50 dark:from-slate-900 dark:via-indigo-900/20 dark:to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Flexible Pricing for Every Stage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Choose the plan that matches your scale with transparent billing and automatic overage protection
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className={`relative rounded-3xl p-8 border border-slate-200/60 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white ${plan.highlight ? 'shadow-2xl shadow-purple-500/30 border-purple-400/50' : ''}`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  Most Popular
                </span>
              )}
              
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-slate-600 dark:text-gray-300">{plan.description}</p>
                <div className="flex items-baseline gap-2 text-slate-900 dark:text-white">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-500 dark:text-gray-400">{plan.frequency}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600 dark:text-gray-300">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${plan.highlight ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'glass-effect text-slate-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/10'}`}>
                {plan.highlight ? 'Start Building' : 'Talk to Sales'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
