import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { UpdateGroupComponent } from './components/update-group/update-group.component';
import { DeleteGroupComponent } from './components/delete-group/delete-group.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MatIconModule } from '@angular/material/icon';

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
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    DashboardModule,
    MatIconModule
  ]
})
export class GroupsModule { }
