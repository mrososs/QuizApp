// dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWrapperComponent } from './components/shared/layout-wrapper/layout-wrapper.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { GroupsModule } from './modules/instructor/modules/groups/groups.module';
import { MatIcon } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { InstructorModule } from './modules/instructor/instructor.module';
import { LearnerModule } from './modules/learner/learner.module';
import { MainAppRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    LayoutWrapperComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    GroupsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
    InstructorModule,
    LearnerModule,
    SharedModule,
    MainAppRoutingModule,
    MatIcon
  ],
  exports:[LayoutWrapperComponent, NavbarComponent, SidebarComponent,SharedModule],
})
export class DashboardModule {}
