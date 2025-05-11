import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { UpdateGroupComponent } from './components/update-group/update-group.component';
import { DeleteGroupComponent } from './components/delete-group/delete-group.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListGroupsComponent,
    AddGroupComponent,
    UpdateGroupComponent,
    DeleteGroupComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AddGroupComponent]
})
export class GroupsModule { }
