'use client';

import { motion } from 'framer-motion';
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

export default function ReferencesStrip() {
  return (
    <div className="mt-20 w-full overflow-hidden border-y border-white/5 bg-navy-950/50 py-10">
      <div className="mx-auto flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30, // Adjust speed
          }}
          className="flex items-center gap-16 pr-16"
        >
          {/* We duplicate the array to create an infinite loop effect */}
          {[...societies, ...societies].map((society, i) => (
            <div
              key={`${society.id}-${i}`}
              className="relative h-16 w-36 shrink-0 md:h-20 md:w-48 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={society.logo}
                alt={society.id}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 144px, 192px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
