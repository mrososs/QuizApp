import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizDashboardComponent } from './components/quiz-dashboard/quiz-dashboard.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { AddQuizzDialogComponent } from './components/add-quizz-dialog/add-quizz-dialog.component';
import { CodeDialogComponent } from './components/code-dialog/code-dialog.component';


@NgModule({
  declarations: [
    QuizDashboardComponent ,
    QuizDetailsComponent ,
    AddQuizzDialogComponent,
    CodeDialogComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    SharedModule
  ]
})
export class QuizzesModule { }
