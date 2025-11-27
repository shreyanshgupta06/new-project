'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
  {
    label: 'JavaScript',
    snippet: `import { AiApi } from '@aiauth/sdk';

const client = new AiApi({ apiKey: process.env.AI_API_KEY });

const response = await client.nlp.analyze({
  text: 'Next-gen AI experiences',
  features: ['sentiment', 'entities']
});

console.log(response.data);`
  },
  {
    label: 'Python',
    snippet: `from ai_api import Client

client = Client(api_key=os.environ['AI_API_KEY'])

result = client.vision.detect(
  image_url='https://cdn.ai/sample.png',
  model='vision-pro'
)

print(result.objects)`
  },
  {
    label: 'cURL',
    snippet: `curl -X POST https://api.aiauth.dev/v1/nlp/analyze \
  -H 'Authorization: Bearer $AI_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "Reimagining AI experiences",
    "features": ["keywords", "sentiment"]
  }'`
  }
];

const docLinks = [
  {
    title: 'Quickstart Guide',
    description: 'Deploy your first AI-powered app in under 10 minutes.',
    href: '#'
  },
  {
    title: 'API Reference',
    description: 'Deep dive into every endpoint, parameter, and response.',
    href: '#'
  },
  {
    title: 'SDK Libraries',
    description: 'Auto-generated SDKs for JavaScript, Python, Go, and Java.',
    href: '#'
  },
  {
    title: 'Playground',
    description: 'Experiment with live endpoints using real-time data.',
    href: '#'
  }
];

export default function DocsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="docs" className="relative py-32 bg-white dark:bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Documentation Built for Speed
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore comprehensive guides, live code samples, and SDK references designed to accelerate your integration
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl shadow-blue-500/10"
          >
            <div className="flex gap-3 mb-6">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === index ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <motion.pre
              key={tabs[activeTab].label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl bg-slate-900 dark:bg-black/80 text-green-400 p-6 overflow-auto text-sm leading-relaxed min-h-[320px]"
            >
              <code>{tabs[activeTab].snippet}</code>
            </motion.pre>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {docLinks.map((link) => (
              <div
                key={link.title}
                className="group p-6 rounded-2xl glass-effect hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 text-slate-900 dark:text-white"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold">{link.title}</h3>
                  <span className="text-sm text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform">Read more →</span>
                </div>
                <p className="text-slate-600 dark:text-gray-400">{link.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
