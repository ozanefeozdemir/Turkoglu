import { Metadata } from 'next';
import KurumsalContent from '@/components/kurumsal/KurumsalContent';

export const metadata: Metadata = {
  title: 'Kurumsal',
  description:
    'Türkoğlu Tersanecilik kurumsal bilgileri, vizyon, misyon ve değerlerimiz. 1985\'ten bu yana denizcilik sektöründe güvenilir hizmet.',
};

export default function KurumsalPage() {
  return <KurumsalContent />;
}
