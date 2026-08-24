import type { Locale } from '@/config/site';

export type HomeCopy = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    scrollLabel: string;
  };
  solutions: {
    eyebrow: string;
    title: string;
    intro: string;
    prompt: string;
    linkLabel: string;
    items: Array<{ verb: string; title: string; body: string; examples: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    linkLabel: string;
    items: Array<{ title: string; body: string }>;
  };
  finalCta: { eyebrow: string; title: string; body: string; button: string; note: string };
};

const id: HomeCopy = {
  hero: {
    eyebrow: 'Your Digitalization Partner',
    title: 'Yang rumit di bisnis Anda, seharusnya bisa dibuat lebih sederhana.',
    body: 'Digvation membantu melihat apa yang perlu dibenahi, menentukan langkah digitalnya, lalu membangun solusi sampai benar-benar digunakan.',
    primaryCta: 'Ceritakan masalahnya',
    secondaryCta: 'Lihat yang kami bangun',
    scrollLabel: 'Lihat hasil kerja',
  },
  solutions: {
    eyebrow: 'Apa yang kami bantu',
    title: 'Bentuknya bisa berbeda. Tujuannya tetap bisnis yang bekerja lebih baik.',
    intro:
      'Kami tidak memulai dari daftar teknologi. Kami memulai dari apa yang belum berjalan sebagaimana mestinya.',
    prompt: 'Pilih kondisi yang paling dekat dengan bisnis Anda.',
    linkLabel: 'Lihat seluruh solusi',
    items: [
      {
        verb: 'Build',
        title: 'Saat sesuatu yang digital perlu diwujudkan.',
        body: 'Dari website sampai aplikasi internal, kami merancangnya dari kebutuhan penggunaan nyata.',
        examples: 'Website, web app, mobile app, internal system',
      },
      {
        verb: 'Improve',
        title: 'Saat yang sudah ada tidak lagi cukup.',
        body: 'Kami mencari bagian yang membingungkan, lambat, atau sulit dipelihara, lalu membenahinya.',
        examples: 'Redesign, modernization, performance, product improvement',
      },
      {
        verb: 'Connect',
        title: 'Saat data dan proses berjalan sendiri-sendiri.',
        body: 'Kami menyambungkan sistem agar informasi tidak berhenti di satu alat atau satu orang.',
        examples: 'API, third-party integration, data flow',
      },
      {
        verb: 'Automate',
        title: 'Saat pekerjaan berulang memakan terlalu banyak waktu.',
        body: 'Kami mengubah langkah manual yang stabil menjadi alur yang berjalan konsisten.',
        examples: 'Workflow automation, notification, operational rules',
      },
      {
        verb: 'Understand',
        title: 'Saat data ada, tetapi belum membantu keputusan.',
        body: 'Kami membuat informasi penting lebih mudah dibaca, dipantau, dan ditindaklanjuti.',
        examples: 'Dashboard, analytics, AI-supported insight, IoT monitoring',
      },
    ],
  },
  process: {
    eyebrow: 'Cara kami bekerja',
    title: 'Jelas dari percakapan pertama sampai solusi digunakan.',
    body: 'Anda tidak perlu datang dengan spesifikasi teknis. Cukup bawa konteks bisnis dan bagian yang ingin dibuat lebih baik.',
    linkLabel: 'Lihat cara kerja lengkap',
    items: [
      { title: 'Pahami', body: 'Melihat masalah dan konteks sebenarnya.' },
      { title: 'Bentuk', body: 'Menentukan solusi dan prioritas yang masuk akal.' },
      { title: 'Bangun', body: 'Merancang dan mengembangkan secara bertahap.' },
      { title: 'Validasi', body: 'Menguji dengan skenario penggunaan nyata.' },
      { title: 'Jalankan', body: 'Melepas solusi dengan aman dan terukur.' },
      { title: 'Tingkatkan', body: 'Memperbaiki saat bisnis terus bergerak.' },
    ],
  },
  finalCta: {
    eyebrow: 'Ada yang seharusnya bisa bekerja lebih baik?',
    title: 'Mari lihat apakah teknologi bisa membantu.',
    body: 'Ceritakan situasinya. Kami akan mulai dengan memahami, bukan langsung menjual solusi.',
    button: 'Diskusikan dengan Digvation',
    note: 'Satu masalah yang jelas sudah cukup untuk memulai.',
  },
};

const en: HomeCopy = {
  hero: {
    eyebrow: 'Your Digitalization Partner',
    title: 'The complicated parts of your business should be easier to run.',
    body: 'Digvation helps find what needs to change, shape the right digital direction, and build the solution through to real use.',
    primaryCta: 'Tell us the problem',
    secondaryCta: 'See what we build',
    scrollLabel: 'See the work',
  },
  solutions: {
    eyebrow: 'How we help',
    title: 'The form can change. The goal remains a business that works better.',
    intro:
      'We do not start with a list of technologies. We start with what is not working as it should.',
    prompt: 'Choose the situation closest to your business.',
    linkLabel: 'Explore all solutions',
    items: [
      {
        verb: 'Build',
        title: 'When something digital needs to exist.',
        body: 'From websites to internal applications, we design around how people will actually use it.',
        examples: 'Website, web app, mobile app, internal system',
      },
      {
        verb: 'Improve',
        title: 'When what you have is no longer enough.',
        body: 'We find what is confusing, slow, or difficult to maintain and make it work better.',
        examples: 'Redesign, modernization, performance, product improvement',
      },
      {
        verb: 'Connect',
        title: 'When data and processes operate separately.',
        body: 'We connect systems so information no longer stops inside one tool or with one person.',
        examples: 'API, third-party integration, data flow',
      },
      {
        verb: 'Automate',
        title: 'When repetitive work takes too much time.',
        body: 'We turn stable manual steps into a flow that runs consistently.',
        examples: 'Workflow automation, notification, operational rules',
      },
      {
        verb: 'Understand',
        title: 'When data exists but does not support decisions.',
        body: 'We make important information easier to read, monitor, and act on.',
        examples: 'Dashboard, analytics, AI-supported insight, IoT monitoring',
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'Clear from the first conversation through to real use.',
    body: 'You do not need to arrive with a technical specification. Bring the business context and what you want to improve.',
    linkLabel: 'See the full process',
    items: [
      { title: 'Understand', body: 'See the real problem and context.' },
      { title: 'Shape', body: 'Define a sensible solution and priority.' },
      { title: 'Build', body: 'Design and develop in clear iterations.' },
      { title: 'Validate', body: 'Test against real-use scenarios.' },
      { title: 'Launch', body: 'Release the solution safely.' },
      { title: 'Improve', body: 'Refine it as the business moves.' },
    ],
  },
  finalCta: {
    eyebrow: 'Something should be working better?',
    title: 'Let us see whether technology can help.',
    body: 'Tell us the situation. We will start by understanding it, not by selling a solution.',
    button: 'Discuss it with Digvation',
    note: 'One clear problem is enough to start.',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { id, en };
