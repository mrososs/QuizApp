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
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ],
  exports: [LayoutWrapperComponent, NavbarComponent, SidebarComponent],
})
export class DashboardModule {}
