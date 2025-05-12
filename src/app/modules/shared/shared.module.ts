import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    PaginatorComponent,
    RouterModule,
    ],
})
export class SharedModule {}
