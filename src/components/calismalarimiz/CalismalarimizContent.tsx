'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import projects from '@/data/projects.json';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageProvider';

const rawCategories = Array.from(new Set(projects.map((p) => p.category)));

export default function CalismalarimizContent() {
  const { t } = useLanguage();
  const [active, setActive] = useState('all');

  // Map category keys to translated labels
  const categoryMap: Record<string, string> = {
    all: t('calismalarimiz.all'),
    'Yeni İnşa': t('calismalarimiz.newBuild'),
    'Askeri': t('calismalarimiz.military'),
    'Refit': t('calismalarimiz.refit'),
  };

  const categories = ['all', ...rawCategories];
  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/bulk-carrier.jpg"
            alt="Türkoğlu Tersanecilik Projeleri"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/80" />
        </div>
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {t('calismalarimiz.subtitle')}
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {t('calismalarimiz.title')}
            </h1>
            <div className="mx-auto mt-4 accent-bar" />
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            subtitle={t('calismalarimiz.filterSubtitle')}
            title={t('calismalarimiz.filterTitle')}
            description={t('calismalarimiz.filterDesc')}
          />

          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300
                  ${
                    active === cat
                      ? 'bg-accent text-[#ffffff]'
                      : 'border border-white/10 text-steel-400 hover:border-accent/50 hover:text-white'
                  }`}
              >
                {categoryMap[cat] || cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={`/calismalarimiz/${project.slug}`}
                    className="group relative block aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={project?.image || "Yükleniyor..."}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent transition-all duration-500 group-hover:from-navy-950/95" />

                    <div className="absolute left-4 top-4 bg-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ffffff]">
                      {project.category}
                    </div>

                    {project.status === 'Devam Ediyor' && (
                      <div className="absolute right-4 top-4 flex items-center gap-1.5 bg-navy-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                        {t('projects.active')}
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs text-steel-400">{project.year}</p>
                      <h3 className="mt-1 text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-steel-400 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        {project.shortDescription}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent opacity-0 transition-all duration-500 group-hover:opacity-100">
                        {t('projects.detail')} <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
