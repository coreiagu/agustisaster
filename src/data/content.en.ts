// Editorial content for the portfolio. Edit text here, not in the components.

export const cover = {
  nav: {
    left: 'Project Manager',
    center: 'Computer Science Technician',
    right: 'Fullstack Developer',
  },
  edition: 'Vol. 01 · 2026 Edition',
  location: 'Bahía Blanca, Arg.',
  kicker: 'The question that opens this issue',
  titleBefore: 'Who the',
  titleHighlight: 'f*ck',
  titleAfter: 'is',
  titleName: 'Agustisaster?',
  bioLines: [
    'Agustina Corei.',
    'Project Manager & Full-Stack Developer.',
    'Bahía Blanca, Arg.',
  ],
  tickerItems: ['Fullstack Developer', 'Project Manager', 'Computer Science Technician'],
}

export const indice = {
  pageLabel: 'Pg. 02 — Table of Contents',
  volLabel: 'Agustisaster / Vol. 01',
  heading: 'In this issue',
  highlights: [
    { page: 'PG.08', text: 'The nepo-baby map of Argentine showbiz.' },
    {
      page: 'PG.12',
      text: 'The internal tool that replaced scattered spreadsheets and became part of daily operations.',
    },
    { page: 'PG.20', text: 'Full technical profile: tools, experience, and training.' },
  ],
  tocItems: [
    { num: '01', href: '#retrato', label: 'The Portrait', page: '04' },
    { num: '02', href: '#nepoverse', label: 'Cover Story: Nepoverse', page: '08' },
    { num: '03', href: '#parte-diario', label: 'In Production: Driver Daily Log', page: '12' },
    { num: '04', href: '#breves', label: 'Briefs: Client Projects', page: '16' },
    { num: '05', href: '#ficha', label: 'Technical Profile', page: '18' },
    { num: '06', href: '#entrevista', label: 'The Interrogation', page: '20' },
    { num: '07', href: '#cartas', label: 'Letters to the Editor', page: '22' },
  ],
}

export const portrait = {
  pageLabel: 'Pg. 04 — The Portrait',
  sectionLabel: 'Profile',
  imageAlt: 'Agustina Corei at work',
  figcaption: 'Agustina Corei, at her desk. Bahía Blanca.',
  eyebrow: 'Profile',
  heading: 'FROM SPREADSHEET TO CODE',
  subheading: 'From Excel fundamentalist to code heretic.',
  byline: 'By Agustina Corei · Bahía Blanca',
  dropCap: 'S',
  firstParagraphRest:
    'ix years connecting management, operations, and company leadership in industrial businesses. That\u2019s what sets her apart from other developers: she doesn\u2019t code problems someone described in a meeting — she codes problems she has faced firsthand.',
  secondParagraph: {
    before:
      'A Computer Science Technician degree, a Google PM Certificate, Scrum Fundamentals Certified, and years leading real-world projects, not textbook ones. That combination —Project Manager and developer in the same person— isn\u2019t just another line on her profile: ',
    bold: 'it is',
    after: ' the profile.',
  },
  quote: '"By day she worked an office job. By night she studied programming. Clark Kent had better hours."',
}

export const nepoverseFeature = {
  pageLabel: 'Pg. 08 — Cover Story',
  liveLabel: 'Live',
  eyebrow: 'Cover Story',
  heading: 'JUST ENVY. WELL MANAGED.',
  subheading: 'Nepoverse: the map of who\u2019s whose child, grandchild, or nephew in Argentine showbiz.',
  urlLabel: 'nepoverse-argentino.vercel.app',
  paragraphs: [
    'It all started with a tweet calling a celebrity a "nepo baby." The response was a block. Then a YouTuber\u2019s video helped shape the idea: the full map of family connections in Argentine showbiz was enormous, and nobody had ever visualized it.',
    { bold: 'The problem:', text: 'Nobody had visually mapped the network of family ties in Argentine showbiz.' },
    {
      bold: 'The solution:',
      text: 'An interactive, navigable graph with hundreds of nodes — with one non-negotiable rule from day one: zero minors.',
    },
  ],
  quote: '"This isn\u2019t an attack on anyone. If your last name opened doors for you, enjoy it — I\u2019d do the same."',
  image: {
    src: '/assets/nepoverse.png',
    alt: 'Screenshot of the Nepoverse interactive map',
  },
  figcaption: 'Map excerpt: the Spinetta, Tinelli, Darín, and Pauls families, connected by kinship. Screenshot from the live site.',
  ficha: {
    stack: 'React · relational data modeling · graph visualization · Vercel',
    rol: 'Concept, data architecture, development, and interaction design — solo project.',
    estado: 'Live, public, and growing.',
  },
  ctaHref: 'https://nepoverse-argentino.vercel.app',
  ctaLabel: 'ENTER THE NEPOVERSE →',
}

export const parteDiario = {
  pageLabel: 'Pg. 12 — In Production',
  badge: 'In active use',
  eyebrow: 'Feature',
  heading: 'Driver Daily Log: the tool that replaced scattered spreadsheets',
  subheading: 'Identified, defined, and built end to end. The operations team uses it every day.',
  byline: 'DM Intermediación y Logística S.A. · Feb 2025 — Present',
  paragraphs: [
    {
      bold: 'The problem:',
      text: 'Driver tracking was scattered across different channels, with no continuity if the person in charge was out.',
    },
    {
      bold: 'The solution:',
      text: 'Requirements gathering with the team itself, functional definition, and end-to-end full-stack development — without handoffs.',
    },
  ],
  quote:
    '"At the same time, I also bridged management and an external developer on a separate system — validating and testing with real users."',
  images: [
    { src: '/assets/parte-carga.png', alt: 'Driver Daily Log — entry screen' },
    { src: '/assets/parte-partes.png', alt: 'Driver Daily Log — log list' },
  ],
  figcaption: 'Logging updates and viewing driver logs. Screenshots of the tool in use.',
  ficha: {
    stack: 'React · Node.js · MySQL',
    rol: 'Requirements gathering, functional spec, full-stack development, and deployment.',
    estado: 'In active use by the operations team.',
  },
}

export const breves = {
  pageLabel: 'Pg. 16 — Briefs',
  label: 'Clients',
  heading: 'Projects for real clients. Actual humans.',
  projects: [
    {
      title: 'Rocío Romero — Hairstylist',
      image: '/assets/rocio-hero.png',
      alt: 'Rocío Romero — hairstylist website',
      description: 'An online presence built to reflect Rocío\u2019s style and make it easy for new clients to reach her.',
      cta: { label: 'View site →', href: 'https://rocio-romero-estilista.vercel.app/' },
    },
    {
      title: 'Dental Practice',
      image: '/assets/lucianacorei.png',
      alt: 'Dental practice website',
      description:
        'A landing page for a dental practice with an appointment system + automatic confirmation emails. Built to convey trust to new patients from the first scroll.',
      cta: { label: 'View site →', href: 'https://lucianacorei.com.ar' },
    },
  ],
}

export const fichaTecnica = {
  pageLabel: 'Pg. 18 — Technical Profile',
  label: 'This issue\u2019s staff',
  heading: 'Technical Profile',
  columns: [
    { title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML5 / CSS3'] },
    { title: 'Backend & Data', items: ['Node.js', 'REST APIs', 'SQL / SQL Server / MySQL', 'C#', 'Data modeling'] },
    { title: 'Management', items: ['Requirements gathering', 'Stakeholder management', 'Agile / Scrum (SFC™)', 'Google PM Certificate'] },
    { title: 'Languages', items: ['Spanish (native)', 'English (C1)', 'Portuguese (advanced)'] },
  ],
}

export const interrogatorio = {
  pageLabel: 'Pg. 20 — The Interrogation',
  label: 'Interview',
  heading: 'THE INTERROGATION',
  subheading: 'Questions nobody asks in a job interview (but should)',
  byline: 'Exclusive interview · unedited (almost)',
  questions: [
    {
      q: 'Which developer do you admire?',
      a: 'nulo.lol: "The leading company in high-quality political shitposting." I found him on Twitter and I\u2019m a fan — Wanda-level fan.',
      link: { label: 'nulo.lol', url: 'https://nulo.lol/' },
    },
    {
      q: 'What\u2019s your strong point at work?',
      a: 'I have ideas constantly and I multitask without falling apart. (Outside of work: I make a killer lasagna, but that doesn\u2019t go on the resume.)',
    },
    {
      q: 'Your ritual when something won\u2019t compile and you don\u2019t know why?',
      a: 'I ask my boyfriend, who\u2019s also a dev.',
      note: '\u2014 Source for this answer: my boyfriend, also a dev.',
    },
    {
      q: 'What\u2019s your weak point?',
      a: 'Don\u2019t have one.',
      note: '\u2014 Editor\u2019s note: we pushed back. She didn\u2019t budge.',
      highlighted: true,
    },
  ],
}

export const cartasDirector = {
  pageLabel: 'Pg. 22 — Letters to the Editor',
  heading: 'Got a project for Agustisaster?',
  email: 'coreiagu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/agustinacorei/',
  github: 'https://github.com/coreiagu',
  footerIssn: 'Agustisaster',
  footerLocation: 'Bahía Blanca, Argentina',
}