import { Component, computed, input } from '@angular/core';

/**
 * The site's signature mark: a rotating arc.
 *
 * It stands for "la tournee" — the rotating turn-order of a tontine
 * (Cameroonian savings circle), the idea behind Steve's flagship project
 * TontinePay. Reused across the nav indicator, the hero mark and every
 * project card so progress/maturity always reads as "how far the turn
 * has come," not a generic percentage bar.
 */
@Component({
  selector: 'app-ring',
  standalone: true,
  template: `
    <svg
      [attr.viewBox]="'0 0 ' + box() + ' ' + box()"
      [attr.width]="size()"
      [attr.height]="size()"
      class="ring"
      [class.ring--spin]="spin()"
      aria-hidden="true"
    >
      <circle
        [attr.cx]="c()" [attr.cy]="c()" [attr.r]="r()"
        class="ring__track"
        fill="none"
        [attr.stroke-width]="stroke()"
      />
      <circle
        [attr.cx]="c()" [attr.cy]="c()" [attr.r]="r()"
        class="ring__arc"
        fill="none"
        [attr.stroke-width]="stroke()"
        [attr.stroke-dasharray]="circumference()"
        [attr.stroke-dashoffset]="offset()"
        stroke-linecap="round"
      />
    </svg>
  `,
  styles: [`
    .ring {
      display: block;
      transform: rotate(-90deg);
    }
    .ring__track {
      stroke: var(--line);
    }
    .ring__arc {
      stroke: var(--gold);
      transition: stroke-dashoffset 0.8s var(--ease);
    }
    .ring--spin {
      animation: ring-spin 14s linear infinite;
    }
    @keyframes ring-spin {
      to { transform: rotate(270deg); }
    }
    @media (prefers-reduced-motion: reduce) {
      .ring--spin { animation: none; }
    }
  `],
})
export class Ring {
  size = input<number>(56);
  progress = input<number>(50); // 0-100
  spin = input<boolean>(false);

  box = computed(() => this.size());
  stroke = computed(() => Math.max(2, this.size() * 0.07));
  r = computed(() => this.box() / 2 - this.stroke());
  c = computed(() => this.box() / 2);
  circumference = computed(() => 2 * Math.PI * this.r());
  offset = computed(() => this.circumference() * (1 - this.progress() / 100));
}
