import { Metadata } from 'next';
import CalismalarimizContent from '@/components/calismalarimiz/CalismalarimizContent';

export const metadata: Metadata = {
  title: 'Çalışmalarımız',
  description:
    'Türkoğlu Tersanecilik tamamlanan ve devam eden projeler. Yeni inşa, refit ve bakım-onarım projelerimizi inceleyin.',
};

export default function CalismalarimizPage() {
  return <CalismalarimizContent />;
}
