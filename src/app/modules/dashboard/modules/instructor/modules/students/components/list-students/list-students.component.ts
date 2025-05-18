import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { AllStudent } from '../../model/AllStudent.model';
import { StudentsService } from '../../services/students.service';
import { PageEvent } from '@angular/material/paginator';

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

  groups: any[] = [];
  selectedGroupId: string = '';
  selectedGroupName: string = '';

  pageSize = 8;
  pageIndex = 0;

  @ViewChild('allStudentsTemplate', { static: true }) allStudentsTemplate!: TemplateRef<any>;
  @ViewChild('studentsWithoutGroupTemplate', { static: true }) studentsWithoutGroupTemplate!: TemplateRef<any>;
  @ViewChild('groupsTemplate', { static: true }) groupsTemplate!: TemplateRef<any>;

  constructor(private _StudentService: StudentsService) {}

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

  // تحسين الأداء في ngFor
  trackByStudentId(index: number, student: AllStudent): string {
    return student._id;
  }
}
