import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddQuizzDialogComponent } from '../add-quizz-dialog/add-quizz-dialog.component';

@Component({
  selector: 'app-quiz-dashboard',
  standalone: false,
  templateUrl: './quiz-dashboard.component.html',
  styleUrl: './quiz-dashboard.component.scss',
})
export class QuizDashboardComponent {
  private _dialog = inject(MatDialog);
  openAddQuizDialog() {
    const dialogRef = this._dialog.open(AddQuizzDialogComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '80vw',
      maxHeight: '80vh',
      panelClass: 'centered-dialog',
    });
  }
}
