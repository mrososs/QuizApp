import { Component } from '@angular/core';
import { ListService } from '../../list.service';
import { AllGroups } from '../../model/AllGroups-model';
import { RouterModule } from '@angular/router';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrl: './list-groups.component.scss',
  standalone: false,
})
export class ListGroupsComponent {
  allGroups: AllGroups[] = [];
  constructor(private _GroupService: GroupService) {
    this.getAllGroups();
  }

  getAllGroups(): void {
    this._GroupService.allGroups().subscribe({
      next: (res) => {
        this.allGroups = res;
        console.log(this.allGroups);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
