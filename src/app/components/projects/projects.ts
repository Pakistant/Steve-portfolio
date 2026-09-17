import { AfterViewInit, Component, DestroyRef, ElementRef, QueryList, ViewChildren, computed, inject, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { Ring } from '../../shared/ring/ring';
import { PROJECTS, Project } from '../../core/portfolio-data';

type Filter = 'tous' | Project['category'];

const STATUS_LABEL: Record<Project['status'], string> = {
  live: 'En ligne',
  'in-progress': 'En cours',
  mvp: 'MVP',
  concept: 'Concept',
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Icon, Ring],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit {
  private destroyRef = inject(DestroyRef);
  private cardObserver?: IntersectionObserver;
  @ViewChildren('projectCard', { read: ElementRef }) cards!: QueryList<ElementRef<HTMLElement>>;

  private all = PROJECTS;
  filter = signal<Filter>('tous');

  filters: { key: Filter; label: string }[] = [
    { key: 'tous', label: 'Tous' },
    { key: 'site-web', label: 'Site web' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'application-frontend', label: 'Application frontend' },
    { key: 'application-backend', label: 'Application backend' },
  ];

  visible = computed(() => {
    const f = this.filter();
    if (f === 'tous') return this.all;
    return this.all.filter((p) => p.category === f);
  });

  setFilter(f: Filter) {
    this.filter.set(f);
  }

  statusLabel(status: Project['status']): string {
    return STATUS_LABEL[status];
  }

  ngAfterViewInit(): void {
    this.observeCards();
    this.cards.changes.subscribe(() => this.observeCards());
    this.destroyRef.onDestroy(() => this.cardObserver?.disconnect());
  }

  private observeCards(): void {
    this.cardObserver?.disconnect();
    this.cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('projects__card--visible');
          this.cardObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    this.cards.forEach((card) => this.cardObserver?.observe(card.nativeElement));
  }
}
