import { InstructorModule } from './modules/instructor/instructor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnerModule } from './modules/learner/learner.module';
import { MainAppRoutingModule } from './dashboard-routing.module';
import { LayoutWrapperComponent } from './components/shared/layout-wrapper/layout-wrapper.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedInputsComponent } from './components/shared/shared-inputs/shared-inputs.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LayoutWrapperComponent,
    NavbarComponent,
    SidebarComponent,
    SharedInputsComponent  
  ],
  imports: [
  CommonModule,
    InstructorModule,
    LearnerModule,
    MainAppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[LayoutWrapperComponent, NavbarComponent, SidebarComponent,SharedInputsComponent],
})
export class DashboardModule {}
