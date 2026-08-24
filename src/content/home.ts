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
    title: 'Bisnis yang lebih mudah dijalankan.',
    body: 'Kami membantu menentukan apa yang perlu dibuat digital, lalu membangunnya sampai benar-benar dipakai.',
    primaryCta: 'Ceritakan yang ingin diperbaiki',
    secondaryCta: 'Lihat hasil kerja',
    scrollLabel: 'Lihat hasil kerja',
  },
  solutions: {
    eyebrow: 'Yang bisa dibenahi',
    title: 'Bukan soal menambah software. Soal membuat bisnis bekerja lebih baik.',
    intro: 'Pilih kondisi yang paling dekat dengan bisnis Anda.',
    prompt: 'Buka untuk melihat bentuk bantuannya.',
    linkLabel: 'Lihat seluruh solusi',
    items: [
      {
        verb: 'Wujudkan',
        title: 'Kebutuhan perlu menjadi produk yang bisa dipakai.',
        body: 'Website, aplikasi, atau sistem internal dibangun dari cara orang benar-benar bekerja.',
        examples: 'Website, web app, mobile app, internal system',
      },
      {
        verb: 'Benahi',
        title: 'Yang sudah ada tidak lagi cukup.',
        body: 'Kami mencari bagian yang lambat, membingungkan, atau sulit dipelihara, lalu memperbaikinya.',
        examples: 'Redesign, modernization, performance, product improvement',
      },
      {
        verb: 'Hubungkan',
        title: 'Data dan proses berjalan sendiri-sendiri.',
        body: 'Kami menyambungkan sistem agar informasi tidak berhenti di satu alat atau satu orang.',
        examples: 'API, third-party integration, data flow',
      },
      {
        verb: 'Otomatiskan',
        title: 'Pekerjaan berulang memakan terlalu banyak waktu.',
        body: 'Kami mengubah langkah manual yang stabil menjadi alur yang berjalan konsisten.',
        examples: 'Workflow automation, notification, operational rules',
      },
      {
        verb: 'Pahami',
        title: 'Data ada, tetapi belum membantu keputusan.',
        body: 'Kami membuat informasi penting lebih mudah dibaca, dipantau, dan ditindaklanjuti.',
        examples: 'Dashboard, analytics, AI-supported insight, IoT monitoring',
      },
    ],
  },
  process: {
    eyebrow: 'Cara kami bekerja',
    title: 'Pahami dulu. Bangun yang tepat.',
    body: 'Anda membawa konteks bisnis. Kami menjaga keputusan dan delivery digitalnya tetap jelas.',
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
    eyebrow: 'Mulai dari masalahnya',
    title: 'Ada yang seharusnya bisa berjalan lebih baik?',
    body: 'Ceritakan situasinya. Satu masalah yang jelas sudah cukup untuk memulai.',
    button: 'Bicarakan dengan Digvation',
    note: 'Kami mulai dengan memahami, bukan langsung menawarkan software.',
  },
};

const en: HomeCopy = {
  hero: {
    eyebrow: 'Your Digitalization Partner',
    title: 'A business that is easier to run.',
    body: 'We help decide what should become digital, then build it through to real use.',
    primaryCta: 'Tell us what should improve',
    secondaryCta: 'See the work',
    scrollLabel: 'See the work',
  },
  solutions: {
    eyebrow: 'What can improve',
    title: 'Not more software. A business that works better.',
    intro: 'Choose the situation closest to your business.',
    prompt: 'Open one to see how we help.',
    linkLabel: 'Explore all solutions',
    items: [
      {
        verb: 'Build',
        title: 'A need has to become a product people can use.',
        body: 'Websites, applications, and internal systems are shaped around how people actually work.',
        examples: 'Website, web app, mobile app, internal system',
      },
      {
        verb: 'Improve',
        title: 'What already exists is no longer enough.',
        body: 'We find what is confusing, slow, or difficult to maintain and make it work better.',
        examples: 'Redesign, modernization, performance, product improvement',
      },
      {
        verb: 'Connect',
        title: 'Data and processes operate separately.',
        body: 'We connect systems so information no longer stops inside one tool or with one person.',
        examples: 'API, third-party integration, data flow',
      },
      {
        verb: 'Automate',
        title: 'Repetitive work takes too much time.',
        body: 'We turn stable manual steps into a flow that runs consistently.',
        examples: 'Workflow automation, notification, operational rules',
      },
      {
        verb: 'Understand',
        title: 'Data exists but does not support decisions.',
        body: 'We make important information easier to read, monitor, and act on.',
        examples: 'Dashboard, analytics, AI-supported insight, IoT monitoring',
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'Understand first. Build the right thing.',
    body: 'You bring the business context. We keep the digital decisions and delivery clear.',
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
    eyebrow: 'Start with the problem',
    title: 'Something should be working better?',
    body: 'Tell us the situation. One clear problem is enough to start.',
    button: 'Talk with Digvation',
    note: 'We start by understanding, not by immediately selling software.',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { id, en };
