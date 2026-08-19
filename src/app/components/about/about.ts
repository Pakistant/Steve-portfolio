import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  traits = [
    'Resolution de problemes',
    'Esprit d\'equipe',
    'Capacite d\'adaptation',
    'Curiosite et apprentissage',
    'Gestion du temps',
    'Autonomie',
    'Creativite',
  ];

  identity = [
    { label: 'Nationalite', value: 'Camerounais' },
    { label: 'Base', value: 'Douala, 5eme' },
    { label: 'Mode', value: 'Teletravail ou presentiel' },
    { label: 'Langues', value: 'Francais — Anglais (B1)' },
  ];
}
