'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Anchor, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-950 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-8 inline-block"
        >
          <Anchor className="h-20 w-20 text-accent/40" />
        </motion.div>

        <h1 className="text-7xl font-bold text-white sm:text-9xl">404</h1>
        <div className="mx-auto mt-4 accent-bar" />

        <h2 className="mt-6 text-2xl font-bold text-white">Sayfa Bulunamadı</h2>
        <p className="mt-3 text-lg text-steel-400">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana Sayfaya Dön
        </Link>
      </motion.div>
    </div>
  );
}
