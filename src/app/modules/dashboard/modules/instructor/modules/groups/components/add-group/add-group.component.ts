import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupsService } from '../services/groups.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  groupForm!: FormGroup;
  studentsList: any[] = [];

  constructor(
    private groupService: GroupsService,
    private dialogRef: MatDialogRef<AddGroupComponent>
  ) {}

  ngOnInit(): void {
    // تهيئة الـ FormGroup
    this.groupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      students: new FormControl([], Validators.required)
    });

    // جلب قائمة الطلاب من الـ API
    this.getStudents();
  }

  // وظيفة جلب الطلاب
  getStudents(): void {
    // تأكد من أن الـ API الخاص بالطلاب صحيح
    this.groupService.getStudents().subscribe({
      next: (res: any) => {
        this.studentsList = res.data; // تخزين بيانات الطلاب في الـ studentsList
      },
      error: (err) => {
        console.error('Error fetching students:', err);
      }
    });
  }

  // عند إرسال الفورم
  onSubmit(): void {
    if (this.groupForm.valid) {
      const groupData = this.groupForm.value;

      // إرسال بيانات الجروب إلى الـ API
      this.groupService.createGroup(groupData).subscribe({
        next: (res) => {
          console.log('Group Added:', res);
          this.dialogRef.close(true); // إغلاق الديالوج بعد إضافة الجروب
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
    }
  }

  // إلغاء العملية وإغلاق الديالوج
  onCancel(): void {
    this.dialogRef.close();
  }
}
