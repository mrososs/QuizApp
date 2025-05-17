import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { ListStudentsComponent } from './components/list-students/list-students.component';

@NgModule({
  declarations: [
    ListStudentsComponent
  ],
  imports: [
    CommonModule, 
    StudentsRoutingModule,
    SharedModule,
  ],
})
export class StudentsModule {}
