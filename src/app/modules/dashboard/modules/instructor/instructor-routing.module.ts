import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutWrapperComponent } from '../../components/shared/layout-wrapper/layout-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule // ✅ not just dashboard-routing.module
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorRoutingModule {}
