import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { instructorGuard } from '../../core/guards/instructor.guard';

const routes: Routes = [
  {
    path: 'instructor',
    canActivate: [instructorGuard],
    loadChildren: () =>
      import('./modules/instructor/instructor-routing.module').then(
        (m) => m.InstructorRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
