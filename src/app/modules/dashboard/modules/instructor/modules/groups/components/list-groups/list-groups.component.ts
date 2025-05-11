import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupComponent } from '../add-group/add-group.component';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrl: './list-groups.component.scss'
})
export class ListGroupsComponent {
  constructor(private dialog: MatDialog) {}

openAddGroupDialog() {
  const dialogRef = this.dialog.open(AddGroupComponent, {
    width: '80%'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Group was added successfully.');
    }
  });
}

}
