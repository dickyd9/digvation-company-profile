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
    currentLabel: string;
    changeLabel: string;
    targetLabel: string;
    visualNote: string;
    linkLabel: string;
    items: Array<{
      index: string;
      signal: string;
      response: string;
      before: string[];
      shift: string;
      after: string[];
    }>;
    note: string;
  };
  solutions: {
    eyebrow: string;
    title: string;
    intro: string;
    contextLabel: string;
    flowLabel: string;
    outputLabel: string;
    visualNote: string;
    items: Array<{
      index: string;
      title: string;
      body: string;
      path: string[];
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
    title: 'Yang terasa sepele, sering jadi beban setiap hari.',
    intro:
      'Tunjukkan bagian yang membuang waktu, membuat customer ragu, atau menahan keputusan. Dari sana kami cari perubahan pertama yang paling masuk akal.',
    signalLabel: 'Masalah yang terasa',
    responseLabel: 'Yang perlu berubah',
    currentLabel: 'Kondisi sekarang',
    changeLabel: 'Yang dibenahi',
    targetLabel: 'Arah yang dituju',
    visualNote: 'Cari yang paling mirip dengan kondisi bisnis Anda.',
    linkLabel: 'Ceritakan satu hambatan',
    items: [
      {
        index: '01',
        signal:
          'Orang datang, melihat-lihat, lalu pergi tanpa benar-benar paham nilai bisnis Anda.',
        response:
          'Susun informasi dan jalur kontak agar calon customer tahu kenapa harus memilih dan apa yang perlu dilakukan berikutnya.',
        before: ['Datang', 'Masih ragu', 'Pergi'],
        shift: 'Pesan dan jalur inquiry diperjelas',
        after: ['Paham nilainya', 'Lihat buktinya', 'Mulai bicara'],
      },
      {
        index: '02',
        signal: 'Order masuk dari mana-mana. Status ditanya ulang. Approval tenggelam di chat.',
        response:
          'Satukan permintaan, PIC, approval, dan status supaya tim bekerja dari alur yang sama.',
        before: ['Chat', 'Spreadsheet', 'Dokumen'],
        shift: 'Satu alur kerja',
        after: ['PIC jelas', 'Status terlihat', 'Riwayat tersimpan'],
      },
      {
        index: '03',
        signal: 'Data penjualan, stok, dan operasional ada, tetapi keputusan tetap menunggu rekap.',
        response:
          'Hubungkan sumber data dan tampilkan hal yang memang perlu dipantau atau ditindaklanjuti.',
        before: ['Penjualan', 'Stok', 'Operasional'],
        shift: 'Data disatukan',
        after: ['Ringkasan siap', 'Masalah terlihat', 'Langkah lebih jelas'],
      },
    ],
    note: 'Website, sistem internal, automation, dashboard, AI, atau IoT hanyalah bentuknya. Yang dibenahi tetap alur bisnisnya.',
  },
  solutions: {
    eyebrow: 'Bentuk solusi',
    title: 'Yang dibangun harus mengubah sesuatu.',
    intro:
      'Kami tentukan bentuknya dari alur kerja, orang yang memakai, dan perubahan yang ingin dicapai.',
    contextLabel: 'Saat bisnis membutuhkan',
    flowLabel: 'Perubahan yang dituju',
    outputLabel: 'Bentuk yang mungkin',
    visualNote: 'Mulai dari dampaknya. Teknologinya menyusul.',
    items: [
      {
        index: '01',
        title: 'Customer tahu kenapa harus memilih Anda.',
        body: 'Bisnis perlu lebih mudah ditemukan, dipercaya, dan dihubungi.',
        path: ['Ditemukan', 'Dipahami', 'Dihubungi'],
        outputs: ['Website', 'Portal', 'Inquiry Flow', 'Mobile'],
      },
      {
        index: '02',
        title: 'Tim bekerja dari alur yang sama.',
        body: 'Pekerjaan tersebar di chat, spreadsheet, dan terlalu banyak dokumen.',
        path: ['Permintaan masuk', 'Diproses', 'Status terlihat'],
        outputs: ['Internal System', 'Backoffice', 'Workflow', 'Dashboard'],
      },
      {
        index: '03',
        title: 'Pekerjaan berulang tidak lagi dikerjakan dua kali.',
        body: 'Data dan tugas terus dipindahkan dari satu sistem ke sistem lain.',
        path: ['Pemicu muncul', 'Proses berjalan', 'Tim mendapat update'],
        outputs: ['Automation', 'API', 'Integration', 'Notification'],
      },
      {
        index: '04',
        title: 'Data menunjukkan apa yang perlu dilakukan.',
        body: 'Laporan, kamera, atau sensor perlu membantu monitoring dan keputusan.',
        path: ['Data masuk', 'Sinyal terbaca', 'Tindakan dibuat'],
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
    title: 'Small frustrations often become a daily burden.',
    intro:
      'Show us what wastes time, makes customers hesitate, or delays a decision. We will find the first change that makes practical sense.',
    signalLabel: 'The problem you feel',
    responseLabel: 'What needs to change',
    currentLabel: 'Current state',
    changeLabel: 'What changes',
    targetLabel: 'Where it should lead',
    visualNote: 'Find the story that feels closest to your business.',
    linkLabel: 'Share one bottleneck',
    items: [
      {
        index: '01',
        signal:
          'People visit, look around, and leave without really seeing why the business matters.',
        response:
          'Shape the information and contact path so potential customers know why to choose you and what to do next.',
        before: ['Arrive', 'Still unsure', 'Leave'],
        shift: 'Clarify the message and inquiry path',
        after: ['See the value', 'Find the proof', 'Start a conversation'],
      },
      {
        index: '02',
        signal: 'Orders arrive everywhere. Status gets asked twice. Approvals disappear in chat.',
        response:
          'Bring requests, ownership, approvals, and status into one flow the whole team can follow.',
        before: ['Chat', 'Spreadsheet', 'Documents'],
        shift: 'One working flow',
        after: ['Clear owner', 'Visible status', 'Saved history'],
      },
      {
        index: '03',
        signal: 'Sales, stock, and operations data exist, but decisions still wait for a recap.',
        response: 'Connect the sources and show what actually needs to be monitored or acted on.',
        before: ['Sales', 'Stock', 'Operations'],
        shift: 'Bring the data together',
        after: ['Recap ready', 'Issues visible', 'Next step clearer'],
      },
    ],
    note: 'A website, internal system, automation, dashboard, AI, or IoT is only the form. The real work is improving the business flow.',
  },
  solutions: {
    eyebrow: 'Forms of solution',
    title: 'What we build must change something.',
    intro:
      'We choose the form based on the workflow, the people using it, and the change the business needs.',
    contextLabel: 'When the business needs',
    flowLabel: 'The intended change',
    outputLabel: 'Possible forms',
    visualNote: 'Start with the impact. Choose the technology after.',
    items: [
      {
        index: '01',
        title: 'Customers know why they should choose you.',
        body: 'The business needs to be easier to find, trust, and contact.',
        path: ['Found', 'Understood', 'Contacted'],
        outputs: ['Website', 'Portal', 'Inquiry Flow', 'Mobile'],
      },
      {
        index: '02',
        title: 'The team works from the same flow.',
        body: 'Work is scattered across chat, spreadsheets, and too many documents.',
        path: ['Request arrives', 'Work moves', 'Status is visible'],
        outputs: ['Internal System', 'Backoffice', 'Workflow', 'Dashboard'],
      },
      {
        index: '03',
        title: 'Repeated work is not done twice.',
        body: 'Data and tasks keep moving manually between separate systems.',
        path: ['Trigger appears', 'Process runs', 'Team gets an update'],
        outputs: ['Automation', 'API', 'Integration', 'Notification'],
      },
      {
        index: '04',
        title: 'Data shows what needs to happen next.',
        body: 'Reports, cameras, or sensors need to support monitoring and decisions.',
        path: ['Data arrives', 'Signal is clear', 'Action is taken'],
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
