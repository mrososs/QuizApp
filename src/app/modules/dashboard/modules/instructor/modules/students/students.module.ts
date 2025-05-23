import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { ViewStudentsComponent } from './components/view-students/view-students.component';
import { DeleteSharedComponent } from './components/delete-shared/delete-shared.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

@NgModule({
  declarations: [
    ListStudentsComponent,
    ViewStudentsComponent,
    DeleteSharedComponent,
    UpdateStudentComponent
  ],
  imports: [
    CommonModule, 
    StudentsRoutingModule,
    SharedModule,
  ],
})
export class StudentsModule {}
