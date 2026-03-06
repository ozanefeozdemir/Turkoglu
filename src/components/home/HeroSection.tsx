'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useLanguage } from '@/context/LanguageProvider';

export default function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { value: '40+', label: t('stats.experience') },
    { value: '350+', label: t('stats.projects') },
    { value: '1200+', label: t('stats.staff') },
    { value: '25+', label: t('stats.exports') },
  ];

  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero_bg3.png"
          alt="Türkoğlu Tersanecilik - Tersane Görünümü"
          fill
          className="object-cover object-[center_20%]"
          priority
          quality={400}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-15 flex items-center gap-3"
          >
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              1985{t('hero.since')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            {t('hero.tagline1')}{' '}
            <span className="text-accent">{t('hero.tagline2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            <Link
              href="/calismalarimiz"
              className="bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#ffffff] transition-all duration-300 hover:bg-accent-hover hover:shadow-2xl hover:shadow-accent/20"
            >
              {t('hero.cta1')}
            </Link>
            <Link
              href="/kurumsal"
              className="border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              {t('hero.cta2')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <AnimatedCounter value={stat.value} className="text-3xl font-bold text-white" />
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-steel-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-steel-500">
            {t('hero.scroll')}
          </span>
          <ChevronDown className="h-5 w-5 text-steel-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
