import { Component, HostListener, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { Ring } from '../../shared/ring/ring';
import { NAV_LINKS } from '../../core/portfolio-data';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [Icon, Ring],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  links = NAV_LINKS;
  open = signal(false);
  scrolled = signal(false);
  active = signal<string>('about');

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 12);

    let current = this.active();
    for (const link of this.links) {
      const el = document.getElementById(link.href);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= window.innerHeight * 0.35) {
        current = link.href;
      }
    }
    if (current !== this.active()) {
      this.active.set(current);
    }
  }

  toggle() {
    this.open.update((v) => !v);
  }

  close() {
    this.open.set(false);
  }
}
