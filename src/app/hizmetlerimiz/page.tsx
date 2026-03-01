import { Metadata } from 'next';
import HizmetlerimizContent from '@/components/hizmetlerimiz/HizmetlerimizContent';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description:
    'Yeni gemi inşası, bakım-onarım ve refit & modernizasyon hizmetlerimiz. Uluslararası standartlarda tersane hizmetleri.',
};

export default function HizmetlerimizPage() {
  return <HizmetlerimizContent />;
}
