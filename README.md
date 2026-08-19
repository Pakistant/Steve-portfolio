# Portfolio — Steve Tikemene Douanla

Portfolio personnel construit avec **Angular 20** (standalone components,
signals, control flow `@if` / `@for`), sans framework CSS externe et sans
dependance a une police ou une icone tierce non maitrisee (icones en SVG
inline faites main).

## Concept visuel

Le site reprend l'idee de **"la tournee"** : le tour de role d'une tontine
(cercle d'epargne camerounais), qui est aussi le sujet du projet phare de
Steve, *TontinePay*. Cette idee se retrouve dans l'anneau qui sert de
marque (logo, indicateur de progression sur chaque carte de projet).

## Structure

```
src/app/
  core/portfolio-data.ts     -> tout le contenu (texte, projets, experiences...)
  shared/icon/                -> composant d'icones SVG inline
  shared/ring/                -> composant "anneau" signature
  components/
    nav-bar/    hero/    about/    skills/
    experience/ projects/  education/  contact/  footer/
public/assets/cv-steve-tikemene-douanla.pdf  -> CV telechargeable depuis le hero
```

## Lancer le projet en local

Prerequis : Node.js 20+ (idealement 22) et npm.

```bash
npm install
npm start
```

Le site est alors disponible sur http://localhost:4200/.

## Build de production

```bash
npm run build
```

Le resultat est genere dans `dist/steve-portfolio/browser`. Ce dossier peut
etre deploye tel quel sur n'importe quel hebergeur statique (Netlify,
Vercel, GitHub Pages, ou directement sur ton cPanel via `public_html`).

## Personnaliser le contenu

Toutes les informations (texte du hero, competences, experiences,
formations, projets, coordonnees) sont centralisees dans un seul fichier :

```
src/app/core/portfolio-data.ts
```

Modifier ce fichier suffit a mettre a jour l'ensemble du site — aucun autre
fichier n'a besoin d'etre touche pour changer le contenu.

## Remplacer le CV

Remplace le fichier `public/assets/cv-steve-tikemene-douanla.pdf` par une
version a jour en gardant exactement le meme nom de fichier.
