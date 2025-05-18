import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-delete-shared',
  templateUrl: './delete-shared.component.html',
  styleUrl: './delete-shared.component.scss'
})
export class DeleteSharedComponent implements OnInit {
  groupForm!: FormGroup;
  mode: 'view' | 'delete' | 'deleteFromGroup' = 'view';

  constructor(
    private _Toastr: ToastrService,
    private _StudentService: StudentsService,
    private dialogRef: MatDialogRef<DeleteSharedComponent>,
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
    if (this.mode === 'delete') {
      this._StudentService.deleteStudent(this.data.id).subscribe({
        next: () => {
          this._Toastr.success('Student deleted successfully');
          this.dialogRef.close(true);
        },
        error: () => {
          this._Toastr.error('Failed to delete student');
        }
      });
    } else if (this.mode === 'deleteFromGroup') {
      const groupId = this.data.groupId;
      const studentId = this.data.id;

      this._StudentService.removeStudentFromGroup(groupId, studentId).subscribe({
        next: () => {
          this._Toastr.success('Student removed from group');
          this.dialogRef.close(true);
        },
        error: () => {
          this._Toastr.error('Failed to remove student from group');
        }
      });
    }
  }
}
