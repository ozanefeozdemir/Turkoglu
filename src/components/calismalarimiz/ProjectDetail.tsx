'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';

interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  category: string;
  year: string;
  status: string;
  featured: boolean;
  specs: Record<string, string>;
}

export default function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[60vh] min-h-[450px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/calismalarimiz"
              className="mb-6 inline-flex items-center gap-2 text-sm text-steel-400 transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('projectDetail.backLink')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ffffff]">
                {project.category}
              </span>
              {project.status === 'Devam Ediyor' && (
                <span className="flex items-center gap-1.5 bg-navy-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  {t('projects.active')}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-navy-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="mb-4 text-2xl font-bold text-white">{t('projectDetail.aboutTitle')}</h2>
              <div className="accent-bar mb-6" />
              <p className="text-lg leading-relaxed text-steel-400">
                {project.description}
              </p>

              {/* Gallery */}
              {project.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="mb-6 text-xl font-bold text-white">{t('projectDetail.galleryTitle')}</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="relative aspect-[16/10] overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} - ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="sticky top-28 space-y-6">
                <div className="border border-white/5 bg-navy-800 p-6">
                  <h3 className="mb-4 text-lg font-bold text-white">{t('projectDetail.infoTitle')}</h3>
                  <div className="accent-bar mb-6" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="text-steel-400">{t('projectDetail.year')}:</span>
                      <span className="ml-auto font-medium text-white">{project.year}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Tag className="h-4 w-4 text-accent" />
                      <span className="text-steel-400">{t('projectDetail.category')}:</span>
                      <span className="ml-auto font-medium text-white">{project.category}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Activity className="h-4 w-4 text-accent" />
                      <span className="text-steel-400">{t('projectDetail.status')}:</span>
                      <span
                        className={`ml-auto font-medium ${
                          project.status === 'Devam Ediyor'
                            ? 'text-green-400'
                            : 'text-accent'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-white/5 bg-navy-800 p-6">
                  <h3 className="mb-4 text-lg font-bold text-white">{t('projectDetail.specsTitle')}</h3>
                  <div className="accent-bar mb-6" />

                  <div className="space-y-3">
                    {Object.entries(project.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between border-b border-white/5 pb-3 text-sm last:border-0"
                      >
                        <span className="text-steel-400">{key}</span>
                        <span className="font-medium text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/iletisim"
                  className="block bg-accent px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#ffffff] transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
                >
                  {t('projectDetail.ctaButton')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
