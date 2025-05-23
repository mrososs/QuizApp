import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'results', pathMatch: 'full' },
  { path: 'results', component: QuizResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule {}
