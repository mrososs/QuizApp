import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupComponent } from '../../../modules/instructor/modules/groups/components/add-group/add-group.component';

@Component({
  selector: 'app-layout-wrapper',
  templateUrl: './layout-wrapper.component.html',
  styleUrl: './layout-wrapper.component.scss',
})
export class LayoutWrapperComponent {

constructor (public dialog: MatDialog) {}

openAddGroupDialog() {
  this.dialog.open(AddGroupComponent, {
    width: '80%',
    panelClass: 'custom-dialog-container'
  });
}

}
