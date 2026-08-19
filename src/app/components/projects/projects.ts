import { Component, computed, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { Ring } from '../../shared/ring/ring';
import { PROJECTS, Project } from '../../core/portfolio-data';

type Filter = 'tous' | 'produit' | 'client';

const STATUS_LABEL: Record<Project['status'], string> = {
  live: 'En ligne',
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
export class Projects {
  private all = PROJECTS;
  filter = signal<Filter>('tous');

  filters: { key: Filter; label: string }[] = [
    { key: 'tous', label: 'Tous' },
    { key: 'produit', label: 'Projets produit' },
    { key: 'client', label: 'Realisations client' },
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
}
