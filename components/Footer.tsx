'use client';

import { SocialIcon } from 'react-social-icons';

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Solutions', 'Security']
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Support', 'Status']
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Partners', 'Press']
  }
];

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white mb-4">AI·API</div>
            <p className="text-sm text-slate-600 dark:text-gray-400">
              Unlock intelligent capabilities for every product experience.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-slate-900 dark:text-white font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-slate-500 dark:text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AI·API. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <SocialIcon url="https://twitter.com" bgColor="#6366f1" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://www.linkedin.com" bgColor="#6366f1" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://github.com" bgColor="#6366f1" style={{ height: 32, width: 32 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
