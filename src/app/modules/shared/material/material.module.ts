import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

const AllMaterial = [
  MatIconModule ,
  MatDialogModule ,
  MatButtonModule ,
  


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
