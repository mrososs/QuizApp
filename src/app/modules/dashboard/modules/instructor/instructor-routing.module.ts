import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
  },
  {
    path: 'groups',
    loadChildren: () =>
      import('./modules/groups/groups-routing.module').then(
        (m) => m.GroupsRoutingModule
      ),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./modules/students/students-routing.module').then(
        (m) => m.StudentsRoutingModule
      ),
  },
  {
    path: 'quizzes',
    loadChildren: () =>
      import('./modules/quizzes/quizzes-routing.module').then(
        (m) => m.QuizzesRoutingModule
      ),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./modules/results/results-routing.module').then(
        (m) => m.ResultsRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorRoutingModule {}
