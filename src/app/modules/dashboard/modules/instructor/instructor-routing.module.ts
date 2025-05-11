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
          import('./modules/dashboard/dashboard-routing.module').then(
            (m) => m.DashboardRoutingModule // ✅ not just dashboard-routing.module
          ),
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('./modules/groups/groups.module').then((m) => m.GroupsModule),
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./modules/students/students.module').then(
            (m) => m.StudentsModule
          ),
      },
      {
        path: 'quizzes',
        loadChildren: () =>
          import('./modules/quizzes/quizzes.module').then(
            (m) => m.QuizzesModule
          ),
      },
      {
        path: 'results',
        loadChildren: () =>
          import('./modules/results/results.module').then(
            (m) => m.ResultsModule
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
