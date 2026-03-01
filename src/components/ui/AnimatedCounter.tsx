'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState('0');

  // Extract numeric part and suffix (e.g., "40+" -> num=40, suffix="+")
  const numMatch = value.match(/^(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = value.replace(/^\d+/, '');

  useEffect(() => {
    if (!isInView || num === 0) return;

    let start = 0;
    const duration = 1800;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = num / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      start++;
      if (current >= num) {
        setDisplay(String(num));
        clearInterval(timer);
      } else {
        setDisplay(String(Math.floor(current)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, num]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}
