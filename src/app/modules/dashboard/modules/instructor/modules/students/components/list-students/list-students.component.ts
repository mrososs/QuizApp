import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { AllStudent } from '../../model/AllStudent.model';
import { StudentsService } from '../../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewStudentsComponent } from '../view-students/view-students.component';
import { DeleteSharedComponent } from '../delete-shared/delete-shared.component';
import { UpdateStudentComponent } from '../update-student/update-student.component';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  selectedTab: 'all' | 'no-group' | 'groups' = 'all';

  students: AllStudent[] = [];
  allStudentsOriginal: AllStudent[] = [];
  studentsPerPage: AllStudent[] = [];

  groups: any[] = [];
  selectedGroupId: string = '';
  selectedGroupName: string = '';

  pageSize = 8;
  pageIndex = 0;

  @ViewChild('allStudentsTemplate', { static: true })
  allStudentsTemplate!: TemplateRef<any>;
  @ViewChild('studentsWithoutGroupTemplate', { static: true })
  studentsWithoutGroupTemplate!: TemplateRef<any>;
  @ViewChild('groupsTemplate', { static: true })
  groupsTemplate!: TemplateRef<any>;

  constructor(
    private _StudentService: StudentsService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.loadGroups();

    const savedTab = localStorage.getItem('selectedTab') as
      | 'all'
      | 'no-group'
      | 'groups';
    const savedGroupId = localStorage.getItem('selectedGroupId');

    if (savedTab === 'groups' && savedGroupId) {
      this.selectedTab = 'groups';
      this.selectedGroupId = savedGroupId;

      this._StudentService.getAllStudents().subscribe({
        next: (res) => {
          this.students = res;
          this.allStudentsOriginal = res;

          const selectedGroup = this.groups.find((g) => g._id === savedGroupId);
          if (selectedGroup) {
            this.selectedGroupName = selectedGroup.name;
            this.students = this.allStudentsOriginal.filter(
              (s) =>
                selectedGroup.students && selectedGroup.students.includes(s._id)
            );
            this.paginateStudents();
          }
        },
      });
    } else if (savedTab === 'no-group') {
      this.setTab('no-group');
    } else {
      this.setTab('all');
    }
  }

  loadGroups(): void {
    this._StudentService.getAllGroups().subscribe({
      next: (res) => (this.groups = res),
      error: (err) => console.error('Error loading groups:', err),
    });
  }

  setTab(tab: 'all' | 'no-group' | 'groups'): void {
    this.selectedTab = tab;
    localStorage.setItem('selectedTab', tab);

    if (tab === 'all') {
      this.getAllStudents();
    } else if (tab === 'no-group') {
      this.getAllStudentsWithoutGroups();
    }
  }

  getTemplate(): TemplateRef<any> {
    switch (this.selectedTab) {
      case 'all':
        return this.allStudentsTemplate;
      case 'no-group':
        return this.studentsWithoutGroupTemplate;
      case 'groups':
        return this.groupsTemplate;
      default:
        return this.allStudentsTemplate;
    }
  }

  getAllStudents(): void {
    this._StudentService.getAllStudents().subscribe({
      next: (res) => {
        this.students = res;
        this.allStudentsOriginal = res;
        this.pageIndex = 0;
        this.paginateStudents();
      },
      error: (err) => console.error(err),
    });
  }
  refreshSelectedGroupStudents(): void {
    const selectedGroup = this.groups.find(
      (g) => g._id === this.selectedGroupId
    );
    if (!selectedGroup) return;

    this.selectedGroupName = selectedGroup.name;

    this.students = this.allStudentsOriginal.filter(
      (s) => selectedGroup.students && selectedGroup.students.includes(s._id)
    );

    this.paginateStudents();
  }

  getAllStudentsWithoutGroups(): void {
    this._StudentService.getAllStudentsWithoutGroups().subscribe({
      next: (res) => {
        this.students = res;
        this.pageIndex = 0;
        this.paginateStudents();
      },
      error: (err) => console.error(err),
    });
  }
  onGroupSelected(event: Event): void {
    const groupId = (event.target as HTMLSelectElement).value;

    if (!groupId) {
      this.setTab('all');
      this.selectedGroupName = '';
      localStorage.removeItem('selectedGroupId');
      return;
    }

    const selectedGroup = this.groups.find((g) => g._id === groupId);
    if (!selectedGroup) return;

    this.selectedGroupId = groupId;
    this.selectedGroupName = selectedGroup.name;
    this.selectedTab = 'groups';

    localStorage.setItem('selectedTab', 'groups');
    localStorage.setItem('selectedGroupId', groupId);

    this.students = this.allStudentsOriginal.filter(
      (s) => selectedGroup.students && selectedGroup.students.includes(s._id)
    );

    this.pageIndex = 0;
    this.paginateStudents();
  }

  openDialog(studentId: string): void {
    this.dialog.open(ViewStudentsComponent, {
      width: '80%',
      data: { id: studentId, mode: 'view' },
    });
  }

  openDialogDelete(studentId: string): void {
    this.dialog
      .open(ViewStudentsComponent, {
        width: '80%',
        data: { id: studentId, mode: 'delete' },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.refreshStudentList();
      });
  }

  openDeleteDialog(studentId: string): void {
    const dialogRef = this.dialog.open(DeleteSharedComponent, {
      width: '80%',
      data: {
        id: studentId,
        mode: 'delete',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (this.selectedTab === 'groups') {
          this.loadGroups();
          setTimeout(() => this.refreshSelectedGroupStudents(), 300);
        } else {
          this.refreshStudentList();
        }
        setTimeout(() => {
          location.reload();
        }, 300);
      }
    });
  }

  openRemoveFromGroupDialog(studentId: string, groupId: string): void {
    const dialogRef = this.dialog.open(DeleteSharedComponent, {
      width: '80%',
      data: {
        id: studentId,
        groupId: groupId,
        mode: 'deleteFromGroup',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.refreshStudentList();
        setTimeout(() => {
          location.reload();
        }, 300);
      }
    });
  }

  openUpdateGroupDialog(student: any): void {
    const dialogRef = this.dialog.open(UpdateStudentComponent, {
      width: '80%',
      data: {
        student: student,
        currentGroupId: student.group?._id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadGroups(); // لتحديث بيانات الجروبات
        setTimeout(() => {
          location.reload();
        }, 300);
      }
    });
  }

  refreshStudentList(): void {
    switch (this.selectedTab) {
      case 'all':
        this.getAllStudents();
        break;
      case 'no-group':
        this.getAllStudentsWithoutGroups();
        break;
    }
  }

  paginateStudents(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.studentsPerPage = this.students.slice(startIndex, endIndex);
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.paginateStudents();
  }
}
