import { Component, Input } from '@angular/core';
import { ITopStudents } from '../../models/topStudents.model';

@Component({
  selector: 'app-top-5-students',
  templateUrl: './top-5-students.component.html',
  styleUrl: './top-5-students.component.scss',
})
export class Top5StudentsComponent {
  @Input() students: ITopStudents[] = [];
}
