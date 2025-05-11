import { Component, Input } from '@angular/core';
import { IUpcomingQuizzes } from '../../models/upcoming-5-quizzes.model';

@Component({
  selector: 'app-upcoming-5-quizzes',
  templateUrl: './upcoming-5-quizzes.component.html',
  styleUrl: './upcoming-5-quizzes.component.scss'
})
export class Upcoming5QuizzesComponent {
  @Input() quizzes: IUpcomingQuizzes[] = [];

}
