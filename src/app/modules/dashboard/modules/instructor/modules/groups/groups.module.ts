import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { UpdateGroupComponent } from './components/update-group/update-group.component';
import { DeleteGroupComponent } from './components/delete-group/delete-group.component';


@NgModule({
  declarations: [
    GroupsComponent,
    ListGroupsComponent,
    AddGroupComponent,
    UpdateGroupComponent,
    DeleteGroupComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
