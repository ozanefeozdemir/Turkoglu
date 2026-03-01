'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Ship, Wrench, RefreshCcw, CheckCircle } from 'lucide-react';
import services from '@/data/services.json';
import SectionHeading from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  Ship,
  Wrench,
  RefreshCcw,
};

export default function HizmetlerimizContent() {
  return (
    <>
      {/* Page Hero */}
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
              Hizmetlerimiz
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Neler Yapıyoruz?
            </h1>
            <div className="mx-auto mt-4 accent-bar" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            subtitle="Uzmanlık Alanlarımız"
            title="Kapsamlı Tersane Hizmetleri"
            description="Yeni inşadan bakım-onarıma, refitleme ve modernizasyona kadar geniş bir yelpazede hizmet sunuyoruz."
          />

          <div className="space-y-24">
            {services.map((service, i) => {
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
                  {/* Image */}
                  <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
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

                  {/* Content */}
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center bg-accent/10">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-white">{service.title}</h3>
                    <div className="accent-bar mb-6" />
                    <p className="mb-8 text-lg leading-relaxed text-steel-400">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: j * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                          <span className="text-steel-300">{feature}</span>
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

      {/* CTA */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Projeniz İçin Bizimle İletişime Geçin
            </h2>
            <p className="mt-4 text-lg text-steel-400">
              Uzman ekibimiz, projenizin her aşamasında yanınızda.
            </p>
            <a
              href="/iletisim"
              className="mt-8 inline-block bg-accent px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-2xl hover:shadow-accent/20"
            >
              TEKLİF ALIN
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
