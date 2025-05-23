import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDashboardComponent } from './components/quiz-dashboard/quiz-dashboard.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';

const routes: Routes = [
  {path:'' , redirectTo:'dashboard' ,pathMatch:'full'} ,
  {path:'dashboard' , component : QuizDashboardComponent } ,
  {path:'details/:id' , component : QuizDetailsComponent } ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
