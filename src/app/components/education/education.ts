import { Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { EDUCATION } from '../../core/portfolio-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [Icon],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  education = EDUCATION;
}
