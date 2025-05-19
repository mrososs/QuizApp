import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss'
})
export class UpdateStudentComponent implements OnInit {
  student: any;
  currentGroupId: string = '';
  selectedGroupId: string = '';
  allGroups: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<UpdateStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _studentService: StudentsService,
    private toastr: ToastrService
  ) {
    this.student = data.student;
    this.currentGroupId = data.currentGroupId;
    this.selectedGroupId = data.currentGroupId;
  }

  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups() {
    this._studentService.getAllGroups().subscribe({
      next: (res) => {
        this.allGroups = res;
      },
      error: () => {
        this.toastr.error('Failed to load groups');
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

onUpdate() {
  if (!this.selectedGroupId) {
    this.toastr.warning('Please select a group');
    return;
  }

  const isNew = !this.currentGroupId;

  const request = isNew
    ? this._studentService.addStudentToGroup(this.student._id, this.selectedGroupId)
    : this._studentService.updateStudentGroup(this.student._id, this.selectedGroupId);

  request.subscribe({
    next: () => {
      const action = isNew ? 'added to' : 'updated in';
      this.toastr.success(`Student successfully ${action} group`);
      this.dialogRef.close(true);
    },
    error: () => {
      this.toastr.error('Failed to update student group');
    }
  });
}

}
