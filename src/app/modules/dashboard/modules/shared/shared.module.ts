import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutWrapperComponent } from './layout/layout-wrapper/layout-wrapper.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, LayoutWrapperComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, SidebarComponent, LayoutWrapperComponent],
})
export class SharedModule {}
