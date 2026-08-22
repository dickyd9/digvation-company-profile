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
    signals: string[];
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
    eyebrow: 'DIGVATION — PARTNER DIGITALISASI BISNIS',
    title: 'Kami bantu digitalisasi bisnis Anda.',
    body: 'Website untuk tampil lebih meyakinkan. Sistem dan automation untuk bekerja lebih rapi. Digvation menangani keduanya dari masalah sampai live.',
    primaryCta: 'Diskusikan Bisnis Anda',
    secondaryCta: 'Lihat Project Nyata',
    note: 'Belum punya brief teknis? Mulai dari masalahnya. Kami bantu menentukan solusinya.',
    proofLabel: 'Contoh sistem digital',
    proofMeta: 'Operations workspace',
    proofTitle: 'Integrated Business Operations',
    proofBody: 'Order, stok, approval, finance, dan fulfillment dalam satu alur operasional.',
    outcomeLabel: 'Yang kami bantu ubah',
    outcomes: [
      'Lebih meyakinkan di depan customer',
      'Lebih rapi di dalam operasional',
      'Lebih terhubung antarproses',
    ],
  },
  digitalize: {
    eyebrow: 'Digitalisasi dimulai dari masalah nyata',
    title: 'Tidak perlu datang dengan nama teknologi.',
    intro:
      'Ceritakan bagian bisnis yang lambat, manual, atau sulit dipantau. Kami bantu menentukan perubahan yang paling masuk akal.',
    signalLabel: 'Yang terasa di bisnis',
    responseLabel: 'Yang perlu dibenahi',
    linkLabel: 'Ceritakan satu masalah bisnis',
    items: [
      {
        index: '01',
        signal: 'Customer sulit memahami produk atau menghubungi bisnis.',
        response: 'Perjelas positioning, customer journey, dan jalur inquiry.',
      },
      {
        index: '02',
        signal: 'Tim bergantung pada chat, spreadsheet, dan pengecekan manual.',
        response: 'Satukan alur, status, data, dan tanggung jawab.',
      },
      {
        index: '03',
        signal: 'Data tersebar dan tidak membantu keputusan dengan cepat.',
        response: 'Hubungkan tools, data, automation, dan monitoring.',
      },
    ],
    note: 'Hasilnya bisa berupa website, sistem internal, automation, dashboard, AI/CV, IoT, atau kombinasinya.',
  },
  solutions: {
    eyebrow: 'Yang bisa kami bangun bersama Anda',
    title: 'Dari sisi customer sampai operasional di belakangnya.',
    intro:
      'Dari pengalaman customer sampai pekerjaan di belakang layar. Kami bangun bagian yang benar-benar dibutuhkan.',
    signals: [
      'Lebih sedikit input ulang',
      'Status lebih terlihat',
      'Proses lebih terhubung',
      'Keputusan lebih cepat',
    ],
    items: [
      {
        index: '01',
        title: 'Customer & Digital Experience',
        body: 'Untuk memperjelas value, meyakinkan customer, dan membuka jalur inquiry.',
        outputs: ['Website', 'Portal', 'Customer Journey', 'Mobile Experience'],
      },
      {
        index: '02',
        title: 'Internal Systems & Operations',
        body: 'Untuk merapikan pekerjaan yang masih tersebar di chat, spreadsheet, dan dokumen.',
        outputs: ['Internal System', 'Backoffice', 'Workflow', 'Dashboard'],
      },
      {
        index: '03',
        title: 'Automation & Integration',
        body: 'Untuk mengurangi input ulang dan menghubungkan sistem yang terpisah.',
        outputs: ['Automation', 'API', 'Integration', 'Notification'],
      },
      {
        index: '04',
        title: 'Data, AI & Connected Operations',
        body: 'Untuk mengubah data, kamera, dan sensor menjadi monitoring serta keputusan.',
        outputs: ['Analytics', 'AI / CV', 'IoT', 'Monitoring'],
      },
    ],
  },
  process: {
    eyebrow: 'Satu partner, dari masalah sampai dipakai',
    title: 'Anda pegang bisnisnya. Kami pegang delivery digitalnya.',
    body: 'Dari discovery, desain, development, testing, sampai launch—satu partner, satu alur.',
    note: 'Anda tidak perlu menjadi project manager untuk tim teknis kami.',
    items: [
      {
        title: 'Understand',
        owner: 'Bersama',
        body: 'Pahami proses, orang, data, dan masalah utamanya.',
      },
      {
        title: 'Prioritize',
        owner: 'Bersama',
        body: 'Pilih yang paling penting untuk diselesaikan dulu.',
      },
      {
        title: 'Design',
        owner: 'Digvation',
        body: 'Ubah kebutuhan menjadi flow, scope, dan pengalaman.',
      },
      {
        title: 'Build & Launch',
        owner: 'Digvation',
        body: 'Bangun, integrasikan, uji, lalu jalankan.',
      },
      {
        title: 'Operate & Improve',
        owner: 'Bersama',
        body: 'Lihat hasil penggunaan dan tingkatkan bila perlu.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Punya target bisnis yang ingin didigitalisasi?',
    title: 'Mari tentukan apa yang perlu dibangun—dan apa yang tidak.',
    body: 'Ceritakan target atau masalahnya. Kami bantu menentukan langkah dan membawanya sampai siap digunakan.',
    button: 'Mulai Diskusi',
    note: 'Percakapan awal tidak mengharuskan Anda langsung memulai project.',
  },
};

const en: HomeCopy = {
  hero: {
    eyebrow: 'DIGVATION — YOUR DIGITALIZATION PARTNER',
    title: 'We help digitalize your business.',
    body: 'Websites that strengthen your presence. Systems and automation that organize operations. Digvation handles both from problem to launch.',
    primaryCta: 'Discuss Your Business',
    secondaryCta: 'See Real Projects',
    note: 'No technical brief? Start with the problem. We will help define the solution.',
    proofLabel: 'Digital system example',
    proofMeta: 'Operations workspace',
    proofTitle: 'Integrated Business Operations',
    proofBody: 'Orders, inventory, approvals, finance, and fulfillment in one operational flow.',
    outcomeLabel: 'What we help change',
    outcomes: [
      'More credible to customers',
      'More organized in operations',
      'More connected across processes',
    ],
  },
  digitalize: {
    eyebrow: 'Digitalization starts with a real problem',
    title: 'You do not need to arrive with a technology name.',
    intro:
      'Tell us what feels slow, manual, or hard to monitor. We will help define the most sensible change.',
    signalLabel: 'What the business feels',
    responseLabel: 'What needs to change',
    linkLabel: 'Tell us one business problem',
    items: [
      {
        index: '01',
        signal: 'Customers struggle to understand the offer or contact the business.',
        response: 'Clarify positioning, customer journey, and inquiry paths.',
      },
      {
        index: '02',
        signal: 'The team depends on chat, spreadsheets, and manual checks.',
        response: 'Unify workflow, status, data, and responsibility.',
      },
      {
        index: '03',
        signal: 'Data is scattered and decisions still wait.',
        response: 'Connect tools, data, automation, and monitoring.',
      },
    ],
    note: 'The result may be a website, internal system, automation, dashboard, AI/CV, IoT, or a combination.',
  },
  solutions: {
    eyebrow: 'What we can build with you',
    title: 'From the customer-facing experience to the operations behind it.',
    intro:
      'From customer experience to back-office work. We build the digital part the business actually needs.',
    signals: [
      'Less repeated entry',
      'More visible status',
      'Connected processes',
      'Faster decisions',
    ],
    items: [
      {
        index: '01',
        title: 'Customer & Digital Experience',
        body: 'Clarify value, build confidence, and open inquiry paths.',
        outputs: ['Website', 'Portal', 'Customer Journey', 'Mobile Experience'],
      },
      {
        index: '02',
        title: 'Internal Systems & Operations',
        body: 'Organize work scattered across chat, spreadsheets, and documents.',
        outputs: ['Internal System', 'Backoffice', 'Workflow', 'Dashboard'],
      },
      {
        index: '03',
        title: 'Automation & Integration',
        body: 'Reduce repeated entry and connect separate systems.',
        outputs: ['Automation', 'API', 'Integration', 'Notification'],
      },
      {
        index: '04',
        title: 'Data, AI & Connected Operations',
        body: 'Turn data, cameras, and sensors into monitoring and decisions.',
        outputs: ['Analytics', 'AI / CV', 'IoT', 'Monitoring'],
      },
    ],
  },
  process: {
    eyebrow: 'One partner, from problem to real use',
    title: 'You own the business. We own digital delivery.',
    body: 'From discovery, design, and development to testing and launch—one partner, one flow.',
    note: 'You do not need to become the project manager for our technical team.',
    items: [
      {
        title: 'Understand',
        owner: 'Together',
        body: 'Understand the process, people, data, and core problem.',
      },
      { title: 'Prioritize', owner: 'Together', body: 'Choose what matters most to solve first.' },
      {
        title: 'Design',
        owner: 'Digvation',
        body: 'Turn the need into flow, scope, and experience.',
      },
      { title: 'Build & Launch', owner: 'Digvation', body: 'Build, integrate, test, and launch.' },
      {
        title: 'Operate & Improve',
        owner: 'Together',
        body: 'Learn from real use and improve when needed.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Have a business goal you want to digitalize?',
    title: 'Let’s decide what should be built—and what should not.',
    body: 'Tell us the goal or problem. We will define the next move and carry it through to real use.',
    button: 'Start a Conversation',
    note: 'The first conversation does not commit you to starting a project.',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { id, en };
