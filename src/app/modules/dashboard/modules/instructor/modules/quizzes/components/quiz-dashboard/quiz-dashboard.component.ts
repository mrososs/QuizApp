import { Component, inject, OnInit } from '@angular/core';
import { IUpcomingQuizzes } from '../../../dashboard/models/upcoming-5-quizzes.model';
import { QuizzService } from '../../services/quizz.service';
import { MatDialog } from '@angular/material/dialog';
import { AddQuizzDialogComponent } from '../add-quizz-dialog/add-quizz-dialog.component';

@Component({
  selector: 'app-quiz-dashboard',
  standalone: false,
  templateUrl: './quiz-dashboard.component.html',
  styleUrl: './quiz-dashboard.component.scss',
})
export class QuizDashboardComponent implements OnInit {
  completedQuizzes: any[] = [];
  quizzes: IUpcomingQuizzes[] = [];

  private _dialog = inject(MatDialog);

  constructor(private _QuizzService: QuizzService) {}

  ngOnInit() {
    this.GetUpcoming();
    this.GetCompleted();
  }
  GetUpcoming() {
    this._QuizzService.getUpcomingQuizzes().subscribe({
      next: (data) => {
        this.quizzes = data.reverse().slice(0, 2);
      },
      error: (err) => {
        console.error('Error fetching quizzes:', err);
      },
    });
  }
  openAddQuizDialog() {
    const dialogRef = this._dialog.open(AddQuizzDialogComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '80vw',
      maxHeight: '80vh',
      panelClass: 'centered-dialog',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetUpcoming();
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
      },
    });
  }
}
