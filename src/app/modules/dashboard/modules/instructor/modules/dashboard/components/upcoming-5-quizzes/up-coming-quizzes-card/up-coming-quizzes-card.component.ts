import { Component, Input, OnInit } from '@angular/core';
import { IUpcomingQuizzes } from '../../../models/upcoming-5-quizzes.model';

@Component({
  selector: 'app-up-coming-quizzes-card',
  templateUrl: './up-coming-quizzes-card.component.html',
  styleUrls: ['./up-coming-quizzes-card.component.css']
})
export class UpComingQuizzesCardComponent implements OnInit {
  @Input() quiz!: IUpcomingQuizzes;

  constructor() { }

  ngOnInit() {
  }

}
