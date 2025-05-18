import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { AllStudent } from '../../model/AllStudent.model';
import { StudentsService } from '../../services/students.service';
import { PageEvent } from '@angular/material/paginator';
import { DeleteGroupComponent } from '../../../groups/components/delete-group/delete-group.component';
import { UpdateGroupComponent } from '../../../groups/components/update-group/update-group.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewStudentsComponent } from '../view-students/view-students.component';
import { Students } from './../../../groups/model/students';
import { DeleteSharedComponent } from '../delete-shared/delete-shared.component';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {

  selectedTab: 'all' | 'no-group' | 'groups' = 'all';

  allStudent: AllStudent[] = [];
  originalStudentList: AllStudent[] = [];
  studentsPerPage: AllStudent[] = [];
  StudentID:string ='';
  groups: any[] = [];
  selectedGroupId: string = '';
  selectedGroupName: string = '';

  pageSize = 8;
  pageIndex = 0;

  @ViewChild('allStudentsTemplate', { static: true }) allStudentsTemplate!: TemplateRef<any>;
  @ViewChild('studentsWithoutGroupTemplate', { static: true }) studentsWithoutGroupTemplate!: TemplateRef<any>;
  @ViewChild('groupsTemplate', { static: true }) groupsTemplate!: TemplateRef<any>;

  constructor(private _StudentService: StudentsService , private dialog: MatDialog) {}

ngOnInit(): void {
  this.loadGroups();
  this.getAllStudents();
}

loadGroups(): void {
  this._StudentService.getAllGroups().subscribe({
    next: (res) => {
      this.groups = res;
    },
    error: (err) => {
      console.error('Error loading groups:', err);
    }
  });
}

setTab(tab: 'all' | 'no-group' | 'groups'): void {
  this.selectedTab = tab;

  if (tab === 'all') {
    this.getAllStudents();
  } else if (tab === 'no-group') {
    this.getAllStudentsWithoutGroups();
  }
}

getTemplate(): TemplateRef<any> {
  switch (this.selectedTab) {
    case 'all': return this.allStudentsTemplate;
    case 'no-group': return this.studentsWithoutGroupTemplate;
    case 'groups': return this.groupsTemplate;
    default: return this.allStudentsTemplate;
  }
}

getAllStudents(): void {
  this._StudentService.getAllStudents().subscribe({
    next: (res) => {
      this.allStudent = res;
      this.originalStudentList = res;
      this.pageIndex = 0;
      this.paginateStudents();
    },
    error: (err) => {
      console.error(err);
    },
  });
}

getAllStudentsWithoutGroups(): void {
  this._StudentService.getAllStudentsWithoutGroups().subscribe({
    next: (res) => {
      this.allStudent = res;
      this.pageIndex = 0;
      this.paginateStudents();
    },
    error: (err) => {
      console.error(err);
    },
  });
}

onGroupSelected(event: Event): void {
  const groupId = (event.target as HTMLSelectElement).value;

  if (!groupId) {
    this.setTab('all');
    this.selectedGroupName = '';
    return;
  }

  const selectedGroup = this.groups.find(g => g._id === groupId);
  if (!selectedGroup) return;

  this.selectedGroupId = groupId;
  this.selectedGroupName = selectedGroup.name;
  this.selectedTab = 'groups';

  this.allStudent = this.originalStudentList.filter(
    s => selectedGroup.students && selectedGroup.students.includes(s._id)
  );

  this.pageIndex = 0;
  this.paginateStudents();
}

openDialog(studentId: string): void {
  this.dialog.open(ViewStudentsComponent, {
    width: '80%',
    data: { id: studentId, mode: 'view' }
  });
}

openDialogDelete(studentId: string): void {
    this.dialog.open(ViewStudentsComponent, {
      width: '80%',
      data: { id: studentId, mode: 'delete' }
    }).afterClosed().subscribe(result => {
      if (result) {
        switch (this.selectedTab) {
          case 'all':
            this.getAllStudents();
            break;
          case 'no-group':
            this.getAllStudentsWithoutGroups();
            break;
        }
      }
    });
}





openDeleteDialog(studentId: string): void {
  const dialogRef = this.dialog.open(DeleteSharedComponent, {
    width: '80%',
    data: {
      id: studentId,
      mode: 'delete'
    }
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result === true) {

    }
  });
}




openRemoveFromGroupDialog(studentId: string, groupId: string): void {
  this.dialog.open(DeleteSharedComponent, {
    width: '80%', 
    data: {
      id: studentId,
      groupId: groupId,
      mode: 'deleteFromGroup'
    }
  });
}













  paginateStudents(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.studentsPerPage = this.allStudent.slice(startIndex, endIndex);
  }
  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.paginateStudents();
  }
}
