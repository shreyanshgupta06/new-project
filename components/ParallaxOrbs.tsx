'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo } from 'react';

const orbs = [
  { id: 1, size: 280, opacity: 0.25, gradient: 'from-blue-500/50 to-cyan-400/30', depth: 45, initial: { x: '-20%', y: '-10%' } },
  { id: 2, size: 180, opacity: 0.35, gradient: 'from-purple-600/50 to-pink-500/30', depth: 30, initial: { x: '40%', y: '20%' } },
  { id: 3, size: 140, opacity: 0.45, gradient: 'from-indigo-500/40 to-blue-400/20', depth: 65, initial: { x: '-10%', y: '40%' } }
];

export default function ParallaxOrbs() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 15, mass: 0.7 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 15, mass: 0.7 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = event.clientX / innerWidth - 0.5;
      const normalizedY = event.clientY / innerHeight - 0.5;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const transforms = useMemo(
    () =>
      orbs.map((orb) => ({
        id: orb.id,
        translateX: useTransform(smoothX, (value) => value * orb.depth),
        translateY: useTransform(smoothY, (value) => value * orb.depth),
      })),
    [smoothX, smoothY]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={orb.id}
          style={{
            x: transforms[index].translateX,
            y: transforms[index].translateY,
            width: orb.size,
            height: orb.size,
            opacity: orb.opacity,
          }}
          className={`absolute ${orb.gradient} rounded-full blur-3xl`}
        />
      ))}
    </div>
  );
}
