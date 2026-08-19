export interface NavLink {
  label: string;
  href: string;
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

export type ProjectStatus = 'live' | 'mvp' | 'concept';

export interface Project {
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  progress: number; // 0-100, drives the signature rotating arc
  stack: string[];
  category: 'produit' | 'client';
  links?: { label: string; href: string }[];
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
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Profil', href: 'about' },
  { label: 'Competences', href: 'skills' },
  { label: 'Parcours', href: 'experience' },
  { label: 'Projets', href: 'projects' },
  { label: 'Formation', href: 'education' },
  { label: 'Contact', href: 'contact' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    items: ['Angular', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Backend & API',
    icon: 'server',
    items: ['Laravel', 'Express.js', 'PHP', 'C#', 'Python', 'Java'],
  },
  {
    title: 'CMS & e-commerce',
    icon: 'shopping-bag',
    items: ['WordPress', 'Shopify', 'Elementor', 'Divi', 'WooCommerce', 'Odoo'],
  },
  {
    title: 'Outils & no-code',
    icon: 'tool',
    items: ['Git', 'cPanel', 'Flutterflow', 'Figma', 'Photoshop', 'Trello'],
  },
  {
    title: 'Methodes & modelisation',
    icon: 'layers',
    items: ['Scrum', 'UML', 'Merise', 'Responsive Design', 'SEO'],
  },
  {
    title: 'Reseaux & systeme',
    icon: 'globe',
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
  { title: 'Master 1 — Genie logiciel', school: 'ENSPD, Douala', period: 'Depuis oct. 2025', current: true },
  { title: 'Licence technologique — Genie logiciel', school: 'IUT Douala', period: 'Oct. 2023 — Aout 2024', current: false },
  { title: 'BTS — Genie logiciel', school: 'IUGET Bonnamousadi, Douala', period: 'Juil. 2022 — Aout 2023', current: false },
  { title: 'Baccalaureat TI — Technologie de l\'information', school: 'Lycee Classique de Bafang', period: 'Juil. 2020 — Sept. 2021', current: false },
];

export const PROJECTS: Project[] = [
  {
    name: 'TontinePay',
    tagline: 'Gestion numerique de tontine',
    description:
      'Application Angular offline-first pour gerer une tontine : groupes, membres, tours et cotisations, avec un systeme de fiabilite "Score Diamant" et un simulateur d\'epargne, pensee pour les zones a faible connectivite.',
    status: 'mvp',
    progress: 70,
    stack: ['Angular', 'Signals', 'LocalStorage'],
    category: 'produit',
  },
  {
    name: 'CivilPass Cameroun',
    tagline: 'Assistant demarches d\'etat civil',
    description:
      'Plateforme d\'accompagnement pour les demarches d\'etat civil au Cameroun, avec un backend Laravel et une base de donnees dediee — projet mene dans le cadre de l\'Angular Talent Lab 2026.',
    status: 'mvp',
    progress: 55,
    stack: ['Angular', 'Laravel', 'MySQL'],
    category: 'produit',
  },
  {
    name: 'CoinWallet',
    tagline: 'Portefeuille electronique de monnaie',
    description:
      'Concept de portefeuille electronique pour repondre a la penurie de monnaie au Cameroun, avec integration simulee Orange Money / MTN MoMo.',
    status: 'concept',
    progress: 35,
    stack: ['Angular', 'Tailwind CSS'],
    category: 'produit',
  },
  {
    name: 'PerfTrack Pro',
    tagline: 'Suivi de projets et de performance',
    description:
      'Application de gestion de projets et d\'evaluation de la performance des employes, ciblant les PME camerounaises.',
    status: 'concept',
    progress: 30,
    stack: ['Angular', 'Cahier des charges'],
    category: 'produit',
  },
  {
    name: 'Sawaka',
    tagline: 'Plateforme pour entrepreneurs et artisans',
    description:
      'Plateforme mettant en relation entrepreneurs et artisans, en cours de maturation — premier persona explore : l\'artisan menuisier a la recherche de nouveaux clients.',
    status: 'concept',
    progress: 20,
    stack: ['Recherche produit', 'Personas'],
    category: 'produit',
  },
  {
    name: 'Kara Flow Style',
    tagline: 'Boutique bien-etre, mode et decoration',
    description:
      'Site e-commerce pour la marque KFS, avec une identite visuelle vert profond et dore en cours d\'integration.',
    status: 'live',
    progress: 80,
    stack: ['WordPress', 'WooCommerce'],
    category: 'client',
  },
  {
    name: 'Ecosysteme Marvelous',
    tagline: 'Bonabery, Marvelous Wedding, Maison Marvelous, Vie d\'Artist',
    description:
      'Suite de sites WordPress et Shopify sur mesure, developpes avec Elementor, Divi et WooCommerce pour une clientele diversifiee.',
    status: 'live',
    progress: 100,
    stack: ['WordPress', 'Shopify', 'Elementor'],
    category: 'client',
    links: [
      { label: 'bonabery.com', href: 'https://bonabery.com' },
      { label: 'lesmarvelouswedding.com', href: 'https://lesmarvelouswedding.com' },
    ],
  },
  {
    name: 'Ecosysteme Paname',
    tagline: 'Paname Service, Paname Wedding, Optimum Soft Digital',
    description:
      'Sites WordPress geres a distance : conception, maintenance et referencement SEO pour un portefeuille de clients a Yaounde.',
    status: 'live',
    progress: 100,
    stack: ['WordPress', 'SEO', 'cPanel'],
    category: 'client',
    links: [
      { label: 'bonabery.com', href: 'https://bonabery.com' },
      { label: 'lesmarvelouswedding.com', href: 'https://lesmarvelouswedding.com' },
    ],
  },
];
