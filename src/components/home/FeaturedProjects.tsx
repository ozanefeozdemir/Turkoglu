'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import projects from '@/data/projects.json';
import SectionHeading from '@/components/ui/SectionHeading';

const featuredProjects = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section className="relative bg-navy-900 py-24 lg:py-32">
      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-950 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Projelerimiz"
          title="Öne Çıkan Çalışmalarımız"
          description="Son dönemde tamamladığımız ve devam eden projelerimizden bazıları."
        />

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                href={`/calismalarimiz/${project.slug}`}
                className="group relative block aspect-[16/10] overflow-hidden"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent transition-all duration-500 group-hover:from-navy-950/95" />

                {/* Category Badge */}
                <div className="absolute left-4 top-4 bg-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {project.category}
                </div>

                {/* Status Badge */}
                {project.status === 'Devam Ediyor' && (
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 bg-navy-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                    Aktif
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-medium text-steel-300">{project.year}</p>
                  <h3 className="mt-1 text-xl font-bold text-white transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel-400 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Detaylar
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/calismalarimiz"
            className="inline-block border border-white/20 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
          >
            Tüm Projeleri Görüntüle
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
