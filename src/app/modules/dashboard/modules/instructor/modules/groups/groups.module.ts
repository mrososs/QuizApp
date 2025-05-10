import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GroupsRoutingModule } from './groups-routing.module';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { UpdateGroupComponent } from './components/update-group/update-group.component';
import { DeleteGroupComponent } from './components/delete-group/delete-group.component';
import { SharedModule } from '../../../../../shared/shared/shared.module';




@NgModule({
  declarations: [
    ListGroupsComponent,
    AddGroupComponent,
    UpdateGroupComponent,
    DeleteGroupComponent
  ],
  imports: [
    RouterModule ,
    CommonModule,
    GroupsRoutingModule ,
    SharedModule
  ],
  // exports :[ SharedModule ]
})
export class GroupsModule { }
