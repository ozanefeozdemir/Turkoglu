'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ShieldCheck,
  HardHat,
  Lightbulb,
  Handshake,
  Leaf,
  Users,
  Target,
  Eye,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useLanguage } from '@/context/LanguageProvider';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  HardHat,
  Lightbulb,
  Handshake,
  Leaf,
  Users,
};

const valueIcons = ['ShieldCheck', 'HardHat', 'Lightbulb', 'Handshake', 'Leaf', 'Users'];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.6 },
};

export default function KurumsalContent() {
  const { t } = useLanguage();

  const stats = [
    { value: '40+', label: t('stats.experience') },
    { value: '350+', label: t('stats.projects') },
    { value: '1200+', label: t('stats.staff') },
    { value: '25+', label: t('stats.exports') },
  ];

  const values = [
    { key: 'quality', icon: 'ShieldCheck' },
    { key: 'safety', icon: 'HardHat' },
    { key: 'innovation', icon: 'Lightbulb' },
    { key: 'reliability', icon: 'Handshake' },
    { key: 'sustainability', icon: 'Leaf' },
    { key: 'teamwork', icon: 'Users' },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.png"
            alt="Türkoğlu Tersanecilik Kurumsal"
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
              {t('kurumsal.subtitle')}
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {t('kurumsal.title')}
            </h1>
            <div className="mx-auto mt-4 accent-bar" />
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <SectionHeading
                subtitle={t('kurumsal.historySubtitle')}
                title={t('kurumsal.historyTitle')}
                align="left"
              />
              <div className="-mt-8 space-y-4 text-lg leading-relaxed text-steel-400">
                <p>{t('kurumsal.historyText')}</p>
                <p>{t('kurumsal.historyText2')}</p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border-l-2 border-accent pl-4"
                  >
                    <AnimatedCounter value={stat.value} className="text-2xl font-bold text-white" />
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-steel-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about/about-shipyard.png"
                  alt="Türkoğlu Tersanecilik"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-full w-full border-2 border-accent/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              {...fadeUp}
              className="relative overflow-hidden border border-white/5 bg-navy-800 p-10 lg:p-14"
            >
              <div className="absolute right-6 top-6 text-accent/10">
                <Eye className="h-24 w-24" />
              </div>
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center bg-accent/10">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">{t('kurumsal.vision')}</h3>
                <div className="accent-bar mb-6" />
                <p className="text-lg leading-relaxed text-steel-400">
                  {t('kurumsal.visionText')}
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative overflow-hidden border border-white/5 bg-navy-800 p-10 lg:p-14"
            >
              <div className="absolute right-6 top-6 text-accent/10">
                <Target className="h-24 w-24" />
              </div>
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center bg-accent/10">
                  <Target className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">{t('kurumsal.mission')}</h3>
                <div className="accent-bar mb-6" />
                <p className="text-lg leading-relaxed text-steel-400">
                  {t('kurumsal.missionText')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            subtitle={t('kurumsal.valuesSubtitle')}
            title={t('kurumsal.valuesTitle')}
            description={t('kurumsal.valuesDesc')}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon] || ShieldCheck;
              return (
                <motion.div
                  key={v.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group border border-white/5 bg-navy-800 p-8 transition-all duration-500 hover:border-accent/30 hover:bg-navy-700"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-accent/10 transition-colors duration-500 group-hover:bg-accent/20">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="mb-3 text-lg font-bold text-white">{t(`values.${v.key}`)}</h4>
                  <p className="text-sm leading-relaxed text-steel-400">
                    {t(`values.${v.key}Desc`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
