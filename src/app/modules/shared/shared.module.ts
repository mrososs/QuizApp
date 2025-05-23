import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MaterialModule } from './material/material.module';
import { DeleteComponent } from './components/delete/delete.component';
import {
  MatNativeDateTimeModule,
  MatTimepickerModule,
} from '@dhutaryan/ngx-mat-timepicker';

@NgModule({
  declarations: [PaginatorComponent, DeleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTimepickerModule,
    MatNativeDateTimeModule,
  ],
  exports: [
    CommonModule,
    MatTimepickerModule,
    MatNativeDateTimeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    PaginatorComponent,
    DeleteComponent,
    RouterModule,
  ],
})
export class SharedModule {}
