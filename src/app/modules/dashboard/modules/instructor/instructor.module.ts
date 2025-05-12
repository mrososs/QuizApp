import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorRoutingModule } from './instructor-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { GroupsModule } from './modules/groups/groups.module';

@NgModule({
  declarations: [

  ],
  imports: [CommonModule, InstructorRoutingModule, DashboardModule
    ,GroupsModule ],
})
export class InstructorModule {}
