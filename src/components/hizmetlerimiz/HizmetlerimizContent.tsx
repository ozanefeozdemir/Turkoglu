'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Ship, Wrench, RefreshCcw, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageProvider';

const iconMap: Record<string, React.ElementType> = {
  Ship,
  Wrench,
  RefreshCcw,
};

const serviceKeys = [
  { slug: 'yeni-insa', icon: 'Ship', titleKey: 'services.newBuild', descKey: 'services.newBuildDesc', featKeys: ['services.newBuildF1', 'services.newBuildF2', 'services.newBuildF3', 'services.newBuildF4'], image: '/images/services/new-build.jpg' },
  { slug: 'bakim-onarim', icon: 'Wrench', titleKey: 'services.maintenance', descKey: 'services.maintenanceDesc', featKeys: ['services.maintenanceF1', 'services.maintenanceF2', 'services.maintenanceF3', 'services.maintenanceF4'], image: '/images/services/maintenance.jpg' },
  { slug: 'refit-modernizasyon', icon: 'RefreshCcw', titleKey: 'services.refit', descKey: 'services.refitDesc', featKeys: ['services.refitF1', 'services.refitF2', 'services.refitF3', 'services.refitF4'], image: '/images/services/refit.jpg' },
];

export default function HizmetlerimizContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/new-build.jpg"
            alt="Türkoğlu Tersanecilik Hizmetleri"
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
              {t('hizmetlerimiz.subtitle')}
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {t('hizmetlerimiz.title')}
            </h1>
            <div className="mx-auto mt-4 accent-bar" />
          </motion.div>
        </div>
      </section>

      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            subtitle={t('hizmetlerimiz.areaSubtitle')}
            title={t('hizmetlerimiz.areaTitle')}
            description={t('hizmetlerimiz.areaDesc')}
          />

          <div className="space-y-24">
            {serviceKeys.map((service, i) => {
              const Icon = iconMap[service.icon] || Ship;
              const isReversed = i % 2 === 1;

              return (
                <motion.div
                  key={service.slug}
                  id={service.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7 }}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    isReversed ? 'lg:direction-rtl' : ''
                  }`}
                >
                  <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={t(service.titleKey)}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-3 ${
                        isReversed ? '-left-3' : '-right-3'
                      } h-full w-full border-2 border-accent/20 -z-10`}
                    />
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center bg-accent/10">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-white">{t(service.titleKey)}</h3>
                    <div className="accent-bar mb-6" />
                    <p className="mb-8 text-lg leading-relaxed text-steel-400">
                      {t(service.descKey)}
                    </p>

                    <ul className="space-y-3">
                      {service.featKeys.map((fk, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: j * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                          <span className="text-steel-300">{t(fk)}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t('hizmetlerimiz.ctaTitle')}
            </h2>
            <p className="mt-4 text-lg text-steel-400">
              {t('hizmetlerimiz.ctaDesc')}
            </p>
            <Link
              href="/iletisim"
              className="mt-8 inline-block bg-accent px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-2xl hover:shadow-accent/20"
            >
              {t('hizmetlerimiz.ctaButton')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
