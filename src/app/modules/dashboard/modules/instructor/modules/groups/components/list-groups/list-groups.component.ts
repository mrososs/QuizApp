import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupComponent } from '../add-group/add-group.component';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.scss']
})
export class ListGroupsComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddGroupComponent, {
      width: '80%',
    });
  }
}
