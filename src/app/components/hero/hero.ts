import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { Ring } from '../../shared/ring/ring';
import { SOCIAL_LINKS } from '../../core/portfolio-data';

const ROLES = ['Developpeur Angular', 'Integrateur WordPress', 'Webmaster Shopify', 'Concepteur produit'];

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Icon, Ring],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  private destroyRef = inject(DestroyRef);

  roles = ROLES;
  roleIndex = signal(0);
  currentRole = signal(ROLES[0]);
  socials = SOCIAL_LINKS;


  stats = [
    { value: '5+', label: 'ans d\'expérience web' },
    { value: '8+', label: 'sites & apps livrés' },
    { value: '6', label: 'projets en 2026' },
  ];

  ngOnInit(): void {
    const id = setInterval(() => {
      const next = (this.roleIndex() + 1) % this.roles.length;
      this.roleIndex.set(next);
      this.currentRole.set(this.roles[next]);
    }, 2600);

    this.destroyRef.onDestroy(() => clearInterval(id));
  }

}
