import type { Locale } from '@/config/site';

export type HomeCopy = {
  hero: {
    eyebrow: string;
    titleLead: string;
    titleRest: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    commitmentsLabel: string;
    commitments: string[];
  };
  shift: {
    eyebrow: string;
    title: string;
    intro: string;
    beforeLabel: string;
    afterLabel: string;
    items: Array<{
      before: string;
      after: string;
      detail: string;
      diagram: {
        action: string;
        before: string[];
        after: string[];
      };
    }>;
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
  partner: {
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
    titleLead: 'Partner digital',
    titleRest: 'agar bisnis lebih mudah dijalankan.',
    body: 'Ceritakan apa yang belum berjalan sebagaimana mestinya. Kami bantu memahami masalahnya, menentukan langkah digital yang tepat, lalu membangun dan mendampingi solusinya sampai benar-benar digunakan.',
    primaryCta: 'Ceritakan kebutuhan Anda',
    secondaryCta: 'Lihat hasil kerja',
    commitmentsLabel: 'Cara Digvation mendampingi bisnis Anda',
    commitments: [
      'Pahami bisnisnya dulu',
      'Bangun sampai benar-benar dipakai',
      'Tetap terlibat saat bisnis berkembang',
    ],
  },
  shift: {
    eyebrow: 'Dari yang terasa sehari-hari',
    title: 'Digitalisasi dimulai dari sesuatu yang perlu bekerja lebih baik.',
    intro: 'Kami mencari perubahan yang paling berguna. Bukan software yang paling banyak.',
    beforeLabel: 'Sebelum dibenahi',
    afterLabel: 'Setelah dibuat digital',
    items: [
      {
        before: 'Order tersebar di chat dan spreadsheet.',
        after: 'Satu alur terlihat.',
        detail: 'Order, PIC, approval, dan status berada dalam konteks yang sama.',
        diagram: {
          action: 'Satukan',
          before: ['Chat', 'Spreadsheet', 'Catatan'],
          after: ['Order', 'PIC', 'Approval', 'Status'],
        },
      },
      {
        before: 'Status harus ditanyakan berulang.',
        after: 'Informasi siap dipantau.',
        detail: 'Tim melihat apa yang berjalan, tertunda, dan perlu ditindaklanjuti.',
        diagram: {
          action: 'Tampilkan',
          before: ['Tanya PIC', 'Cek chat', 'Tunggu kabar'],
          after: ['Berjalan', 'Tertunda', 'Perlu aksi'],
        },
      },
      {
        before: 'Rekap manual menunda keputusan.',
        after: 'Data siap dibaca.',
        detail: 'Informasi penting muncul saat dibutuhkan, bukan setelah semuanya terlambat.',
        diagram: {
          action: 'Ringkas',
          before: ['Salin data', 'Cocokkan', 'Buat rekap'],
          after: ['Data masuk', 'Ringkasan', 'Keputusan'],
        },
      },
    ],
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
    body: 'Anda paling memahami bisnisnya. Kami membantu mengubah kebutuhannya menjadi langkah digital yang jelas.',
    linkLabel: 'Lihat cara kerja lengkap',
    items: [
      { title: 'Pahami', body: 'Mendengarkan cara kerja dan masalah yang sebenarnya.' },
      { title: 'Bentuk', body: 'Menentukan solusi dan prioritas yang masuk akal.' },
      { title: 'Bangun', body: 'Merancang dan mengembangkan secara bertahap.' },
      { title: 'Validasi', body: 'Menguji dengan skenario penggunaan nyata.' },
      { title: 'Jalankan', body: 'Melepas solusi dengan aman dan terukur.' },
      { title: 'Tingkatkan', body: 'Memperbaiki saat bisnis terus bergerak.' },
    ],
  },
  partner: {
    eyebrow: 'Arti sebuah partner',
    title: 'Tidak berhenti saat sistem selesai dibuat.',
    body: 'Digvation tetap melihat bagaimana solusi digunakan, apa yang berubah, dan apa yang perlu ditingkatkan berikutnya.',
    linkLabel: 'Kenal Digvation lebih dekat',
    items: [
      {
        title: 'Pahami bisnisnya',
        body: 'Proses, orang, data, dan hambatan dibaca sebelum bentuk solusi diputuskan.',
      },
      {
        title: 'Tentukan langkah bersama',
        body: 'Prioritas, batas kerja, dan risiko dibahas dengan bahasa yang sama selama proses berjalan.',
      },
      {
        title: 'Dampingi penggunaannya',
        body: 'Solusi dinilai dari pekerjaan nyata, bukan hanya dari hari peluncuran.',
      },
      {
        title: 'Tingkatkan saat perlu',
        body: 'Ketika bisnis bergerak, solusi dapat ikut dibenahi dan dikembangkan.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Mulai dari masalahnya',
    title: 'Ada yang seharusnya bisa berjalan lebih baik?',
    body: 'Ceritakan situasinya. Kami bantu mengurai langkah pertama bersama Anda.',
    button: 'Mulai percakapan',
    note: 'Percakapan dimulai dari bisnis Anda, bukan dari daftar teknologi.',
  },
};

const en: HomeCopy = {
  hero: {
    eyebrow: 'Your Digitalization Partner',
    titleLead: 'A digital partner',
    titleRest: 'for a business that is easier to run.',
    body: 'Tell us what is not working as it should. We help clarify the problem, choose the right digital step, then build and support the solution through real use.',
    primaryCta: 'Tell us what you need',
    secondaryCta: 'See the work',
    commitmentsLabel: 'How Digvation supports your business',
    commitments: [
      'Understand the business first',
      'Build through real use',
      'Stay involved as the business grows',
    ],
  },
  shift: {
    eyebrow: 'What the business feels every day',
    title: 'Digitalization starts with something that should work better.',
    intro: 'We look for the most useful change, not the largest amount of software.',
    beforeLabel: 'Before improvement',
    afterLabel: 'After the digital change',
    items: [
      {
        before: 'Orders are scattered across chats and spreadsheets.',
        after: 'One visible flow.',
        detail: 'Orders, owners, approvals, and status share the same context.',
        diagram: {
          action: 'Connect',
          before: ['Chat', 'Spreadsheet', 'Notes'],
          after: ['Order', 'Owner', 'Approval', 'Status'],
        },
      },
      {
        before: 'Status has to be requested repeatedly.',
        after: 'Information is ready to monitor.',
        detail: 'The team can see what is moving, delayed, and needs attention.',
        diagram: {
          action: 'Make visible',
          before: ['Ask owner', 'Check chat', 'Wait for news'],
          after: ['Moving', 'Delayed', 'Needs action'],
        },
      },
      {
        before: 'Manual recaps delay decisions.',
        after: 'Data is ready to read.',
        detail: 'Important information appears when it is needed, not after it is too late.',
        diagram: {
          action: 'Summarize',
          before: ['Copy data', 'Reconcile', 'Build recap'],
          after: ['Data in', 'Summary', 'Decision'],
        },
      },
    ],
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
    body: 'You know the business best. We help turn the need into a clear digital next step.',
    linkLabel: 'See the full process',
    items: [
      { title: 'Understand', body: 'Listen to how the work runs and what is getting in the way.' },
      { title: 'Shape', body: 'Define a sensible solution and priority.' },
      { title: 'Build', body: 'Design and develop in clear iterations.' },
      { title: 'Validate', body: 'Test against real-use scenarios.' },
      { title: 'Launch', body: 'Release the solution safely.' },
      { title: 'Improve', body: 'Refine it as the business moves.' },
    ],
  },
  partner: {
    eyebrow: 'What partnership means',
    title: 'It does not stop when the system is built.',
    body: 'Digvation keeps looking at how the solution is used, what has changed, and what should improve next.',
    linkLabel: 'Get to know Digvation',
    items: [
      {
        title: 'Understand the business',
        body: 'Process, people, data, and friction come before the shape of the solution.',
      },
      {
        title: 'Choose the next step together',
        body: 'Priorities, boundaries, and risks stay clear in language everyone can follow.',
      },
      {
        title: 'Support real use',
        body: 'The solution is judged by daily work, not only by launch day.',
      },
      {
        title: 'Improve when needed',
        body: 'As the business changes, the solution can be refined and extended.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Start with the problem',
    title: 'Something should be working better?',
    body: 'Tell us the situation. We will help make the first step clear with you.',
    button: 'Start a conversation',
    note: 'The conversation starts with your business, not a list of technologies.',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { id, en };
