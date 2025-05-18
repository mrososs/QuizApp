import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-view-students',
  standalone: false,
  templateUrl: './view-students.component.html',
  styleUrl: './view-students.component.scss'
})
export class ViewStudentsComponent implements OnInit {
  groupForm!: FormGroup;
  mode: 'view' | 'delete' = 'view';

  constructor(
    private _Toastr: ToastrService,
    private _StudentService: StudentsService,
    private dialogRef: MatDialogRef<ViewStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.mode = data.mode || 'view';
  }

ngOnInit(): void {
  this.groupForm = new FormGroup({
    firstName: new FormControl({ value: '', disabled: true }),
    lastName: new FormControl({ value: '', disabled: true }),
    email: new FormControl({ value: '', disabled: true })
  });

  this.getStudentData(this.data.id);
}

  getStudentData(id: string): void {
    this._StudentService.getStudentById(id).subscribe({
      next: (student) => {
        this.groupForm.patchValue({
          firstName: student.first_name,
          lastName: student.last_name,
          email: student.email
        });
      },
      error: () => {
        this._Toastr.error('Failed to load student data');
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this._StudentService.deleteStudent(this.data.id).subscribe({
      next: () => {
        this._Toastr.success('Student deleted successfully');
        this.dialogRef.close(true);
      },
      error: () => {
        this._Toastr.error('Failed to delete student');
      }
    });
  }
}
