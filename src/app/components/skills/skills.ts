import { Component, HostListener, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { SKILL_GROUPS } from '../../core/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [Icon],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  groups = SKILL_GROUPS;
  currentIndex = signal(0);
  visibleSlides = signal(3);

  constructor() {
    this.setVisibleSlides();
  }

  tools = [
    { label: 'Angular', file: 'angular.jpg' },
    { label: 'Bootstrap', file: 'bootsrap.jpg' },
    { label: 'Canvas', file: 'canvas.jpg' },
    { label: 'Claude', file: 'claude.jpg' },
    { label: 'C#', file: 'cshape.jpg' },
    { label: 'TypeScript', file: 'ts.jpg' },
    { label: 'JavaScript', file: 'js.jpg' },
    { label: 'HTML', file: 'html.jpg' },
    { label: 'CSS', file: 'css.jpg' },
    { label: 'PHP', file: 'php.jpg' },
    { label: 'Laravel', file: 'laravel.jpg' },
    { label: 'WordPress', file: 'wordpress.jpg' },
    { label: 'WooCommerce', file: 'woocomerce.jpg' },
    { label: 'Divi', file: 'divi.jpg' },
    { label: 'Elementor', file: 'elementor.jpg' },
    { label: 'React', file: 'react.jpg' },
    { label: 'Node.js', file: 'nodejs.jpg' },
    { label: 'Git', file: 'git.jpg' },
    { label: 'GitHub', file: 'github.jpg' },
    { label: 'Figma', file: 'figma.jpg' },
    { label: 'Photoshop', file: 'photoshop.jpg' },
    { label: 'Docker', file: 'docker.jpg' },
    { label: 'Postman', file: 'postman.jpg' },
    { label: 'Java', file: 'java.jpg' },
    { label: 'MySQL', file: 'mysql.jpg' },
    { label: 'Python', file: 'python.jpg' },
    { label: 'Tailwind CSS', file: 'tallwind.jpg' },
    { label: 'Vercel', file: 'vercel.jpg' },
    { label: 'VS Code', file: 'vs code.jpg' },
  ];

  topTools = this.tools.slice(0, 14);
  bottomTools = this.tools.slice(14);

  maxIndex(): number {
    return Math.max(0, this.groups.length - this.visibleSlides());
  }

  slideOffset(): number {
    return this.currentIndex() * (100 / this.visibleSlides());
  }

  nextSkill(): void {
    this.currentIndex.update((index) => Math.min(index + 1, this.maxIndex()));
  }

  previousSkill(): void {
    this.currentIndex.update((index) => Math.max(index - 1, 0));
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.setVisibleSlides();
    this.currentIndex.update((index) => Math.min(index, this.maxIndex()));
  }

  private setVisibleSlides(): void {
    const width = window.innerWidth;
    this.visibleSlides.set(width < 640 ? 1 : width < 1000 ? 2 : 3);
  }
}
