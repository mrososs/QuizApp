import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet ,RouterModule } from '@angular/router';

import { GroupsRoutingModule } from './groups-routing.module';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { UpdateGroupComponent } from './components/update-group/update-group.component';
import { DeleteGroupComponent } from './components/delete-group/delete-group.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../shared/material/material.module';





@NgModule({
  declarations: [
    ListGroupsComponent,
    AddGroupComponent,
    UpdateGroupComponent,
    DeleteGroupComponent
  ],
  imports: [
    RouterLink, 
    RouterOutlet,
    RouterModule,
    CommonModule,
    GroupsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AddGroupComponent,
    MaterialModule
  ],
  exports :[
    RouterLink, 
    RouterOutlet,
    RouterModule,
    CommonModule,
    GroupsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AddGroupComponent,
    MaterialModule
  ]
})
export class GroupsModule { }
