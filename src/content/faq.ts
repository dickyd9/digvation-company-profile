import type { Locale } from '@/config/site';

export type FaqItem = {
  question: string;
  answer: string;
};

const faq: Record<Locale, FaqItem[]> = {
  id: [
    {
      question: 'Saya belum tahu harus bikin apa. Tetap bisa ngobrol?',
      answer:
        'Bisa. Ceritakan proses yang lambat, berulang, sulit dipantau, atau merepotkan customer. Kami bantu menentukan apa yang perlu dibenahi.',
    },
    {
      question: 'Kalau sistemnya sudah ada, masih bisa dibantu?',
      answer:
        'Bisa. Kami dapat mengaudit sistem yang berjalan, mencari hambatannya, lalu memperbaiki bagian yang paling penting.',
    },
    {
      question: 'Berapa lama project biasanya berjalan?',
      answer:
        'Tergantung scope dan ketidakpastiannya. Setelah konteks jelas, kami berikan estimasi yang masuk akal.',
    },
    {
      question: 'Bagaimana soal biaya?',
      answer:
        'Biaya mengikuti kebutuhan dan scope. Kami jelaskan dulu apa yang dikerjakan, apa yang diterima, dan kenapa.',
    },
    {
      question: 'Setelah launch, apakah selesai begitu saja?',
      answer:
        'Tidak harus. Project bisa selesai saat handover atau berlanjut ke maintenance dan improvement sesuai kebutuhan.',
    },
  ],
  en: [
    {
      question: 'I do not know what needs to be built yet. Can we still talk?',
      answer:
        'Yes. Tell us what feels slow, repetitive, hard to monitor, or frustrating for customers. We will help define what should change.',
    },
    {
      question: 'Can you work with an existing system?',
      answer:
        'Yes. We can audit what exists, find the bottleneck, and improve the part that matters most.',
    },
    {
      question: 'How long does a project usually take?',
      answer:
        'It depends on scope and uncertainty. Once the context is clear, we provide a realistic estimate.',
    },
    {
      question: 'How does pricing work?',
      answer:
        'Pricing follows the scope. We first clarify the work, the deliverables, and why they matter.',
    },
    {
      question: 'What happens after launch?',
      answer:
        'It depends. A project can end at handover or continue with maintenance and improvement when needed.',
    },
  ],
};

export function getFaq(locale: Locale) {
  return faq[locale];
}
