export interface NavLink {
  label: string;
  href: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  icon: string;
  href: string;
  handle: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  description: string;
  items: string[];
}

export interface Experience {
  role: string;
  org: string;
  location: string;
  period: string;
  current: boolean;
  points: string[];
}

export interface EducationItem {
  title: string;
  school: string;
  period: string;
  current: boolean;
}

export type ProjectStatus = 'live' | 'in-progress' | 'mvp' | 'concept';

export interface Project {
  name: string;
  tagline: string;
  description: string;
  image?: string;
  status: ProjectStatus;
  progress: number; // 0-100, drives the signature rotating arc
  stack: string[];
  category: 'site-web' | 'ecommerce' | 'application-frontend' | 'application-backend';
  links?: { label: string; href: string }[];
  github?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    icon: 'github',
    href: 'https://github.com/Pakistant',
    handle: 'github.com/Pakistant',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/steve-tikemene-douanla-014880211/',
    handle: 'in/steve-tikemene-douanla',
  },
  {
    label: 'WhatsApp',
    icon: 'whatsapp',
    href: 'https://wa.me/237658779832',
    handle: '+237 6 58 77 98 32',
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Profil', href: 'about', icon: 'user' },
  { label: 'Competences', href: 'skills', icon: 'code' },
  { label: 'Parcours', href: 'experience', icon: 'briefcase' },
  { label: 'Projets', href: 'projects', icon: 'layers' },
  { label: 'Formation', href: 'education', icon: 'cap' },
  { label: 'Contact', href: 'contact', icon: 'mail' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    description: 'Conception d interfaces modernes, accessibles et responsives pour offrir une experience fluide sur chaque ecran.',
    items: ['Angular', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Backend & API',
    icon: 'server',
    description: 'Developpement de services fiables, d APIs securisees et de logiques metier capables de soutenir vos applications.',
    items: ['Laravel', 'Express.js', 'PHP', 'C#', 'Python', 'Java'],
  },
  {
    title: 'CMS & e-commerce',
    icon: 'shopping-bag',
    description: 'Creation de sites administrables et de boutiques performantes, adaptes a vos objectifs et a votre activite.',
    items: ['WordPress', 'Shopify', 'Elementor', 'Divi', 'WooCommerce', 'Odoo'],
  },
  {
    title: 'Outils & no-code',
    icon: 'tool',
    description: 'Mise en place de workflows efficaces pour concevoir, collaborer, prototyper et livrer plus rapidement.',
    items: ['Git', 'cPanel', 'Flutterflow', 'Figma', 'Photoshop', 'Trello'],
  },
  {
    title: 'Methodes & modelisation',
    icon: 'layers',
    description: 'Organisation claire des projets, analyse des besoins et modelisation des solutions avant chaque implementation.',
    items: ['Scrum', 'UML', 'Merise', 'Responsive Design', 'SEO'],
  },
  {
    title: 'Reseaux & systeme',
    icon: 'globe',
    description: 'Bases solides en infrastructure, administration serveur et securite pour des solutions stables et maintenables.',
    items: ['LAN / TCP-IP', 'Administration serveur', 'Securite web', 'WinDev'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Developpeur web / webmaster (a distance)',
    org: 'Paname Sarl',
    location: 'Yaounde',
    period: 'Depuis nov. 2024',
    current: true,
    points: [
      'Conception et developpement sur mesure de sites e-commerce WordPress pour une clientele diversifiee.',
      'Creation et integration de plugins pour etendre les fonctionnalites des sites.',
      'Maintenance proactive et referencement SEO pour ameliorer la visibilite des clients.',
      'Administration cPanel : gestion et optimisation des performances serveur.',
    ],
  },
  {
    role: 'Developpeur web',
    org: 'Marvelous',
    location: 'Douala',
    period: 'Juin 2023 — Jan. 2025',
    current: false,
    points: [
      'Conception de sites web et applications e-commerce sur WordPress et Shopify (bonabery.com, lesmarvelouswedding.com, maisonmarvelous.com, viedartist.com).',
      'Mise en place de protocoles de securite pour les applications livrees.',
      'Developpement de CRM avec React / Vue en frontend et Express / Laravel en backend.',
      'Applications mobiles no-code avec Flutterflow et administration des hebergements via cPanel.',
    ],
  },
  {
    role: 'Stagiaire — integrateur Odoo',
    org: 'YBOservice',
    location: 'Douala',
    period: 'Juin 2023 — Oct. 2023',
    current: false,
    points: [
      'Installation, configuration et integration de modules Odoo.',
      'Developpement personnalise et formation des utilisateurs finaux.',
    ],
  },
  {
    role: 'Stagiaire — developpeur web',
    org: 'GETEL Sarl',
    location: 'Douala',
    period: 'Juin 2022 — Sept. 2022',
    current: false,
    points: [
      'Redaction du cahier des charges et conception d\'une application tontine.',
      'Creation de sites avec le CMS interne Getel.cm et d\'applications avec WinDev.',
      'Conception d\'une application web de gestion de demandes d\'emploi.',
    ],
  },
  {
    role: 'Stagiaire informatique / reseaux',
    org: 'Cyberechos',
    location: 'Bafang',
    period: 'Juin 2021 — Sept. 2021',
    current: false,
    points: [
      'Mise en place d\'un reseau local (LAN) pour un cyber-cafe.',
      'Configuration des postes clients et assistance technique.',
      'Participation a la conception d\'une application de gestion de cyber-cafe.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  { title: 'Angular Talent 2026', school: 'Orange Digital Center, Douala', period: 'Juin 2026 — Septembre 2026', current: true },
  { title: 'Master 1 — Genie logiciel', school: 'ENSPD, Douala', period: 'Depuis oct. 2025', current: true },
  { title: 'Licence technologique — Genie logiciel', school: 'IUT Douala', period: 'Oct. 2023 — Aout 2024', current: false },
  { title: 'BTS — Genie logiciel', school: 'IUGET Bonnamousadi, Douala', period: 'Juil. 2022 — Aout 2023', current: false },
  { title: 'Baccalaureat TI — Technologie de l\'information', school: 'Lycee Classique de Bafang', period: 'Juil. 2020 — Sept. 2021', current: false },
];

export const PROJECTS: Project[] = [
  {
    name: 'Marvelous Wedding',
    tagline: 'Site web evenementiel et organisation de mariage',
    description:
      'Site vitrine realise pour Marvelous Wedding une agence basee en France qui accompagne les couples dans l organisation de mariages et d evenements sur mesure.',
    image: 'assets/image/image_projet/marvelous.png',
    status: 'live',
    progress: 100,
    stack: ['WordPress', 'Divi', 'WPForms', 'WooCommerce', 'SEO'],
    category: 'site-web',
    links: [
      { label: 'marvelouswedding.com', href: 'https://marvelouswedding.com' },
    ],
  },
  {
    name: 'Marvelous Studio',
    tagline: 'Studio photo et reservations personnalisees',
    description:
      'Site web realise pour Marvelous Wedding, agence evenementielle basee en France. Marvelous Studio presente une offre de shootings photo pour les grossesses etc..',
    image: 'assets/image/image_projet/marvelous_studio.png',
    status: 'live',
    progress: 100,
    stack: ['WordPress', 'Divi', 'WPForms', 'WooCommerce', 'SEO'],
    category: 'site-web',
    links: [
      { label: 'lesmarvelouswedding.com/studio-photos', href: 'https://lesmarvelouswedding.com/studio-photos/' },
    ],
  },
  {
    name: 'Paname Wedding',
    tagline: 'Organisation de mariages et services evenementiels',
    description:
      'Site web realise pour Paname Wedding, une agence evenementielle basee en France et specialisee dans l accompagnement des mariages et des evenements prives.',
    image: 'assets/image/image_projet/paname%20service.png',
    status: 'live',
    progress: 100,
    stack: ['WordPress', 'Divi', 'WPForms', 'WooCommerce', 'SEO'],
    category: 'site-web',
    links: [
      { label: 'lepanamewedding.com', href: 'https://lepanamewedding.com/' },
    ],
  },
  {
    name: 'Vie d Artist',
    tagline: 'Plateforme pour les professionnels de l evenementiel',
    description:
      'Site web francais qui met en relation les wedding planners et les prestataires de services evenementiels. Vie d Artist les accompagne dans la realisation de leurs projets visuels, notamment le montage photo et video.',
    image: 'assets/image/image_projet/viedartist%20(2).png',
    status: 'live',
    progress: 100,
    stack: ['WordPress', 'Divi', 'WooCommerce', 'WPForms', 'SEO'],
    category: 'site-web',
    links: [
      { label: 'viedartist.com', href: 'https://viedartist.com/' },
    ],
  },
  {
    name: 'Optimum Soft Digital',
    tagline: 'Solutions numeriques pour les marches canadien et camerounais',
    description:
      'Site web realise pour Optimum Soft Digital, une agence positionnee sur les marches canadien et camerounais. La plateforme presente plusieurs services dans le numerique et le digital.',
    image: 'assets/image/image_projet/osd.png',
    status: 'live',
    progress: 100,
    stack: ['WordPress', 'Divi', 'WooCommerce', 'WPForms', 'SEO'],
    category: 'site-web',
    links: [
      { label: 'optimumsoftdigital.com', href: 'https://optimumsoftdigital.com/' },
    ],
  },
  {
    name: 'Le Calao Doré',
    tagline: 'Site vitrine d\'un restaurant traditionnel camerounais à Douala.',
    description:
      'Développement d’un site vitrine pour un restaurant traditionnel camerounais situé à Douala. Le site présente l’établissement, ses spécialités, son univers et ses informations pratiques à travers une interface moderne et responsive.',
    image: 'assets/image/image_projet/lecalaodore.png',
    status: 'live',
    progress: 100,
    stack: ['Angular', 'Signals', 'LocalStorage', 'TypeScript', 'CSS', 'Responsive Design'],
    category: 'application-frontend',
    github: 'https://github.com/Pakistant/le-calao-dore',
     links: [
      { label: 'lecalaodore', href: 'https://le-calao-dore-alpha.vercel.app/' },
    ],
  },
  {
    name: 'CivilPass Cameroun',
    tagline: 'Assistant demarches d\'etat civil',
    description:
      'Plateforme d\'accompagnement pour les demarches d\'etat civil au Cameroun, avec un backend Laravel et une base de donnees dediee — projet mene dans le cadre de l\'Angular Talent Lab 2026 a orange Cameroun.',
    status: 'live',
    progress: 100,
    image: 'assets/image/image_projet/Civilpass.png',
    stack: ['Angular', 'Laravel', 'MySQL','REST API','Sanctum'],
    category: 'application-backend',
    github: 'https://github.com/Yann-Olympe/CivilPass',
    links: [
      { label: 'CivilPass Cameroun', href: 'https://civil-pass-green.vercel.app/' },
    ],
  },
  {
    name: 'ACTU237',
    tagline: 'CMS d’actualités 237',
    description:'Actu237 est une plateforme web d’actualités politiques permettant de publier, organiser et consulter des contenus d’information. Elle propose également un kiosque numérique dédié à la mise en avant et à la consultation de contenus sélectionnés.',
    status: 'live',
    progress: 100,
    image: 'assets/image/image_projet/Actu237.png',
    stack: ['Blade', 'Laravel', 'MySQL', 'REST API', 'Sanctum'],
    category: 'application-backend',
    github: 'https://github.com/Pakistant/Applicationinfos',
    links: [
      { label: 'Actu237', href: 'https://actu237.alwaysdata.net/' },
    ],
  },
  {
    name: 'La maison marvelous',
    tagline: 'Plateforme de gestion et de suivi de mariages',
    description:
      'est une plateforme web dédiée aux services de photographie et de vidéographie de mariage. Elle permet de présenter les réalisations, formules et accessoires, tout en proposant un espace dédié aux mariés pour faciliter le suivi et la gestion de leur projet de mariage.',
    status: 'live',
    progress: 100,
    image: 'assets/image/image_projet/marvelous-cameroun.png',
    stack: ['React', 'firebase', 'REST API', 'Cursor', 'claudecode'],
    category: 'application-frontend',
    links: [
      { label: 'La maison marvelous', href: 'https://maisonmarvelous.com/' },
    ],
  },
  {
    name: 'Bonabery',
    tagline: 'Bonabery — Plateforme e-commerce',
    description:
      'Conception et développement d’une boutique en ligne, permettant aux clients de consulter les produits, filtrer les articles selon leur localisation et passer commande en ligne. La plateforme intègre plusieurs moyens de paiement, notamment MTN Mobile Money, Orange Money et carte bancaire.',
    status: 'live',
    image: 'assets/image/image_projet/bonabery.png',
    progress: 100,
    stack: ['WordPress', 'WooCommerce', 'Elementor', 'Divi', 'WPForms', 'SEO','PHP'],
    category: 'ecommerce',
     links: [
      { label: 'Bonabery', href: 'https://bonabery.com/' },
    ],
  },
  {
    name: 'Kara Flow Style',
    tagline: 'Boutique bien-etre, mode et decoration',
    description:
      'Développement d’une plateforme e-commerce destinée à la présentation et à la vente de produits en ligne, avec mise en place progressive des fonctionnalités de catalogue, commandes et gestion des utilisateurs.',
    status: 'in-progress',
    progress: 80,
    image: 'assets/image/image_projet/kf-style.png',
    stack: ['WordPress', 'WooCommerce'],
    category: 'ecommerce',
    links: [
      { label: 'kf-style.com', href: 'https://kf-style.com' },
    ],
  },
  {
    name: 'Portfolio personnel',
    tagline: 'Portfolio personnel et vitrine de projets',
    description:
      'Conception et développement de mon portfolio personnel pour présenter mon parcours, mes compétences et mes réalisations en développement web. Le site met en avant mes différents projets, notamment des plateformes e-commerce, CMS et applications web..',
    status: 'live',
    progress: 100,
    image: 'assets/image/image_projet/porfolio.png',
    stack: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
    category: 'application-frontend',
    github: 'https://github.com/Pakistant/Steve-portfolio',
    links: [
      { label: 'stdouanla', href: 'https://steve-tikemene-douanla.com' },
    ],
  },
  
];
