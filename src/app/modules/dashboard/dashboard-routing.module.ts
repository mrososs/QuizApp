import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { instructorGuard } from '../../core/guards/instructor.guard';
import { learnerGuard } from '../../core/guards/learner.guard';

const routes: Routes = [
  {
    path: 'instructor',
    canActivate: [instructorGuard],
    loadChildren: () =>
      import('./modules/instructor/instructor-routing.module').then(
        (m) => m.InstructorRoutingModule
      ),
  },
  {
    path: 'learner',
    canActivate: [learnerGuard],
    loadChildren: () =>
      import('./modules/learner/learner-routing.module').then(
        (m) => m.LearnerRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
