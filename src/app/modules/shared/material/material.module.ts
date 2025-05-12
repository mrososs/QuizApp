import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';


const AllMaterial = [
  MatIconModule ,
  MatDialogModule ,
  MatButtonModule ,
  MatSelectModule ,
  MatFormFieldModule ,
  MatInputModule ,
  MatPaginatorModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    AllMaterial
  ] ,
  exports :[ AllMaterial]
})
export class MaterialModule { }
