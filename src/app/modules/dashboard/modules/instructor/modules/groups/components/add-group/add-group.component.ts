import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  groupForm!: FormGroup;
  studentsList: any[] = [];

  constructor(
    private _Toastr: ToastrService,
    private groupService: GroupService,
    private dialogRef: MatDialogRef<AddGroupComponent>
  ) {}

  ngOnInit(): void {
    this.groupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      students: new FormControl([], Validators.required)
    });

    this.getStudents();
  }

  getStudents(): void {
  this.groupService.getAllStudentsWithoutGroups().subscribe({
    next: (res) => {
      this.studentsList = res; // Assuming the array is returned directly
    },
    error: (err) => {
      console.error('Error fetching students:', err);
    }
  });
  }

  onSubmit(): void {
    if (this.groupForm.valid) {
      const groupData = this.groupForm.value;

      this.groupService.createGroup(groupData).subscribe({
        next: (res) => {
          this._Toastr.success(res.message);
          this.dialogRef.close(true);
        },
        error: (err) => {
          this._Toastr.error(err.message);
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
