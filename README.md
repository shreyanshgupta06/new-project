# AI·API - Premium AI APIs Website

A modern, premium website for an AI API company featuring cutting-edge 3D animations and high-end UI design built with Next.js, Three.js, and Framer Motion.

## Features

- 🎨 **Premium Design**: Modern, professional UI with glassmorphism effects
- 🌙 **Dark Mode Support**: Seamless light/dark theme switching
- 🎭 **3D Animations**: Interactive Three.js scenes with dynamic visualizations
- 🎬 **Smooth Animations**: Framer Motion powered micro-interactions
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized**: Fast load times with Next.js optimization
- ♿ **Accessible**: WCAG compliant with semantic HTML
- 🎨 **Custom Scrollbar**: Branded scrollbar with gradient styling

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Social Icons**: React Social Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
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
├── app/
│   ├── api/contact/        # Contact form API endpoint
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with 3D background
│   ├── Scene3D.tsx         # Three.js 3D scene component
│   ├── DataFlowScene.tsx   # Data flow visualization
│   ├── ParallaxOrbs.tsx    # Parallax orb effects
│   ├── Features.tsx        # Features showcase section
│   ├── APIShowcase.tsx     # API capabilities section
│   ├── Pricing.tsx         # Pricing plans
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── DocsSection.tsx     # Documentation preview
│   ├── ContactCTA.tsx      # Call-to-action section
│   ├── ContactSection.tsx  # Contact form
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── ScrollProgress.tsx  # Scroll progress indicator
│   └── theme-provider.tsx  # Theme context provider
└── lib/
    └── utils.ts            # Utility functions
```

## Sections

1. **Hero Section**: Animated hero with 3D background, parallax orbs, and key statistics
2. **Features**: Six key features with animated cards and gradient icons
3. **API Showcase**: Interactive 3D data flow visualization with API endpoints
4. **Pricing**: Three pricing tiers with feature comparisons
5. **Testimonials**: Customer reviews with company logos
6. **Documentation**: Live code examples with syntax highlighting
7. **Contact CTA**: Email signup with gradient background effects
8. **Contact Form**: Detailed contact form with submission handling
9. **Footer**: Links and social media icons

## Customization

### Colors

The color scheme uses a gradient palette:
- Primary: Blue (500-600)
- Secondary: Purple (500-600)
- Accent: Pink (500)

Edit `app/globals.css` to customize the color scheme.

### 3D Scenes

Modify `components/Scene3D.tsx` and `components/DataFlowScene.tsx` to customize 3D animations.

### Content

Update section content in individual component files under `components/`.

## Performance

- Optimized images with Next.js Image component
- Lazy loading for 3D components with React Suspense
- Code splitting with Next.js dynamic imports
- Minimized bundle size with tree shaking

## Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatible
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Contact

For questions or support, please reach out through the contact form on the website.
