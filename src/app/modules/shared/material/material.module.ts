import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


const AllMaterial = [
  MatIconModule ,

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
