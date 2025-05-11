import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Upcoming5QuizzesComponent } from './components/upcoming-5-quizzes/upcoming-5-quizzes.component';
import { Top5StudentsComponent } from './components/top-5-students/top-5-students.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { UpComingQuizzesCardComponent } from './components/upcoming-5-quizzes/up-coming-quizzes-card/up-coming-quizzes-card.component';
import { TopFiveStuentsCardComponent } from './components/top-5-students/top-five-stuents-card/top-five-stuents-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    Upcoming5QuizzesComponent,
    Top5StudentsComponent,
    UpComingQuizzesCardComponent,
    TopFiveStuentsCardComponent
  ],
  imports: [CommonModule, DashboardRoutingModule,SharedModule],
  exports: [
    HomePageComponent,
    Upcoming5QuizzesComponent,
    Top5StudentsComponent,
  ],
})
export class DashboardModule {}
