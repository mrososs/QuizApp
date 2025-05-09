import { InstructorModule } from './modules/instructor/instructor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnerModule } from './modules/learner/learner.module';
import { MainAppRoutingModule } from './dashboard-routing.module';
import { LayoutWrapperComponent } from './components/shared/layout-wrapper/layout-wrapper.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    LayoutWrapperComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    InstructorModule,
    LearnerModule,
    MainAppRoutingModule,
    MatIcon
  ],
  exports:[LayoutWrapperComponent, NavbarComponent, SidebarComponent],
})
export class DashboardModule {}
