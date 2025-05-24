import { InstructorModule } from './modules/instructor/instructor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnerModule } from './modules/learner/learner.module';
import { MainAppRoutingModule } from './dashboard-routing.module';
import { LayoutWrapperComponent } from './components/shared/layout-wrapper/layout-wrapper.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { MatIcon } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { LogoutDialogComponent } from './components/shared/logout-dialog/logout-dialog.component';

@NgModule({
  declarations: [
    LayoutWrapperComponent,
    NavbarComponent,
    SidebarComponent,
    LogoutDialogComponent,
  ],
  imports: [
    CommonModule,
    InstructorModule,
    LearnerModule,
    SharedModule,
    MainAppRoutingModule,
    MatIcon,
  ],
  exports: [
    LayoutWrapperComponent,
    NavbarComponent,
    SidebarComponent,
    SharedModule,
  ],
})
export class DashboardModule {}
