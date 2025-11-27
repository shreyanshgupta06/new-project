'use client';

import { motion } from 'framer-motion';
import DataFlowScene from './DataFlowScene';
import { Suspense } from 'react';

const apiCapabilities = [
  {
    name: 'Natural Language Processing',
    endpoint: '/api/v1/nlp/analyze',
    description: 'Advanced text analysis, sentiment detection, and entity extraction',
    use_cases: ['Content moderation', 'Customer feedback analysis', 'Document summarization']
  },
  {
    name: 'Computer Vision',
    endpoint: '/api/v1/vision/detect',
    description: 'Object detection, face recognition, and image classification',
    use_cases: ['Quality control', 'Security systems', 'Medical imaging']
  },
  {
    name: 'Speech Recognition',
    endpoint: '/api/v1/speech/transcribe',
    description: 'Real-time speech-to-text with 50+ languages supported',
    use_cases: ['Voice assistants', 'Meeting transcription', 'Call center automation']
  },
  {
    name: 'Predictive Analytics',
    endpoint: '/api/v1/predict/analyze',
    description: 'Time series forecasting and anomaly detection',
    use_cases: ['Sales forecasting', 'Fraud detection', 'Predictive maintenance']
  }
];

export default function APIShowcase() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Powerful API Capabilities
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered APIs designed to solve real-world problems
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {apiCapabilities.map((api, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl glass-effect hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer text-slate-900 dark:text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                      {api.name}
                    </h3>
                    <code className="text-sm text-purple-600 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-950/50 px-3 py-1 rounded-lg inline-block mb-3">
                      {api.endpoint}
                    </code>
                    <p className="text-slate-600 dark:text-gray-400 mb-3">{api.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {api.use_cases.map((useCase, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-500/20 dark:text-blue-200 dark:border-blue-500/30"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl glass-effect overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10" />
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center text-slate-900 dark:text-white">
                Loading...
              </div>
            }>
              <DataFlowScene />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
