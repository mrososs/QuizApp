import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DifficultyLevel } from '../../enums/difficultyLevel.enum';
import { categories } from '../../enums/categories.enum';
import { QuizService } from '../../services/quiz.service';
import { AllGroups } from '../../../groups/model/AllGroups-model';
import { toSignal } from '@angular/core/rxjs-interop';
import { CodeDialogComponent } from '../code-dialog/code-dialog.component';

@Component({
  selector: 'app-add-quizz-dialog',
  templateUrl: './add-quizz-dialog.component.html',
  styleUrl: './add-quizz-dialog.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class AddQuizzDialogComponent implements OnInit {
  durations = [10, 20, 30, 40, 50, 60];
  difficultyLevels = Object.values(DifficultyLevel);
  categoryList = Object.values(categories);

  questions = [3,4,5,10, 15, 20, 25, 30];
  scores = [1, 5, 10];
  private _quizzService = inject(QuizService);
  group = toSignal(this._quizzService.getGroups(), {
    initialValue: [] as AllGroups[],
  });

  addQuiz: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    group: new FormControl(''), // was groupName
    questions_number: new FormControl(), // was numberOfQuestions
    difficulty: new FormControl(''), // was difficultyLevel
    type: new FormControl(''), // was categoryType
    schedule_date: new FormControl(new Date()),
    schedule_time: new FormControl('12:00'), // Time string (e.g., '14:30')
    duration: new FormControl(''),
    score_per_question: new FormControl(''), // was scorePerQuestion
  });

  private _toaster = inject(ToastrService);
  private _dialogRef = inject(MatDialogRef<AddQuizzDialogComponent>);
  private _cdr = inject(ChangeDetectorRef);
  private _dialog = inject(MatDialog);

  ngOnInit(): void {
    setTimeout(() => {
      this._cdr.detectChanges(); // Avoid ExpressionChangedAfterItHasBeenCheckedError
    });
  }
  onCancel(): void {
    this._dialogRef.close();
  }
  openCodeDialog() {
    const dialogRef = this._dialog.open(CodeDialogComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '80vw',
      maxHeight: '80vh',
      panelClass: 'centered-dialog',
    });
  }
  onSubmit(): void {
    if (this.addQuiz.invalid) {
      this._toaster.error('Please fill all required fields.');
      return;
    }

    const formValue = this.addQuiz.value;
    const rawDate = new Date(formValue.schedule_date);
    const rawTime = formValue.schedule_time;

    if (!(rawDate instanceof Date) || isNaN(rawDate.getTime())) {
      this._toaster.error('Invalid date.');
      return;
    }

    let hours: number, minutes: number;

    if (typeof rawTime === 'string') {
      const timeParts = rawTime.split(':');
      if (timeParts.length !== 2) {
        this._toaster.error('Time must be in HH:mm format.');
        return;
      }

      hours = Number(timeParts[0]);
      minutes = Number(timeParts[1]);
    } else if (rawTime instanceof Date) {
      hours = rawTime.getHours();
      minutes = rawTime.getMinutes();
    } else {
      this._toaster.error('Invalid time value.');
      return;
    }

    if (isNaN(hours) || isNaN(minutes)) {
      this._toaster.error('Invalid time values.');
      return;
    }

    rawDate.setHours(hours, minutes, 0, 0);

    const quizData = {
      ...formValue,
      schadule: rawDate.toISOString(),
    };

    delete quizData.schedule_date;
    delete quizData.schedule_time;

    this._quizzService.addQuizz(quizData).subscribe({
      next: (res:any) => {
        const code = res?.data?.code;
        if (code) {
          this._toaster.success('Quiz added successfully!');
          this._dialogRef.close();
          this._dialog.open(CodeDialogComponent, {
            data: { code },
            width: '400px',
            panelClass: 'centered-dialog',
          });
        } else {
          this._toaster.error('Quiz created but no code returned.');
        }
      },

      error: (err) => {
        console.error('Add quiz error:', err);
        this._toaster.error('Failed to add quiz.');
      },
    });
  }
}
