import type { Locale } from '@/config/site';

export type HomeCopy = {
  hero: {
    eyebrow: string;
    titleLead: string;
    titleRest: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    ctaNote: string;
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
    fromLabel: string;
    toLabel: string;
    note: string;
    items: Array<{ title: string; body: string }>;
  };
  finalCta: { eyebrow: string; title: string; body: string; button: string; note: string };
};

const id: HomeCopy = {
  hero: {
    eyebrow: 'Your Digitalization Partner',
    titleLead: 'Partner digital',
    titleRest: 'untuk solusi bisnis yang benar-benar bekerja.',
    body: 'Ketika proses lambat, pekerjaan manual menumpuk, data sulit dipantau, atau pengalaman pelanggan belum bekerja, Digvation membantu menemukan akar masalah, menentukan prioritas, lalu membangun solusinya sampai benar-benar digunakan.',
    primaryCta: 'Petakan masalah bisnis',
    secondaryCta: 'Lihat bukti kerja',
    ctaNote: 'Tidak perlu brief teknis. Mulai dari yang sedang terjadi.',
    commitmentsLabel: 'Cara Digvation mendampingi bisnis Anda',
    commitments: [
      'Masalah bisnis sebelum teknologi',
      'Batas, prioritas, dan risiko dibuat jelas',
      'Dampingan sampai solusi digunakan',
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
    body: 'Anda tetap melihat alasan di balik keputusan, progres yang berjalan, dan apa yang perlu divalidasi berikutnya.',
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
    eyebrow: 'Cara paling aman untuk mulai',
    title: 'Pastikan langkah digitalnya jelas sebelum budget pembangunan dipakai.',
    body: 'Digital Discovery memetakan akar masalah, proses, pihak, sistem, data, dan prioritas—lalu menyusun arah solusi, tahapan, serta kisaran biaya yang masuk akal.',
    linkLabel: 'Lihat Digital Discovery',
    fromLabel: 'Yang Anda bawa · masalah nyata',
    toLabel: 'Yang kita putuskan · langkah digital',
    note: 'Jika kebutuhannya sudah jelas, kita bisa langsung membahas delivery. Jika belum, kami tidak akan mendorong Anda membangun terlalu cepat.',
    items: [
      {
        title: 'Akar masalah, bukan gejalanya',
        body: 'Proses, pihak, sistem, data, dan ketergantungan dipetakan dalam konteks yang sama.',
      },
      {
        title: 'Prioritas yang layak dikerjakan',
        body: 'Peluang perbaikan dipilah berdasarkan kegunaan, risiko, dan kondisi bisnis saat ini.',
      },
      {
        title: 'Arah solusi dan tahapannya',
        body: 'Bentuk solusi serta urutan implementasi dibuat jelas sebelum delivery dimulai.',
      },
      {
        title: 'Batas kebutuhan dan kisaran biaya',
        body: 'Keputusan awal memiliki ruang kerja dan gambaran investasi yang dapat dibahas.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Mulai tanpa brief teknis',
    title: 'Bawa masalahnya. Kami bantu menentukan apa yang layak dibangun.',
    body: 'Ceritakan proses yang lambat, manual, sulit dipantau, atau belum memberi pengalaman yang bisnis Anda butuhkan.',
    button: 'Petakan masalah bisnis',
    note: 'Jika kebutuhannya cocok, langkah, batas kerja, dan kisaran biayanya dibuat jelas bersama.',
  },
};

const en: HomeCopy = {
  hero: {
    eyebrow: 'Your Digitalization Partner',
    titleLead: 'A digital partner',
    titleRest: 'for business solutions that work in real use.',
    body: 'When processes are slow, manual work piles up, data is hard to monitor, or the customer experience falls short, Digvation finds the root problem, sets the priority, and builds the solution through real use.',
    primaryCta: 'Map the business problem',
    secondaryCta: 'See the proof',
    ctaNote: 'No technical brief needed. Start with what is happening today.',
    commitmentsLabel: 'How Digvation supports your business',
    commitments: [
      'Business problem before technology',
      'Clear boundaries, priorities, and risks',
      'Support through real use',
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
    body: 'You keep visibility into the reasoning, the progress, and what needs to be validated next.',
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
    eyebrow: 'The safest way to begin',
    title: 'Make the digital direction clear before committing the build budget.',
    body: 'Digital Discovery maps the root problem, process, stakeholders, systems, data, and priorities—then shapes a sensible solution direction, roadmap, and budget range.',
    linkLabel: 'Explore Digital Discovery',
    fromLabel: 'What you bring · a real problem',
    toLabel: 'What we decide · a digital next step',
    note: 'If the need is already clear, we can discuss delivery directly. If it is not, we will not push you to build too early.',
    items: [
      {
        title: 'Root cause, not just symptoms',
        body: 'Process, stakeholders, systems, data, and dependencies are mapped in one context.',
      },
      {
        title: 'A priority worth pursuing',
        body: 'Improvement opportunities are weighed against usefulness, risk, and current business conditions.',
      },
      {
        title: 'Solution direction and roadmap',
        body: 'The shape of the solution and implementation sequence are clear before delivery starts.',
      },
      {
        title: 'Need boundaries and budget range',
        body: 'The initial decision has a working boundary and investment range to discuss.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Start without a technical brief',
    title: 'Bring the problem. We will help decide what is worth building.',
    body: 'Tell us about a process that is slow, manual, hard to monitor, or not delivering the experience your business needs.',
    button: 'Map the business problem',
    note: 'If the need fits, we make the next step, working boundaries, and budget range clear together.',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { id, en };
