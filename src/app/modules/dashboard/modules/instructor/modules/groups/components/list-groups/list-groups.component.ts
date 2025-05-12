
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog,} from '@angular/material/dialog';
import { AllGroups } from '../../model/AllGroups-model';
import { GroupService } from '../../services/group.service';
import { UpdateGroupComponent } from '../update-group/update-group.component';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrl: './list-groups.component.scss',
  standalone: false,

})
export class ListGroupsComponent implements OnInit {
  allGroups: AllGroups[] = [];
  groupID:string =''
  readonly dialog = inject(MatDialog);
  GroupService = inject(GroupService)

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

}
