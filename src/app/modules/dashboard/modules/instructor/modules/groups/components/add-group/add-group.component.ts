import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  groupNameControl: FormControl;
  groupTypeControl: FormControl;
  groupTypeOptions: string[] = [];
  ngOnInit(): void {
    this.groupTypeOptions = ['Student A', 'Student B', 'Student C'];
  }
  constructor() {
    this.groupNameControl = new FormControl('');
    this.groupTypeControl = new FormControl('');
  }

}
