'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageProvider';

export default function AboutSnippet() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about/about-shipyard.png"
                alt="Türkoğlu Tersanecilik üretim alanı"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-accent/30 -z-10" />
            <div className="absolute -bottom-6 -right-6 flex h-28 w-28 flex-col items-center justify-center bg-accent">
              <span className="text-3xl font-bold text-white">40+</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#ffffff]/80">
                Yıl
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeading
              subtitle={t('about.subtitle')}
              title={t('about.title')}
              align="left"
            />
            <p className="-mt-8 text-lg leading-relaxed text-steel-400">
              {t('about.description')}
            </p>
            <Link
              href="/kurumsal"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent-light group"
            >
              {t('about.more')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
