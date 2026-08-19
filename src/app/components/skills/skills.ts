import { Component } from '@angular/core';
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
}
