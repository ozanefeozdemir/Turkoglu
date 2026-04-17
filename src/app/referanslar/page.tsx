'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageProvider';
import Image from 'next/image';

const societies = [
  { id: 'turk_loydu', logo: '/images/references/türk_loydu_bgremoved.png' },
  { id: 'prs', logo: '/images/references/polski_rejestr_bgremoved.png' },
  { id: 'irclass', logo: '/images/references/ırclass_bgremoved.png' },
  { id: 'rina', logo: '/images/references/rina_bgremoved.png' },
  { id: 'rs', logo: '/images/references/russian_maritime_bgremoved.png' },
  { id: 'dnv', logo: '/images/references/dnv.png' },
  { id: 'bv', logo: '/images/references/bureau_bgremoved.png' },
];

export default function ReferencesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-navy-950 pb-24 relative overflow-hidden">
      {/* Page Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/references/references-hero.png"
            alt="Türkoğlu Tersanecilik Referanslar"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                {t('referanslar.subtitle')}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {t('referanslar.title')}
            </h1>
            <div className="mx-auto mt-4 accent-bar" />
            <p className="text-lg text-steel-300 max-w-3xl mx-auto mt-6">
              {t('referanslar.description')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* Classification Societies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {societies.map((society, index) => (
            <motion.div
              key={society.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-navy-800/50 hover:border-accent/20 transition-all duration-300 group"
            >
              {/* Logo Container */}
              <div className="h-20 mb-6 flex-shrink-0 relative flex items-center justify-start overflow-hidden">
                <Image 
                  src={society.logo} 
                  alt={t(`referanslar.${society.id}.name`)} 
                  fill
                  className="object-contain object-left filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    // Fallback if image is missing
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.style.display = 'none';
                    imgElement.parentElement!.innerHTML = `<div class="h-full w-full flex items-center"><span class="text-xl font-bold text-white/50 group-hover:text-accent/80 transition-colors">${t(`referanslar.${society.id}.name`)}</span></div>`;
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {t(`referanslar.${society.id}.name`)}
                </h3>
                <p className="text-steel-300 text-sm leading-relaxed">
                  {t(`referanslar.${society.id}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
