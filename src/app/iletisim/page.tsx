import { Metadata } from 'next';
import IletisimContent from '@/components/iletisim/IletisimContent';

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'Türkoğlu Tersanecilik ile iletişime geçin. Adres, telefon ve e-posta bilgilerimiz. Teklif almak için formu doldurun.',
};

export default function IletisimPage() {
  return <IletisimContent />;
}
