'use client';

import Link from 'next/link';
import { Anchor, MapPin, Phone, Mail, Linkedin, Instagram, Twitter } from 'lucide-react';
import companyInfo from '@/data/companyInfo.json';
import { useLanguage } from '@/context/LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/kurumsal', label: t('nav.corporate') },
    { href: '/hizmetlerimiz', label: t('nav.services') },
    { href: '/calismalarimiz', label: t('nav.works') },
    { href: '/iletisim', label: t('nav.contact') },
  ];

  const serviceLinks = [
    { href: '/hizmetlerimiz#yeni-insa', label: t('services.newBuild') },
    { href: '/hizmetlerimiz#bakim-onarim', label: t('services.maintenance') },
    { href: '/hizmetlerimiz#refit-modernizasyon', label: t('services.refit') },
  ];

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-accent">
                <Anchor className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white">TÜRKOĞLU</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-steel-400">
                  Tersanecilik
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-steel-400">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, href: companyInfo.social.linkedin },
                { icon: Instagram, href: companyInfo.social.instagram },
                { icon: Twitter, href: companyInfo.social.twitter },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center bg-navy-800 text-steel-400 transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-400 transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-400 transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-steel-400">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-sm text-steel-400 transition-colors hover:text-white"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-steel-400 transition-colors hover:text-white"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-navy-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-steel-500 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Türkoğlu Tersanecilik. {t('footer.rights')}</p>
          <p>{t('footer.builtWith')} by <Link href="https://www.linkedin.com/in/ozan-efe-%C3%B6zdemir-426694253/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors duration-300">Ozan Efe Özdemir</Link></p>
        </div>
      </div>
    </footer>
  );
}
