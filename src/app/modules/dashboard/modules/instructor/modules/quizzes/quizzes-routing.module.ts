import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDashboardComponent } from './components/quiz-dashboard/quiz-dashboard.component';

const routes: Routes = [
  {path:'' , component : QuizDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
