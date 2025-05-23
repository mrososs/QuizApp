import { Component, OnInit } from '@angular/core';
import { IUpcomingQuizzes } from '../../../dashboard/models/upcoming-5-quizzes.model';
import { QuizzService } from '../../services/quizz.service';

@Component({
  selector: 'app-quiz-dashboard',
  standalone: false,
  templateUrl: './quiz-dashboard.component.html',
  styleUrl: './quiz-dashboard.component.scss'
})
export class QuizDashboardComponent implements OnInit {
completedQuizzes: any[] = [];
quizzes: IUpcomingQuizzes[] = [];


constructor(private _QuizzService: QuizzService) { }

  ngOnInit() {
    this.GetUpcoming();
    this.GetCompleted();
  }
  GetUpcoming() {
    this._QuizzService.getUpcomingQuizzes().subscribe({
      next: (data) => {
        this.quizzes = data.slice(0, 2);
      },
      error: (err) => {
        console.error('Error fetching quizzes:', err);
      }
    });
  } 
  GetCompleted() {
    this._QuizzService.getCompletedQuizzes().subscribe({
      next: (data) => {
        this.completedQuizzes = data.slice(0, 3);
      },
      error: (err) => {
        console.error('Error loading completed quizzes:', err);
      }
    });
  } 
}
