import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub', icon: Github },
    { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950/60 backdrop-blur-2xl">
      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary-500 opacity-20 blur-[120px]" />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">NeuralAPI</p>
            <p className="mt-3 text-sm text-slate-400">
              Precision-engineered AI APIs that deliver transformative digital products.
            </p>
          </div>
          <div className="space-y-2 text-sm text-slate-400">
            <p>One Market Plaza, 36th Floor</p>
            <p>San Francisco, CA 94105</p>
            <p>+1 (415) 555-0108</p>
            <p>support@neuralapi.ai</p>
          </div>
          <div className="flex flex-col items-start space-y-4 md:items-end">
            <div className="flex space-x-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/10 p-2 text-slate-300 transition-colors hover:border-primary-500 hover:text-primary-400"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} NeuralAPI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
