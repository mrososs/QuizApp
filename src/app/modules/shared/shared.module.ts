import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

PaginatorComponent
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaginatorComponent } from './components/paginator/paginator.component';


@NgModule({
  declarations: [
   PaginatorComponent
  ],
  imports: [
    CommonModule ,
    RouterModule ,
    MaterialModule ,
     FormsModule, ReactiveFormsModule
  ],
  exports: [CommonModule, MaterialModule ,RouterModule ,  FormsModule, ReactiveFormsModule ,
    PaginatorComponent],
})
export class SharedModule {}
