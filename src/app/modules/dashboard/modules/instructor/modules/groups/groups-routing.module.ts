import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { DeleteGroupComponent } from './components/delete-group/delete-group.component';

const routes: Routes = [
  {path:'' , component : ListGroupsComponent } ,
  // {path:'delete/:groupID' , component : DeleteGroupComponent } ,
  // {path:'update/:groupID' , component : UpdateGroupComponent } ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
