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
  sharingOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];

  constructor() {
    this.groupNameControl = new FormControl('');
    this.groupTypeControl = new FormControl('');
  }

  ngOnInit(): void {}
}
