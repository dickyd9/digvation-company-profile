import type { Locale } from '@/config/site';

export type HomeCopy = {
  hero: {
    eyebrow: string;
    title: string;
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
    linkLabel: string;
    items: Array<{ index: string; signal: string; response: string }>;
    note: string;
  };
  solutions: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ index: string; title: string; body: string; outputs: string[] }>;
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
    title: 'Bisnis lebih mudah dijalankan.',
    body: 'Digvation membenahi proses yang lambat, data yang terpencar, dan pengalaman customer yang lemah. Kami tentukan prioritasnya, bangun solusinya, lalu dampingi sampai benar-benar dipakai.',
    primaryCta: 'Ceritakan Hambatan Bisnis',
    secondaryCta: 'Lihat Hasil Kerja',
    note: 'Tidak perlu datang dengan brief teknis. Ceritakan bagian bisnis yang paling menghambat.',
    proofLabel: 'Contoh solusi digital',
    proofMeta: 'Ilustrasi, bukan data client',
    proofTitle: 'Operasional yang saling terhubung',
    proofBody:
      'Order masuk, stok bergerak, approval tercatat, dan semua tim melihat status yang sama.',
    outcomeLabel: 'Mengapa Digvation',
    outcomes: [
      'Mulai dari masalah, bukan daftar fitur',
      'Satu partner sampai solusi berjalan',
      'Tetap didampingi setelah solusi dipakai',
    ],
  },
  digitalize: {
    eyebrow: 'Tanda yang perlu dibenahi',
    title: 'Masalah yang berulang layak dibereskan.',
    intro:
      'Tidak perlu menebak aplikasi apa yang harus dibuat. Tunjukkan proses yang paling merepotkan. Kami bantu memilih perubahan pertama yang paling terasa.',
    signalLabel: 'Yang terjadi sekarang',
    responseLabel: 'Arah perbaikannya',
    linkLabel: 'Bahas satu hambatan',
    items: [
      {
        index: '01',
        signal: 'Calon customer datang, tetapi belum paham kenapa harus memilih Anda.',
        response: 'Perjelas nilai bisnis, alur informasi, dan jalan menuju inquiry.',
      },
      {
        index: '02',
        signal: 'Order, approval, dan laporan masih berpindah lewat chat atau spreadsheet.',
        response: 'Satukan proses, status, dan tanggung jawab dalam satu alur.',
      },
      {
        index: '03',
        signal: 'Data ada di banyak tempat, tetapi keputusan tetap menunggu rekap manual.',
        response: 'Hubungkan sumber data, otomatisasi rekap, dan tampilkan yang perlu dipantau.',
      },
    ],
    note: 'Solusinya bisa berupa website, sistem internal, automation, dashboard, AI, IoT, atau gabungan beberapa kebutuhan.',
  },
  solutions: {
    eyebrow: 'Bentuk solusi',
    title: 'Yang dibangun mengikuti masalahnya.',
    intro:
      'Kadang jawabannya website. Kadang sistem internal, integrasi, atau automation. Bentuknya dipilih setelah kebutuhan bisnisnya jelas.',
    items: [
      {
        index: '01',
        title: 'Pengalaman customer yang lebih jelas',
        body: 'Saat bisnis perlu lebih mudah ditemukan, dipahami, dan dihubungi.',
        outputs: ['Website', 'Portal', 'Inquiry Flow', 'Mobile'],
      },
      {
        index: '02',
        title: 'Operasional yang lebih rapi',
        body: 'Saat pekerjaan tersebar di chat, spreadsheet, atau banyak dokumen.',
        outputs: ['Internal System', 'Backoffice', 'Workflow', 'Dashboard'],
      },
      {
        index: '03',
        title: 'Proses yang saling terhubung',
        body: 'Saat tim harus mengulang input dan memindahkan data antar sistem.',
        outputs: ['Automation', 'API', 'Integration', 'Notification'],
      },
      {
        index: '04',
        title: 'Data yang bisa ditindaklanjuti',
        body: 'Saat laporan, kamera, atau sensor perlu membantu monitoring dan keputusan.',
        outputs: ['Analytics', 'AI / CV', 'IoT', 'Monitoring'],
      },
    ],
  },
  process: {
    eyebrow: 'Dari masalah sampai dipakai',
    title: 'Kami pahami bisnisnya dulu. Baru tentukan apa yang perlu dibangun.',
    body: 'Anda ceritakan proses dan tujuannya. Digvation memilah prioritas, merancang flow, membangun, menguji, dan tetap mendampingi setelah launch.',
    note: 'Anda tetap pegang keputusan bisnis. Detail digitalnya kami yang urus.',
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
    title: 'Make the business easier to run.',
    body: 'Digvation fixes slow processes, scattered data, and weak customer experiences. We set the priority, build the solution, and stay involved until it works in daily use.',
    primaryCta: 'Discuss a Business Bottleneck',
    secondaryCta: 'See Our Work',
    note: 'No technical brief needed. Start with the part of the business that is holding you back.',
    proofLabel: 'Digital solution example',
    proofMeta: 'Illustration, not client data',
    proofTitle: 'Connected business operations',
    proofBody:
      'Orders arrive, stock moves, approvals are recorded, and every team sees the same status.',
    outcomeLabel: 'Why Digvation',
    outcomes: [
      'Start with the problem, not a feature list',
      'One partner from direction to launch',
      'Continued support after the solution is in use',
    ],
  },
  digitalize: {
    eyebrow: 'Signs that something needs to change',
    title: 'Recurring problems are worth fixing.',
    intro:
      'You do not need to guess which application to build. Show us the process that causes the most friction. We will help choose the first change that matters.',
    signalLabel: 'What is happening now',
    responseLabel: 'A practical direction',
    linkLabel: 'Discuss one bottleneck',
    items: [
      {
        index: '01',
        signal: 'Potential customers arrive but still do not see why they should choose you.',
        response: 'Clarify the business value, information flow, and path to inquiry.',
      },
      {
        index: '02',
        signal: 'Orders, approvals, and reports still move through chat or spreadsheets.',
        response: 'Bring the process, status, and responsibility into one flow.',
      },
      {
        index: '03',
        signal: 'Data exists in many places, but decisions still wait for a manual recap.',
        response: 'Connect the sources, automate the recap, and show what needs attention.',
      },
    ],
    note: 'The solution may be a website, internal system, automation, dashboard, AI, IoT, or a combination of several needs.',
  },
  solutions: {
    eyebrow: 'Forms of solution',
    title: 'What gets built follows the problem.',
    intro:
      'Sometimes the answer is a website. Sometimes it is an internal system, integration, or automation. The form follows the business need.',
    items: [
      {
        index: '01',
        title: 'A clearer customer experience',
        body: 'When the business needs to be easier to find, understand, and contact.',
        outputs: ['Website', 'Portal', 'Inquiry Flow', 'Mobile'],
      },
      {
        index: '02',
        title: 'More organized operations',
        body: 'When work is scattered across chat, spreadsheets, or too many documents.',
        outputs: ['Internal System', 'Backoffice', 'Workflow', 'Dashboard'],
      },
      {
        index: '03',
        title: 'Processes that work together',
        body: 'When teams repeat data entry and move information between separate systems.',
        outputs: ['Automation', 'API', 'Integration', 'Notification'],
      },
      {
        index: '04',
        title: 'Data that leads to action',
        body: 'When reports, cameras, or sensors need to support monitoring and decisions.',
        outputs: ['Analytics', 'AI / CV', 'IoT', 'Monitoring'],
      },
    ],
  },
  process: {
    eyebrow: 'From problem to daily use',
    title: 'We understand the business before deciding what to build.',
    body: 'You explain the process and the goal. Digvation sets the priorities, designs the flow, builds, tests, and stays involved after launch.',
    note: 'You keep the business decisions. We handle the digital details.',
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
