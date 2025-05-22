import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizDashboardComponent } from './components/quiz-dashboard/quiz-dashboard.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { AddQuizzDialogComponent } from './components/add-quizz-dialog/add-quizz-dialog.component';


@NgModule({
  declarations: [
    QuizDashboardComponent,
    AddQuizzDialogComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    SharedModule
  ]
})
export class QuizzesModule { }
