import { Component } from '@angular/core';
import { Ring } from '../../shared/ring/ring';
import { Icon } from '../../shared/icon/icon';
import { SOCIAL_LINKS } from '../../core/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Ring, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = new Date().getFullYear();
  socials = SOCIAL_LINKS;
  links = [
    { label: 'Accueil', href: '#top' },
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
}
