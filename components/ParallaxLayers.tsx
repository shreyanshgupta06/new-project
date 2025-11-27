'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxLayers() {
  const { scrollYProgress } = useScroll();
  const translateOne = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const translateTwo = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ translateY: translateOne }}
        className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-primary-500/30 to-secondary-500/30 blur-3xl"
      />
      <motion.div
        style={{ translateY: translateTwo }}
        className="absolute top-32 right-1/5 h-72 w-72 rounded-full bg-gradient-to-r from-secondary-500/30 to-primary-500/30 blur-3xl"
      />
      <motion.div
        style={{ translateY: translateTwo }}
        className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-3xl"
      />
    </div>
  );
}
