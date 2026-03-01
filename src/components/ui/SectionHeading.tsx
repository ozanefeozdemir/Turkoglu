'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl
          ${light ? 'text-navy-900' : 'text-white'}`}
      >
        {title}
      </h2>
      <div className={`accent-bar mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
      {description && (
        <p
          className={`mt-6 max-w-2xl text-lg leading-relaxed
            ${align === 'center' ? 'mx-auto' : ''}
            ${light ? 'text-steel-500' : 'text-steel-400'}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
