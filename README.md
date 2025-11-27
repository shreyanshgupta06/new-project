# NeuralAPI - Premium AI API Company Website 🚀

A cutting-edge, production-ready website built with Next.js 14, featuring advanced 3D animations powered by Three.js, modern glassmorphism UI, and comprehensive sections for showcasing AI API capabilities.

## ✨ Key Features

### 🎨 Premium Design & Animations
- **3D Interactive Hero Section** with animated sphere and particle system
- **Parallax Scrolling** with depth effects
- **Glassmorphism UI** with backdrop blur and gradient borders
- **Smooth Page Transitions** using Framer Motion
- **Micro-interactions** and hover states throughout
- **Gradient Animations** for premium aesthetic
- **Custom Scrollbar** with gradient styling

### 📱 Responsive & Accessible
- **Mobile-First Design** optimized for all screen sizes
- **Touch-Friendly Navigation** with smooth mobile menu
- **Dark Mode Support** with theme toggle
- **WCAG Accessibility** compliance
- **SEO-Optimized** with proper meta tags and structure

### 🎯 Complete Sections
- **Hero**: 3D animated background with real-time stats
- **Features**: Showcase platform capabilities with animated cards
- **API Capabilities**: Interactive cards highlighting AI features
- **Pricing**: Plan comparison with feature matrix
- **Documentation**: Code examples with syntax highlighting and copy functionality
- **Testimonials**: Case studies from enterprise clients
- **Contact Form**: Validation with success/error states

### ⚡ Performance Optimized
- **Server-Side Rendering** for fast initial load
- **Dynamic Imports** for 3D components
- **Optimized Bundle Size** with code splitting
- **Fast Time-to-Interactive** (TTI)
- **Static Page Generation** where possible

## Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Rendering:** Three.js, React Three Fiber, Drei
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Pricing.tsx
│   │   ├── Documentation.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── Scene3D.tsx        # 3D scene component
│   └── theme-provider.tsx # Theme context provider
├── lib/                   # Utilities and data
│   ├── utils.ts           # Utility functions
│   └── data.ts            # Content data
└── public/                # Static assets

```

## Key Features Explained

### 3D Animations
- Animated 3D sphere with distortion effects in hero section
- Particle field system for dynamic backgrounds
- Interactive controls with auto-rotation
- Optimized for performance with dynamic loading

### UI/UX Design
- Glassmorphism effects with backdrop blur
- Gradient borders and animated backgrounds
- Smooth scroll animations with Framer Motion
- Custom scrollbar styling
- Hover states and micro-interactions

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation
- Optimized typography scale

### Performance
- Server-side rendering (SSR) for initial load
- Dynamic imports for 3D components
- Optimized images and assets
- Fast time-to-interactive (TTI)

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Content
Update content in `lib/data.ts`:
- Hero stats
- Features
- Capabilities
- Pricing plans
- Documentation examples
- Testimonials

### Sections
Modify or add sections in `components/sections/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The website can be deployed to any platform supporting Next.js:
- **Netlify**: Use the Next.js build plugin
- **AWS Amplify**: Configure for Next.js SSR
- **Docker**: Build with `docker build -t neuralapi .`

### Environment Variables
No environment variables required for basic deployment. For production:
- Set `NEXT_PUBLIC_SITE_URL` for absolute URLs
- Configure form submission endpoint if needed

## Development Tips

1. **3D Component Performance**: The Scene3D component is dynamically imported with `ssr: false` to prevent server-side rendering issues
2. **Icon Naming**: Avoid using `Infinity` directly from lucide-react - always alias it as `InfinityIcon`
3. **Client Components**: Components using hooks or animations need `'use client'` directive
4. **Styling**: Use the `cn()` utility from `lib/utils.ts` for conditional classes

## Support

For issues or questions, please open an issue on GitHub.
