'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechVentures',
    company: 'TechVentures',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'The API integration was seamless. We reduced our development time by 60% and achieved production-ready AI features in weeks instead of months.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer at InnovateCo',
    company: 'InnovateCo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'Best AI API platform we have used. The documentation is comprehensive, the performance is outstanding, and support is incredibly responsive.'
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager at DataFlow',
    company: 'DataFlow',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: 'The analytics dashboard gives us deep insights into API usage patterns. The cost optimization recommendations saved us thousands monthly.'
  }
];

const companyLogos = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of companies building intelligent applications with our platform
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl glass-effect hover:bg-white dark:hover:bg-white/5 transition-all duration-300 text-slate-900 dark:text-white"
            >
              <div className="flex items-start gap-4 mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-purple-500/50"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-slate-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-slate-600 dark:text-gray-400 mb-8">Used by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companyLogos.map((company) => (
              <motion.div
                key={company}
                whileHover={{ scale: 1.1 }}
                className="text-slate-400 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white transition-colors duration-300 text-2xl font-bold"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
