import type { Locale } from '@/config/site';

export type HomeCopy = {
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleWords: string[];
    titleA11y: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
    proofLabel: string;
    proofMeta: string;
    proofTitle: string;
    proofBody: string;
    outcomeLabel: string;
    outcomes: string[];
  };
  digitalize: {
    eyebrow: string;
    title: string;
    intro: string;
    signalLabel: string;
    responseLabel: string;
    visualNote: string;
    linkLabel: string;
    items: Array<{
      index: string;
      signal: string;
      response: string;
      preview: 'customer' | 'operations' | 'data';
    }>;
    note: string;
  };
  solutions: {
    eyebrow: string;
    title: string;
    intro: string;
    contextLabel: string;
    outputLabel: string;
    visualNote: string;
    items: Array<{
      index: string;
      title: string;
      body: string;
      preview: 'experience' | 'workspace' | 'automation' | 'monitoring';
      outputs: string[];
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
    items: Array<{ title: string; body: string; owner: string }>;
  };
  finalCta: { eyebrow: string; title: string; body: string; button: string; note: string };
};

const id: HomeCopy = {
  hero: {
    eyebrow: 'DIGVATION / PARTNER TRANSFORMASI DIGITAL',
    titlePrefix: 'Bisnis lebih mudah',
    titleWords: ['dijalankan.', 'dipantau.', 'dikembangkan.'],
    titleA11y: 'Bisnis lebih mudah dijalankan, dipantau, dan dikembangkan.',
    body: 'Kami merapikan proses, menghubungkan data, dan membangun sistem yang benar-benar dipakai tim Anda.',
    primaryCta: 'Ceritakan Hambatan Bisnis',
    secondaryCta: 'Lihat Hasil Kerja',
    note: 'Mulai dari hambatan bisnis. Detail digitalnya kami yang urus.',
    proofLabel: 'Contoh solusi digital',
    proofMeta: 'Ilustrasi, bukan data client',
    proofTitle: 'Satu sistem. Satu status.',
    proofBody: 'Order, stok, approval, dan laporan terhubung dalam satu alur.',
    outcomeLabel: 'Mengapa Digvation',
    outcomes: [
      'Mulai dari masalah, bukan daftar fitur',
      'Satu partner sampai solusi berjalan',
      'Tetap didampingi setelah solusi dipakai',
    ],
  },
  digitalize: {
    eyebrow: 'Tanda yang perlu dibenahi',
    title: 'Masalah kecil. Dampaknya setiap hari.',
    intro:
      'Cari yang bikin lambat, bikin ragu, atau bikin keputusan tertunda. Kita mulai dari sana.',
    signalLabel: 'Masalah yang terasa',
    responseLabel: 'Yang perlu berubah',
    visualNote: 'Mana yang paling mirip bisnis Anda?',
    linkLabel: 'Ceritakan satu hambatan',
    items: [
      {
        index: '01',
        signal: 'Sudah dikunjungi. Belum cukup meyakinkan.',
        response: 'Perjelas nilai bisnis dan jalur menuju kontak.',
        preview: 'customer',
      },
      {
        index: '02',
        signal: 'Order masuk. Statusnya hilang di chat.',
        response: 'Satukan order, PIC, approval, dan status.',
        preview: 'operations',
      },
      {
        index: '03',
        signal: 'Datanya ada. Keputusan tetap menunggu.',
        response: 'Tampilkan data yang perlu segera ditindak.',
        preview: 'data',
      },
    ],
    note: 'Teknologi mengikuti kebutuhan. Yang dibenahi tetap alur bisnisnya.',
  },
  solutions: {
    eyebrow: 'Bentuk solusi',
    title: 'Solusi harus terasa dampaknya.',
    intro: 'Bentuknya mengikuti alur kerja, pengguna, dan perubahan yang dibutuhkan bisnis.',
    contextLabel: 'Saat bisnis membutuhkan',
    outputLabel: 'Bentuk yang mungkin',
    visualNote: 'Pilih dampaknya dulu.',
    items: [
      {
        index: '01',
        title: 'Customer lebih cepat percaya.',
        body: 'Nilai bisnis jelas. Jalur kontak dekat.',
        preview: 'experience',
        outputs: ['Website', 'Portal', 'Inquiry Flow', 'Mobile'],
      },
      {
        index: '02',
        title: 'Tim bekerja dalam satu alur.',
        body: 'Tugas, PIC, dan status terlihat bersama.',
        preview: 'workspace',
        outputs: ['Internal System', 'Backoffice', 'Workflow', 'Dashboard'],
      },
      {
        index: '03',
        title: 'Pekerjaan berulang berjalan otomatis.',
        body: 'Data berpindah tanpa salin ulang.',
        preview: 'automation',
        outputs: ['Automation', 'API', 'Integration', 'Notification'],
      },
      {
        index: '04',
        title: 'Keputusan tidak menunggu rekap.',
        body: 'Hal penting terlihat saat dibutuhkan.',
        preview: 'monitoring',
        outputs: ['Analytics', 'AI / CV', 'IoT', 'Monitoring'],
      },
    ],
  },
  process: {
    eyebrow: 'Dari masalah sampai dipakai',
    title: 'Pahami dulu. Bangun yang benar-benar dibutuhkan.',
    body: 'Anda bawa konteks bisnis. Kami ubah menjadi prioritas, solusi, dan sistem yang siap dipakai.',
    note: 'Keputusan bisnis tetap di tangan Anda.',
    items: [
      {
        title: 'Pahami konteks',
        owner: 'Bersama',
        body: 'Pahami proses, orang, data, dan masalah utamanya.',
      },
      {
        title: 'Tentukan prioritas',
        owner: 'Bersama',
        body: 'Pilih yang paling penting untuk diselesaikan dulu.',
      },
      {
        title: 'Rancang solusi',
        owner: 'Digvation',
        body: 'Ubah kebutuhan menjadi flow, scope, dan pengalaman.',
      },
      {
        title: 'Bangun dan jalankan',
        owner: 'Digvation',
        body: 'Bangun, integrasikan, uji, lalu jalankan.',
      },
      {
        title: 'Pantau dan perbaiki',
        owner: 'Bersama',
        body: 'Lihat hasil penggunaan dan tingkatkan bila perlu.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Ada proses yang terasa makin berat?',
    title: 'Bawa masalahnya. Pulang dengan langkah yang lebih jelas.',
    body: 'Kami akan membantu melihat apa yang perlu dibenahi lebih dulu, apa yang bisa menunggu, dan bentuk solusi yang masuk akal.',
    button: 'Ceritakan Masalahnya',
    note: 'Diskusi awal tidak mengikat Anda untuk langsung memulai project.',
  },
};

const en: HomeCopy = {
  hero: {
    eyebrow: 'DIGVATION / DIGITAL TRANSFORMATION PARTNER',
    titlePrefix: 'Make the business easier to',
    titleWords: ['run.', 'monitor.', 'grow.'],
    titleA11y: 'Make the business easier to run, monitor, and grow.',
    body: 'We streamline processes, connect data, and build systems your team can actually use.',
    primaryCta: 'Discuss a Business Bottleneck',
    secondaryCta: 'See Our Work',
    note: 'Start with the business bottleneck. We will handle the digital details.',
    proofLabel: 'Digital solution example',
    proofMeta: 'Illustration, not client data',
    proofTitle: 'One system. One status.',
    proofBody: 'Orders, stock, approvals, and reports move through one connected flow.',
    outcomeLabel: 'Why Digvation',
    outcomes: [
      'Start with the problem, not a feature list',
      'One partner from direction to launch',
      'Continued support after the solution is in use',
    ],
  },
  digitalize: {
    eyebrow: 'Signs that something needs to change',
    title: 'Small friction. Daily impact.',
    intro: 'Find what slows work, creates doubt, or delays a decision. We start there.',
    signalLabel: 'The problem you feel',
    responseLabel: 'What needs to change',
    visualNote: 'Which one feels familiar?',
    linkLabel: 'Share one bottleneck',
    items: [
      {
        index: '01',
        signal: 'They visit. They are not convinced.',
        response: 'Make the value and path to contact clear.',
        preview: 'customer',
      },
      {
        index: '02',
        signal: 'Orders arrive. Status gets lost in chat.',
        response: 'Connect orders, owners, approvals, and status.',
        preview: 'operations',
      },
      {
        index: '03',
        signal: 'The data exists. Decisions still wait.',
        response: 'Show what needs action now.',
        preview: 'data',
      },
    ],
    note: 'Technology follows the need. The business flow is what we improve.',
  },
  solutions: {
    eyebrow: 'Forms of solution',
    title: 'A solution should feel different.',
    intro: 'The form follows the workflow, the users, and the change the business needs.',
    contextLabel: 'When the business needs',
    outputLabel: 'Possible forms',
    visualNote: 'Choose the impact first.',
    items: [
      {
        index: '01',
        title: 'Customers trust you faster.',
        body: 'The value is clear. Contact is close.',
        preview: 'experience',
        outputs: ['Website', 'Portal', 'Inquiry Flow', 'Mobile'],
      },
      {
        index: '02',
        title: 'The team works in one flow.',
        body: 'Tasks, owners, and status stay visible.',
        preview: 'workspace',
        outputs: ['Internal System', 'Backoffice', 'Workflow', 'Dashboard'],
      },
      {
        index: '03',
        title: 'Repeated work runs automatically.',
        body: 'Data moves without manual copying.',
        preview: 'automation',
        outputs: ['Automation', 'API', 'Integration', 'Notification'],
      },
      {
        index: '04',
        title: 'Decisions do not wait for a recap.',
        body: 'What matters is visible when needed.',
        preview: 'monitoring',
        outputs: ['Analytics', 'AI / CV', 'IoT', 'Monitoring'],
      },
    ],
  },
  process: {
    eyebrow: 'From problem to daily use',
    title: 'Understand first. Build what the business needs.',
    body: 'You bring the business context. We turn it into priorities, a solution, and a system ready to use.',
    note: 'The business decisions stay with you.',
    items: [
      {
        title: 'Understand the context',
        owner: 'Together',
        body: 'Understand the process, people, data, and core problem.',
      },
      {
        title: 'Set the priority',
        owner: 'Together',
        body: 'Choose what matters most to solve first.',
      },
      {
        title: 'Design the solution',
        owner: 'Digvation',
        body: 'Turn the need into flow, scope, and experience.',
      },
      {
        title: 'Build and launch',
        owner: 'Digvation',
        body: 'Build, integrate, test, and launch.',
      },
      {
        title: 'Monitor and improve',
        owner: 'Together',
        body: 'Learn from real use and improve when needed.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Is a business process becoming harder to manage?',
    title: 'Bring the problem. Leave with a clearer next step.',
    body: 'We will help identify what needs attention first, what can wait, and which type of solution makes sense.',
    button: 'Tell Us the Problem',
    note: 'The first discussion does not commit you to starting a project.',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { id, en };
