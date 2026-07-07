// Contenido editorial del portfolio. Editar textos acá, no en los componentes.

export const cover = {
  nav: {
    left: 'Project Manager',
    center: 'Técnica en Computación',
    right: 'React Developer',
  },
  edition: 'Vol. 01 · Edición 2026',
  location: 'Bahía Blanca, Arg.',
  kicker: 'La pregunta que abre la edición',
  titleBefore: 'Who the',
  titleHighlight: 'f*ck',
  titleAfter: 'is',
  titleName: 'Agustisaster?',
  bioLines: [
    'Agustina Corei.',
    'Project Manager & Full-Stack Developer.',
    'Bahía Blanca, Arg.',
  ],
  tickerItems: ['Fullstack Developer', 'Project Manager', 'Técnica en Computación'],
}

export const indice = {
  pageLabel: 'Pág. 02 — Índice',
  volLabel: 'Agustisaster / Vol. 01',
  heading: 'En esta edición',
  highlights: [
    { page: 'PÁG.08', text: 'El mapa de nepobabies del espectáculo argentino.' },
    { page: 'PÁG.12', text: 'De administrativa a full-stack: cómo pasó, en sus palabras.' },
    { page: 'PÁG.20', text: 'Ficha técnica completa: herramientas, experiencia y formación.' },
  ],
  tocItems: [
    { num: '01', href: '#retrato', label: 'El retrato', page: '04' },
    { num: '02', href: '#nepoverse', label: 'Nota de tapa: Nepoverse', page: '08' },
    { num: '03', href: '#parte-diario', label: 'En producción: Parte Diario de Choferes', page: '12' },
    { num: '04', href: '#breves', label: 'Breves: proyectos para clientes', page: '16' },
    { num: '05', href: '#ficha', label: 'Ficha técnica', page: '18' },
    { num: '06', href: '#entrevista', label: 'El interrogatorio', page: '20' },
    { num: '07', href: '#cartas', label: 'Cartas al director', page: '22' },
  ],
}

export const portrait = {
  pageLabel: 'Pág. 04 — El retrato',
  sectionLabel: 'Perfil',
  imageAlt: 'Agustina Corei trabajando',
  figcaption: 'Agustina Corei, en su escritorio. Bahía Blanca.',
  eyebrow: 'Perfil',
  heading: 'DE LA PLANILLA AL CÓDIGO',
  subheading: 'Seis años gestionando operaciones. Un día decidió programar la solución ella misma.',
  byline: 'Por Agustina Corei · Bahía Blanca',
  dropCap: 'S',
  firstParagraphRest: 'eis años como nexo entre gerencia, operaciones y dirección en empresas de logística e industria metalúrgica. Procesos que se caían si una sola persona faltaba, hasta que se cansó de señalarlo y empezó a resolverlo ella misma, en código.',
  secondParagraph: {
    before: 'Con una Tecnicatura en Computación, Google PM Certificate, Scrum, y años de experiencia real en entornos empresariales. Esa confluencia no es una característica más de su perfil: ',
    bold: 'es',
    after: ' su perfil.',
  },
  quote: '"De día era administrativa. De noche estudiaba programación. Clark Kent tenía mejores horarios."',
}

export const nepoverseFeature = {
  pageLabel: 'Pág. 08 — Nota de tapa',
  liveLabel: 'En vivo',
  eyebrow: 'Nota de tapa',
  heading: 'ESTO ES PURA ENVIDIA BIEN ADMINISTRADA.',
  subheading: 'Nepoverse: el mapa de quién es hijo, nieto o sobrino de quién en el espectáculo argentino.',
  urlLabel: 'nepoverse-argentino.vercel.app',
  paragraphs: [
    'Todo arrancó con un tuit llamando "nepo baby" a un famoso, que respondió bloqueándome. Un video de una youtuber terminó de darle forma a la idea: el mapa completo de conexiones familiares del espectáculo argentino era enorme, y nadie lo había armado visualmente.',
    { bold: 'El problema:', text: 'Nadie había mapeado visualmente la red de parentescos del espectáculo argentino.' },
    { bold: 'La solución:', text: 'Un grafo interactivo con cientos de nodos, navegable — con una regla no negociable desde el día uno: cero menores de edad.' },
  ],
  quote: '"Esto no es un ataque a nadie. Si tu apellido te abrió puertas, buen provecho — yo también lo haría."',
  image: {
    src: '/assets/nepoverse.png',
    alt: 'Captura del mapa interactivo de Nepoverse',
  },
  figcaption: 'Fragmento del mapa: familias Spinetta, Tinelli, Darín y Pauls, conectadas por parentesco. Captura del sitio en producción.',
  ficha: {
    stack: 'React · modelado de datos relacional · visualización de grafos · Vercel',
    rol: 'Concepto, arquitectura de datos, desarrollo y diseño de la interacción, en solitario.',
    estado: 'En producción, público, en crecimiento.',
  },
  ctaHref: 'https://nepoverse-argentino.vercel.app',
  ctaLabel: 'ENTRAR AL NEPOVERSE →',
}

export const parteDiario = {
  pageLabel: 'Pág. 12 — En producción',
  badge: 'En uso activo',
  eyebrow: 'Reportaje',
  heading: 'Parte Diario de Choferes: la herramienta que reemplazó las planillas dispersas',
  subheading: 'Identificada, definida y construida de punta a punta. Hoy la usa el equipo operativo todos los días.',
  byline: 'DM Intermediación y Logística S.A. · Feb 2025 — Actualidad',
  paragraphs: [
    { bold: 'El problema:', text: 'El seguimiento de choferes vivía repartido en canales distintos, sin continuidad si la persona a cargo faltaba.' },
    { bold: 'La solución:', text: 'Relevamiento con el propio equipo, definición funcional, y desarrollo full-stack de punta a punta — sin intermediarios.' },
  ],
  quote: '"En paralelo, también hice de puente entre gerencia y un desarrollador externo en otro sistema — validando y testeando con usuarios reales."',
  images: [
    { src: '/assets/parte-carga.png', alt: 'Parte Diario — pantalla de carga' },
    { src: '/assets/parte-partes.png', alt: 'Parte Diario — listado de partes' },
  ],
  figcaption: 'Carga de novedades y listado de partes por chofer. Capturas de la herramienta en uso.',
  ficha: {
    stack: 'React · Node.js · MySQL',
    rol: 'Relevamiento, definición funcional, desarrollo full-stack y deploy.',
    estado: 'En uso activo por el equipo operativo.',
  },
}

export const breves = {
  pageLabel: 'Pág. 16 — Breves',
  label: 'Clientes',
  heading: 'Proyectos para clientes de carne y hueso',
  projects: [
    {
      title: 'Rocío Romero — Estilista',
      image: '/assets/rocio-hero.png',
      alt: 'Sitio de Rocío Romero — estilista',
      description: 'Presencia online pensada para reflejar el estilo del trabajo de Rocío y facilitar que clientas nuevas la contacten.',
      cta: { label: 'Ver el sitio →', href: 'https://rocio-romero-estilista.vercel.app/' },
    },
    {
      title: 'Consultorio odontológico',
      image: '/assets/lucianacorei.png',
      alt: 'Sitio del consultorio odontológico',
      description: 'Landing page para un consultorio con sistema de turnos + emails de confirmación automáticos. Pensada para transmitir confianza a pacientes nuevos desde el primer scroll.',
            cta: { label: 'Ver el sitio →', href: 'https://lucianacorei.com.ar' },
    },
  ],
}

export const fichaTecnica = {
  pageLabel: 'Pág. 18 — Ficha técnica',
  label: 'Staff de esta edición',
  heading: 'Ficha técnica',
  columns: [
    { title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML5 / CSS3'] },
    { title: 'Backend & datos', items: ['Node.js', 'APIs REST', 'SQL / SQL Server / MySQL', 'C#', 'Modelado de datos'] },
    { title: 'Gestión', items: ['Relevamiento de requerimientos', 'Stakeholders', 'Agile / Scrum (SFC™)', 'Google PM Certificate'] },
    { title: 'Idiomas', items: ['Español (nativo)', 'Inglés (C1)', 'Portugués (avanzado)'] },
  ],
}

export const interrogatorio = {
  pageLabel: 'Pág. 20 — El interrogatorio',
  label: 'Entrevista',
  heading: 'INTERROGATORIO',
  subheading: 'Preguntas que nadie hace en una entrevista laboral (pero deberían)',
  byline: 'Entrevista exclusiva · sin editar (casi)',
  questions: [
    {
      q: '¿A qué developer admirás?',
      a: 'A nulo.lol. "La empresa líder en shitposts políticos de alta calidad." Lo conocí en Twitter y soy su fan, nivel el fan de Wanda.',
    },
    {
      q: '¿Tu punto fuerte en lo laboral?',
      a: 'Tengo ideas todo el tiempo y resuelvo multitasking sin colapsar. (Fuera de lo laboral: hago una lasaña buenísima, pero eso no entra en el CV.)',
    },
    {
      q: '¿Tu ritual cuando algo no compila y no sabés por qué?',
      a: 'Le pregunto a mi novio, que también es dev.',
      note: '— Fuente de esta respuesta: mi novio, también dev.',
    },
    {
      q: '¿Tu punto débil?',
      a: 'No tengo.',
      note: '— Nota del editor: insistimos. No hubo caso.',
      highlighted: true,
    },
  ],
}

export const cartasDirector = {
  pageLabel: 'Pág. 22 — Cartas al director',
  heading: '¿Tenés un proyecto para Agustisaster?',
  email: 'coreiagu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/agustinacorei/',
  github: 'https://github.com/coreiagu',
  footerIssn: 'Agustisaster — ISSN pendiente de invento',
  footerLocation: 'Bahía Blanca, Argentina',
}
