import { Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { EXPERIENCES } from '../../core/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [Icon],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceSection {
  experiences = EXPERIENCES;
}
