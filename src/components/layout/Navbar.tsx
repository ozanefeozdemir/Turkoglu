'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Anchor, Sun, Moon, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeProvider';
import { useLanguage, langMeta, Lang } from '@/context/LanguageProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/kurumsal', label: t('nav.corporate') },
    { href: '/hizmetlerimiz', label: t('nav.services') },
    { href: '/calismalarimiz', label: t('nav.works') },
    { href: '/referanslar', label: t('nav.references') },
    { href: '/iletisim', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center transition-transform duration-300 hover:scale-105">
              <div className="relative h-12 w-48 md:h-14 md:w-48  ">
                <Image
                  src="/turkoglu_logo_bgremoved.png"
                
                  alt="Türkoğlu Tersanecilik Logo"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 lg:flex ml-60">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-2 py-2 text-sm font-medium transition-colors duration-300
                      ${isActive
                        ? 'text-accent'
                        : 'text-steel-300 hover:text-white'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right side: CTA then Language then Theme */}
            <div className="hidden items-center gap-1 lg:flex">
              {/* CTA Button */}
              <Link
                href="/iletisim#teklif-formu"
                className="bg-accent px-4 py-2.5 text-sm font-semibold text-[#ffffff] transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
              >
                {t('nav.cta')}
              </Link>

              {/* Language Selector */}
              <div className="relative ml-1" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex h-9 items-center gap-1.5 px-2.5 text-sm font-medium text-steel-300 transition-colors duration-300 hover:text-white"
                >
                  <span className="text-xs uppercase">{lang}</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 overflow-hidden border border-white/10 bg-navy-900 shadow-xl"
                    >
                      {(Object.keys(langMeta) as Lang[]).map((key) => (
                        <button
                          key={key}
                          onClick={() => {
                            setLang(key);
                            setLangOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors
                            ${lang === key
                              ? 'bg-accent/10 text-accent'
                              : 'text-steel-300 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                          <span>{langMeta[key].flag}</span>
                          <span>{langMeta[key].label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center text-steel-300 transition-colors duration-300 hover:text-accent"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-[18px] w-[18px]" />
                ) : (
                  <Moon className="h-[18px] w-[18px]" />
                )}
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Language */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex h-10 items-center gap-1 text-sm text-white"
                >
                  <span>{langMeta[lang].flag}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 overflow-hidden border border-white/10 bg-navy-900 shadow-xl z-50"
                    >
                      {(Object.keys(langMeta) as Lang[]).map((key) => (
                        <button
                          key={key}
                          onClick={() => {
                            setLang(key);
                            setLangOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors
                            ${lang === key
                              ? 'bg-accent/10 text-accent'
                              : 'text-steel-300 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                          <span>{langMeta[key].flag}</span>
                          <span>{langMeta[key].label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center text-white"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="flex h-10 w-10 items-center justify-center text-white"
                aria-label="Menu"
              >
                {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-2xl font-semibold transition-colors
                        ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/iletisim#teklif-formu"
                  className="mt-4 inline-block bg-accent px-8 py-3 text-lg font-semibold text-[#ffffff] hover:bg-accent-hover"
                >
                  {t('nav.cta')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
