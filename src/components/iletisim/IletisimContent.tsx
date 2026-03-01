'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import companyInfo from '@/data/companyInfo.json';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageProvider';

export default function IletisimContent() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('iletisim.address'),
      value: companyInfo.address,
      href: `https://maps.google.com/?q=${companyInfo.coordinates.lat},${companyInfo.coordinates.lng}`,
    },
    {
      icon: Phone,
      label: t('iletisim.phone'),
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone}`,
    },
    {
      icon: Mail,
      label: t('iletisim.email'),
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
    },
    {
      icon: Clock,
      label: t('iletisim.hours'),
      value: 'Pazartesi - Cumartesi: 08:00 - 18:00',
      href: null,
    },
  ];

  const inputClasses =
    'w-full border border-white/10 bg-navy-800 px-4 py-3.5 text-sm text-white placeholder:text-steel-500 transition-all duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50';

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.png"
            alt="Türkoğlu Tersanecilik İletişim"
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
              {t('iletisim.subtitle')}
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {t('iletisim.title')}
            </h1>
            <div className="mx-auto mt-4 accent-bar" />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const Wrapper = info.href ? 'a' : 'div';
              const wrapperProps = info.href
                ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className="group block border border-white/5 bg-navy-800 p-6 transition-all duration-500 hover:border-accent/30"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center bg-accent/10 transition-colors group-hover:bg-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
                      {info.label}
                    </h4>
                    <p className="text-sm leading-relaxed text-steel-400">{info.value}</p>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          {/* Form + Map */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                subtitle={t('iletisim.subtitle')}
                title={t('iletisim.formTitle')}
                description={t('iletisim.formDesc')}
                align="left"
              />

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-center gap-3 border border-green-500/20 bg-green-500/10 p-4"
                >
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <p className="text-sm text-green-400">
                    {t('iletisim.successTitle')} {t('iletisim.successDesc')}
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="-mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder={`${t('iletisim.name')} *`}
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    placeholder={`${t('iletisim.emailLabel')} *`}
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className={inputClasses}
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder={t('iletisim.phone')}
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className={inputClasses}
                  />
                  <input
                    type="text"
                    placeholder={t('iletisim.subject')}
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className={inputClasses}
                  />
                </div>
                <textarea
                  placeholder={`${t('iletisim.message')} *`}
                  required
                  rows={6}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className={`${inputClasses} resize-none`}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-3 bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 animate-spin border-2 border-white/30 border-t-white" />
                      {t('iletisim.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t('iletisim.send')}
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col"
            >
              <SectionHeading
                subtitle={t('iletisim.mapTitle')}
                title={t('iletisim.mapTitle')}
                align="left"
              />
              <div className="-mt-8 flex-1 min-h-[400px] border border-white/5">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.123456789!2d${companyInfo.coordinates.lng}!3d${companyInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ5JzIxLjAiTiAyOcKwMTgnMDEuOCJF!5e0!3m2!1str!2str!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Türkoğlu Tersanecilik Konum"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
