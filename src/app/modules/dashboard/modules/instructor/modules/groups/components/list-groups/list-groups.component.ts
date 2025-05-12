import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupComponent } from '../add-group/add-group.component';

import { AllGroups } from '../../model/AllGroups-model';
import { GroupService } from '../../services/group.service';
import { UpdateGroupComponent } from '../update-group/update-group.component';
import { PaginatorComponent } from '../../../../../../../shared/components/paginator/paginator.component';
import { DeleteGroupComponent } from '../delete-group/delete-group.component';


@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrl: './list-groups.component.scss',
  standalone: false,

})

export class ListGroupsComponent implements OnInit {
  allGroups: AllGroups[] = [];
  groupID:string ='';
  constructor(private dialog: MatDialog, private GroupService: GroupService) {}


  ngOnInit() {
    this.getAllGroups();
  }

  getAllGroups(): void {
    this.GroupService.getAllGroups().subscribe({
      next: (res) => {
        this.allGroups = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

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
   openDialog(groupID:string): void {
    this.groupID= groupID
    const dialogRef = this.dialog.open(UpdateGroupComponent, {
      data: {groupID : this.groupID},
    });

     dialogRef.afterClosed().subscribe(result => {
      this.getAllGroups()
      if (result !== undefined) {
      }
    });

  }
 openDialogDelete(groupID:string): void {
    this.groupID= groupID
    const dialogRef = this.dialog.open(DeleteGroupComponent, {
      data: {groupID : this.groupID},
    });

     dialogRef.afterClosed().subscribe(result => {
      this.getAllGroups()
      if (result !== undefined) {
      }
    });

  }
}
